const cards = [
  {
    english: "Good morning, how are you today?",
    mandarin: "早上好，你今天怎么样？",
    german: "Guten Morgen, wie geht es dir heute?"
  },
  {
    english: "I am learning a new language.",
    mandarin: "我正在学习一门新语言。",
    german: "Ich lerne eine neue Sprache."
  },
  {
    english: "Where is the nearest train station?",
    mandarin: "最近的火车站在哪里？",
    german: "Wo ist der nächste Bahnhof?"
  },
  {
    english: "I would like a cup of tea.",
    mandarin: "我想要一杯茶。",
    german: "Ich möchte eine Tasse Tee."
  },
  {
    english: "Can you help me with this problem?",
    mandarin: "你能帮我解决这个问题吗？",
    german: "Kannst du mir bei diesem Problem helfen?"
  },
  {
    english: "The weather is beautiful today.",
    mandarin: "今天天气很好。",
    german: "Das Wetter ist heute schön."
  },
  {
    english: "I need to buy some groceries.",
    mandarin: "我需要买一些杂货。",
    german: "Ich muss ein paar Lebensmittel kaufen."
  },
  {
    english: "Please speak more slowly.",
    mandarin: "请说慢一点。",
    german: "Bitte sprich langsamer."
  },
  {
    english: "What time does the meeting start?",
    mandarin: "会议几点开始？",
    german: "Wann beginnt die Besprechung?"
  },
  {
    english: "I forgot my password.",
    mandarin: "我忘记了我的密码。",
    german: "Ich habe mein Passwort vergessen."
  },
  {
    english: "This restaurant has delicious food.",
    mandarin: "这家餐厅的食物很好吃。",
    german: "Dieses Restaurant hat leckeres Essen."
  },
  {
    english: "I am looking for my phone.",
    mandarin: "我在找我的手机。",
    german: "Ich suche mein Handy."
  },
  {
    english: "Could you repeat that, please?",
    mandarin: "你可以再说一遍吗？",
    german: "Könntest du das bitte wiederholen?"
  },
  {
    english: "I have a question about the homework.",
    mandarin: "我有一个关于作业的问题。",
    german: "Ich habe eine Frage zu den Hausaufgaben."
  },
  {
    english: "She works in a hospital.",
    mandarin: "她在医院工作。",
    german: "Sie arbeitet in einem Krankenhaus."
  },
  {
    english: "We are going to the park this afternoon.",
    mandarin: "我们今天下午要去公园。",
    german: "Wir gehen heute Nachmittag in den Park."
  },
  {
    english: "The bus arrives every ten minutes.",
    mandarin: "公交车每十分钟到一班。",
    german: "Der Bus kommt alle zehn Minuten."
  },
  {
    english: "I enjoy reading books at night.",
    mandarin: "我喜欢晚上看书。",
    german: "Ich lese abends gerne Bücher."
  },
  {
    english: "My brother is cooking dinner.",
    mandarin: "我哥哥正在做晚饭。",
    german: "Mein Bruder kocht Abendessen."
  },
  {
    english: "Please close the window.",
    mandarin: "请关上窗户。",
    german: "Bitte schließe das Fenster."
  },
  {
    english: "I need a ticket to Berlin.",
    mandarin: "我需要一张去柏林的票。",
    german: "Ich brauche eine Fahrkarte nach Berlin."
  },
  {
    english: "This movie is very interesting.",
    mandarin: "这部电影很有趣。",
    german: "Dieser Film ist sehr interessant."
  },
  {
    english: "How much does this cost?",
    mandarin: "这个多少钱？",
    german: "Wie viel kostet das?"
  },
  {
    english: "I am sorry for being late.",
    mandarin: "很抱歉我迟到了。",
    german: "Es tut mir leid, dass ich zu spät bin."
  },
  {
    english: "The children are playing outside.",
    mandarin: "孩子们正在外面玩。",
    german: "Die Kinder spielen draußen."
  },
  {
    english: "I drink coffee every morning.",
    mandarin: "我每天早上喝咖啡。",
    german: "Ich trinke jeden Morgen Kaffee."
  },
  {
    english: "Can I pay by card?",
    mandarin: "我可以刷卡付款吗？",
    german: "Kann ich mit Karte bezahlen?"
  },
  {
    english: "He is waiting at the entrance.",
    mandarin: "他在入口处等。",
    german: "Er wartet am Eingang."
  },
  {
    english: "I want to improve my pronunciation.",
    mandarin: "我想提高我的发音。",
    german: "Ich möchte meine Aussprache verbessern."
  },
  {
    english: "The office is on the second floor.",
    mandarin: "办公室在二楼。",
    german: "Das Büro ist im zweiten Stock."
  },
  {
    english: "Do you have any recommendations?",
    mandarin: "你有什么推荐吗？",
    german: "Hast du Empfehlungen?"
  },
  {
    english: "I will call you tomorrow.",
    mandarin: "我明天会给你打电话。",
    german: "Ich rufe dich morgen an."
  },
  {
    english: "The shop closes at nine.",
    mandarin: "商店九点关门。",
    german: "Das Geschäft schließt um neun."
  },
  {
    english: "We should leave early.",
    mandarin: "我们应该早点出发。",
    german: "Wir sollten früh losfahren."
  },
  {
    english: "This bag is too heavy.",
    mandarin: "这个包太重了。",
    german: "Diese Tasche ist zu schwer."
  },
  {
    english: "I am practicing every day.",
    mandarin: "我每天都在练习。",
    german: "Ich übe jeden Tag."
  },
  {
    english: "Please write your name here.",
    mandarin: "请在这里写下你的名字。",
    german: "Bitte schreibe deinen Namen hierhin."
  },
  {
    english: "The water is very cold.",
    mandarin: "水很冷。",
    german: "Das Wasser ist sehr kalt."
  },
  {
    english: "I cannot find my keys.",
    mandarin: "我找不到我的钥匙。",
    german: "Ich kann meine Schlüssel nicht finden."
  },
  {
    english: "She likes listening to music.",
    mandarin: "她喜欢听音乐。",
    german: "Sie hört gerne Musik."
  },
  {
    english: "We need more time.",
    mandarin: "我们需要更多时间。",
    german: "Wir brauchen mehr Zeit."
  },
  {
    english: "Is there a pharmacy nearby?",
    mandarin: "附近有药店吗？",
    german: "Gibt es hier in der Nähe eine Apotheke?"
  },
  {
    english: "I am tired, but I am happy.",
    mandarin: "我很累，但是我很开心。",
    german: "Ich bin müde, aber ich bin glücklich."
  },
  {
    english: "The train is delayed.",
    mandarin: "火车晚点了。",
    german: "Der Zug hat Verspätung."
  },
  {
    english: "Can you send me the address?",
    mandarin: "你能把地址发给我吗？",
    german: "Kannst du mir die Adresse schicken?"
  },
  {
    english: "I prefer water without ice.",
    mandarin: "我更喜欢不加冰的水。",
    german: "Ich bevorzuge Wasser ohne Eis."
  },
  {
    english: "This lesson is getting easier.",
    mandarin: "这节课越来越容易了。",
    german: "Diese Lektion wird leichter."
  },
  {
    english: "Let us meet in front of the library.",
    mandarin: "我们在图书馆前面见吧。",
    german: "Treffen wir uns vor der Bibliothek."
  },
  {
    english: "I have never been to Germany.",
    mandarin: "我从来没有去过德国。",
    german: "Ich war noch nie in Deutschland."
  },
  {
    english: "Thank you for your patience.",
    mandarin: "谢谢你的耐心。",
    german: "Danke für deine Geduld."
  }
];

