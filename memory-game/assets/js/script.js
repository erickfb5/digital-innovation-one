
let [lockBoard, hasCardFlipped]  = [false, false];
let [firstCard, secondCard] = [null, null];

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffleCards() {
  cards.forEach(card => {
    let position = Math.floor(Math.random() * 999);
    card.style.order = position;
  });
})();

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;
    return
  }
  hasCardFlipped = false;
  secondCard = this;
  checkForMatch();
}

const disableCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

const unflipCards = () => {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();
  }, 1000);
}

const checkForMatch = () => {
  const doCardsMatch = firstCard.dataset.flag === secondCard.dataset.flag;
  doCardsMatch ? disableCards() : unflipCards();
}

const resetBoard = () => {
  [hasCardFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}