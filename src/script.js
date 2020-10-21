import './sass/style.scss';
import './scripts/m';

import('./scripts/m').then(() => console.log);

class Game {
  name = 'Violin Charades';
}

const myGame = new Game();
console.log(myGame);
