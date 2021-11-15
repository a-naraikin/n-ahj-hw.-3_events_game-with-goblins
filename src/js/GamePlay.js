/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import Board from './Board';
import Sprite from './Sprite';

export default class GamePlay {
  constructor() {
    this.size = 4; // кол-во ячеек в массиве
    this.modalEl = document.getElementById('modal');
    this.countDead = null;
    this.countLost = null;
    this.count = null;
  }

  startGame() {
    const board = new Board();
    board.initiationBoard(this.size);

    const sprite = new Sprite();

    this.onCellClick();
    this.onButtonClick();

    setInterval(() => {
      sprite.randomPositionSprite(this.size);

      this.countLost.textContent = +this.countLost.textContent + this.count;

      if (this.count !== 1) {
        setTimeout(this.count = 1, 1000);
      }

      this.checkWinner();
    }, 1000);
  }

  onCellClick() {
    const fields = document.querySelectorAll('.field');

    this.countDead = document.getElementById('dead');
    this.countLost = document.getElementById('lost');

    for (let i = 0; i < fields.length; i++) {
      fields[i].addEventListener('click', () => {
        if (fields[i].classList.contains('sprite')) {
          fields[i].classList.remove('sprite');
          this.countDead.textContent = +this.countDead.textContent + 1;
        } else {
          this.countLost.textContent = +this.countLost.textContent + 1;
        }
        this.checkWinner();
        this.count = 0;
      });
    }
  }

  onButtonClick() {
    const resetButtons = document.querySelectorAll('.reset');

    for (const btn of resetButtons) {
      btn.addEventListener('click', () => {
        if (!this.modalEl.classList.contains('hidden')) {
          this.modalEl.classList.add('hidden');
        }
        this.reset();
      });
    }
  }

  reset() {
    this.countDead.textContent = 0;
    this.countLost.textContent = 0;
  }

  checkWinner() {
    if (this.countDead.textContent == 5) {
      this.showWinner('🍾 Победа! 🍾');
    }

    if (this.countLost.textContent > 5) {
      this.showWinner('Вы проиграли!');
    }
  }

  showWinner(status) {
    const header = this.modalEl.getElementsByTagName('h2')[0];
    header.textContent = status;
    this.modalEl.classList.remove('hidden');
    this.reset();
  }
}
