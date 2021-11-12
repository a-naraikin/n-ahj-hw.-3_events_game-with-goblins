/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
export default class Board {
  constructor() {
    this.board = null;
    this.boardEl = document.getElementById('board');
  }

  initiationBoard(size) { // создание массива board
    const arr = [];
    let element = '';

    for (let i = 0; i < size; i++) {
      arr.push([]);

      for (let j = 0; j < size; j++) {
        arr[i].push(element);
      }
    }

    this.board = arr;
    this.renderBoard(this.board);
  }

  renderBoard(board) {
    const fields = [];
    for (const [i, row] of board.entries()) {
      for (const [j, value] of row.entries()) {
        fields.push(`
          <div class="field" 
            data-row="${i}" 
            data-col="${j}"
            style="grid-row:${i + 1};grid-column:${j + 1};">
            ${value || ''}
          </div>
        `);
      }
    }
    this.boardEl.innerHTML = fields.join('');
  }
}