const labels = {
  mandarin: "Mandarin",
  german: "German"
};

let activeCard = Math.floor(Math.random() * cards.length);
let activeLanguage = "mandarin";
let cardsSeen = 1;
let history = [activeCard];

const flipCard = document.querySelector("#flipCard");
const englishText = document.querySelector("#englishText");
const translatedText = document.querySelector("#translatedText");
const languageLabel = document.querySelector("#languageLabel");
const languageButtons = document.querySelectorAll("[data-language]");
const nextButton = document.querySelector("#nextButton");
const nextIconButton = document.querySelector("#nextIconButton");
const deckCount = document.querySelector("#deckCount");
const historyButton = document.querySelector("#historyButton");
const historyPanel = document.querySelector("#historyPanel");
const historyList = document.querySelector("#historyList");
const historyTotal = document.querySelector("#historyTotal");
const cardForm = document.querySelector("#cardForm");
const addButton = document.querySelector("#addButton");
const formStatus = document.querySelector("#formStatus");

function setFormStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.classList.toggle("error", isError);
}

function renderCard() {
  const card = cards[activeCard];
  englishText.textContent = card.english;
  translatedText.textContent = card[activeLanguage];
  languageLabel.textContent = labels[activeLanguage];
  deckCount.textContent = `Card ${cardsSeen} shown • ${cards.length} cards in deck`;
  renderHistory();
}

