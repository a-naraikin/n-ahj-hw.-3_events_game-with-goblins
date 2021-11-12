/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
export default class GamePlay {
  constructor() {
    this.size = 4; // кол-во ячеек в массиве
    this.boardEl = document.getElementById('board');
    this.positionPersonage = -1;
  }

  startGame() {
    this.board = this.initiationBoard(this.size); // инициализация начального массива
    this.renderBoard(this.board);

    setInterval(() => {
      this.randomPositionPersonage();
    }, 1000);
  }

  randomPositionPersonage() {
    const divs = document.querySelectorAll('.field');

    const randomInt = Math.floor(Math.random() * (this.size ** 2));
    if (this.positionPersonage >= 0) {
      divs[this.positionPersonage].classList.remove('free');
      this.positionPersonage = -1;
    }

    divs[randomInt].classList.add('free');
    this.positionPersonage = randomInt;
  }
}
