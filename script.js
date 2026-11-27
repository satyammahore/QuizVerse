/* =========================================================
   QUIZ VERSE — Full-Screen Architecture & Smart Quiz Engine
   Designed & Built for Satyam Mahore
========================================================= */

const QUOTES = [
  "Small daily practice builds unstoppable confidence.",
  "Consistency turns difficult grammar into second nature.",
  "Every wrong answer you review is one step closer to mastery.",
  "Don't just memorize rules—understand why they work.",
  "Success is the sum of small efforts repeated day in and day out."
];

// Built-in Fallback Catalog (Used if data/catalog.json is not found)
const FALLBACK_CATALOG = {
  subjects: [
    {
      id: "english",
      title: "English",
      icon: "📘",
      subtitle: "Previous Year Grammar • Fill in the Blanks & Do as Directed",
      categories: [
        {
          id: "eng-pyq",
          tag: "Board Exam Special",
          title: "Previous Year Objective",
          subtitle: "Part A (Fill in the Blanks) & Part B (Do as Directed)",
          quizzes: [
            {
              id: "part-a",
              tag: "Part A",
              title: "Fill in the Blanks",
              subtitle: "MCQ Practice • Hints & Explanations",
              modes: [
                { id: "mcq", label: "MCQ Quiz", file: "data/english/part-a-mcq.json", inputType: "mcq" }
              ]
            },
            {
              id: "part-b",
              tag: "Part B",
              title: "Do as Directed",
              subtitle: "MCQ + Type Answer • Hints & Explanations",
              modes: [
                { id: "mcq", label: "MCQ Quiz", file: "data/english/part-b-mcq.json", inputType: "mcq" },
                { id: "type", label: "✍️ Type Answer", file: "data/english/part-b-type.json", inputType: "type" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "hindi",
      title: "हिन्दी (Hindi)",
      icon: "📙",
      subtitle: "पिछले वर्षों के प्रश्न • आरोह, वितान एवं व्याकरण",
      categories: [
        {
          id: "hin-pyq",
          tag: "बोर्ड परीक्षा विशेष",
          title: "Previous Years Question",
          subtitle: "1. आरोह • 2. वितान • 3. व्याकरण",
          sections: [
            {
              id: "hin-aaroh",
              tag: "भाग 1",
              title: "आरोह (Aaroh)",
              subtitle: "MCQ और सही जोड़ी (Match the Column)",
              quizzes: [
                {
                  id: "aaroh-mcq",
                  tag: "वस्तुनिष्ठ",
                  title: "आरोह — MCQ अभ्यास",
                  subtitle: "सही विकल्प • सत्य/असत्य • रिक्त स्थान",
                  modes: [{ id: "mcq", label: "MCQ अभ्यास", file: "data/hindi/aaroh-mcq.json", inputType: "mcq" }]
                },
                {
                  id: "aaroh-match",
                  tag: "मिलान",
                  title: "आरोह — सही जोड़ी",
                  subtitle: "स्तंभ 'अ' से स्तंभ 'ब' का मिलान करें",
                  modes: [{ id: "matching", label: "सही जोड़ी", file: "data/hindi/aaroh-matching.json", inputType: "matching" }]
                }
              ]
            },
            {
              id: "hin-vitan",
              tag: "भाग 2",
              title: "वितान (Vitan)",
              subtitle: "MCQ और सही जोड़ी (Match the Column)",
              quizzes: [
                {
                  id: "vitan-mcq",
                  tag: "वस्तुनिष्ठ",
                  title: "वितान — MCQ अभ्यास",
                  subtitle: "सही विकल्प • सत्य/असत्य • रिक्त स्थान",
                  modes: [{ id: "mcq", label: "MCQ अभ्यास", file: "data/hindi/vitan-mcq.json", inputType: "mcq" }]
                },
                {
                  id: "vitan-match",
                  tag: "मिलान",
                  title: "वितान — सही जोड़ी",
                  subtitle: "स्तंभ 'अ' से स्तंभ 'ब' का मिलान करें",
                  modes: [{ id: "matching", label: "सही जोड़ी", file: "data/hindi/vitan-matching.json", inputType: "matching" }]
                }
              ]
            },
            {
              id: "hin-vyakaran",
              tag: "भाग 3",
              title: "व्याकरण (Vyakaran)",
              subtitle: "MCQ और सही जोड़ी (Match the Column)",
              quizzes: [
                {
                  id: "vyakaran-mcq",
                  tag: "वस्तुनिष्ठ",
                  title: "व्याकरण — MCQ अभ्यास",
                  subtitle: "सही विकल्प • सत्य/असत्य • रिक्त स्थान",
                  modes: [{ id: "mcq", label: "MCQ अभ्यास", file: "data/hindi/vyakaran-mcq.json", inputType: "mcq" }]
                },
                {
                  id: "vyakaran-match",
                  tag: "मिलान",
                  title: "व्याकरण — सही जोड़ी",
                  subtitle: "स्तंभ 'अ' से स्तंभ 'ब' का मिलान करें",
                  modes: [{ id: "matching", label: "सही जोड़ी", file: "data/hindi/vyakaran-matching.json", inputType: "matching" }]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const SAMPLE_QUESTIONS = {
  "data/english/part-a-mcq.json": [
    {
      id: 1,
      question: "He _______ to school every day.",
      options: ["go", "goes", "going", "gone"],
      answer: 1,
      hint: "Subject 'He' singular hai, Present Indefinite me verb me s/es lagega.",
      explanation: "Singular third-person subject (He/She/It) ke saath simple present tense me 'goes' use hota hai."
    }
  ],
  "data/hindi/aaroh-mcq.json": [
    {
      id: 1,
      tag: "सत्य / असत्य",
      question: "कबीर भक्ति काल की सगुण भक्ति धारा के कवि हैं।",
      options: ["सत्य", "असत्य"],
      answer: 1,
      hint: "कबीर निराकार ईश्वर की उपासना करते थे।",
      explanation: "कबीर निर्गुण भक्ति धारा के प्रमुख कवि हैं, इसलिए यह कथन असत्य है।"
    }
  ],
  "data/hindi/aaroh-matching.json": [
    {
      id: 1,
      question: "सही जोड़ी मिलाइए (रचना एवं रचनाकार):",
      pairs: [
        { left: "सूरसागर", right: "सूरदास" },
        { left: "रामचरितमानस", right: "तुलसीदास" },
        { left: "बीजक", right: "कबीरदास" },
        { left: "पद्मावत", right: "मलिक मुहम्मद जायसी" }
      ],
      hint: "भक्तिकाल के चारों प्रमुख कवियों की मुख्य कृतियों को मिलाएं।",
      explanation: "सूरसागर (सूरदास), रामचरितमानस (तुलसीदास), बीजक (कबीरदास), पद्मावत (जायसी)।"
    }
  ]
};

// Screens
const screens = {
  home: document.getElementById("screenHome"),
  category: document.getElementById("screenCategory"),
  quizList: document.getElementById("screenQuizList"),
  quizPlay: document.getElementById("screenQuizPlay")
};

// DOM Elements
const subjectsList = document.getElementById("subjectsList");
const btnBackToHome = document.getElementById("btnBackToHome");
const categoryScreenTitle = document.getElementById("categoryScreenTitle");
const categorySubHeading = document.getElementById("categorySubHeading");
const categoryList = document.getElementById("categoryList");
const quizListScreenTitle = document.getElementById("quizListScreenTitle");
const quizPartsList = document.getElementById("quizPartsList");
const activeQuizTitle = document.getElementById("activeQuizTitle");
const modeToggleWrap = document.getElementById("modeToggleWrap");
const progressFill = document.getElementById("progressFill");
const statsText = document.getElementById("statsText");
const scorePill = document.getElementById("scorePill");
const quizList = document.getElementById("quizList");
const scoreBanner = document.getElementById("scoreBanner");
const wrongReviewSection = document.getElementById("wrongReviewSection");
const toast = document.getElementById("toast");

// App State
const state = {
  catalog: FALLBACK_CATALOG,
  quoteIndex: 0,
  navStack: [], // Handles multi-level folders (e.g., Subject -> PYQ -> Aaroh/Vitan/Vyakaran)
  selectedQuiz: null,
  selectedMode: null,
  questions: [],
  answeredCount: 0,
  score: 0,
  wrongAnswers: [],
  requestId: 0
};

/* ---------------- UTILITIES ---------------- */
function escapeHTML(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br>");
}

function normalizeAnswer(str) {
  return String(str || "")
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .replace(/[.,!?;:।]+$/g, "")
    .trim();
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------------- FULL-SCREEN ROUTER + BROWSER BACK BUTTON ---------------- */
function switchScreen(screenName, pushHistory = true) {
  Object.values(screens).forEach((el) => el.classList.add("hidden"));
  screens[screenName].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });

  if (pushHistory) {
    history.pushState(
      { screen: screenName, depth: state.navStack.length },
      "",
      `#${screenName}`
    );
  }
}

window.addEventListener("popstate", (e) => {
  const target = e.state && e.state.screen ? e.state.screen : "home";
  if (target === "category" && e.state.depth) {
    while (state.navStack.length > e.state.depth) {
      state.navStack.pop();
    }
    renderNavStackTop();
  }
  switchScreen(target, false);
});

/* ---------------- QUOTES ---------------- */
const quoteText = document.getElementById("quoteText");
function nextQuote() {
  quoteText.classList.add("fading");
  setTimeout(() => {
    state.quoteIndex = (state.quoteIndex + 1) % QUOTES.length;
    quoteText.textContent = QUOTES[state.quoteIndex];
    quoteText.classList.remove("fading");
  }, 300);
}
document.getElementById("quoteBox").addEventListener("click", nextQuote);
setInterval(nextQuote, 6000);

/* ---------------- CATALOG & MULTI-LEVEL NAVIGATION ---------------- */
async function initApp() {
  try {
    const res = await fetch("data/catalog.json", { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.subjects)) {
        state.catalog = json;
      }
    }
  } catch (e) {
    console.info("Using built-in catalog until data/catalog.json is added.");
  }

  renderSubjects();
  history.replaceState({ screen: "home", depth: 0 }, "", "#home");
}

function renderSubjects() {
  subjectsList.innerHTML = "";
  state.catalog.subjects.forEach((sub) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "subject-card";
    btn.innerHTML = `
      <div class="subject-left">
        <div class="subject-icon">${escapeHTML(sub.icon || "📚")}</div>
        <div class="subject-info">
          <h3>${escapeHTML(sub.title)}</h3>
          <p>${escapeHTML(sub.subtitle)}</p>
        </div>
      </div>
      <span class="subject-arrow">→</span>
    `;
    btn.addEventListener("click", () => openSubject(sub));
    subjectsList.appendChild(btn);
  });
}

function openSubject(subject) {
  state.navStack = [
    {
      title: `${subject.title} ✦`,
      subHeading: "Select Practice Section",
      items: subject.categories || []
    }
  ];
  renderNavStackTop();
  switchScreen("category");
}

function renderNavStackTop() {
  const current = state.navStack[state.navStack.length - 1];
  if (!current) return;

  btnBackToHome.textContent = state.navStack.length > 1 ? "← Back" : "← Home";
  categoryScreenTitle.textContent = current.title;
  categorySubHeading.textContent = current.subHeading;
  categoryList.innerHTML = "";

  current.items.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "part-btn";
    btn.innerHTML = `
      <div class="part-text">
        ${item.tag ? `<span class="part-tag">${escapeHTML(item.tag)}</span>` : ""}
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.subtitle)}</p>
      </div>
      <span class="part-arrow">→</span>
    `;
    btn.addEventListener("click", () => handleCategoryItemClick(item));
    categoryList.appendChild(btn);
  });
}

function handleCategoryItemClick(item) {
  // If item has nested `sections` (e.g. Hindi -> Previous Years Question -> Aaroh/Vitan/Vyakaran)
  if (Array.isArray(item.sections) && item.sections.length > 0) {
    state.navStack.push({
      title: `${item.title} ✦`,
      subHeading: "भाग चुनें (Select Section)",
      items: item.sections
    });
    renderNavStackTop();
    switchScreen("category");
    return;
  }

  // Otherwise open its quizzes list (e.g. MCQ & Matching)
  openQuizList(item);
}

function openQuizList(section) {
  quizListScreenTitle.textContent = `${section.title} ✦`;
  quizPartsList.innerHTML = "";

  (section.quizzes || []).forEach((quiz) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "part-btn";
    btn.innerHTML = `
      <div class="part-text">
        ${quiz.tag ? `<span class="part-tag">${escapeHTML(quiz.tag)}</span>` : ""}
        <h3>${escapeHTML(quiz.title)}</h3>
        <p>${escapeHTML(quiz.subtitle)}</p>
      </div>
      <span class="part-arrow">→</span>
    `;
    btn.addEventListener("click", () => openQuizScreen(quiz));
    quizPartsList.appendChild(btn);
  });

  switchScreen("quizList");
}

function openQuizScreen(quiz) {
  state.selectedQuiz = quiz;
  activeQuizTitle.textContent = `${quiz.title} ✦`;

  if (quiz.modes && quiz.modes.length > 1) {
    modeToggleWrap.classList.remove("hidden");
    modeToggleWrap.innerHTML = "";
    quiz.modes.forEach((mode, idx) => {
      const mBtn = document.createElement("button");
      mBtn.type = "button";
      mBtn.className = `mode-btn ${idx === 0 ? "active" : ""}`;
      mBtn.textContent = mode.label;
      mBtn.addEventListener("click", () => {
        if (state.selectedMode.id === mode.id) return;
        modeToggleWrap.querySelectorAll(".mode-btn").forEach((b) => b.classList.remove("active"));
        mBtn.classList.add("active");
        loadQuizMode(mode);
      });
      modeToggleWrap.appendChild(mBtn);
    });
  } else {
    modeToggleWrap.classList.add("hidden");
  }

  switchScreen("quizPlay");
  loadQuizMode(quiz.modes[0]);
}

/* ---------------- QUIZ LOADER & PROGRESS ---------------- */
async function loadQuizMode(mode) {
  const reqId = ++state.requestId;
  state.selectedMode = mode;
  state.answeredCount = 0;
  state.score = 0;
  state.wrongAnswers = [];
  state.questions = [];

  scoreBanner.classList.add("hidden");
  wrongReviewSection.classList.add("hidden");
  wrongReviewSection.innerHTML = "";
  quizList.innerHTML = `<div class="quiz-message">Loading questions... ✨</div>`;
  updateProgress();

  let data = null;
  try {
    const res = await fetch(mode.file, { cache: "no-store" });
    if (!res.ok) throw new Error("File not found");
    data = await res.json();
  } catch (err) {
    data = SAMPLE_QUESTIONS[mode.file] || [];
  }

  if (reqId !== state.requestId) return;
  state.questions = Array.isArray(data) ? data : [];
  updateProgress();
  renderQuestions();
}

function updateProgress() {
  const total = state.questions.length;
  const remaining = Math.max(0, total - state.answeredCount);
  const pct = total > 0 ? Math.round((state.answeredCount / total) * 100) : 0;

  progressFill.style.width = `${pct}%`;
  statsText.textContent = `Solved: ${state.answeredCount} / ${total} · Remaining: ${remaining}`;
  scorePill.textContent = `Score: ${state.score}`;

  if (total > 0 && state.answeredCount === total) {
    const accuracy = Math.round((state.score / total) * 100);
    const wrongCount = state.wrongAnswers.length;

    scoreBanner.innerHTML = `
      <h3>🎉 Quiz Completed!</h3>
      <p>Final Score: <strong>${state.score} / ${total}</strong> (${accuracy}% Accuracy)</p>
      ${wrongCount > 0 ? `<button type="button" class="review-toggle-btn" id="btnShowWrong">🔍 Review Wrong Answers (${wrongCount})</button>` : `<p style="color:#86efac;margin:0;">Sabhi answers bilkul sahi hain! 🌟</p>`}
    `;
    scoreBanner.classList.remove("hidden");

    const btnShowWrong = document.getElementById("btnShowWrong");
    if (btnShowWrong) {
      btnShowWrong.addEventListener("click", renderWrongReview);
    }
  }
}

function renderWrongReview() {
  wrongReviewSection.innerHTML = `<h4 class="review-title">📋 Wrong Answers Review (${state.wrongAnswers.length})</h4>`;
  state.wrongAnswers.forEach((w, i) => {
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `
      <strong>${i + 1}. ${escapeHTML(w.question)}</strong>
      <p class="review-your">❌ <strong>Your Answer:</strong> ${escapeHTML(w.userAnswer)}</p>
      <p class="review-right">✅ <strong>Correct Answer:</strong> ${escapeHTML(w.correctAnswer)}</p>
      <p>💡 <strong>Explanation:</strong> ${escapeHTML(w.explanation)}</p>
    `;
    wrongReviewSection.appendChild(div);
  });
  wrongReviewSection.classList.remove("hidden");
  wrongReviewSection.scrollIntoView({ behavior: "smooth" });
}

/* ---------------- RENDER QUESTIONS ---------------- */
function renderQuestions() {
  if (!state.questions.length) {
    quizList.innerHTML = `<div class="quiz-message">Is section me abhi questions add nahi kiye gaye hain.</div>`;
    return;
  }

  quizList.innerHTML = "";
  const modeType = state.selectedMode.inputType;

  state.questions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "q-card";

    if (item.tag) {
      const tagBadge = document.createElement("span");
      tagBadge.className = "q-type-badge";
      tagBadge.textContent = item.tag;
      card.appendChild(tagBadge);
    }

    const header = document.createElement("div");
    header.className = "q-header";

    const qText = document.createElement("div");
    qText.className = "q-text";
    qText.innerHTML = `Q${index + 1}. ${escapeHTML(item.question)}`;
    header.appendChild(qText);

    let hintBox = null;
    if (item.hint) {
      const hintBtn = document.createElement("button");
      hintBtn.type = "button";
      hintBtn.className = "hint-btn";
      hintBtn.textContent = "💡 Hint";

      hintBox = document.createElement("div");
      hintBox.className = "hint-box";
      hintBox.innerHTML = `<strong>💡 Hint:</strong> ${escapeHTML(item.hint)}`;

      hintBtn.addEventListener("click", () => hintBox.classList.toggle("show"));
      header.appendChild(hintBtn);
    }

    card.appendChild(header);
    if (hintBox) card.appendChild(hintBox);

    const expBox = document.createElement("div");
    expBox.className = "exp-box";

    if (modeType === "matching" || Array.isArray(item.pairs)) {
      buildMatchingSection(card, item, expBox);
    } else if (modeType === "type") {
      buildTypeSection(card, item, expBox);
    } else {
      buildMcqSection(card, item, expBox);
    }

    card.appendChild(expBox);
    quizList.appendChild(card);
  });
}

function buildMcqSection(card, item, expBox) {
  const options = Array.isArray(item.options) ? item.options : [];
  const grid = document.createElement("div");
  grid.className = `options-grid ${options.length === 2 ? "two-col" : ""}`;

  let correctIndex = typeof item.answer === "number"
    ? item.answer
    : options.findIndex((opt) => normalizeAnswer(opt) === normalizeAnswer(item.answer));

  let isAnswered = false;

  options.forEach((optText, optIndex) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = escapeHTML(optText);

    btn.addEventListener("click", () => {
      if (isAnswered) return;
      isAnswered = true;

      const allBtns = grid.querySelectorAll(".option-btn");
      allBtns.forEach((b) => { b.classList.add("disabled"); b.disabled = true; });

      const isCorrect = optIndex === correctIndex;
      const correctText = options[correctIndex] || "";
      state.answeredCount += 1;

      if (isCorrect) {
        state.score += 1;
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        if (allBtns[correctIndex]) allBtns[correctIndex].classList.add("correct");
        state.wrongAnswers.push({
          question: item.question,
          userAnswer: optText,
          correctAnswer: correctText,
          explanation: item.explanation || "N/A"
        });
      }

      expBox.className = `exp-box show ${isCorrect ? "is-correct" : "is-wrong"}`;
      expBox.innerHTML = `
        <span class="exp-status">${isCorrect ? "✅ Correct!" : "❌ Incorrect!"}</span>
        ${!isCorrect ? `<div class="exp-answer"><strong>Right Answer:</strong> ${escapeHTML(correctText)}</div>` : ""}
        <div><strong>Explanation:</strong> ${escapeHTML(item.explanation || "Great practice!")}</div>
      `;
      updateProgress();
    });

    grid.appendChild(btn);
  });

  card.appendChild(grid);
}

function buildTypeSection(card, item, expBox) {
  const wrap = document.createElement("div");
  wrap.className = "type-group";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "type-input";
  input.placeholder = "Type your answer here...";
  input.autocomplete = "off";

  const checkBtn = document.createElement("button");
  checkBtn.type = "button";
  checkBtn.className = "check-btn";
  checkBtn.textContent = "Check Answer ✦";

  const validAnswers = Array.isArray(item.answers) ? item.answers : item.answer ? [item.answer] : [];
  let isAnswered = false;

  function evaluate() {
    if (isAnswered) return;
    const rawVal = input.value.trim();
    if (!rawVal) {
      showToast("Pehle apna answer type karein ✍️");
      input.focus();
      return;
    }

    isAnswered = true;
    input.disabled = true;
    checkBtn.disabled = true;

    const normUser = normalizeAnswer(rawVal);
    const isCorrect = validAnswers.some((ans) => normalizeAnswer(ans) === normUser);
    const displayAns = validAnswers[0] || "";

    state.answeredCount += 1;
    if (isCorrect) {
      state.score += 1;
      input.classList.add("correct");
    } else {
      input.classList.add("wrong");
      state.wrongAnswers.push({
        question: item.question,
        userAnswer: rawVal,
        correctAnswer: displayAns,
        explanation: item.explanation || "N/A"
      });
    }

    expBox.className = `exp-box show ${isCorrect ? "is-correct" : "is-wrong"}`;
    expBox.innerHTML = `
      <span class="exp-status">${isCorrect ? "✅ Correct!" : "❌ Incorrect!"}</span>
      ${!isCorrect ? `<div class="exp-answer"><strong>Correct Answer:</strong> ${escapeHTML(displayAns)}</div>` : ""}
      <div><strong>Explanation:</strong> ${escapeHTML(item.explanation || "Keep practicing!")}</div>
    `;
    updateProgress();
  }

  checkBtn.addEventListener("click", evaluate);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); evaluate(); } });

  wrap.appendChild(input);
  wrap.appendChild(checkBtn);
  card.appendChild(wrap);
}

function buildMatchingSection(card, item, expBox) {
  const pairs = Array.isArray(item.pairs) ? item.pairs : [];
  const shuffledRights = shuffleArray(pairs.map((p) => p.right));

  const listWrap = document.createElement("div");
  listWrap.className = "match-list";

  const rows = pairs.map((pair, idx) => {
    const row = document.createElement("div");
    row.className = "match-row";

    const leftDiv = document.createElement("div");
    leftDiv.className = "match-left";
    leftDiv.textContent = `${idx + 1}. ${pair.left}`;

    const select = document.createElement("select");
    select.className = "match-select";
    select.innerHTML = `<option value="">-- सही विकल्प चुनें --</option>` +
      shuffledRights.map((r) => `<option value="${escapeHTML(r)}">${escapeHTML(r)}</option>`).join("");

    row.appendChild(leftDiv);
    row.appendChild(select);
    listWrap.appendChild(row);
    return { row, select, left: pair.left, right: pair.right };
  });

  const checkBtn = document.createElement("button");
  checkBtn.type = "button";
  checkBtn.className = "check-btn";
  checkBtn.textContent = "सही जोड़ी जाँचें ✦";

  let isAnswered = false;
  checkBtn.addEventListener("click", () => {
    if (isAnswered) return;
    if (rows.some((r) => !r.select.value)) {
      showToast("कृपया सभी जोड़ियों का चयन करें 🌸");
      return;
    }

    isAnswered = true;
    checkBtn.disabled = true;
    let allCorrect = true;
    const userSummary = [];
    const rightSummary = [];

    rows.forEach((r) => {
      r.select.disabled = true;
      const isRowOk = normalizeAnswer(r.select.value) === normalizeAnswer(r.right);
      userSummary.push(`${r.left} → ${r.select.value}`);
      rightSummary.push(`${r.left} → ${r.right}`);

      if (isRowOk) {
        r.row.classList.add("correct");
      } else {
        allCorrect = false;
        r.row.classList.add("wrong");
        const note = document.createElement("div");
        note.className = "match-correct-note";
        note.textContent = `✓ सही मिलान: ${r.right}`;
        r.row.appendChild(note);
      }
    });

    state.answeredCount += 1;
    if (allCorrect) {
      state.score += 1;
    } else {
      state.wrongAnswers.push({
        question: item.question,
        userAnswer: userSummary.join(" | "),
        correctAnswer: rightSummary.join(" | "),
        explanation: item.explanation || "N/A"
      });
    }

    expBox.className = `exp-box show ${allCorrect ? "is-correct" : "is-wrong"}`;
    expBox.innerHTML = `
      <span class="exp-status">${allCorrect ? "✅ सभी जोड़ियाँ बिल्कुल सही हैं!" : "❌ कुछ जोड़ियाँ गलत हैं!"}</span>
      <div><strong>Explanation:</strong> ${escapeHTML(item.explanation || "अच्छा अभ्यास!")}</div>
    `;
    updateProgress();
  });

  card.appendChild(listWrap);
  card.appendChild(checkBtn);
}

/* ---------------- BUTTON LISTENERS ---------------- */
document.getElementById("comingSoonCard").addEventListener("click", () => {
  showToast("Physics, Chemistry & Maths December me launch honge! ✨");
});

btnBackToHome.addEventListener("click", () => {
  state.navStack.pop();
  if (state.navStack.length === 0) {
    switchScreen("home");
  } else {
    renderNavStackTop();
    switchScreen("category");
  }
});

document.getElementById("btnBackToCategory").addEventListener("click", () => {
  renderNavStackTop();
  switchScreen("category");
});

document.getElementById("btnBackToQuizList").addEventListener("click", () => {
  switchScreen("quizList");
});

document.getElementById("restartQuizBtn").addEventListener("click", () => {
  if (state.selectedMode) loadQuizMode(state.selectedMode);
});

initApp();