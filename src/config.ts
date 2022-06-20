import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import bullet from "./static/images/bullet/bullet.jpg";
import boss from "./static/images/boss/boss.png";
import playerLeft from "./static/images/player/left.gif";
import playerRight from "./static/images/player/right.gif";
import playerTop from "./static/images/player/top.gif";
import playerBottom from "./static/images/player/bottom.gif";

export default {
  canvas: {
    width: 1340,
    height: 700,
  },
  tankSpeed: 35,

  model: {
    width: 30,
    height: 30,
  },
  straw: {
    num: 90,
  },
  wall: {
    num: 80,
  },
  steel: {
    num: 80,
  },
  tank: {
    num: 20,
  },
  water: {
    num: 90,
  },
  images: {
    straw,
    wall,
    water,
    steel,
    tankBottom,
    tankLeft,
    tankRight,
    tankTop,
    bullet,
    boss,
    playerBottom,
    playerLeft,
    playerRight,
    playerTop,
  },
};
