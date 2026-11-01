const questions = [
  // SKUPINA 1
  {
    category: "ZVUK",
    type: "boolean",
    title: "Reproduktory patří mezi výstupní zařízení.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. Reproduktory převádějí zvukový signál na slyšitelný zvuk."
  },
  {
    category: "TISKÁRNY",
    type: "choice",
    title: "Jak funguje jehličková tiskárna?",
    options: [
      "Pomocí drobných jehliček a barvicí pásky",
      "Pomocí laserového paprsku",
      "Pomocí tekutého inkoustu"
    ],
    answer: 0,
    explanation: "Jehličková tiskárna tiskne údery jehliček přes barvicí pásku na papír."
  },
  {
    category: "MONITORY",
    type: "boolean",
    title: "LCD monitor vytváří obraz pomocí elektronového paprsku.",
    options: ["Pravda", "Nepravda"],
    answer: 1,
    explanation: "Nepravda. Elektronový paprsek používají starší CRT monitory."
  },
  {
    category: "ZOBRAZOVÁNÍ",
    type: "choice",
    title: "K čemu slouží projektor?",
    options: [
      "K přehrávání zvuku",
      "K promítání obrazu na větší plochu",
      "K ukládání souborů"
    ],
    answer: 1,
    explanation: "Projektor promítá obraz například na plátno nebo zeď."
  },
  {
    category: "TISKÁRNY",
    type: "boolean",
    title: "Inkoustová tiskárna používá toner.",
    options: ["Pravda", "Nepravda"],
    answer: 1,
    explanation: "Nepravda. Inkoustová tiskárna používá tekutý inkoust. Toner používá laserová tiskárna."
  },

  // SKUPINA 2
  {
    category: "MONITORY",
    type: "choice",
    title: "Co znamená rozlišení monitoru?",
    options: [
      "Počet reproduktorů v monitoru",
      "Počet obrazových bodů (pixelů)",
      "Velikost napájecího adaptéru"
    ],
    answer: 1,
    explanation: "Rozlišení udává počet pixelů, ze kterých se skládá obraz."
  },
  {
    category: "MONITORY",
    type: "boolean",
    title: "LED monitor využívá LED podsvícení.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. LED technologie se používá pro podsvícení LCD obrazovek."
  },
  {
    category: "ZVUK",
    type: "choice",
    title: "Jaký je rozdíl mezi reproduktory a sluchátky?",
    options: [
      "Reproduktory šíří zvuk do prostoru, sluchátka přímo k uším",
      "Žádný rozdíl neexistuje",
      "Sluchátka zobrazují obraz"
    ],
    answer: 0,
    explanation: "Reproduktory šíří zvuk do prostoru, sluchátka přenášejí zvuk přímo k uším."
  },
  {
    category: "TISKÁRNY",
    type: "boolean",
    title: "Laserová tiskárna používá k tisku tekutý inkoust.",
    options: ["Pravda", "Nepravda"],
    answer: 1,
    explanation: "Nepravda. Laserová tiskárna používá toner v práškové podobě."
  },
  {
    category: "ZÁKLADY",
    type: "choice",
    title: "Co jsou výstupní periferie?",
    options: [
      "Zařízení pro zadávání dat do počítače",
      "Zařízení, která předávají informace z počítače uživateli",
      "Zařízení určená pouze k ukládání dat"
    ],
    answer: 1,
    explanation: "Výstupní periferie předávají informace z počítače například obrazem, zvukem nebo tiskem."
  },

  // SKUPINA 3
  {
    category: "TISKÁRNY",
    type: "boolean",
    title: "Jehličkové tiskárny se používaly například pro tisk více kopií přes průklepový papír.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. Díky mechanickému úderu jehliček mohly tisknout i více kopií najednou."
  },
  {
    category: "TISKÁRNY",
    type: "choice",
    title: "Jak funguje laserová tiskárna?",
    options: [
      "Pomocí toneru a laserového paprsku",
      "Pomocí jehliček",
      "Pomocí tekutého inkoustu"
    ],
    answer: 0,
    explanation: "Laserová tiskárna využívá laserový paprsek, toner a zahřívání při přenosu na papír."
  },
  {
    category: "MONITORY",
    type: "choice",
    title: "Jaký je rozdíl mezi CRT a LCD monitorem?",
    options: [
      "CRT je plochý a LCD je hluboký",
      "CRT využívá elektronový paprsek, LCD tekuté krystaly",
      "Oba fungují úplně stejně"
    ],
    answer: 1,
    explanation: "CRT používá elektronový paprsek, zatímco LCD pracuje s tekutými krystaly."
  },
  {
    category: "TISKÁRNY",
    type: "choice",
    title: "Jaký je rozdíl mezi inkoustovou a laserovou tiskárnou?",
    options: [
      "Inkoustová používá tekutý inkoust, laserová toner",
      "Obě používají pouze papír",
      "Laserová používá tekutý inkoust"
    ],
    answer: 0,
    explanation: "Inkoustová tiskárna tiskne tekutým inkoustem, laserová pomocí toneru."
  },
  {
    category: "ZVUK",
    type: "boolean",
    title: "Reproduktory slouží k výstupu zvuku z počítače.",
    options: ["Pravda", "Nepravda"],
    answer: 0,
    explanation: "Pravda. Reproduktory převádějí zvukový signál na slyšitelný zvuk."
  }
];

