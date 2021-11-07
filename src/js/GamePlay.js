/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
export default class GamePlay {
  constructor() {
    this.board = null;
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

  initiationBoard(dimention) { // создание массива board
    const arr = [];
    let element = '';

    for (let i = 0; i < dimention; i++) {
      arr.push([]);

      for (let j = 0; j < dimention; j++) {
        arr[i].push(element);
      }
    }
    return arr;
  }

  renderBoard(board) {
    const fields = [];
    for (let [i, row] of board.entries()) {
      for (let [j, value] of row.entries()) {
        fields.push(`
          <div class="field" 
              data-row="${i}" 
              data-col="${j}"
              style="grid-row:${i + 1};grid-column:${j + 1};"
          >
            ${value || ''}
          </div>
        `);
      }
    }
    this.boardEl.innerHTML = fields.join('');
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
