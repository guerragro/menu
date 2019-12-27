import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttt',
  templateUrl: './ttt.component.html',
  styleUrls: ['./ttt.component.css']
})
export class TttComponent implements OnInit {

  box = ['', '', '', '', '', '', '', '', ''];
  counter: boolean = false;
  player: string;
  game: string;

  box2: any = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() { }

  ngOnInit() {
  }

  // друг портив друга
  gameChoices(id) {
    if (false) {
      // this.PVP(id);
    } else {
      this.PVE(id);
    }
  }

  // Друг против друга; Рабочая версия
  PVP(turn) {
    // this.counter = !this.counter;
    // this.player = (this.counter === true) ? 'x' : 'y';
    // if (this.counter) {
    //   this.ttt.splice(turn, 1, this.player);
    //   // this.howWon(this.ttt, 'x');
    // } else {
    //   this.ttt.splice(turn, 1, this.player);
    //   // this.howWon(this.ttt, 'y');
    // }
    // console.log(this.ttt);
    // this.howWon(this.ttt, this.player);
  }

  // против компьютера;
  PVE(turn) {
    this.counter = !this.counter;
    this.player = (this.counter === true) ? 'x' : 'y';
    if (this.counter) {
      this.box2.splice(turn, 1, this.player);
    } else {
      this.box2.splice(turn, 1, this.player);
    }
    this.turn(this.box2, this.player);
  }

  // [ +10, +10, +10,]
  // [ +10, x, +10,]
  // [ +10, +10, +10,]
  turn(res, player) {
    // console.log(res, res[0]);
    if (res[0] === 'x') {
      res[4] = 'y';
    }
    console.log(res);
    this.howWon(res, 'x');
  }
  // выйгрышные комбинации;
  howWon(res, player) {
    if (
      (res[0] === player && res[1] === player && res[2] === player) ||
      (res[3] === player && res[4] === player && res[5] === player) ||
      (res[6] === player && res[7] === player && res[8] === player) ||
      (res[0] === player && res[4] === player && res[8] === player) ||
      (res[2] === player && res[4] === player && res[6] === player) ||
      (res[0] === player && res[3] === player && res[6] === player) ||
      (res[1] === player && res[4] === player && res[7] === player) ||
      (res[2] === player && res[5] === player && res[8] === player)
    ) {
      console.log('выйграл ' + player);
    }
  }

  clear() {
    this.box = ['', '', '', '', '', '', '', '', ''];
    this.box2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}

//     if (res[0] === 'х' || res === '') {
//
//     } else if (res[1] === 'х' || res === '') {
//
//     } else if (res[2] === 'х' || res === '') {
//
//     } else if (res[3] === 'х' || res === '') {
//
//     } else if (res[4] === 'х' || res === '') {
// console.log('yes');
//     } else if (res[5] === 'х' || res === '') {
//
//     } else if (res[6] === 'х' || res === '') {
//
//     } else if (res[7] === 'х' || res === '') {
//
//     } else if (res[8] === 'х' || res === '') {
//
//     } else {
//       console.log('No bad');
//     }
// switch (true) {
//   case (res[0] === player && res[1] === player && res[2] === player):
//     return res;
//     break;
//   case (res[3] === player && res[4] === player && res[5] === player):
//     return res;
//     break;
//   case (res[6] === player && res[7] === player && res[8] === player):
//     return res;
//     break;
//   case (res[0] === player && res[4] === player && res[8] === player):
//     return res;
//     break;
//   case (res[2] === player && res[4] === player && res[6] === player):
//     return res;
//     break;
//   case (res[0] === player && res[3] === player && res[6] === player):
//     return res;
//     break;
//   case (res[1] === player && res[4] === player && res[7] === player):
//     return res;
//     break;
//   case (res[2] === player && res[5] === player && res[8] === player):
//     return res;
//     break;
//   default:
//     return res;
// }

// // Подумать логигу по switch-case;
// // Возможно цикл;
// // запоминать пустые поля в переменную, и эту переменную
// // тот элемент который уже считался, убирать из поиска
// // или добавлять в новый массив, по которыму и будет считаться
// // ['', '', '', '', '', '', '', '', ''] = ['', '', '', '', 'x', '0', '', '', ''];
// // new Array = ['x', '0', '', '', '', '', '', '', ''];
// // ['', '', '', '', 'x', '0', '0', 'x', ''];
// // new Array = ['x', '0', '0', 'x', '', '', '', '', ''];
// // возвращение индексы пустых строк
// // сделать массив с очками, хороший ход +10, плохой -10, 0 это заполненные клетки
// PVE(res, ind, player) {
//   // true - компьютер ходит первый
//   // false - компьютер ходит второй;
//   if (this.comp) {
//     if (res[0] === '0' || res[2] === '0' || res[6] === '0' || res[8] === '0') {
//       // первый вариант развития событий
//       console.log('первая цепочка');
//     } else if (res[1] === '0' || res[3] === '0' || res[5] === '0' || res[7] === '0') {
//       // ходы ai
//       //   4, 6, 8, 0 или 7
//       // ходы pl
//       //   1 или 3, 2, 7 или 0
//       this.grid.splice(6, 1, 'x');
//       if (res[2] === '0') {
//         this.grid.splice(8, 1, 'x');
//         if (res[7] === '0') {
//           this.grid.splice(0, 1, 'x');
//           this.winner(this.grid, 'x');
//         }
//       }
//     }
//   } else {
//     console.log('второй');
//   }
//   console.log(this.grid);
// }
// // для рандомной игры
// random(min: number = 0, max: number = 8) {
//   // проверять, если элемент в массив пустая строка, то можно записывать, если нет, то следующий
//   // проблема, событие не отлавливается поэтому не отрисовывается
//   // this.II = Math.floor(Math.random() * (max - min + 1) + min);
//   // this.nextTurn(this.II);
//   // return Math.floor(Math.random() * (max - min + 1) + min);
// }