const groupNames = [
  "SEKTOR 01",
  "SEKTOR 02",
  "SEKTOR 03"
];

const groupDescriptions = [
  "Základy, tiskárny a zobrazovací zařízení",
  "Monitory, zvuk a technologie tisku",
  "Pokročilé znalosti výstupních periferií"
];

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let selectedAnswers = Array(questions.length).fill(null);

const $ = id => document.getElementById(id);

const scoreElement = $("score");
const scoreFill = $("score-fill");
const scoreCaption = $("score-caption");
const correctCount = $("correct-count");
const wrongCount = $("wrong-count");
const navCount = $("nav-count");
const questionList = $("question-list");
const groupName = $("group-name");
const groupDescription = $("group-description");
const groupFill = $("group-fill");
const groupCount = $("group-count");

const questionCard = $("question-card");
const questionCategory = $("question-category");
const questionNumber = $("question-number");
const questionSymbol = $("question-symbol");
const questionType = $("question-type");
const questionTitle = $("question-title");
const questionDescription = $("question-description");
const optionsContainer = $("options");
const answerPanel = $("answer-panel");
const answerResult = $("answer-result");
const answerExplanation = $("answer-explanation");
const questionStatus = $("question-status");

const previousButton = $("previous-button");
const nextButton = $("next-button");
const positionLabel = $("position-label");

const finishPanel = $("finish-panel");
const restartButton = $("restart-button");

function getGroup(index) {
  return Math.floor(index / 5);
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const group = getGroup(currentQuestion);
  const selected = selectedAnswers[currentQuestion];
  const result = answers[currentQuestion];

  questionCategory.textContent = question.category;
  questionNumber.textContent =
    `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / 15`;

  questionSymbol.textContent =
    String(currentQuestion + 1).padStart(2, "0");

  questionType.textContent = question.type === "boolean"
    ? "TRUE / FALSE CHECK"
    : "KNOWLEDGE CHECK";

  questionTitle.textContent = question.title;

  questionDescription.textContent = question.type === "boolean"
    ? "Rozhodněte, zda je následující tvrzení pravdivé, nebo nepravdivé."
    : "Vyberte jednu správnou odpověď.";

  groupName.textContent = groupNames[group];
  groupDescription.textContent = groupDescriptions[group];

  const completedInGroup = answers
    .slice(group * 5, group * 5 + 5)
    .filter(answer => answer !== null).length;

  groupFill.style.width = `${completedInGroup * 20}%`;
  groupCount.textContent = `${completedInGroup} / 5 DOKONČENO`;

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";

    const number = document.createElement("span");
    number.className = "option-index";
    number.textContent = question.type === "boolean"
      ? (index === 0 ? "T" : "F")
      : String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = option;

    button.append(number, text);

    if (selected === index) {
      button.classList.add("selected");
    }

    if (result !== null) {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct-answer");
      } else if (index === selected) {
        button.classList.add("wrong-answer");
      }
    } else {
      button.addEventListener("click", () => selectAnswer(index));
    }

    optionsContainer.appendChild(button);
  });

  answerPanel.hidden = result === null;

  if (result !== null) {
    answerPanel.className = `answer-panel ${result ? "correct" : "wrong"}`;
    answerResult.textContent = result
      ? "✓ SPRÁVNÁ ODPOVĚĎ // +1 BOD"
      : "✕ NESPRÁVNÁ ODPOVĚĎ // −1 BOD";

    answerExplanation.textContent = question.explanation;
    questionStatus.textContent = result
      ? "● ODPOVĚĎ POTVRZENA"
      : "● ODPOVĚĎ NESPRÁVNÁ";
  } else {
    questionStatus.textContent = "● AWAITING INPUT";
  }

  previousButton.disabled = currentQuestion === 0;
  nextButton.disabled = result === null;

  nextButton.textContent = currentQuestion === questions.length - 1
    ? "DOKONČIT TEST →"
    : "DALŠÍ OTÁZKA →";

  positionLabel.innerHTML =
    `${String(currentQuestion + 1).padStart(2, "0")} <i>/</i> 15`;

  updateNavigation();
  updateScore();
}

