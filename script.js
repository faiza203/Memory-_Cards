const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");
let CAC = 0;
const cardsEl = [];

const cardsData = [
  {
    question: "What must a variable begin with?",
    answer: "A letter, $ or _",
  },
  {
    question: "What is a variable?",
    answer: "Container for a piece of data",
  },
  {
    question: "Example of Case Sensitive Variable",
    answer: "thisIsAVariable",
  },
];
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (index === 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
  <div class="inner-card">
  <div class="inner-card-front">
    <p>
      ${data.question}
    </p>
  </div>
  <div class="inner-card-back">
    <p>
      ${data.answer}
    </p>
  </div>
</div>
  `;
  card.addEventListener("click", () => card.classList.toggle("show-answer"));
  cardsEl.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}
function updateCurrentText() {
  currentEl.innerText = `${CAC + 1}/${cardsEl.length}`;
}
createCards();
nextBtn.addEventListener("click", () => {
  cardsEl[CAC].className = "card left";
  CAC = CAC + 1;
  if (CAC > cardsEl.length - 1) {
    CAC = cardsEl.length - 1;
  }
  cardsEl[CAC].className = "card active";
  updateCurrentText();
});
prevBtn.addEventListener("click", () => {
  cardsEl[CAC].className = "card right";
  CAC = CAC - 1;
  if (CAC < 0) {
    CAC = 0;
  }

  cardsEl[CAC].className = "card active";
  updateCurrentText();
});
