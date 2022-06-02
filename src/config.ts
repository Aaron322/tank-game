import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";

export default {
  canvas: {
    width: 900,
    height: 500,
  },
  tankSpeed: 20,

  model: {
    width: 30,
    height: 30,
  },
  straw: {
    num: 60,
  },
  wall: {
    num: 50,
  },
  steel: {
    num: 50,
  },
  tank: {
    num: 20,
  },
  water: {
    num: 20,
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
  },
};