function selectAnswer(index) {
  if (answers[currentQuestion] !== null) return;

  const question = questions[currentQuestion];
  selectedAnswers[currentQuestion] = index;

  const isCorrect = index === question.answer;
  answers[currentQuestion] = isCorrect;

  renderQuestion();
}

function updateScore() {
  const currentGroup = getGroup(currentQuestion);
  const groupAnswers = answers.slice(currentGroup * 5, currentGroup * 5 + 5);

  const correct = groupAnswers.filter(answer => answer === true).length;
  const wrong = groupAnswers.filter(answer => answer === false).length;
  const completed = correct + wrong;
  const groupScore = correct - wrong;

  const totalCompleted = answers.filter(answer => answer !== null).length;

  // Skóre se počítá pouze pro právě zobrazenou skupinku.
  scoreElement.textContent = groupScore;
  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  navCount.textContent = `${totalCompleted} / 15`;

  scoreFill.style.width = `${totalCompleted / 15 * 100}%`;

  scoreCaption.textContent = completed === 0
    ? "Skupinka začíná od 0 bodů."
    : `Tato skupinka: ${completed} z 5 otázek · ${groupScore} bodů.`;
}

function updateNavigation() {
  questionList.innerHTML = "";

  questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.className = "question-link";
    button.textContent = String(index + 1).padStart(2, "0");

    if (index === currentQuestion) {
      button.classList.add("active");
    }

    if (answers[index] === true) {
      button.classList.add("correct");
    } else if (answers[index] === false) {
      button.classList.add("wrong");
    }

    button.addEventListener("click", () => {
      currentQuestion = index;
      renderQuestion();
    });

    questionList.appendChild(button);
  });
}

function nextQuestion() {
  if (answers[currentQuestion] === null) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showFinish();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function showFinish() {
  questionCard.hidden = true;
  previousButton.hidden = true;
  nextButton.hidden = true;
  positionLabel.hidden = true;

  finishPanel.hidden = false;

  const correct = answers.filter(answer => answer === true).length;
  const wrong = answers.filter(answer => answer === false).length;
  const percent = Math.round(correct / questions.length * 100);

  const totalScore = correct - wrong;

  $("final-score").textContent = `${totalScore} bodů`;
  $("final-correct").textContent = `${correct} / 15`;
  $("final-percent").textContent = `${percent} %`;

  $("finish-title").textContent = percent >= 80
    ? "VÝBORNÁ PRÁCE."
    : percent >= 50
      ? "TEST DOKONČEN."
      : "TRÉNINK DOKONČEN.";

  $("finish-text").textContent =
    `Správně: ${correct} · Špatně: ${wrong}. ` +
    (totalScore < 0
      ? "Výsledek je pod nulou. Doporučujeme zopakovat učivo."
      : "Vaše skóre bylo úspěšně zaznamenáno.");

  const resultsContainer = $("group-results");
  resultsContainer.innerHTML = "";

  for (let group = 0; group < 3; group++) {
    const groupAnswers = answers.slice(group * 5, group * 5 + 5);

    const groupCorrect = groupAnswers.filter(answer => answer === true).length;
    const groupWrong = groupAnswers.filter(answer => answer === false).length;
    const groupScore = groupCorrect - groupWrong;

    const item = document.createElement("div");
    item.className = "group-result";

    const strong = document.createElement("strong");
    strong.textContent = `${groupScore} bodů`;

    const label = document.createElement("span");
    label.textContent =
      `SKUPINKA ${group + 1} · ${groupCorrect}/5 SPRÁVNĚ`;

    item.append(strong, label);
    resultsContainer.appendChild(item);
  }
}

function restartQuiz() {
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  selectedAnswers = Array(questions.length).fill(null);

  finishPanel.hidden = true;
  questionCard.hidden = false;
  previousButton.hidden = false;
  nextButton.hidden = false;
  positionLabel.hidden = false;

  renderQuestion();
}

nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();