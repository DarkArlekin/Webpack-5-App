import './sass/style.scss';
import './scripts/m';

import('./scripts/m').then((r) => console.log(r));

class Game {
  name = 'Violin Charades';
}

const myGame = new Game();
console.log(myGame);