function renderHistory() {
  historyTotal.textContent = `${history.length} shown`;
  historyList.innerHTML = "";

  history
    .slice()
    .reverse()
    .forEach((cardIndex, reverseIndex) => {
      const originalPosition = history.length - reverseIndex;
      const card = cards[cardIndex];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "history-item";
      button.textContent = `${originalPosition}. ${card.english}`;
      button.classList.toggle("active", cardIndex === activeCard);
      button.addEventListener("click", () => {
        activeCard = cardIndex;
        flipCard.classList.remove("is-flipped");
        renderCard();
      });
      historyList.append(button);
    });
}

function chooseRandomCard() {
  if (cards.length < 2) {
    return 0;
  }

  let nextIndex = activeCard;
  while (nextIndex === activeCard) {
    nextIndex = Math.floor(Math.random() * cards.length);
  }
  return nextIndex;
}

function showNextCard() {
  activeCard = chooseRandomCard();
  cardsSeen += 1;
  history.push(activeCard);
  flipCard.classList.remove("is-flipped");
  renderCard();
}

flipCard.addEventListener("click", () => {
  flipCard.classList.toggle("is-flipped");
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeLanguage = button.dataset.language;
    languageButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderCard();
  });
});

nextButton.addEventListener("click", showNextCard);
nextIconButton.addEventListener("click", showNextCard);

historyButton.addEventListener("click", () => {
  const shouldOpen = historyPanel.hidden;
  historyPanel.hidden = !shouldOpen;
  historyButton.classList.toggle("active", shouldOpen);
  historyButton.setAttribute("aria-expanded", String(shouldOpen));
});

cardForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const english = document.querySelector("#newEnglish").value.trim();

  if (!english) {
    setFormStatus("Please enter an English sentence first.", true);
    return;
  }

  addButton.disabled = true;
  addButton.textContent = "Translating...";
  setFormStatus("Asking the backend for translations...");

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ english })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "The backend could not translate this sentence.");
    }

    cards.push({
      english,
      mandarin: data.mandarin,
      german: data.german
    });
    activeCard = cards.length - 1;
    cardsSeen += 1;
    history.push(activeCard);
    flipCard.classList.remove("is-flipped");
    cardForm.reset();
    renderCard();
    setFormStatus("Card added.");
  } catch (error) {
    const fileHint = location.protocol === "file:" ? " Open the app through the local backend server, not directly as a file." : "";
    setFormStatus(`${error.message}.${fileHint}`, true);
  } finally {
    addButton.disabled = false;
    addButton.textContent = "Translate & Add";
  }
});

renderCard();
