import json
import urllib.parse
import urllib.request


def handler(request):
    if request.method != "POST":
        return response({"error": "Method not allowed."}, 405)

    try:
        payload = json.loads(request.body.decode("utf-8"))
        english = payload.get("english", "").strip()
    except (json.JSONDecodeError, UnicodeDecodeError, AttributeError):
        return response({"error": "Please send valid JSON."}, 400)

    if not english:
        return response({"error": "Please enter an English sentence."}, 400)

    try:
        return response(
            {
                "mandarin": translate(english, "zh-CN"),
                "german": translate(english, "de"),
            }
        )
    except Exception as error:
        return response(
            {
                "error": "Translation service is unavailable. Please try again later.",
                "detail": str(error),
            },
            502,
        )


def response(payload, status=200):
    return {
        "statusCode": status,
        "headers": {"Content-Type": "application/json; charset=utf-8"},
        "body": json.dumps(payload, ensure_ascii=False),
    }


def translate(text, target_language):
    query = urllib.parse.urlencode(
        {
            "client": "gtx",
            "sl": "en",
            "tl": target_language,
            "dt": "t",
            "q": text,
        }
    )
    url = f"https://translate.googleapis.com/translate_a/single?{query}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})

    with urllib.request.urlopen(request, timeout=10) as result:
        data = json.loads(result.read().decode("utf-8"))

    return "".join(part[0] for part in data[0] if part and part[0])
