from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import urllib.parse
import urllib.request


PORT = 8000


class CardHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/api/translate":
            self.send_error(404, "Not found")
            return

        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length)

        try:
            payload = json.loads(body.decode("utf-8"))
            english = payload.get("english", "").strip()
        except (json.JSONDecodeError, UnicodeDecodeError):
            self.send_json({"error": "Please send valid JSON."}, 400)
            return

        if not english:
            self.send_json({"error": "Please enter an English sentence."}, 400)
            return

        try:
            self.send_json(
                {
                    "mandarin": translate(english, "zh-CN"),
                    "german": translate(english, "de"),
                }
            )
        except Exception as error:
            self.send_json(
                {
                    "error": (
                        "Translation service is unavailable. "
                        "Check your internet connection or connect this endpoint to your preferred translation API."
                    ),
                    "detail": str(error),
                },
                502,
            )

    def send_json(self, payload, status=200):
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


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

    with urllib.request.urlopen(request, timeout=10) as response:
        result = json.loads(response.read().decode("utf-8"))

    return "".join(part[0] for part in result[0] if part and part[0])


if __name__ == "__main__":
    server = ThreadingHTTPServer(("localhost", PORT), CardHandler)
    print(f"Language Flip Cards running at http://localhost:{PORT}")
    server.serve_forever()
