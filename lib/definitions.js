// GUN DEFINITIONS
const combineStats = function(arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12]
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,

    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9
  };
  return args => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();

const g = {
  // Gun info here
  trap: [40, 1, 0.1, 0.6, 1, 0.2, 1.1, 5, 1, 1, 1, 15, 3],
  swarm: [36, 0.25, 0.05, 0.4, 1.2, 0.175, 1, 3.5, 1, 1, 1.4, 5, 1.3],
  drone: [66, 0.25, 0.1, 0.6, 3.6, 0.4, 1, 2.5, 1, 1, 1, 0.1, 1],
  factory: [72, 1, 0.1, 0.7, 2, 0.2, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [16, 1.4, 0.1, 1, 2, 0.2, 1, 4.5, 1, 1, 1, 15, 1],
  ak47: [10, 0, 0.1, 1, 3, 3, 3, 5, 1, 1, 1, 1, 1],
  basicH: [12.5, 1.4, 0.1, 1, 2, -0.4, 1, 6, 1, 1, 1, 15, 1],
  heal: [16, 1.4, 0.1, 1, 1.5, -0.1, 1, 4.5, 1, 1, 1, 15, 1],
  frag: [100, 1.4, 0.25, 1, 0.75, 0.5, 1, 1, 1, 1, 1, 15, 1],
  bounce: [5, 20, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  cleaner: [
    1,
    0,
    1,
    1000000000000,
    100000000000000000000000000000000000000,
    1000000000,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1.5, 1.5, 1.5, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.3, 1, 0.25, 1, 1, 1, 1, 1.2, 1.2, 1, 1.2, 0.25, 1.2],
  sniper1: [9, 1, 0.25, 1, 99, 999, 1, 5, 1.2, 5, 1.2, 0.25, 1.2],
  rifle: [0.85, 0.8, 1.5, 1, 0.95, 0.9, 0.9, 1, 1, 1, 1, 1.5, 1],
  assass: [1.5, 1, 0.25, 1, 1, 1, 1, 1.1, 1.1, 1, 1.1, 0.5, 1.1],
  hunter: [1.5, 0.7, 1, 0.95, 0.9, 0.8, 1, 1.05, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 0.9, 0.85, 0.9, 1, 1, 1, 0.9, 1, 1],
  preda: [1.3, 1, 1, 0.8, 1.35, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.8, 1.4, 1.2, 0.2, 0.6, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 0.75, 1, 1, 0.8, 1, 1, 2.5, 1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.5, 1.3, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  barricade: [0.475, 1, 1, 1, 0.9, 1, 0.9, 1.1, 1, 1, 1, 1, 1],
  elitetrapper: [0.75, 1, 1, 1, 0.9, 0.9, 0.9, 1.1, 1, 0.5, 1, 1, 1],
  shotgun: [8, 0.2, 1, 1.5, 1, 0.4, 0.7, 1.8, 0.6, 1, 1.2, 1.2, 1],
  vulc: [1.1, 0.01, 1, 0.8, 0.75, 0.75, 0.75, 1.3, 1, 1, 1, 0.4, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  flanke: [99, 1.2, 1, 1, 99, 9999999, 0.9, 40, 0.85, 1, 1.2, 1, 1],
  tonsmorereload: [0.45, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tri: [1, 0.9, 1, 1, 1, 1, 1, 0.9, 0.9, 0.7, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.25, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [
    1.8,
    0.75,
    0.5,
    0.8,
    0.9,
    0.6,
    1.2,
    1.1,
    1,
    0.8,
    1.3,
    1,
    1.25
  ],
  five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  heavy3: [0.92, 1, 1, 1, 1.085, 1.085, 1, 1, 1, 1, 1, 1, 1],
  autosnipe: [
    2.73,
    0.833,
    0.25,
    1.4,
    0.86,
    1.09,
    1.06,
    1.38,
    1.62,
    1,
    2,
    0.25,
    1.56
  ],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  pound: [2, 1.75, 1, 1, 1, 1.6, 1, 0.85, 0.8, 1, 1.6, 1, 1.15],
  destroy: [2.1, 1.75, 0.5, 1, 1.7, 1.7, 1.2, 0.75, 0.5, 1, 1.6, 1, 3],
  anni: [0.85, 1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hive: [0.75, 0.3, 1, 0.8, 0.85, 0.5, 1.25, 1.05, 0.6, 1, 1, 1, 1],
  bees: [1.8, 1, 1, 1.4, 1.3, 0.75, 0.6, 3, 1.5, 1, 0.25, 1, 1],
  arty: [1.2, 0.75, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  spreadmain: [25 / 32, 0.25, 0.5, 1, 0.7, 1, 1, 1.58, 0.95, 1, 1, 1, 1],
  spread: [1.5, 1, 0.25, 1, 1.1, 1.1, 1, 0.85, 0.85, 1, 1, 0.25, 1],
  skim: [1.325, 0.8, 0.8, 0.9, 1.33, 1, 1.8, 0.4, 0.4, 1.3, 1, 1, 1.1],
  twin: [1, 0.5, 0.9, 1, 0.8, 0.875, 1, 1, 1, 1, 1, 1.2, 1],
  twi2: [55, 0.5, 0.9, 1, 0.8, 0.875, 1, 5, 1, 1, 1, 1.2, 1],
  twif: [60, 0.5, 0.9, 1, 0.8, 0.875, 1, 5, 1, 3, 1, 1.2, 1],
  bent: [1, 1, 0.8, 1, 0.8, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  bentdouble: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.8, 0.8, 0.91, 1, 1, 1, 1.1, 0.9, 0.95],
   triple1: [1.2, 0.667, 0.9, 0.6, 0.8, 0.8, 0.91, 0.7, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [3, 1, 0.8, 1, 1.35, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  realspam: [0.1, 1.4, 0.1, 1, 1, 0.75, 1, 1, 1, 1, 1, 15, 1],
  penta: [1, 1, 1, 1, 0.9, 0.81, 1, 1, 1, 1, 1, 1, 1],
  double: [1, 1, 1, 1, 0.8, 0.8, 0.8, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.85, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [1, 0.25, 1.5, 1.2, 1.4, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
  machgun: [0.6, 0.8, 2, 1, 1, 0.9, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  lance: [0.75, 0, 0.1, 1, 0.05, 4, 0.9, 0.7, 1, 0.05, 1, 180, 1],
  hurricane: [1, 1, 1, 1, 1.3, 1.3, 1.1, 1.5, 1.15, 1, 1, 1, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.75, 1.1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.6, 0.5, 0.5, 0.9, 0.9, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.2, 1.2, 1.1, 1, 0.85, 1, 1, 1, 1.1],
  carrier: [1.1, 1, 1, 1, 1, 0.9, 1, 1.1, 1.1, 1.1, 1, 1, 1],
  hexatrap: [1.2, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.2, 1.5, 2, 1, 1.135, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 1.45, 1, 0.87, 0.95, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 1.1, 0.6, 1.5, 0.75, 0.75, 1.35, 1, 1, 1],
  quadtrap: [1.1, 1, 1, 1, 0.9, 0.8, 0.9, 1.2, 1, 1, 1, 1, 1.1],
  over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
  over2: [1.25, 1, 1, 0.85, 1.3, 1.8, 2, 1.8, 0.9, 1, 2, 1, 1],
  master: [1, 1, 1, 0.7, 1.25, 1.25, 1.25, 1, 1, 0.1, 0.5, 1, 1],
  meta: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  overdrive: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  commander: [3, 1, 1, 0.7, 0.4, 0.4, 0.5, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [4, 1, 1, 1.4, 0.4, 0.35, 0.5, 0.8, 1, 1, 0.6, 1, 1],
  male: [0.5, 1, 1, 1.05, 1.15, 1.15, 1.15, 0.8, 0.8, 1, 1.15, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
  stronger: [1, 1, 1, 1, 1.05, 1.05, 1, 1.1, 1, 1, 1, 1, 1],
  bitweak: [1, 1, 1, 1, 0.95, 0.9, 1, 1, 1, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  opreload: [0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bitmorereload: [0.875, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  fifthreload: [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  thirdreload: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  fallen: [1.2, 0.5, 1.5, 1, 1, 0.3, 1, 1.2, 1.3, 2, 1.2, 6, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bitlessreload: [1.05, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  bitmorespeed: [1, 1, 1, 1, 1, 1, 1, 1.1, 1.1, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  morerange: [1, 1, 1, 1, 1, 1, 1, 1.75, 1.75, 1.25, 1, 1, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  bitop: [1, 1, 1, 1.1, 3, 1.5, 1.5, 1.3, 1.3, 1.3, 1.3, 0.2, 1],
  op: [1, 1.1, 1, 1.1, 20, 20, 20, 5, 2, 1.4, 4, 0.1, 1],
  ac: [0.125, 0, 1, 1, 9999999999, 99999999999999999, 3, 3.1, 2, 1, 5, 2, 1],
  moreop: [0.5, 0.5, 1, 1, 100, 100, 100, 1.5, 1.5, 1, 1, 0.5, 1],
  protectorswarm: [2.5, 0, 1, 1, 500, 2, 1, 1, 1, 0.4, 10, 1, 10],
  protectordrone: [0.5, 0, 1, 1, 75000, 5, 1, 1, 1, 1, 10, 0.1, 10],
  destroyDominator: [6, 0, 1, 1, 10, 10, 10, 0.5, 1, 1, 1, 1.25, 1],
  destroyDominator1: [1.5, 0, 1, 1, 10, 10, 10, 0.5, 1, 1, 1, 1.25, 1],
  heavycannon: [3, 0, 1, 1, 3, 3, 3, 0.75, 1, 1, 1, 1.25, 1],
  gunnerDominator: [0.65, 0, 1, 0.5, 1, 2, 1.6, 2.5, 1, 1.5, 1, 1.25, 1],
  trapperDominator: [2.5, 0, 1, 0.8, 2, 2.5, 1, 0.5, 1, 0.8, 1, 1.25, 1],
  mothership: [0.75, 1, 1, 1, 1.2, 1.2, 1.2, 0.75, 0.6, 15, 1, 1, 1.25],
  skimboss: [1, 0.5, 1, 0.9, 1, 1, 1, 1, 1, 0.7, 1, 1, 1],
  summoner: [0.35, 1, 1, 1.125, 0.25, 0.25, 0.15, 1, 1, 1, 0.8, 1, 1],
  summoner2: [0.35, 0, 1, 1.125, 0.75, 0.75, 0.75, 1, 1, 1, 0.8, 1, 1],
  bighive: [1, 1, 1, 2, 0.5, 0.5, 0.5, 0.1, 0.5, 1, 1, 1, 1],
  smashhive: [1, 1, 1, 2, 1, 1, 1, 0.1, 0.5, 1, 1, 1, 1],
  biggerhive: [1, 1, 1, 5, 2, 2, 2, 1, 1, 1, 1, 1, 1]
};

const dfltskl = 9;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2
  },
  FOOD: {
    LEVEL: -1
  }
};

// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5
  },
  LABEL: "Alpha Pentagon",
  VALUE: 15000,
  SHAPE: -5,
  SIZE: 58,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 40 * basePolygonHealth,
    REGEN: 0.6
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};

exports.enormPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 6
  },
  LABEL: "Omega Pentagon",
  VALUE: 15000,
  SHAPE: -5,
  SIZE: 63,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 4),
    SHIELD: 40 * basePolygonHealth,
    REGEN: 0.6
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};

exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4
  },
  LABEL: "Beta Pentagon",
  VALUE: 2500,
  SHAPE: 5,
  SIZE: 30,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.2
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0
  },
  DRAW_HEALTH: false
};
exports.greenpentagon = {
  PARENT: [exports.food],
  LABEL: "Pentagon",
  VALUE: 30000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 1,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.greentriangle = {
  PARENT: [exports.food],
  LABEL: "Triangle",
  VALUE: 7000,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 1,
  BODY: {
    DAMAGE: 1,
    DENSITY: 6,
    HEALTH: 60,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.greensquare = {
  PARENT: [exports.food],
  LABEL: "Square",
  VALUE: 2000,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: 0.5,
    DENSITY: 4,
    HEALTH: 20,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};

exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  VALUE: 2000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 4,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: 4,
  LABEL: "Gravel"
};
exports.mazewall = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  HITS_OWN_TYPE: "never", // hard, repel, never, hardWithBuffer, normal

  SHAPE: 4,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    SPEED: 0,
    RESIST: 100,
    STEALTH: 1,
    DENSITY: 1000000000000000000000
  },
  VALUE: 0,
  SIZE: 109,
  COLOR: 16,
  VARIES_IN_SIZE: false,
  GIVE_KILL_MESSAGE: false,
  ACCEPTS_SCORE: false
};
// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.bullet999 = {
  LABEL: "Bullet",
  TYPE: "bullet",
  SHAPE: [
    [-0.61, -0.787],
    [0, -0.987],
    [0.607, -0.787],
    [0.587, 0.83],
    [0.007, 1],
    [-0.61, 0.81]
  ],
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 444 * wepHealthFactor,
    DAMAGE: 8 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.bullet2 = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: 226,
  BODY: {
    PENETRATION: 1,
    SPEED: 20,
    RANGE: 300,
    DENSITY: 1.25,
    HEALTH: 800 * wepHealthFactor,
    DAMAGE: 800 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm"
};
exports.nader4 = {
  PARENT: [exports.bullet],
  LABEL: "Grenade (4)",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  SHAPE: 0,
  //FACING_TYPE: 'turnWithSpeed',
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.frag]),
        TYPE: [exports.bullet],
        PERSISTS_AFTER_DEATH: false,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [1, 5, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.frag]),
        TYPE: [exports.bullet],
        PERSISTS_AFTER_DEATH: false,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [1, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.frag]),
        TYPE: [exports.bullet],
        PERSISTS_AFTER_DEATH: false,
        AUTOFIRE: true
      }
    }
  ]
};
exports.nade4 = {
  PARENT: [exports.bullet],
  LABEL: "Grenade (4)",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  SHAPE: 0,
  //FACING_TYPE: 'turnWithSpeed',
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.frag]),
        TYPE: [exports.nader4],
        PERSISTS_AFTER_DEATH: false,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [1, 10, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.frag]),
        TYPE: [exports.nader4],
        PERSISTS_AFTER_DEATH: false,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [1, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.frag]),
        TYPE: [exports.nader4],
        PERSISTS_AFTER_DEATH: false,
        AUTOFIRE: true
      }
    }
  ]
};
exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer"
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.trape = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: 5,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.trape1 = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: [
    [-0.99, -0.967],
    [0, -0.49],
    [1.007, -0.99],
    [1.01, 1],
    [0.007, 0.533],
    [-1, 0.993]
  ],
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5
  }
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 1.25,
    RANGE: 120
  }
};

exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: {
    BLIND: true
  },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.4 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    SPEED: 5,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1,
    FOV: 0.9
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.aquadrone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  COLOR: 10,
  CONTROL_RANGE: 0,
  SHAPE:
    "m -0.74832,-0.74832 a 1.05832,1.05832 0 0 1 1.15332,-0.229412 1.05832,1.05832 0 0 1 0.65332,0.97776 1.05832,1.05832 0 0 1 -0.65332,0.97776 1.05832,1.05832 0 0 1 -1.15332,-0.229412 l 0.74832,-0.74832 z",
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.dronej = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE:
    "m-0.85496,-1.1037 0.29259,0.72561 -0.76957,0.39528 0.76674,0.39393 -0.28976,0.71867 1.1037,-0.26177 0.42502,-0.85501 -0.42502,-0.85496z",
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.VisDrone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: [
    [-0.1, 0.3],
    [-0.43, 0.95],
    [0.92, 0.275],
    [0.934, -0.28],
    [-0.435, -0.974],
    [-0.1, -0.3],
    [0.43, -0.01]
  ],
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 2,
    PUSHABILITY: 0,
    ACCELERATION: 0.05,
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.destroyerD = {
  LABEL: "Drone",
  TYPE: "drone",
  SHAPE: [
    //destroyer/gunship/BEST ONE EVERRRR
    [1, 0],
    [0, 1],
    [-0.58019, 1],
    [-1.24193, 0.38417],
    [-0.21257, 0.36801],
    [-0.21257, -0.36801],
    [-1.24193, -0.38417],
    [-0.58019, -1],
    [0, -1]
  ],
  SIZE: 10,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 1,
    DAMAGE: 10,
    PENETRATION: 2,
    PUSHABILITY: 0,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true
};
exports.adrone = {
  PARENT: [exports.drone],

  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};

exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};
exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.trapperangrang = {
  LABEL: "Rang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -6,
  BODY: {
    SPEED: 2.5,
    RANGE: 120,
    HEALTH: 1000
  }
};
exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.missile66 = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.trap, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.trap, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [19, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [7, 8, 0.6, 7, 0, 0, 0]
    }
  ]
};
exports.missile67 = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 12, 0.6, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 12, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 12, 0.6, 7, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.missile1 = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 130, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 230, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.missilee = {
  PARENT: [exports.bullet],
  LABEL: "Missilee",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.rocket = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 2.8, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.gun3 = {
  PARENT: [exports.bullet],
  LABEL: "Gun",
  INDEPENDENT: true,
  CONTROLLERS: ["spin"],
  RANGE: 120,
  SHAPE: 213,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 10, 6, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet2, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.gun5 = {
  PARENT: [exports.bullet],
  LABEL: "Machine Gun",
  INDEPENDENT: true,
  CONTROLLERS: ["spin"],
  RANGE: 120,
  SHAPE: 213,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 10, 6, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.morereload,
          g.morereload,
          g.morereload
        ]),
        TYPE: [exports.bullet2, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.hivebig = {
  PARENT: [exports.bullet],
  LABEL: "",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 144, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 216, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 288, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.hive5 = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.hive6 = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 12, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.hiveElite = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 10.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 10.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 10.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 10.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 10.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.hive
    }
  ]
};
// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true
};
let gun = {};
exports.VisTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 4, -1.8, 0, 5.5, 0, 0]
    },
    {
      POSITION: [18, 4, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 4, -1.8, 0, -5.5, 0, 0.5]
    }
  ]
};
exports.visturret1 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 4, -1.8, 0, 5.5, 0, 0]
    },
    {
      POSITION: [18, 4, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 4, -1.8, 0, -5.5, 0, 0.5]
    },
    {
      POSITION: [18, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 4, -1.8, 0, 0, 0, 0]
    }
  ]
};
exports.eggBossCircleProp = {
  SHAPE: 0,
  PARENT: [exports.genericTank]
};
exports.droneoverride = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 0,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: {
    BLIND: true
  },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 1.5 * wepHealthFactor,
    DAMAGE: 2.5 * wepDamageFactor,
    SPEED: 5.5,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.eggBossCircleProp
    }
  ]
};
exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 2.5
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.batteryTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Battery",
  DANGER: 6,
  BODY: {
    FOV: 2.4
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.battery = {
  PARENT: [exports.genericTank],
  LABEL: "Battery",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};
exports.auto2gun = {
  LABEL: "",
  BODY: {
    FOV: 2.4
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.rindeeyrturret = {
  PARENT: [exports.genericTank],
  STAT_NAMES: statnames.drone,
  LABEL: "Turret",
  DANGER: 50,
  BODY: {
    FOV: base.FOV * 5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 8, 2.4, -6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mach, g.mach]),
        TYPE: exports.swarm,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.singlegun = {
  PARENT: [exports.genericTank],
  LABEL: "Cannon",
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.heavycannon]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.buildergun = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,

  BODY: {
    FOV: 3
  },
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
      }
    }
  ]
};
exports.buildergunee = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "trapahive",
  STAT_NAMES: statnames.trap,

  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 9, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 9, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.hive,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0]
    }
  ]
};

exports.buildergune = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "luckytrapper",
  STAT_NAMES: statnames.trap,

  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 5, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [13, 5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 5, 1.7, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.missile
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.giga3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.pound,
          g.auto
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.clicker3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.fake]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 7,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0]
    }
  ]
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 5, 1, 0, -4.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 5, 1, 0, 4.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 5, 1, 0, -4.5, 0, 1.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 5, 1, 0, 4.5, 0, 1.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 0, 0, 1.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gun1 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, -4.5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, -4.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, -4.5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.tritrapgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.block
      }
    }
  ]
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.sawBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 223,
  INDEPENDENT: true
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: false
};
exports.bb_squ2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  AUTOFIRE: true,
  SHAPE: 4,
  COLOR: 26
};
exports.mod_ring = {
  PARENT: [exports.genericTank],
  LABEL: "",
  AUTOFIRE: true,
  SHAPE: 0,
  SIZE: 0.2,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [0.01, 100, 0, 0, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 0, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 0, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 0, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 2, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 2, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 2, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 2, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 4, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 4, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 4, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 4, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 6, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 6, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 6, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 6, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 8, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 8, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 8, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 8, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 10, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 10, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 10, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 10, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 12, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 12, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 12, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 12, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 14, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 14, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 14, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 14, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 16, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 16, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 16, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 16, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 18, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 18, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 18, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 18, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 20, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 20, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 20, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 20, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 22, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 22, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 22, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 22, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 24, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 24, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 24, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 24, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 26, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 26, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 26, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 26, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 28, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 28, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 28, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 28, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 30, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 30, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 30, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 30, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 32, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 32, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 32, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 32, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 34, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 34, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 34, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 34, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 36, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 36, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 36, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 36, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 38, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 38, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 38, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 38, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 40, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 40, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 40, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 40, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 42, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 42, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 42, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 42, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 44, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 44, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 44, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 44, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 46, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 46, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 46, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 46, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 48, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 48, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 48, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 48, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 50, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 50, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 50, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 50, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 52, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 52, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 52, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 52, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 54, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 54, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 54, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 54, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 56, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 56, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 56, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 56, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 58, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 58, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 58, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 58, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 60, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 60, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 60, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 60, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 62, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 62, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 62, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 62, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 64, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 64, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 64, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 64, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 66, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 66, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 66, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 66, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 68, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 68, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 68, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 68, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 70, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 70, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 70, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 70, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 72, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 72, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 72, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 72, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 74, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 74, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 74, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 74, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 76, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 76, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 76, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 76, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 78, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 78, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 78, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 78, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 80, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 80, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 80, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 80, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 82, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 82, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 82, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 82, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 84, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 84, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 84, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 84, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 86, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 86, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 86, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 86, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 88, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 88, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 88, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 88, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 90, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 90, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 90, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 90, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      //odd number parts
      POSITION: [0.01, 100, 0, 1, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 1, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 1, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 1, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 3, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 3, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 3, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 3, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 5, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 5, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 5, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 5, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 7, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 7, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 7, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 7, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 9, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 9, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 9, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 9, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 11, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 11, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 11, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 11, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 13, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 13, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 13, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 13, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 15, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 15, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 15, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 15, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 17, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 17, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 17, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 17, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 19, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 19, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 19, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 19, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 21, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 21, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 21, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 21, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 23, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 23, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 23, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 23, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 25, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 25, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 25, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 25, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 27, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 27, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 27, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 27, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 29, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 29, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 29, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 29, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 31, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 31, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 31, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 31, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 33, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 33, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 33, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 33, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 35, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 35, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 35, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 35, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 37, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 37, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 37, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 37, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 39, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 39, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 39, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 39, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 41, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 41, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 41, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 41, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 43, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 43, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 43, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 43, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 45, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 45, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 45, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 45, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 47, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 47, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 47, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 47, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 49, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 49, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 49, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 49, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 51, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 51, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 51, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 51, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 53, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 53, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 53, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 53, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 55, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 55, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 55, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 55, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 57, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 57, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 57, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 57, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 59, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 59, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 59, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 59, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 61, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 61, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 61, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 61, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 63, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 63, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 63, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 63, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 65, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 65, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 65, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 65, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 67, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 67, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 67, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 67, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 69, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 69, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 69, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 69, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 71, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 71, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 71, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 71, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.1, 100, 0, 73, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 73, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 73, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 73, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 75, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 75, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 75, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 75, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 77, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 77, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 77, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 77, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 79, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 79, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 79, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 79, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 81, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 81, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 81, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 81, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 83, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 83, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 83, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 83, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 85, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 85, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 85, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 85, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 87, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 87, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 87, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 87, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 89, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 89, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 89, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 89, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 100, 0, 91, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, -100, 0, 91, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, 100, 91, 0, 0], //
      TYPE: exports.bb_squ2
    },
    {
      POSITION: [0.01, 0, -100, 91, 0, 0], //
      TYPE: exports.bb_squ2
    }
  ]
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0]
    }
  ]
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};
exports.testminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 13, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [2, 13, 1.6, 16, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.construct]),
        TYPE: exports.trap
      }
    },
    {
       POSITION: [16, 13, 1, 0, 0, 270, 0]
    },
    {
      POSITION: [2, 13, 1.6, 16, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.construct]),
        TYPE: exports.trap
      }
    }
  ]
};
exports.testminion1 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.minione = {
  PARENT: [exports.genericTank],
  LABEL: "Minionking",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.minionee = {
  PARENT: [exports.genericTank],
  LABEL: "Minionking",
  TYPE: "minion",
  SHAPE: 4,
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.minion5 = {
  PARENT: [exports.genericTank],
  LABEL: "Minionkinee",
  TYPE: "minion",
  SHAPE: 4,
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 6, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 6, 1, 0, 7.25, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 6, 1, 0, 7.25, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 6, 1, 0, 7.25, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.minion1 = {
  PARENT: [exports.genericTank],
  LABEL: "reeer",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret
    }
  ]
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.hypermissile
      }
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0]
    }
  ]
};

function makeAuto(type, name = -1, options = {}) {
  let turret = { type: exports.autoTurret, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent
      }
    ]
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}
function makeOP(type, name = -1, options = {}) {
  let turret = { type: exports.arenacloser, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  output.BODY = {
    ACCELERATION: base.ACCEL * 5.25,

    FOV: 1.5,
    HEALTH: 1000
  };
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent
      }
    ]
  };
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.over]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3
    }
  };
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "OP-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}
function makeHybrid(type, name = -1, options = {}) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeFallenHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.morereload]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 20,
      DANGER: 70
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}
exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.basic1 = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.servercleaner = {
  PARENT: [exports.genericTank],
  LABEL: "Server Cleaner",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH       ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.cleaner]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.fun = {
  PARENT: [exports.genericTank],
  LABEL: "Fun",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      POSITION: [18, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.switcheroo = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Ba)",
  SHAPE: 215,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.switcherootw = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Tw)",
  SHAPE: 215,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.switcherooma = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Ma)",
  SHAPE: 215,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.switcheroosn = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Sn)",
  FOV: 2,
  SHAPE: 215,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.switcheroofl = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Fl)",
  SHAPE: 215,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.gun2 = {
  PARENT: [exports.genericTank],
  LABEL: "Gun",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.gun3,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.gun4 = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
        TYPE: exports.gun5,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.gun = {
  PARENT: [exports.genericTank],
  LABEL: "Ak-47",
  SHAPE: 213,
  COLOR: 20,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 1, 1, 10, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.ak47]),
        TYPE: exports.bullet,
        LABEL: "Bullet", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.snipegun = {
  PARENT: [exports.genericTank],
  LABEL: "Snipe Gun",
  SHAPE: 220,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 1, 1, 20, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.ak47,
          g.sniper,
          g.sniper,
          g.sniper,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.zeppelinBullet = {
  PARENT: [exports.bullet],
  GUNS: [
    {
      POSITION: [2, 5, 1, 0, 0, 0, 100],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.c4,
          g.half_damage,
          g.no_speed
        ]),
        SHOOT_ON_DEATH: true,
        TYPE: [
          exports.bullet,
          {
            MOTION_TYPE: "explode",
            LABEL: "Explosion",
            PERSISTS_AFTER_DEATH: true,
            GO_THRU_OBSTACLES: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ],
  GO_THRU_OBSTACLES: true
};
exports.zeppelinTurret = {
  SHAPE: 212,
  BODY: {
    FOV: 2.5
  },
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      POSITION: [1, 12, 1, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.doublereload]),
        TYPE: exports.zeppelinBullet
      }
    }
  ],
  LABEL: "",
  color: 12,
  size: 11
};
exports.zeppelin = {
  PARENT: [exports.genericTank],
  LABEL: "Zeppelin",
  DANGER: 7,
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 361, 1],
      TYPE: [exports.eggBossCircleProp, { COLOR: 12 }]
    },
    {
      POSITION: [11, 0, 0, 0, 361, 1],
      TYPE: [exports.zeppelinTurret, {}]
    }
  ]
};
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "TESTBED",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.sas = {
  PARENT: [exports.genericTank],
  LABEL: "sassafras bosses",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.awps = {
  PARENT: [exports.genericTank],
  LABEL: "AWP.Bosses",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.death = {
  PARENT: [exports.genericTank],
  LABEL: "Death Bosses",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testbed11 = {
  PARENT: [exports.genericTank],
  LABEL: "Omega_Bosses",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testbed1 = {
  PARENT: [exports.genericTank],
  LABEL: "FallenBosses",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testbede = {
  PARENT: [exports.genericTank],
  LABEL: "op-tanks",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testbedkinfg = {
  PARENT: [exports.genericTank],
  LABEL: "King_X-K-XBosses",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testbedhi = {
  PARENT: [exports.genericTank],
  LABEL: "god",
  RESET_UPGRADES: true,
  SKILL: [999, 999, 999, 999, 999, 999, 999, 999, 999, 999],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 100000000000000000000000000000000000,
    HEALTH: 1000000000000000000000000000000000000000000000000000000,
    DAMAGE: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.removed = {
  PARENT: [exports.genericTank],
  LABEL: "Removed/Changed/Unrealeased Tanks",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.alphatanks = {
  PARENT: [exports.genericTank],
  LABEL: "Alpha Tanks(Alpha Tester Only)",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 1000, 9, 9, 9, 9],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.arenacloser = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",

  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 1000,
    HEALTH: 1000,
    DAMAGE: 1000,
    DENSITY: 2000,
    FOV: 2
  },
  SIZE: 25,
  VALUE: 0,
  CAN_BE_ON_LEADERBOARD: false,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
  GUNS: [
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.singles = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7.5, 10, -1.8, 4, 0, 0, 0]
    }
  ]
};
let smshskl = 12; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.saw = {
  PARENT: [exports.genericTank],
  LABEL: "Saw",
  DANGER: 500000,

  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 0.05
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.sawBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.smashhiveminion = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
    "mapTargetToGoal"
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.decoyminion = {
  PARENT: [exports.genericTank],
  LABEL: "Decoy",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  NAME: "Decoy",
  //DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.decoy = {
  PARENT: [exports.genericTank],
  LABEL: "Decoy",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  //NAME: 'Decoy',
  //DAMAGE_CLASS: 0,

  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: [
          exports.decoyminion,
          {
            SIZE: 100
          }
        ],

        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.smashhive = {
  PARENT: [exports.genericTank],
  LABEL: "Smash-Mind",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.smashhive]),
        TYPE: [
          exports.smashhiveminion,
          {
            SIZE: 100
          }
        ],

        MAX_CHILDREN: 2
      }
    }
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl
  ],
  STAT_NAMES: statnames.smasher
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody
    }
  ]
};

exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: base.DAMAGE * 1.15,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.5
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2
    }
  ]
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl
];

exports.twincep = makeAuto(exports.weirdspike, "Twinception", {
  type: exports.autoSmasherTurret,
  size: 11
});
exports.basebrid = makeHybrid(exports.basic, "Basebrid", {});
exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pelter = {
  PARENT: [exports.genericTank],
  LABEL: "Pelter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};

exports.opelter = {
  PARENT: [exports.genericTank],
  LABEL: "OP-Pelter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};

exports.tripelter = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Pelter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 240, 0]
    }
  ]
};
exports.hexapelter = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa-Pelter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, -60, 0]
    }
  ]
};
exports.peltertrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Pelter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0]
    },
    {
      POSITION: [2, 3, 1.7, 19, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0]
    },
    {
      POSITION: [2, 3, 1.7, 19, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};
exports.puntgun = {
  PARENT: [exports.genericTank],
  LABEL: "Punt Gun",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 0, 0]
    }
  ]
};
exports.tripuntgun = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Punt Gun",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 2, 1, 0, -2.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 120, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 120, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 120, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 120, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 120, 0]
    },
    {
      POSITION: [24, 2, 1, 0, -2.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 240, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 240, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 240, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 240, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 240, 0]
    }
  ]
};
exports.trianglepuntgun = {
  PARENT: [exports.genericTank],
  LABEL: "Boosting Punt Gun",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 2, 1, 0, -2.5, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 150, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 150, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 150, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 150, 0]
    },
    {
      POSITION: [24, 2, 1, 0, -2.5, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 210, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 210, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 210, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 210, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 210, 0]
    }
  ]
};
exports.punter = {
  PARENT: [exports.genericTank],
  LABEL: "Punter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [27, 2, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,

          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 2.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 2, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 20, 0.5, 0, 0, 0, 0]
    }
  ]
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gunnerE = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.twif]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.twif]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 3.5, 1, 0, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.twi2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 3.5, 1, 0, -2, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.twi2]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gunney = {
  PARENT: [exports.genericTank],
  LABEL: "elite_gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gunne1 = {
  PARENT: [exports.genericTank],
  LABEL: "nail_gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
  {
  POSITION: [14, 2, 1, 0, -4, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
  POSITION: [17, 2, 1, 0, 0, 0, 0.50],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
  POSITION: [14, 2, 1, 0, 4, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
   POSITION: [9, 8, 1, 0, -6, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
   POSITION: [9, 8, 1, 0, -3, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
   POSITION: [9, 8, 1, 0, 3, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
   POSITION: [9, 8, 1, 0, 6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
  ]
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.opgunner = makeOP(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 7.5, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.benthybrid = makeHybrid(exports.bent, "Bentbrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.triplee = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 5, 0, 0.5]
    },
    {
      POSITION: [3, 7, 1.7, 15, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.triple1]),
        TYPE: exports.trap,
      }
    },
  {
    POSITION: [15, 7, 1, 0, -5, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.triple1]),
        TYPE: exports.trap,
      }
    },
  {
      POSITION: [17, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.triple1]),
        TYPE: exports.trap,
      }
    },
  ]
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1
  },
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.sniper34 = {
  PARENT: [exports.genericTank],
  LABEL: " ",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 16, 1, 12, 0, 0, 0]
    },
    {
      POSITION: [2.5, 16, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [20, 1.5, 1, 0, 8, 0, 0]
    },
    {
      POSITION: [20, 1.5, 1, 0, -8, 0, 0]
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper1]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.snipere = {
  PARENT: [exports.genericTank],
  LABEL: "smikep",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 4, 0.6, 7, 0, 180, 0]
    },
    {
      POSITION: [22, 9, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [8, 10.5, 1, 24, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone]),
        TYPE: exports.missile66
      }
    }
  ]
};
exports.snipere1 = {
  PARENT: [exports.genericTank],
  LABEL: "hive-??",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 6, 0.6, 7, 0, 0, 0]
    },
    {
      POSITION: [22, 9, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [8, 10.5, 1, 24, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone]),
        TYPE: exports.hive5
      }
    }
  ]
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.musket = {
  PARENT: [exports.genericTank],
  LABEL: "Musket",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15.5, 19.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [18, 7, 1, 0, 4.15, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.twin,
          g.rifle,
          g.bitweak
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 7, 1, 0, -4.15, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.twin,
          g.rifle,
          g.bitweak
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.autoass = makeAuto(exports.assassin, "");

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.spreda = {
  PARENT: [exports.genericTank],
  LABEL: "S-Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [27, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 15, -1.2, 6.5, 0, 0, 0]
    }
  ]
};

exports.spreda = {
  PARENT: [exports.genericTank],
  LABEL: "S-Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [27, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 15, -1.2, 6.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.hunter,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 14, -1.3, 6.2, 0, 0, 0]
    }
  ]
};
exports.xpreda = {
  PARENT: [exports.genericTank],
  LABEL: "X-Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 20, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda,
          g.anni
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.directord = {
  PARENT: [exports.genericTank],
  LABEL: "",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.trape,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "Master",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.masterGun
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }]
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }]
    }
  ]
};

exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.testtank676 = {
  PARENT: [exports.genericTank],
  LABEL: "Overlordauto",
  DANGER: 7,
  STAT_NAMES: statnames.pkminionene,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.overdrive1 = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrivelord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.overdrive]),
        TYPE: exports.pkminionene,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.overdrive]),
        TYPE: exports.pkminionene,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.overdrive]),
        TYPE: exports.pkminionene,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.overdrive]),
        TYPE: exports.pkminionene,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.SnipeCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper Closer",
  NAME: "Sniper Closer",
  SIZE: 100,
  COLOR: 3,
  CAN_GO_OUTSIDE_ROOM: true,
  VALUE: 1000,
  CAN_BE_ON_LEADERBOARD: false,
  SKILL: skillSet({
    dam: 1,

    pen: 1,

    str: 1,

    spd: 29,

    atk: 1,

    hlt: 1,

    shi: 1,

    rgn: 1
  }),

  BODY: {
    // def
    SHEILD: 10000,

    REGEN: 10,

    HEALTH: 10000,

    DAMAGE: 10000000000000000000000000000000000,

    DENSITY: 20,

    FOV: 4
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.OldAcCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer(Old)",
  NAME: "Arena Closer",
  SIZE: 100,
  COLOR: 3,
  CAN_GO_OUTSIDE_ROOM: true,
  VALUE: 1000,
  CAN_BE_ON_LEADERBOARD: true,
  SKILL: skillSet({
    dam: 1,

    pen: 1,

    str: 1,

    spd: 29,

    atk: 1,

    hlt: 1,

    shi: 1,

    rgn: 1
  }),

  BODY: {
    // def
    SHEILD: 10000,

    REGEN: 10,

    HEALTH: 10000,

    DAMAGE: 10000000000000000000000000000000000,

    DENSITY: 20,

    FOV: 4
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.MachineCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Closer",
  NAME: "Machine Closer",
  SIZE: 100,
  COLOR: 3,
  CAN_GO_OUTSIDE_ROOM: true,
  VALUE: 1000,
  CAN_BE_ON_LEADERBOARD: false,
  SKILL: skillSet({
    dam: 1,

    pen: 1,

    str: 1,

    spd: 29,

    atk: 1,

    hlt: 1,

    shi: 1,

    rgn: 1
  }),

  BODY: {
    // def
    SHEILD: 10000,

    REGEN: 10,

    HEALTH: 10000,

    DAMAGE: 10000000000000000000000000000000000,

    DENSITY: 20,

    FOV: 3
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 11.7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.HeavyCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Pound Closer",
  NAME: "Pound Closer",
  SIZE: 100,
  COLOR: 3,
  CAN_GO_OUTSIDE_ROOM: true,
  VALUE: 1000,
  CAN_BE_ON_LEADERBOARD: false,
  SKILL: skillSet({
    dam: 1,

    pen: 1,

    str: 1,

    spd: 29,

    atk: 1,

    hlt: 89,

    shi: 1,

    rgn: 1
  }),

  BODY: {
    // def
    SHEILD: 10000,

    REGEN: 10,

    HEALTH: 10000,

    DAMAGE: 10000000000000000000000000000000000,

    DENSITY: 20,

    FOV: 3
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11.7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.TwinCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Closer",
  NAME: "Twin Closer",
  SIZE: 100,
  COLOR: 3,
  CAN_GO_OUTSIDE_ROOM: true,
  VALUE: 1000,
  CAN_BE_ON_LEADERBOARD: false,
  SKILL: skillSet({
    dam: 1,

    pen: 1,

    str: 1,

    spd: 29,

    atk: 1,

    hlt: 1,

    shi: 1,

    rgn: 1
  }),

  BODY: {
    // def
    SHEILD: 10000,

    REGEN: 10,

    HEALTH: 10000,

    DAMAGE: 10000000000000000000000000000000000,

    DENSITY: 20,

    FOV: 3
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.DroneCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Drone Closer",
  NAME: "Drone Closer",
  SIZE: 100,
  COLOR: 3,
  CAN_GO_OUTSIDE_ROOM: true,
  VALUE: 1000,
  CAN_BE_ON_LEADERBOARD: false,
  MAX_CHILDREN: 6,
  SKILL: skillSet({
    dam: 1,

    pen: 1,

    str: 1,

    spd: 29,

    atk: 1,

    hlt: 1,

    shi: 1,

    rgn: 1
  }),

  BODY: {
    // def
    SHEILD: 10000,

    REGEN: 10,

    HEALTH: 10000,

    DAMAGE: 10000000000000000000000000000000000,

    DENSITY: 20,

    FOV: 3
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 8, 2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.ac]),
        TYPE: exports.drone
      }
    }
  ]
};

exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.bansheeses = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bigauto4gun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 60, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 60, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 300, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 300, 0]
    }
  ]
};
exports.fortc = {
  PARENT: [exports.genericTank],
  LABEL: "Elmoer",
  DANGER: 700,
  COLOR: 20,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.necrodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.meta,
          g.op,
          g.op,
          g.morereload,
          g.morereload,
          g.morerecoil,
          g.morerecoil,
          g.morerecoil,
          g.morerecoil,
          g.morerecoil,
          g.ac
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.swarm,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.autoover = makeAuto(exports.overseer, "");
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};

function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.cruiser122 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 13.5, 0.6, 7, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [11, 11.5, 0.6, 7, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [9, 9.5, 0.6, 7, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 1.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.cru = {
  PARENT: [exports.genericTank],
  LABEL: "хуй знает что  это",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.tenk = {
  PARENT: [exports.genericTank],
  LABEL: "Tenk",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.1, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.1, 7, -4, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 1, 7, 4, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.bullet
      }
    },
    {
      POSITION: [5, 7.5, 1, 7, -4, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.bullet
      }
    }
  ]
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ]
};
exports.battleship1 = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    }
  ]
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.caggier = {
  PARENT: [exports.genericTank],
  LABEL: "giga-1",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 100, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, 140, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, 220, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [20, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.bitweak]),
        TYPE: exports.block
      }
    }
  ]
};
exports.autocruiser = makeAuto(exports.cruiser, "");
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade',
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    }
  ]
};
exports.necromancere = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancere",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.minionee,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.minionee,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    }
  ]
};
exports.necromonster = {
  PARENT: [exports.genericTank],
  LABEL: "NecroMonster",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.2
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 5,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        MAX_CHILDREN: 5,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 5,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 5,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    }
  ],
  TURRETS: [
    {
      POSITION: [8, 6.5, 0, 0, 90, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [8, 6.5, 0, 180, 90, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [8, 6.5, 0, 90, 90, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [8, 6.5, 0, -90, 90, 1],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.lilfact = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};

exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.factorye = {
  PARENT: [exports.genericTank],
  LABEL: "Factorye",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minione,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minione,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 90, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minione,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 270, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minione,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 270, 0]
    }
  ]
};
exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machinestream = {
  PARENT: [exports.genericTank],
  LABEL: "Machine tri",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1.4, 8, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [8, 10, 1.4, 8, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.str = {
  PARENT: [exports.genericTank],
  LABEL: "elite",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [3, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.barricade,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.hybridmini = makeHybrid(exports.mini, "Cropduster");
exports.minitrap = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.trapliner = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Trapliner",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 30, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 26, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.barricade, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.blockade = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Blockade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.barricade,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.barricade,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.barricade,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.elitetrapturret = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Blockade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.elitetrapper,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.elitetrapper,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.elitetrapper,
          g.halfrange
        ]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.destroys = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
  {
      POSITION: [5.5, 8, -1.8, 8.5, 0, 0, 0]
    }
  ]
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.congruator = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Congruator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.mach
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "Beehive",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hiveshooter12 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "Beehive",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.hive,
          g.stream
        ]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hiveshootere = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "BeehiveElite",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hiveElite
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");
exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }
  ]
};

exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.motor = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Motor",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.motorhivemind = {
  PARENT: [exports.genericTank],
  LABEL: "Motor",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.mootor = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Mootor",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [2, 12, -1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.motorhivemind
      }
    }
  ]
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.engineer1 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Constructer",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block
      }
    }
  ]
};
exports.megatrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Trapper",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 13, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 13, 1.6, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.construct]),
        TYPE: exports.trap
      }
    }
  ]
};
exports.megatrapper1 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 13, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [2, 13, 1.6, 16, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.construct]),
        TYPE: exports.trap
      }
    },
    {
       POSITION: [16, 13, 1, 0, 0, 270, 0]
    },
    {
      POSITION: [2, 13, 1.6, 16, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.construct]),
        TYPE: exports.trap
      }
    }
  ]
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Conqueror",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0]
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0]
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0]
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0]
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.boomerturret = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0]
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0]
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Quad Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    }
  ]
};

exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.customtank1 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Big guns",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
  POSITION: [15, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [15, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    },
  {
   POSITION: [17, 3, 1, 0, -3, -0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
  {
  POSITION: [18.5, 5, 1, 0, 0, -0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
  ]
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.testmissile3 = {
  PARENT: [exports.bullet],
  SHAPE: 0,
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 0.5, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,

          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.launcher = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Launcher",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.skim]),
        TYPE: exports.testmissile3
      }
    }
  ]
};

exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 14, 1.4, 16, 0, 0, 0]
    },
    {
      POSITION: [17, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.skimmer1 = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 14, 1.4, 16, 0, 0, 0]
    },
    {
      POSITION: [17, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile1,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.skimmere = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "short_skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 14, 1.4, 16, 0, 0, 0]
    },
    {
      POSITION: [17, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    }
  ]
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.flanke = {
  PARENT: [exports.genericTank],
  LABEL: "turret",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  SHAPE: 5,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 35, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, -35, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 180, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, -108, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 108, 0],
      AUTOFIRE: true,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.heptatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Hepta-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  },
  "Hexa-Trapper"
);
exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.bouncer = {
  PARENT: [exports.genericTank],
  LABEL: "Bouncer",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [0, 0, 1, 0, 0, 180, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.bounce]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [0, 0, 1, 0, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.bounce]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [2, 8, 1, 8, 0, 150, 0],
      TYPE: [{ COLOR: 6 }]
    },
    {
      POSITION: [2, 8, 1, 8, 0, 210, 0],
      TYPE: [{ COLOR: 6 }]
    },
    {
      POSITION: [2, 8, 1, 8, 0, 0, 0],
      TYPE: [{ COLOR: 6 }]
    },
    {
      POSITION: [2, 8, 1, 12, 0, 150, 0],
      TYPE: [{ COLOR: 6 }]
    },
    {
      POSITION: [2, 8, 1, 12, 0, 210, 0],
      TYPE: [{ COLOR: 6 }]
    },
    {
      POSITION: [2, 8, 1, 12, 0, 0, 0],
      TYPE: [{ COLOR: 6 }]
    }
  ]
};
exports.eagle = {
  PARENT: [exports.genericTank],
  LABEL: "Eagle",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.booster1 = {
  PARENT: [exports.genericTank],
  LABEL: "speed Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [11, 9, 1, 0, -1, 135, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [11, 9, 1, 0, 1, 225, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [11, 9, 1, 0, 0, 145, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [11, 9, 1, 0, 0, 215, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    
  ]
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
],
};
exports.speeder = {
  PARENT: [exports.genericTank],
  LABEL: "Speeder",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 2, 0, 1, 150, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 2, 0, 1, -150, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 2, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    }
  ]
};
(exports.whirler = makeAuto(exports.fighter, "Whirler")),
  (exports.bighter = {
    PARENT: [exports.genericTank],
    LABEL: "Bighter",
    BODY: {
      DENSITY: base.DENSITY * 0.6
    },
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  });
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.bombarder = {
  PARENT: [exports.genericTank],
  LABEL: "Bombadier",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 130, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 130, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.tri, g.mach]),
        TYPE: exports.trap,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 230, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 230, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.tri, g.mach]),
        TYPE: exports.trap,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.auto2 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto2gun
    }
  ]
};
exports.fact = {
  PARENT: [exports.genericTank],
  LABEL: "Factory-gunner",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.factor = {
  PARENT: [exports.genericTank],
  LABEL: "Factory-fighter",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion1,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.zeppelin2 = {
  PARENT: [exports.genericTank],
  LABEL: "Zeppelin-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.zeppelin
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.zeppelin
    }
  ]
};
exports.giga2 = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.giga3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.giga3gun
    }
  ]
};
exports.clicker2 = {
  PARENT: [exports.genericTank],
  LABEL: "Clicker-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.clicker3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.clicker3gun
    }
  ]
};
exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};
exports.autosmap = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-sniper",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.sniper
    }
  ]
};
exports.autoy = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-machine",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.machine
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.machine
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.machine
    }
  ]
};
exports.nine = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-single",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.single
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.single
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.single
    }
  ]
};
exports.eight = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-trapper",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.stream
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.stream
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.stream
    }
  ]
};
exports.seven = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-gigerr",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun
    }
  ]
};
exports.test999 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 5,
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 35, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, -35, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 108, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, -108, 190, 0],
      TYPE: exports.auto5gun
    }
  ]
};
exports.auto90 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.hiveshooter12
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.hiveshooter12
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.hiveshooter12
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.hiveshooter12
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.hiveshooter12
    }
  ]
};
exports.vovava = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-6",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.gunner
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.gunner
    }
  ]
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun
    }
  ]
};
exports.tritrap = {
  LABEL: "",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun
    }
  ]
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun
    }
  ]
};
exports.trapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autotrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-Trapper",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [
        exports.autoTurret,
        { CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true }
      ]
    }
  ]
};
exports.tritrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Trapper",
  DANGER: 6,
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.tritrapperers = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Trapperes",
  DANGER: 6,
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 9, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [1, 9, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 9, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [1, 9, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 9, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [1, 9, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.bitweak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.tribuilder = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Builder",
  DANGER: 6,
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.guntrap = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Snipe Guard",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.tribuildgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.bitweak]),
        TYPE: exports.block
      }
    }
  ]
};
exports.tribuild = {
  LABEL: "Architect",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tribuildgun
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tribuildgun
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tribuildgun
    }
  ]
};
exports.hexabuilder = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa-Builder",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [18, 12, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.landmineBody = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.landmine = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  //  INVISIBLE: [0.06, 0.01],
  ALPHA: 0.00001,
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.landmineBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.stalker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Stalker",
  ALPHA: 0.00001,
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.35
  },
  // INVISIBLE: [0.08, 0.03],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.manager = {
  PARENT: [exports.genericTank],
  LABEL: "Manager",
  ALPHA: 0.00001,
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.1
  },
  //INVISIBLE: [0.08, 0.03],
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.managers = {
  PARENT: [exports.genericTank],
  LABEL: "Managers",
  ALPHA: 0.00001,
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.1
  },
  //INVISIBLE: [0.08, 0.03],
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [4, 16, 1.2, 8, 0, 0, 5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.lilfactauto = makeAuto(exports.lilfact, "Auto-Spawner");
exports.twintrap = {
  PARENT: [exports.genericTank],
  LABEL: "Bulwark",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.twin,
          g.bitmorespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 5.5, 190, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 5.5, 190, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.twin,
          g.bitmorespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, -5.5, 170, 0.5]
    },
    {
      POSITION: [4, 8, 1.7, 13, -5.5, 170, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.hurricane = {
  PARENT: [exports.genericTank],
  LABEL: "Cyclone",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.submachine = {
  PARENT: [exports.genericTank],
  LABEL: "Sub-Machine",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 10, 1, 20, 0, 0, 0]
    }
  ]
};
exports.overdoer = {
  PARENT: [exports.genericTank],
  LABEL: "Overdoer",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [30, 2, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [12, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 10, 1, 20, 0, 0, 0]
    }
  ]
};
exports.vulcan = {
  PARENT: [exports.genericTank],
  LABEL: "Vulcan",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.vulc]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 14, 1, 20, 0, 0, 0]
    }
  ]
};
exports.spinmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morereload,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morereload,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.spinner = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Twister",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 13, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 14, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.morerange,
          g.threequartersrof
        ]),
        TYPE: exports.spinmissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.newskimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 12, 1.4, 16, 0, 0, 0]
    },
    {
      POSITION: [17, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.morerange,
          g.threequartersrof
        ]),
        TYPE: exports.spinmissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.rocketeer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Rocketeer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 14, 1.4, 16, 0, 0, 0]
    },
    {
      POSITION: [17, 13, -1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.morerange,
          g.threequartersrof
        ]),
        TYPE: exports.rocket,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.droneAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fifthreload,
          g.overdrive
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autodrone = makeAuto(exports.drone, "Auto-Drone", {
  type: exports.auto3gun,
  size: 9
});
exports.overdrivesquare = {
  PARENT: [exports.genericTank],
  LABEL: "Drive Square",
  SHAPE: 4,
  SIZE: 10
};
exports.overdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrive",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.overdrive]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.overdrive]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.overdrivesquare
    }
  ]
};
exports.overseer2 = {
  PARENT: [exports.genericTank],
  LABEL: "The SUPERSEER",
  DANGER: 30,
  STAT_NAMES: statnames.drone,
  ACCELERATION: 0.75,
  SPEED: 0.9,
  FOV: 3,
  MAX_CHILDREN: 300,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.trapperang = {
  PARENT: [exports.genericTank],
  DANGER: 3.5,
  LABEL: "Trapperang",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0]
    },
    {
      POSITION: [6, 10, -1.2, 7, 0, 0, 0]
    },
    {
      POSITION: [12, 15, 1, 0, 0, 0, 0],
      //    }, {
      POSITION: [2, 10, 2.6, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.trapperangrang
      }
    }
  ]
};
exports.harmer = {
  PARENT: [exports.genericTank],
  DANGER: 3.5,
  LABEL: "Harmer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0]
    },
    {
      POSITION: [6, 10, -1.2, 7, 0, 0, 0]
    },
    {
      POSITION: [12, 15, 1, 0, 0, 0, 0],
      //    }, {
      POSITION: [2, 10, 2.6, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.op]),
        TYPE: exports.trapperangrang
      }
    }
  ]
};
exports.maleficitor = {
  PARENT: [exports.genericTank],
  LABEL: "Maleficitor",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.male]),
        TYPE: [
          exports.sunchip,
          {
            //INVISIBLE: [0.06, 0.03],
          }
        ],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.bosses = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.xkxbosses = {
  PARENT: [exports.genericTank],
  LABEL: "X-K-XBosses",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.xkxbossese = {
  PARENT: [exports.genericTank],
  LABEL: "X-K-XBosses",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.hopa = {
  PARENT: [exports.genericTank],
  LABEL: "sentryes",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.customboba = {
  PARENT: [exports.genericTank],
  LABEL: "custom_tanks",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.bosses2 = {
  PARENT: [exports.genericTank],
  LABEL: "Page 2",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.misc = {
  PARENT: [exports.genericTank],
  LABEL: "Misc.",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.bt1 = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester A",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.bt2 = {
  PARENT: [exports.genericTank],
  LABEL: "Beta Tester B",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 1000, 0, 0, 0, 0],

  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.automazegun = {
  PARENT: [exports.genericTank],
  LABEL: "k",
  BODY: {
    FOV: 5
  },
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0]
    }
  ]
};
exports.automaze = {
  PARENT: [exports.mazewall],
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [
        exports.automazegun,
        {
          INDEPENDENT: true
        }
      ]
    }
  ]
};
exports.dominator = {
  PARENT: [exports.genericTank],
  LABEL: "Dominator",
  // TYPE: 'fixed',
  DANGER: 10,
  SIZE: 40,
  SKILL: skillSet({
    //   rld: 1,
    dam: 1,
    pen: 1,
    str: 1
    //spd: 1,
  }),
  LEVEL: -1,
  BODY: {
    RESIST: 100,
    SPEED: 0,
    HEALTH: 250,
    DAMAGE: 10,
    PENETRATION: 0.5,
    PUSHABILITY: 0,
    FOV: 1.5,
    HETERO: 0,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN * 0.75
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    STRAFE: true
  },
  DISPLAY_NAME: true,
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],
  VALUE: 0,
  CAN_BE_ON_LEADERBOARD: false,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
  BROADCAST_MESSAGE: "A Dominator has changed teams!"
};
exports.dominator2 = {
  PARENT: [exports.genericTank],
  LABEL: "Dominator",
  // TYPE: 'fixed',
  DANGER: 10,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1
  }),
  LEVEL: 5000000,
  BODY: {
    RESIST: 100,
    // SPEED: 0,
    HEALTH: 250,
    DAMAGE: 10,
    PENETRATION: 0.5,
    PUSHABILITY: 0,
    FOV: 1.5,
    HETERO: 0,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN * 0.75
  },
  TURRETS: [
    {
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ]
};
exports.gunnerDominator = {
  LABEL: "Gunner Dominator",
  PARENT: [exports.dominator],
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.destroyerDominator = {
  LABEL: "Destroyer Dominator",
  PARENT: [exports.dominator],
  GUNS: [
    {
      POSITION: [15.85, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.trapDominatork = {
  LABEL: "Trapper Dominator",
  PARENT: [exports.dominator],

  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1
  }),
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [12, 5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, -90, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 45, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, -45, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 135, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, -135, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    }
  ]
};
exports.gunnerDominator2 = {
  LABEL: "Gunner Dominator",
  PARENT: [exports.dominator2],
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.destroyerDominator2 = {
  LABEL: "Destroyer Dominator",
  PARENT: [exports.dominator2],
  GUNS: [
    {
      POSITION: [15.85, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.streamDominator5 = {
  LABEL: "Streamliner Dominator",
  PARENT: [exports.dominator2],
  GUNS: [
    {
      POSITION: [25, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.destroyDominator1
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8.5, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.destroyDominator1
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8.5, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.destroyDominator1
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8.5, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.destroyDominator1
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8.5, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.stream,
          g.destroyDominator1
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.trapDominator2 = {
  LABEL: "Trapper Dominator",
  PARENT: [exports.dominator2],

  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1
  }),
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [12, 5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, -90, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 45, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, -45, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, 135, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 5, 1, 0, 0, -135, 0]
    },
    {
      POSITION: [3, 5, 1.7, 12, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    }
  ]
};
exports.lancer = {
  PARENT: [exports.genericTank],
  LABEL: "Lancer",
  DANGER: 5,
  STAT_NAMES: statnames.lance,
  BODY: {
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 1.5,
    DAMAGE: 3
  },
  GUNS: [
    {
      POSITION: [8, 4, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [25, 0.3, -55, 0, 0, 0, 0]
    }
  ]
};
exports.lancer2 = {
  PARENT: [exports.genericTank],
  LABEL: "Shielder",
  DANGER: 5,
  STAT_NAMES: statnames.lance,
  BODY: {
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 1.5,
    DAMAGE: 3,
    SHIELD: base.SHIELD * 2.5
  },
  GUNS: [
    {
      POSITION: [8, 4, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [25, 0.3, -55, 0, 0, 0, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [4, 0, 0, 0, 360, 0],
      TYPE: exports.mod_ring
    }
  ]
};
exports.basicminionhive = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.lancerminion = {
  PARENT: [exports.genericTank],
  LABEL: "Lancer",
  DANGER: 5,
  STAT_NAMES: statnames.lance,
  BODY: {
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 1.5,
    DAMAGE: 3
  },
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
    "mapTargetToGoal"
  ],
  GUNS: [
    {
      POSITION: [8, 4, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [25, 0.3, -55, 0, 0, 0, 0]
    }
  ]
};
exports.lancemind = {
  PARENT: [exports.genericTank],
  LABEL: "Lance-Mind",
  DANGER: 5,
  STAT_NAMES: statnames.lance,
  BODY: {
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 1.5,
    DAMAGE: 3
  },

  GUNS: [
    {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: [
          exports.lancerminion,
          {
            SIZE: 100
          }
        ],

        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [8, 4, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [8, 4, 1.4, 8.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lance]),
        TYPE: [
          exports.bullet,
          {
            LABEL: "Lance",
            ALPHA: 0
          }
        ]
      }
    },
    {
      POSITION: [25, 0.3, -55, 0, 0, 0, 0]
    }
  ]
};
exports.machhive = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.psyhive = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.twinhive = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hivemind = {
  PARENT: [exports.genericTank],
  LABEL: "Hivemind",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: [
          exports.basicminionhive,
          {
            SIZE: 100
          }
        ],

        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.madman = {
  PARENT: [exports.genericTank],
  LABEL: "Madman",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.biggerhive]),
        TYPE: exports.basicminionhive,

        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.megamind = {
  PARENT: [exports.genericTank],
  LABEL: "Megamind",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: exports.basicminionhive,

        MAX_CHILDREN: 4
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.machhivemind = {
  PARENT: [exports.genericTank],
  LABEL: "Machinemind",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: [
          exports.machhive,
          {
            SIZE: 100
          }
        ],

        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.psycho = {
  PARENT: [exports.genericTank],
  LABEL: "Psycosis",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: exports.psyhive,

        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 5,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.twinmind = {
  PARENT: [exports.genericTank],
  LABEL: "Twinmind",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [1, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.bighive]),
        TYPE: exports.twinhive,

        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hybridbasic = makeHybrid(exports.basic, "Basebrid");
exports.heavy2 = {
  PARENT: [exports.genericTank],
  LABEL: "Heavy-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.heavy3gun
    }
  ]
};
exports.heavy2a = makeAuto(exports.heavy2, "Auto-Heavy-2", {
  type: exports.heavy3gun
});
exports.rapid2 = {
  PARENT: [exports.genericTank],
  LABEL: "Rapid-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto4gun
    }
  ]
};
exports.auto2auto2 = makeAuto(exports.auto2, "Auto-Auto-2");
exports.auto3auto3 = makeAuto(exports.auto3, "Auto-Auto-3");
exports.auto5auto5 = makeAuto(exports.auto5, "Auto-Auto-5");
exports.rapid2a = makeAuto(exports.rapid2, "Auto-Rapid-2", {
  type: exports.auto4gun
});
exports.sniper2 = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.sniper4 = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper-4",
  DANGER: 7,
  BODY: {
    SPEED: 2.3
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [7, 8, 0, 45, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, 135, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, -135, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, -45, 360, 1],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.swivel2 = {
  PARENT: [exports.genericTank],
  LABEL: "Swivel-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [9.5, 6.5, 0, 0, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [9.5, 6.5, 0, 180, 360, 1],
      TYPE: exports.auto2gun
    }
  ]
};
exports.axis4 = {
  PARENT: [exports.genericTank],
  LABEL: "Axis-4",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [9.5, 6.5, 0, 0, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [9.5, 6.5, 0, 180, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [9.5, 6.5, 0, 90, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [9.5, 6.5, 0, -90, 360, 1],
      TYPE: exports.auto2gun
    }
  ]
};
exports.stak6 = {
  PARENT: [exports.genericTank],
  LABEL: "Stack-6",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [7, 6.5, 0, 0, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [7, 6.5, 0, 180, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [7, 6.5, 0, 90, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [7, 6.5, 0, -90, 360, 1],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto2gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto2gun
    }
  ]
};
exports.override = {
  PARENT: [exports.genericTank],
  LABEL: "Override",
  MAX_CHILDREN: 12,
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.droneoverride,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.mothershipmini = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",

  STAT_NAMES: statnames.drone,

  DANGER: 30,
  MAX_CHILDREN: 32,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 22.5, 0.1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 45, 0.2],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 67.5, 0.3],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 90, 0.4],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 112.5, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 135, 0.6],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 157.5, 0.7],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 180, 0.8],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 202.5, 0.9],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 225, 1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 247.5, 1.1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 270, 1.2],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 292.5, 1.3],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 315, 1.4],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [12, 4, 1, 0, 0, 337.5, 1.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.satelite = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Satelite",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 10, 1.8, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    },
    {
      POSITION: [17, 10, 1.8, 0, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        TYPE: exports.drone
      }
    }
  ]
};
exports.overworker = {
  PARENT: [exports.genericTank],
  LABEL: "Overworker",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.overdrivesquare
    }
  ]
};
exports.spaceship = {
  PARENT: [exports.genericTank],
  LABEL: "Spaceship",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  SHAPE: 8,
  SIZE: 28,

  MAX_CHILDREN: 32,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.spaceship1 = {
  PARENT: [exports.genericTank],
  LABEL: "Custom Spaceship",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  SHAPE: 8,
  SIZE: 28,

  MAX_CHILDREN: 32,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 0, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 0, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 1.2, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 1.2, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 1.2, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8, 1.2, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.spaceshiplite = {
  PARENT: [exports.genericTank],
  LABEL: "Spaceship Lite",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  SHAPE: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
    HEALTH: base.HEALTH * 1.2,
    RELOAD: base.RELOAD * 9
  },

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.2, 8, 0, 0, 0.123],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 60, 0.234],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.adrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 120, 0.345],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -60, 0.456],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.adrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -120, 0.567],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 180, 0.678],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.adrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.PK1 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-1",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 32,

  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.puntgun
    }
  ]
};
exports.pkminion = {
  PARENT: [exports.minion],
  LABEL: "Mega Minion",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 50,

  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.rindeeyrturret
    }
  ]
};
exports.pkminionene = {
  PARENT: [exports.minion],
  LABEL: "Mega Minion",
  SHAPE: 3,
  COLOR: 14,
  SIZE: 50,

  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.auto3gun
    }
  ]
};
exports.test = {
  PARENT: [exports.minion],
  LABEL: "tasty",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 50,

  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.punter
    }
  ]
};
exports.PK2 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-2",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 45,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.punter
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.PK3 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-3",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 59,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.vulcan
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.PK4 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-4",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 75,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 1
  },
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.trianglepuntgun
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 0, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 72, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 144, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 216, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 288, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.PK5 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-5",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 100,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 0.5
  },
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.tkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.vulcan
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 0, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 72, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 144, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 216, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 288, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};

exports.test3 = {
  PARENT: [exports.genericTank],
  LABEL: "Spinning dial",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 7, 0, -90, 360, 0],
      TYPE: [
        exports.machineAutoTurret,
        {
          COLOR: 16,
          CONTROLLERS: ["reversespin"]
        }
      ]
    },
    {
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: [
        exports.genericTank,
        {
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [11, 7, 0, 90, 360, 0],
      TYPE: [
        exports.machineAutoTurret,
        {
          COLOR: 16,
          CONTROLLERS: ["reversespin"]
        }
      ]
    }
  ]
};
exports.TKminion = {
  PARENT: [exports.minion],
  SHAPE: 3,
  LABEL: "TK-1",
  COLOR: 2,
  SIZE: 25,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.test3
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.test3
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.test3
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.ttminione = {
  PARENT: [exports.minion],
  SHAPE: 4,
  LABEL: "TK-1",
  COLOR: 2,
  SIZE: 30,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 7, 0, 45, 190, 1],
      TYPE: exports.assassin
    },
    {
      POSITION: [6, 7, 0, 135, 190, 1],
      TYPE: exports.assassin
    },
    {
      POSITION: [6, 7, 0, 225, 190, 1],
      TYPE: exports.assassin
    },
    {
      POSITION: [6, 7, 0, 315, 190, 1],
      TYPE: exports.assassin
    }
  ]
};
exports.ttminionee = {
  PARENT: [exports.minion],
  SHAPE: 4,
  LABEL: "TK-1",
  COLOR: 2,
  SIZE: 30,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 6, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, -4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, 4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, -4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 6, 0.6, 7, -4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 7, 0, 45, 190, 1],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 7, 0, 135, 190, 1],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 7, 0, 225, 190, 1],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 7, 0, 315, 190, 1],
      TYPE: exports.auto3gun
    }
  ]
};
exports.tkfact = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.TKminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.TK1 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "TK-1",
  COLOR: 2,
  SIZE: 25,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.test3
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.test3
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.test3
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.TK2 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "TK-2 ",
  COLOR: 2,
  SIZE: 25,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.lilfact
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.lilfact
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.lilfact
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.shotgun2
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.shotgun2
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.shotgun2
    },
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.puntgun
    }
  ]
};
exports.TK3 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "TK-3",
  COLOR: 2,
  SIZE: 50,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
    FOV: 1.3
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.lilfact
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.lilfact
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.lilfact
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, 60, 360, 1],
      TYPE: exports.pelter
    },
    {
      POSITION: [7, 8, 0, -60, 360, 1],
      TYPE: exports.pelter
    },
    {
      POSITION: [7, 8, 0, 180, 360, 1],
      TYPE: exports.pelter
    },
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.puntgun
    }
  ]
};
exports.TK4 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "TK-4",
  COLOR: 2,
  SIZE: 75,
  FACING_TYPE: "autospin",
  BODY: {
    //SPEED: 0.5,
    FOV: 1.3
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, 60, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, -60, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, 180, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.vulcan
    }
  ]
};
exports.EK1Body = {
  LABEL: "",
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.EK1 = {
  PARENT: [exports.genericTank],
  LABEL: "EK-1",
  DANGER: 7,
  //   SHAPE: 6,
  COLOR: 6,
  SIZE: 32,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    FOV: base.FOV * 2,
    SPEED: base.SPEED * 0.2,
    HEALTH: base.HEALTH * 40,
    SHIELD: base.SHIELD * 10,
    DENSITY: base.DENSITY * 2.1
  },

  //() FACING_TYPE: 'autospin',
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 10, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [8, 10, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [8, 10, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [8, 10, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [8, 10, 0, 240, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [8, 10, 0, 300, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.EK1Body
    }
  ]
};
exports.EKh = {
  PARENT: [exports.genericTank],
  LABEL: "EK-?",
  DANGER: 7,
  //   SHAPE: 6,
  COLOR: 6,
  SIZE: 32,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    FOV: base.FOV * 2,
    SPEED: base.SPEED * 0.2,
    HEALTH: base.HEALTH * 40,
    SHIELD: base.SHIELD * 10,
    DENSITY: base.DENSITY * 2.1
  },

  //() FACING_TYPE: 'autospin',
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 10, 0, 0, 190, 0],
      TYPE: exports.EK1
    },
    {
      POSITION: [8, 10, 0, 60, 190, 0],
      TYPE: exports.EK1
    },
    {
      POSITION: [8, 10, 0, 120, 190, 0],
      TYPE: exports.EK1
    },
    {
      POSITION: [8, 10, 0, 180, 190, 0],
      TYPE: exports.EK1
    },
    {
      POSITION: [8, 10, 0, 240, 190, 0],
      TYPE: exports.EK1
    },
    {
      POSITION: [8, 10, 0, 300, 190, 0],
      TYPE: exports.EK1
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.EK1Body
    }
  ]
};
exports.EK2 = {
  PARENT: [exports.genericTank],
  LABEL: "EK-2",
  DANGER: 7,
  //   SHAPE: 6,
  COLOR: 6,
  SIZE: 32,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    FOV: base.FOV * 2,
    SPEED: base.SPEED * 0.2,
    HEALTH: base.HEALTH * 40,
    SHIELD: base.SHIELD * 10,
    DENSITY: base.DENSITY * 2.1
  },

  //() FACING_TYPE: 'autospin',
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 10, 0, 0, 190, 0],
      TYPE: exports.gunnerE
    },
    {
      POSITION: [3, 12, 4, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [3, 12, -4, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 10, 0, 120, 190, 0],
      TYPE: exports.gunnerE
    },
    {
      POSITION: [3, 12, 4, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [3, 12, -4, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 10, 0, 240, 190, 0],
      TYPE: exports.gunnerE
    },
    {
      POSITION: [3, 12, 4, 300, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [3, 12, -4, 300, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.auto5gun, { COLOR: 16 }]
    },
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.EK1Body
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 4.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [11, 4.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [11, 4.5, 0.6, 7, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.TK55 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "TK-6",
  COLOR: 2,
  SIZE: 100,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 0.5,
    FOV: 1.5
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.batteryTurret
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.batteryTurret
    },
    {
      POSITION: [7, 8, 0, 60, 360, 1],
      TYPE: exports.submachine
    },
    {
      POSITION: [7, 8, 0, -60, 360, 1],
      TYPE: exports.submachine
    },
    {
      POSITION: [7, 8, 0, 180, 360, 1],
      TYPE: exports.submachine
    },
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.vulcan
    }
  ]
};
exports.TK5 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "TK-5",
  COLOR: 2,
  SIZE: 100,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 0.5,
    FOV: 1.5
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.tkfact
    },
    {
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, -60, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, 60, 360, 1],
      TYPE: exports.submachine
    },
    {
      POSITION: [7, 8, 0, -60, 360, 1],
      TYPE: exports.submachine
    },
    {
      POSITION: [7, 8, 0, 180, 360, 1],
      TYPE: exports.submachine
    },
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.vulcan
    }
  ]
};
exports.medicS = {
  PARENT: [exports.genericTank],
  LABEL: "Medic",
  BODY: {
    FOV: 0.8
  },
  COLOR: 12,
  SHAPE: [
    [0.98, 0.19],
    [0.19, 0.184],
    [0.18, 1.006],
    [-0.2, 1.006],
    [-0.2, 0.2],
    [-0.995, 0.2],
    [-0.995, -0.2],
    [-0.19, -0.205],
    [-0.205, -1],
    [0.216, -1.014],
    [0.2, -0.2],
    [1.006, -0.2]
  ]
  //CONTROLLERS: ['nearestDifferentMaster'],
};
exports.medicS1 = {
  PARENT: [exports.genericTank],
  LABEL: "Medic",
  BODY: {
    FOV: 0.8
  },
  COLOR: 12,
  SHAPE: 4
  //CONTROLLERS: ['nearestDifferentMaster'],
};
exports.medic = {
  PARENT: [exports.genericTank],
  LABEL: "Medic",
  SHAPE: 4,
  COLOR: 6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basicH]),
        TYPE: exports.bullet
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.medicS, { INDEPENDENT: true, COLOR: 12 }]
    }
  ]
};
(exports.twinhybrid = makeHybrid(exports.twin, "Twinbrid")),
  (exports.hybridbasic = makeHybrid(exports.basic, "Basebrid")),
  (exports.batteryboss = {
    FACING_TYPE: "autospin",
    PARENT: [exports.genericTank],
    LABEL: "Ultimate Battery",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    // VALUE: 500000,
    BODY: {
      FOV: 1.3
    },

    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 0, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 60, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 120, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 240, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 300, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 10, 0, 180, 110, 0],
        TYPE: exports.batteryTurret
      },
      {
        POSITION: [5, 0, 0, 0, 360, 1],
        TYPE: exports.batteryTurret
      }
    ]
  });
// UPGRADE PATHS
exports.testbed.UPGRADES_TIER_1 = [
  exports.bt1,
  exports.bosses,
  exports.xkxbosses,
  exports.dominator2,
  exports.misc,
  exports.alphatanks,
  exports.removed,
  exports.basic,
  exports.customboba,
  exports.hopa,
  exports.testbedkinfg,
  exports.testbede,
  exports.testbed1,
  exports.xkxbossese,
  exports.testbed11,
  exports.death,
  exports.awps,
  exports.sas
];
exports.bosses.UPGRADES_TIER_1 = [exports.bosses2];
exports.bosses2.UPGRADES_TIER_1 = [];
exports.alphatanks.UPGRADES_TIER_1 = [];
exports.removed.UPGRADES_TIER_1 = [];
exports.misc.UPGRADES_TIER_1 = [];
exports.xkxbosses.UPGRADES_TIER_1 = [
  exports.PK1,
  exports.TK1,
  exports.batteryboss
];
exports.PK1.UPGRADES_TIER_1 = [exports.PK2];
exports.PK2.UPGRADES_TIER_1 = [exports.PK3];
exports.PK3.UPGRADES_TIER_1 = [exports.PK4];
exports.PK4.UPGRADES_TIER_1 = [exports.PK5];
exports.TK1.UPGRADES_TIER_1 = [exports.TK2];
exports.TK2.UPGRADES_TIER_1 = [exports.TK3];
exports.TK3.UPGRADES_TIER_1 = [exports.TK4];
exports.TK4.UPGRADES_TIER_1 = [exports.TK5];
exports.bt1.UPGRADES_TIER_1 = [
  exports.bt2,
  exports.master,
  exports.hybridmini,
  exports.medic,
  exports.zeppelin,
  exports.gun
];
exports.dominator2.UPGRADES_TIER_1 = [
  exports.trapDominator2,
  exports.destroyerDominator2,
  exports.gunnerDominator2,
  exports.streamDominator5
];

exports.basic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.sniper,
  exports.machine,
  exports.flank,
  exports.director,
  exports.pound,
  exports.trapper,
  exports.auto2,
  exports.pelter,
  exports.lancer,
  exports.basebrid,
  exports.single,
  exports.testbed,
  exports.spaceshiplite
];
exports.basic.UPGRADES_TIER_3 = [exports.hivemind];
exports.basic.UPGRADES_TIER_4 = [exports.switcheroo, exports.hiveshootere];
exports.basebrid.UPGRADES_TIER_2 = [exports.twinhybrid];
exports.switcheroo.UPGRADES_TIER_3 = [exports.switcherootw];
exports.switcherootw.UPGRADES_TIER_3 = [exports.switcherooma];
exports.switcherooma.UPGRADES_TIER_3 = [exports.switcheroosn];
exports.switcheroosn.UPGRADES_TIER_3 = [exports.switcheroofl];
exports.switcheroofl.UPGRADES_TIER_3 = [exports.switcheroo];
exports.twinhybrid.UPGRADES_TIER_3 = [exports.benthybrid];
exports.basic.UPGRADES_TIER_2 = [exports.smash];
exports.smash.UPGRADES_TIER_3 = [
  exports.megasmash,
  exports.spike,
  exports.autosmash,
  exports.landmine,
  exports.lancemind,
  exports.smashhive
];
exports.spike.UPGRADES_TIER_4 = [exports.weirdspike]; //k+k=K;
exports.lancer.UPGRADES_TIER_2 = [exports.lancemind, exports.lancer2];
exports.hivemind.UPGRADES_TIER_3 = [
  exports.megamind,
  exports.madman,
  exports.psycho,
  exports.twinmind,
  exports.machhivemind,
  exports.lancemind,
  exports.smashhive,
  exports.decoy
];
exports.pelter.UPGRADES_TIER_2 = [
  exports.puntgun,
  exports.submachine,
  exports.peltertrapper,
  exports.gunner,
  exports.tripelter
];
exports.puntgun.UPGRADES_TIER_2 = [exports.punter, exports.tripuntgun];
exports.tripelter.UPGRADES_TIER_2 = [exports.hexapelter, exports.tripuntgun];
exports.tripuntgun.UPGRADES_TIER_3 = [exports.trianglepuntgun];
exports.submachine.UPGRADES_TIER_2 = [exports.vulcan, exports.punter];

exports.twin.UPGRADES_TIER_2 = [
  exports.double,
  exports.bent,
  exports.gunner,
  exports.hexa,
  exports.twinhybrid,
  exports.triplee
];
exports.twin.UPGRADES_TIER_3 = [
  exports.dual,
  exports.twintrap,
  exports.musket,
  exports.twinmind
];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.autodouble,
  exports.bentdouble
];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.nailgun,
  exports.auto4,
  exports.machinegunner,
  exports.guntrap,
  exports.hurricane,
  exports.overgunner,
  exports.battery,
  exports.gunne1
];

exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.hunter,
  exports.mini,
  exports.rifle
];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack];
exports.assassin.UPGRADES_TIER_3 = [
  exports.ranger,
  exports.falcon,
  exports.stalker,
  exports.autoass
];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.sidewind,
  exports.dual
];
exports.rifle.UPGRADES_TIER_3 = [exports.musket];

exports.auto2.UPGRADES_TIER_2 = [
  exports.auto3,
  exports.heavy2,
  exports.rapid2,
  exports.sniper2,
  exports.auto2auto2,
  exports.swivel2
];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.heavy3,
  exports.auto4,
  /*exports.sub3,*/ exports.tritrap,
  exports.sniper3 /*exports.hunter3*/
];
exports.rapid2.UPGRADES_TIER_3 = [exports.auto4, exports.rapid2a];
exports.auto2auto2.UPGRADES_TIER_3 = [
  exports.auto3auto3,
  exports.rapid2a,
  exports.heavy2a
];
exports.auto3auto3.UPGRADES_TIER_3 = [exports.auto5auto5];
exports.heavy2.UPGRADES_TIER_3 = [exports.heavy3, exports.heavy2a];
exports.heavy3.UPGRADES_TIER_3 = [];
//exports.auto5.UPGRADES_TIER_3 = [exports.auto25];
exports.swivel2.UPGRADES_TIER_3 = [exports.axis4];
exports.sniper2.UPGRADES_TIER_3 = [exports.sniper3];
//exports.sniper3.UPGRADES_TIER_3 = [exports.sniper4];
exports.axis4.UPGRADES_TIER_3 = [exports.stak6, exports.sniper4];

exports.machine.UPGRADES_TIER_2 = [
  exports.artillery,
  exports.mini,
  exports.gunner
];
exports.machine.UPGRADES_TIER_3 = [exports.spray, exports.machhivemind];
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.spread,
  exports.newskimmer,
  exports.spinner,
  exports.rocketeer,
  exports.skimmer1,
  exports.customtank1
];
exports.mini.UPGRADES_TIER_3 = [
  exports.stream,
  exports.nailgun,
  exports.hybridmini,
  exports.minitrap,
  exports.machinestream
];
exports.minitrap.UPGRADES_TIER_3 = [exports.blockade, exports.trapliner];
exports.pound.UPGRADES_TIER_2 = [
  exports.destroy,
  exports.builder,
  exports.artillery,
  exports.launcher
];
exports.pound.UPGRADES_TIER_3 = [exports.shotgun2, exports.eagle];
exports.destroy.UPGRADES_TIER_3 = [
  exports.conq,
  exports.anni,
  exports.hybrid,
  exports.construct,
  exports.megatrapper,
  exports.hiveshooter
];

exports.launcher.UPGRADES_TIER_3 = [
  exports.newskimmer,
  exports.spinner,
  exports.rocketeer
];

exports.hiveshooter.UPGRADES_TIER_2 = [exports.hiveshootere];

exports.hiveshootere.UPGRADES_TIER_2 = [exports.snipere, exports.snipere1];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.flanktrap,
  exports.tritrapper,
  exports.tripelter
];
exports.flank.UPGRADES_TIER_3 = [exports.tribuild];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.falcon,
  exports.bomber,
  exports.autotri,
  exports.brutalizer,
  exports.eagle
];
exports.fighter.UPGRADES_TIER_3 = [exports.bighter, exports.whirler];
exports.hexa.UPGRADES_TIER_3 = [
  exports.octo,
  exports.hurricane,
  exports.hexatrap
];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.heavy3,
  exports.auto4,
  exports.banshee
];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bushwhack,
  exports.guntrap,
  exports.bomber,
  exports.conq,
  exports.twintrap
];
exports.booster.UPGRADES_TIER_3 = [
  exports.booster1,
];




exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer,
  exports.lilfact,
  exports.spaceshiplite
];
exports.director.UPGRADES_TIER_3 = [
  exports.manager,
  exports.psycho,
  exports.override
];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.overtrap,
  exports.overgunner,
  exports.banshee,
  exports.autoover,
  exports.overdrive
];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.maleficitor];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.fortress
];
exports.battleship.UPGRADES_TIER_3 = [exports.battleship1];
exports.lilfact.UPGRADES_TIER_3 = [exports.factory, exports.lilfactauto];
exports.necromancer.UPGRADES_TIER_3 = [
  exports.necromonster,
  exports.necromancere
];
exports.spaceshiplite.UPGRADES_TIER_1 = [
  exports.spaceship,
  exports.mothershipmini,
  exports.spaceship1
];
exports.overlord.UPGRADES_TIER_3 = [
  exports.satelite,
  exports.overworker,
  exports.mothershipmini,
  exports.testtank676
];
exports.trapper.UPGRADES_TIER_2 = [
  exports.builder,
  exports.tritrapper,
  exports.flanktrap,
  exports.autotrapper,
  exports.trapperang,
  exports.buildergune
];
exports.trapper.UPGRADES_TIER_3 = [
  exports.minitrap,
  exports.overtrap,
  exports.megatrapper,
  exports.buildergunee
];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer,
  exports.tribuild,
  exports.conq
];
exports.tritrapper.UPGRADES_TIER_3 = [
  exports.fortress,
  exports.hexatrap,
  exports.heptatrap,
  exports.tribuild,
  exports.tribuilder
];
exports.tribuilder.UPGRADES_TIER_3 = [exports.hexabuilder];
exports.trapperang.UPGRADES_TIER_3 = [exports.boomer];
exports.bomber.UPGRADES_TIER_3 = [exports.bombarder];
exports.anni.UPGRADES_TIER_3 = [exports.congruator];
exports.preda.UPGRADES_TIER_3 = [
  exports.congruator,
  exports.spreda,
  exports.xpreda
];

exports.gun2.UPGRADES_TIER_1 = [exports.gun4];
exports.zeppelin.UPGRADES_TIER_2 = [exports.zeppelin2];

/*exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash];
            
    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
        exports.triple.UPGRADES_TIER_3 = [exports.quint];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
            , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];
        
    exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer, exports.skimmer1];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo];
        exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/

// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 5,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 2,
    SPEED: base.SPEED * 0.5
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.sentrye = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 26,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 2,
    SPEED: base.SPEED * 0.5
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.5
  },
  INDEPENDENT: true,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    }
  ]
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
  type: exports.auto3gun,
  size: 19
});
exports.sentryspray = makeAuto(exports.sentry, "Sentry", {
  type: exports.spray,
  size: 19
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
  type: exports.trapturret,
  size: 19
});

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!"
};
exports.minibosse = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  LEVEL: 45,
  AI: { NO_LEAD: true },
  FACING_TYPE: "looseToTarget",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "Boss has been impostor!"
};
/*/exports.giant = {
    PARENT: [exports.genericTank],
    TYPE: 'Giant',
    DANGER: 20,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 450,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'none',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A Giant Has Left!',
};/*/
exports.aquamarine = {
  PARENT: [exports.miniboss],
  FACING_TYPE: "locksFacing",
  SIZE: 30,
  COLOR: 0,
  VALUE: 500000,
  SHAPE:
    "m -0.74832,-0.74832 a 1.05832,1.05832 0 0 1 1.15332,-0.229412 1.05832,1.05832 0 0 1 0.65332,0.97776 1.05832,1.05832 0 0 1 -0.65332,0.97776 1.05832,1.05832 0 0 1 -1.15332,-0.229412 l 0.74832,-0.74832 z",
  LABEL: "Aquamarine",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  BODY: {
    FOV: 1.3,
    SKILL: skillSet({
      atk: 2,
      hlt: 2,
      shi: 2,
      rgn: 2,
      mob: 2
    }),
    HEALTH: base.HEALTH * 7.5,
    SHIELD: base.SHIELD * 6.2,
    DENSITY: base.DENSITY * 4,
    SPEED: base.SPEED * 0.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT       X       Y     ANGLE   DELAY */
      POSITION: [10.763, 2.153, 5.298, -2.204, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.doublereload,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.aquadrone,
        MAX_CHILDREN: 15
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 7, 0, 0, 360, 1],
      TYPE: [exports.trapTurret, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, 4, 60, 360, 1],
      TYPE: [exports.trapTurret, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, -4, -60, 360, 1],
      TYPE: [exports.trapTurret, { INDEPENDENT: true, COLOR: 16 }]
    }
  ]
};
exports.arrasian = {
  PARENT: [exports.miniboss],
  DANGER: 5,
  SHAPE: [
    [0.5, 0.5],
    [1, -1],
    [-1, -1],
    [-1, 1],
    [1, 1],
    [0.5, 0.5],
    [0.5, 0.5],
    [1, 1],
    [1, -1],
    [0.5, 0.5],
    [-0.5, 0.5],
    [-1, 1],
    [-0.5, 0.5],
    [-0.5, -0.5],
    [0.5, -0.5]
  ],
  COLOR: 13,
  SIZE: 60,
  LABEL: "Arrasian",
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 0.9,
    DENSITY: 0.1,
    FOV: base.FOV * 2
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 10, 2.5, 90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 2.5, -90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 2.5, 180, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 2.5, 0, 160, 0],
      TYPE: exports.autoTurret,

      POSITION: [3, 10, -2.5, 90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -2.5, -90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -2.5, 180, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -2.5, 0, 160, 0],
      TYPE: exports.autoTurret,

      POSITION: [3, 10, -6, 90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -6, -90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -6, 180, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -6, 0, 160, 0],
      TYPE: exports.autoTurret,

      POSITION: [3, 10, 6, 90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 6, -90, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 6, 180, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 6, 0, 160, 0],
      TYPE: exports.autoTurret,

      POSITION: [3, 10, -6, 0, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, -2.5, -0, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 2.5, 0, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 10, 6, 0, 160, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [5, 9, 0, 45, 360, 1],
      TYPE: [
        exports.pound,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [5, 9, 0, 135, 360, 1],
      TYPE: [
        exports.pound,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [5, 9, 0, 225, 360, 1],
      TYPE: [
        exports.pound,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [5, 9, 0, 315, 360, 1],
      TYPE: [
        exports.pound,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 45, 360, 0],
      TYPE: [
        exports.stream,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 135, 360, 0],
      TYPE: [
        exports.stream,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 225, 360, 0],
      TYPE: [
        exports.stream,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 315, 360, 0],
      TYPE: [
        exports.stream,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    }
  ]
};
exports.modearenacloser = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  NAME: "Arena Closer",
  //TYPE: 'miniboss',
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 1000,
    HEALTH: 1000,
    DAMAGE: 1000,
    DENSITY: 2000,
    FOV: 2
  },
  SIZE: 25,
  VALUE: 0,
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  HITS_OWN_TYPE: "hard",
  CAN_BE_ON_LEADERBOARD: false,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
  GUNS: [
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.ac]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.juggernaught = {
  PARENT: [exports.miniboss],
  LABEL: "Juggernaught",
  DANGER: 10,
  BODY: {
    HEALTH: 500,
    DAMAGE: 10,
    SHIELD: 10,
    SPEED: 3,
    FOV: 2
  },
  SIZE: 30,
  COLOR: 19,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [25, 0, 0, 180, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [30, 0, 0, 0, 0, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [7, 8, 0, 45, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, 135, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, -135, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [7, 8, 0, -45, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [8, 0, 0, 360, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          INDEPENDENT: true
        }
      ]
    }
  ]
};
exports.superboss = {
  PARENT: [exports.miniboss],
  TYPE: "miniboss",
  DANGER: 100,
  VALUE: 750000,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 1000,
    DAMAGE: 20,
    SHIELD: 15,
    SPEED: 0.25,
    FOV: 1.5
  },
  LEVEL: 60,
  DISPLAY_NAME: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "canRepel",
    "fleeAtLowHealth"
  ],
  AI: {
    NO_LEAD: true
  },
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A SUPERBOSS has been killed!"
};

exports.space = {
  PARENT: [exports.miniboss],
  LABEL: "Demolisher",
  FACING_TYPE: "smoothToTarget",
  SHAPE: 4,
  SIZE: 30,
  DANGER: 7,
  BODY: {
    FOV: 1.6,
    HEALTH: 7
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 5, 0.6, 7, 3, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [17, 5, 0.6, 7, -3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [17, 5, 0.6, 7, 3, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [17, 5, 0.6, 7, -3, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [16, 8, 1.4, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.mach,
          g.basic,
          g.flank,
          g.tri,
          g.thruster
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [4, 0, 0, 0, 360, 0],
      TYPE: exports.mod_ring
    }
  ]
};
exports.sigma = {
  PARENT: [exports.superboss],
  LABEL: "Sigma",
  SIZE: 30,
  COLOR: 19,
  FACING_TYPE: "autospin",
  SHAPE: 201 /* GUNS: [{
        POSITION: [0, 12, 1.2, 8, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
             TYPE: [exports.hybridminiminion, {
          PERSISTS_AFTER_DEATH: true,
        }],
            AUTOFIRE: true,
           MAX_CHILDREN: 1,
            SYNCS_SKILLS: true,
         
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [0, 12, 1.2, 8, 0, 180, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
             TYPE: [exports.hybridminiminion, {
          PERSISTS_AFTER_DEATH: true,
        }],
            AUTOFIRE: true,
           MAX_CHILDREN: 1,
            SYNCS_SKILLS: true,
         
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [0, 12, 1.2, 8, 0, 270, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
             TYPE: [exports.hybridminiminion, {
          PERSISTS_AFTER_DEATH: true,
        }],
            AUTOFIRE: true,
           MAX_CHILDREN: 1,
            SYNCS_SKILLS: true,
         
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [0, 12, 1.2, 8, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: [exports.hybridminiminion, {
          PERSISTS_AFTER_DEATH: true,
        }],
            AUTOFIRE: true,
           MAX_CHILDREN: 1,
            SYNCS_SKILLS: true,
         
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
        },
    }, 
    
    ],*/,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 10, 0, 30, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [3, 10, 0, 90, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [3, 10, 0, 150, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [3, 10, 0, 210, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [3, 10, 0, 270, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [3, 10, 0, 330, 360, 1],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [8, 0, 0, 360, 360, 1],
      TYPE: [
        exports.skimmer,
        {
          COLOR: 19
        }
      ]
    },
    {
      POSITION: [4, 0, 0, 0, 360, 0],
      TYPE: exports.mod_ring
    }
  ]
};
exports.skimboss = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Skimmer",
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 20,
    SPEED: 1,
    FOV: 1.3
  },
  SHAPE: 3,
  COLOR: 2,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret
    }
  ]
};
exports.miniboss2 = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  BODY: {
    FOV: 1.8,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN * 1.25,
    DAMAGE: base.DAMAGE * 2.5
  },
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0.1
  }),
  LEVEL: 45,

  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true
  },

  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A Boss Has Fallen!"
};
exports.sassairis = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 13,
  FACING_TYPE: "looseToTarget"
};

exports.sassaeye = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  FACING_TYPE: "looseToTarget",
  COLOR: 19,
  TURRETS: [
    {
      /****  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.75, 2, 0, 0, -15, 1],
      TYPE: exports.sassairis
    }
  ]
};
exports.sassaminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion of Sassafras",
  TYPE: "miniboss",
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 5,
    SPEED: 10,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  INDEPENDENT: true,
  SHAPE: 6,
  VALUE: 100000,
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: false,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.sassaeye
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.sassaminion1 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion of Sassafras",
  TYPE: "miniboss",
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 5,
    SPEED: 10,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  INDEPENDENT: true,
  SHAPE: 6,
  VALUE: 100000,
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: false,
  GIVE_KILL_MESSAGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.twin
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
       POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
let sassaprops = {
  SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
  TYPE: exports.sassaminion,
  STAT_CALCULATOR: gunCalcNames.drone,
  AUTOFIRE: true,
  MAX_CHILDREN: 1,
  SYNCS_SKILLS: true,
  WAIT_TO_CYCLE: true
};
let sassaprops1 = {
  SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
  TYPE: exports.sassaminion1,
  STAT_CALCULATOR: gunCalcNames.drone,
  AUTOFIRE: true,
  MAX_CHILDREN: 1,
  SYNCS_SKILLS: true,
  WAIT_TO_CYCLE: true
};
exports.sassafras = {
  PARENT: [exports.miniboss],
  LABEL: "Sassafras",
  VALUE: 500000,
  BODY: {
    HEALTH: 500,
    DAMAGE: 5,
    SHIELD: 20,
    SPEED: 1,
    FOV: 1.3
  },
  SHAPE: 6,
  COLOR: 2,
  SIZE: 50,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 6, 1.6, 8, 0, 0, 0],
      PROPERTIES: sassaprops
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 60, 0],
      PROPERTIES: sassaprops
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 120, 0],
      PROPERTIES: sassaprops
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.sassaminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 240, 0],
      PROPERTIES: sassaprops
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 300, 0],
      PROPERTIES: sassaprops
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [7, 0, 0, 0, 0, 1],
      TYPE: exports.sassaeye
    },
    {
      POSITION: [4, 7, 0, 0, 360, 1],
      TYPE: exports.buildergun
    },
    {
      POSITION: [4, 7, 0, 120, 360, 1],
      TYPE: exports.buildergun
    },
    {
      POSITION: [4, 7, 0, 240, 360, 1],
      TYPE: exports.buildergun
    },
    {
      POSITION: [4, 7, 0, 60, 360, 1],
      TYPE: exports.singlegun
    },
    {
      POSITION: [4, 7, 0, -60, 360, 1],
      TYPE: exports.singlegun
    },
    {
      POSITION: [4, 7, 0, 180, 360, 1],
      TYPE: exports.singlegun
    }
  ]
};
exports.sassafras1 = {
  PARENT: [exports.miniboss],
  LABEL: "BIG Sassafras",
  VALUE: 500000,
  BODY: {
    HEALTH: 500,
    DAMAGE: 5,
    SHIELD: 20,
    SPEED: 1,
    FOV: 1.3
  },
  SHAPE: 6,
  COLOR: 2,
  SIZE: 50,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 6, 1.6, 8, 0, 0, 0],
      PROPERTIES: sassaprops1
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 60, 0],
      PROPERTIES: sassaprops1
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 120, 0],
      PROPERTIES: sassaprops1
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.sassaminion1,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 240, 0],
      PROPERTIES: sassaprops1
    },
    {
      POSITION: [4, 6, 1.6, 8, 0, 300, 0],
      PROPERTIES: sassaprops1
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
         POSITION: [4, 2, 0, 0, 0, 1],
      TYPE: exports.sassaeye
    },
    {
         POSITION: [4, 2, 0, 0, 110, 1],
      TYPE: exports.sassaeye
    },
    {
   POSITION: [4, 2, 0, 0, 225, 1],
      TYPE: exports.sassaeye
    },
    {
      POSITION: [7, 0, 0, 0, 0, 1],
      TYPE: exports.sassaeye
    },
    {
      POSITION: [4, 7, 0, 0, 360, 1],
      TYPE: exports.megatrapper1
    },
    {
      POSITION: [4, 7, 0, 120, 360, 1],
      TYPE: exports.megatrapper1
    },
    {
      POSITION: [4, 7, 0, 240, 360, 1],
      TYPE: exports.megatrapper1
    },
    {
      POSITION: [4, 7, 0, 60, 360, 1],
      TYPE: exports.destroys
    },
    {
      POSITION: [4, 7, 0, -60, 360, 1],
      TYPE: exports.destroys
    },
    {
      POSITION: [4, 7, 0, 180, 360, 1],
      TYPE: exports.destroys
    }
  ]
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned(only appears when server crashes)",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true }
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.eliteh = {
  PARENT: [exports.miniboss],
  LABEL: "Hell_Cat",
  COLOR: 5,
  SHAPE: 4,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.eliteererer = {
  PARENT: [exports.miniboss],
  LABEL: "awp-1",
  COLOR: 5,
  SHAPE: 4,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.eliteererere = {
  PARENT: [exports.miniboss],
  LABEL: "awp-2",
  COLOR: 13,
  SHAPE: 4,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.3,
    HEALTH: base.HEALTH * 5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2
  }
};
exports.elite_trapper = {
  PARENT: [exports.elite],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 6, 0, 180, 190, 0],
      TYPE: [exports.elitetrapturret, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, 8, 180, 190, 0],
      TYPE: [exports.trapper, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, -8, 180, 190, 0],
      TYPE: [exports.trapper, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, 0, 60, 190, 0],
      TYPE: [exports.elitetrapturret, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, 8, 60, 190, 0],
      TYPE: [exports.trapper, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, -8, 60, 190, 0],
      TYPE: [exports.trapper, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, 0, -60, 190, 0],
      TYPE: [exports.elitetrapturret, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, 8, -60, 190, 0],
      TYPE: [exports.trapper, { COLOR: 5 }]
    },
    {
      POSITION: [7, 6, -8, -60, 190, 0],
      TYPE: [exports.trapper, { COLOR: 5 }]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 9, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 9, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 9, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [3, 9, 1.7, 15, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [15, 9, 1, 0, 0, -60, 0]
    },
    {
      POSITION: [3, 9, 1.7, 15, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 8, 0, 0, 360, 1],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [5, 8, 0, 120, 360, 1],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [5, 8, 0, -120, 360, 1],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    }
  ]
};
exports.machine = {
  PARENT: [exports.elite],
  LABEL: "Elite swarmer",
  SIZE: 33,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
   POSITION: [7, 7, 0.6, 7, 9, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
       POSITION: [6, 6, 1, 7, 9, 180, 0]
    }, {
    POSITION: [7, 7, 0.6, 7, -9, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
       POSITION: [6, 6, 1, 7, -9, 180, 0]
    }, {
    POSITION: [7, 7, 0.6, 7, 9, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
       POSITION: [6, 6, 1, 7, 9, 60, 0]
    }, {
     POSITION: [7, 7, 0.6, 7, -9, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
       POSITION: [6, 6, 1, 7, -9, 60, 0]
    }, {
     POSITION: [7, 7, 0.6, 7, -9, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
       POSITION: [6, 6, 1, 7, -9, -60, 0]
    }, {
      POSITION: [7, 7, 0.6, 7, 9, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
  {
       POSITION: [6, 6, 1, 7, 9, -60, 0]
    }, 
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 90, 0],
      TYPE: [exports.triplee, { COLOR: 5 }]
    },
    {
       POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.shotgun2, { COLOR: 5 }]
    },
    {
      POSITION: [9, 8, 0, 60, 90, 0],
      TYPE: [exports.triplee, { COLOR: 5 }]
    },
    {
      POSITION: [9, 8, 0, -60, 90, 0],
      TYPE: [exports.triplee, { COLOR: 5 }]
    }, {
        POSITION: [3, 13, 0, 0, 360, 1],
      TYPE: [exports.megatrapper, { COLOR: 5 }]
    },
    {
      POSITION: [3, 13, 0, 120, 90, 1],
      TYPE: [exports.megatrapper, { COLOR: 5 }]
    },
    {
      POSITION: [3, 13, 0, -120, 90, 1],
      TYPE: [exports.megatrapper, { COLOR: 5 }]
    }
  ]
};
exports.elite_fun = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.fun]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.elitetrapturret]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.fun]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.fun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};
exports.elite_f = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, -1.6, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 10, -1.6, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 10, -1.6, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.VisTurret, { COLOR: 5 }]
    }
  ]
};
exports.elite_fofa = {
  PARENT: [exports.eliteh],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 10, -1.8, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminionene,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 10, -1.8, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminionene,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 10, -1.8, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminionene,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 10, -1.8, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.pkminionene,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.crasher, { INDEPENDENT: true, COLOR: 13 }]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.shotgun2, { INDEPENDENT: true, COLOR: 13 }]
    }
  ]
};
exports.elite_gunner = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: [exports.bullet, { INDEPENDENT: true }]
      }
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0]
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.megatrapper]
    }
  ]
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.hybrid, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.hybrid, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.hybrid, { COLOR: 5 }]
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.rindeeyrturret, { COLOR: 5 }]
    }
  ]
};
exports.elite_sprayere = {
  PARENT: [exports.eliteererer],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 11, 0, 180, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 5 }]
    },
    {
      POSITION: [14, 11, 0, 90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 5 }]
    },
    {
      POSITION: [14, 11, 0, -90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 5 }]
    },
    {
      POSITION: [14, 11, 0, 0, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 5 }]
    },
    {
      POSITION: [9, 13, 0, 90, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 5 }]
    },
    {
      POSITION: [9, 11, 0, 0, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 5 }]
    },
    {
      POSITION: [9, 11, 0, 180, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 5 }]
    },
    {
      POSITION: [9, 11, 0, 270, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 5 }]
    },
    {
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: [exports.gunney, { COLOR: 5 }]
    }
  ]
};
exports.elite_sprayerey = {
  PARENT: [exports.eliteererer],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 11, 0, 180, 0, 0],
      TYPE: [exports.crasher, { COLOR: 5 }]
    },
    {
      POSITION: [14, 11, 0, 90, 0, 0],
      TYPE: [exports.crasher, { COLOR: 5 }]
    },
    {
      POSITION: [14, 11, 0, -90, 0, 0],
      TYPE: [exports.crasher, { COLOR: 5 }]
    },
    {
      POSITION: [14, 11, 0, 0, 0, 0],
      TYPE: [exports.crasher, { COLOR: 5 }]
    },
    {
      POSITION: [9, 13, 0, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [9, 11, 0, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [9, 11, 0, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [9, 11, 0, 270, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: [exports.megatrapper, { COLOR: 5 }]
    }
  ]
};

exports.elite_sprayerer = {
  PARENT: [exports.eliteererere],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [19, 35.5, 0, 180, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 35.5, 0, 90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 35.5, 0, -90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 35.5, 0, 0, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 0, 180, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 0, 90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 0, -90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 0, 0, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [9, 18, 0, 90, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 13 }]
    },
    {
      POSITION: [9, 18, 0, 0, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 13 }]
    },
    {
      POSITION: [9, 18, 0, 180, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 13 }]
    },
    {
      POSITION: [9, 18, 0, 270, 190, 0],
      TYPE: [exports.shotgun2, { COLOR: 13 }]
    },
    {
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: [exports.factory, { COLOR: 13 }]
    },
    {
      POSITION: [10, 35.5, 0, 180, 180, 0],
      TYPE: [exports.stream, { COLOR: 13 }]
    },
    {
      POSITION: [10, 35.5, 0, 90, 180, 0],
      TYPE: [exports.stream, { COLOR: 13 }]
    },
    {
      POSITION: [10, 35.5, 0, -90, 180, 0],
      TYPE: [exports.stream, { COLOR: 13 }]
    },
    {
      POSITION: [10, 35.5, 0, 0, 180, 0],
      TYPE: [exports.stream, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 17, 180, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 17, 90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 17, -90, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [19, 18, 17, 0, 0, 0],
      TYPE: [exports.sunchip, { COLOR: 13 }]
    },
    {
      POSITION: [11, 18, 17, 180, 180, 0],
      TYPE: [exports.megatrapper, { COLOR: 13 }]
    },
    {
      POSITION: [11, 18, 17, 90, 180, 0],
      TYPE: [exports.megatrapper, { COLOR: 13 }]
    },
    {
      POSITION: [11, 18, 17, -90, 180, 0],
      TYPE: [exports.megatrapper, { COLOR: 13 }]
    },
    {
      POSITION: [11, 18, 17, 0, 180, 0],
      TYPE: [exports.megatrapper, { COLOR: 13 }]
    }
  ]
};
exports.elite_y = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.buildergun, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.buildergun, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.buildergun, { COLOR: 5 }]
    },
    {
      POSITION: [5, 10, 0, 0, 360, 1],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [5, 10, 0, 120, 360, 1],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    },
    {
      POSITION: [5, 10, 0, 240, 360, 1],
      TYPE: [exports.auto3gun, { COLOR: 5 }]
    }
  ]
};
exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 40,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 30, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 90, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 150, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 210, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.pkminion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true
        }
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 270, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 330, 0],
        PROPERTIES: props
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 30, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 150, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 210, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 330, 110, 0],
        TYPE: exports.auto4gun
      }
    ]
  };
})();
exports.sentrySwarme = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Realme c3",
    COLOR: 17,
    SHAPE: 3,
    SIZE: 30,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
    {
      POSITION: [7, 7, 0.6, 7, 8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, -8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, 8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, 0, 60, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, -8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, 8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, 0, -60, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7, 0.6, 7, -8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.basic, g.stream]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 7, 0, 0, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [5, 7, 0, 120, 360, 1],
      TYPE: [exports.auto3gun]
    },
    {
      POSITION: [5, 7, 0, -120, 360, 1],
      TYPE: [exports.auto3gun]
    }
  ]
  };
})();
exports.awp1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "awp 0.5",
    COLOR: 11,
    SHAPE: 4,
    SIZE: 27,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [11, 9.5, 1, 0, 0, 85, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [11, 9.5, 1, 0, 0, 275, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, 2.5, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, -2.5, 0, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4.5, 9.8, -1.8, 9, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: exports.assassin
      }
    ]
  };
})();
exports.awps1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "awps 1",
    COLOR: 11,
    SHAPE: 4,
    SIZE: 27,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
           POSITION: [17.5, 4.5, 1, 0, 2.5, 180, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, -2.5, 180, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4.5, 9.8, -1.8, 9, 0, 180, 0]
      }, {
         POSITION: [17.5, 4.5, 1, 0, 2.5, 270, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, -2.5, 270, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4.5, 9.8, -1.8, 9, 0, 270, 0]
      }, {
          POSITION: [17.5, 4.5, 1, 0, 2.5, 90, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, -2.5, 90, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4.5, 9.8, -1.8, 9, 0, 90, 0]
      }, {
        POSITION: [17.5, 4.5, 1, 0, 2.5, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, -2.5, 0, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4.5, 9.8, -1.8, 9, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: exports.assassin
      }
    ]
  };
})();
exports.awp3 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "awp 1.2",
    COLOR: 11,
    SHAPE: 4,
    SIZE: 27,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 9.5, 1, 0, 0, 90, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 9.5, 1, 0, 0, 270, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [11, 11, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [11, 11, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 14, -1.2, 5, 0, 0, 2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.hive,
            g.stream,
            g.stream
          ]),
          TYPE: exports.hivebig
        }
      },
      {
        POSITION: [15, 12, 1, 5, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.bigauto4gun2
      },
      {
        POSITION: [5, 8, 6, 180, 90, 0],
        TYPE: exports.basic
      },
      {
        POSITION: [5, 8, -6, 180, 90, 0],
        TYPE: exports.basic
      }
    ]
  };
})();
exports.awp4 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "awp 2",
    COLOR: 11,
    SHAPE: 4,
    SIZE: 27,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
      {
                    POSITION: [5, 11, 1, 10.5, 0, 90, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.testminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 270, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.testminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 270, 0]
    }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 8, 0, 180, 90, 0],
        TYPE: exports.assassin
      },
      {
        POSITION: [13, 0, 0, 0, 360, 1],
        TYPE: exports.triplee
      },
      {
        POSITION: [5, 8, 6, 180, 90, 0],
        TYPE: exports.bigauto4gun
      },
      {
        POSITION: [5, 8, -6, 180, 90, 0],
        TYPE: exports.bigauto4gun
      }
    ]
  };
})();
exports.awp2 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "awp 1",
    COLOR: 11,
    SHAPE: 4,
    SIZE: 30,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [11, 9.5, 1, 0, 0, 85, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [11, 9.5, 1, 0, 0, 275, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, 2.5, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 4.5, 1, 0, -2.5, 0, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 4.5, 1, 0, 0, 0, 2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4.5, 9.8, -1.8, 9, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: exports.triple
      },
      {
        POSITION: [2, 0, 0, 0, 0, 1],
        TYPE: exports.auto3gun
      }
    ]
  };
})();
exports.testboss1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Fallen Director",
    COLOR: 16,
    SHAPE: 8,
    SIZE: 25,
    VALUE: 50000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 45, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 135, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 180, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 225, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 315, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [7, 10, 0, 360, 110, 0],
        TYPE: exports.director
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.sniper34
      }
    ]
  };
})();
exports.testboss89 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Fallen NailGun",
    COLOR: 16,
    SHAPE: 8,
    SIZE: 25,
    VALUE: 50000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 45, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 135, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 180, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 225, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 315, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [7, 10, 0, 360, 110, 0],
        TYPE: exports.nailgun
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.sniper34
      }
    ]
  };
})();
exports.awpe1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "awpe-1",
    COLOR: 16,
    SHAPE: 8,
    SIZE: 25,
    VALUE: 50000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4, 10, 0, 45, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 90, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 135, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 180, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 225, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 270, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 315, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [4, 10, 0, 360, 110, 0],
        TYPE: exports.basic1
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.auto3gun
      }
    ]
  };
})();
exports.awpe2 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "awpe-2",
    COLOR: 16,
    SHAPE: 8,
    SIZE: 25,
    VALUE: 50000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4, 10, 0, 45, 110, 0],
        TYPE: [exports.basic1, { COLOR: 1 }]
      },
      {
        POSITION: [4, 10, 0, 90, 110, 0],
        TYPE: [exports.basic1, { COLOR: 2 }]
      },
      {
        POSITION: [4, 10, 0, 135, 110, 0],
        TYPE: [exports.basic1, { COLOR: 3 }]
      },
      {
        POSITION: [4, 10, 0, 180, 110, 0],
        TYPE: [exports.basic1, { COLOR: 4 }]
      },
      {
        POSITION: [4, 10, 0, 225, 110, 0],
        TYPE: [exports.basic1, { COLOR: 5 }]
      },
      {
        POSITION: [4, 10, 0, 270, 110, 0],
        TYPE: [exports.basic1, { COLOR: 6 }]
      },
      {
        POSITION: [4, 10, 0, 315, 110, 0],
        TYPE: [exports.basic1, { COLOR: 7 }]
      },
      {
        POSITION: [4, 10, 0, 360, 110, 0],
        TYPE: [exports.basic1, { COLOR: 8 }]
      },
      {
         POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.test999, { COLOR: 9 }]
      },
      {
        POSITION: [3, 0, 0, 0, 360, 1],
        TYPE: [exports.auto3gun, { COLOR: 10 }]
      }
    ]
  };
})();
exports.testboss91 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Fallen empty",
    COLOR: 16,
    SHAPE: 8,
    SIZE: 25,
    VALUE: 50000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 45, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 135, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 180, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 225, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 315, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [7, 10, 0, 360, 110, 0],
        TYPE: exports.engineer1
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.sniper34
      }
    ]
  };
})();
exports.testboss90 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Fallen trap",
    COLOR: 16,
    SHAPE: 8,
    SIZE: 25,
    VALUE: 50000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 45, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 135, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 180, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 225, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 315, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [7, 10, 0, 360, 110, 0],
        TYPE: exports.megatrapper
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.sniper34
      }
    ]
  };
})();
exports.palisade11 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminione,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "King Of Square",
    COLOR: 17,
    SHAPE: 4,
    SIZE: 40,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminione,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 90, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminione,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 90, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 180, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminione,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 180, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 270, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminione,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 270, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 8, 0, 45, 110, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [5, 8, 0, 135, 110, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [5, 8, 0, 225, 110, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [5, 8, 0, 315, 110, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.necromancer
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: exports.necromancer
      }
    ]
  };
})();
exports.palisade12 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminionee,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "King Of Square",
    COLOR: 17,
    SHAPE: 4,
    SIZE: 40,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminionee,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 90, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminionee,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 90, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 180, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminionee,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 180, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 270, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminionee,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 270, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 8, 0, 45, 110, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [5, 8, 0, 135, 110, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [5, 8, 0, 225, 110, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [5, 8, 0, 315, 110, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [5, 7, 0, 0, 360, 1],
        TYPE: exports.pound
      },
      {
        POSITION: [5, 7, 0, 90, 360, 1],
        TYPE: exports.pound
      },
      {
        POSITION: [5, 7, 0, 180, 360, 1],
        TYPE: exports.pound
      },
      {
        POSITION: [5, 7, 0, 270, 360, 1],
        TYPE: exports.pound
      }
    ]
  };
})();
exports.palisade13 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminionee,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "SK-1",
    COLOR: 17,
    SHAPE: 4,
    SIZE: 30,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.ttminionee,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 0, 0, 0, 360, 1],
        TYPE: exports.stream
      }
    ]
  };
})();
exports.palisade14 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminionee,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "SK-2",
    COLOR: 8,
    SHAPE: 4,
    SIZE: 30,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 3,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [10, 3, 0.6, 7, 2, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, -2, 90, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 2, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, -2, 270, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 6.5, 90, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, -6.5, 90, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 6.5, 270, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, -6.5, 270, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [25, 3, 1, 0, -6.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.flanke]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [25, 3, 1, 0, 6.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.flanke]),
          TYPE: exports.bullet
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 4, 0, 0, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [6, -1, 5, 0, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [6, -1, -5, 0, 360, 1],
        TYPE: exports.assassin
      }
    ]
  };
})();
exports.testboss5 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminionee,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "SK-3",
    COLOR: 14,
    SHAPE: 4,
    SIZE: 45,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.testminion1,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 90, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.testminion1,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 90, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 180, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.testminion1,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 180, 0]
      },
      {
        POSITION: [5, 11, 1, 10.5, 0, 270, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.testminion1,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 1,
          AUTOFIRE: true,
          SYNCS_SKILLS: true
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 270, 0]
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 45, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 135, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 315, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4, 8, 0, 45, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [4, 8, 0, 135, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [4, 8, 0, 225, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [4, 8, 0, 315, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: exports.bigauto4gun1
      },
      {
        POSITION: [6, 7, 0, 90, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [6, 7, 0, 180, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [6, 7, 0, 270, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [6, 7, 0, 0, 360, 1],
        TYPE: exports.VisTurret
      }
    ]
  };
})();
exports.testboss6 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminionee,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "SK-4",
    COLOR: 14,
    SHAPE: [
      [0, -0.99],
      [1.42, -1.38],
      [1.007, -0.02],
      [1.42, 1.42],
      [-0.01, 0.993],
      [-1.4, 1.393],
      [-0.99, 0.01],
      [-1.4, -1.367]
    ],
    SIZE: 55,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.3,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 3, 0.6, 7, 0, 45, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 135, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 315, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4, 12, 0, 45, 360, 1],
        TYPE: exports.visturret1
      },
      {
        POSITION: [4, 12, 0, 135, 360, 1],
        TYPE: exports.visturret1
      },
      {
        POSITION: [4, 12, 0, 225, 360, 1],
        TYPE: exports.visturret1
      },
      {
        POSITION: [4, 12, 0, 315, 360, 1],
        TYPE: exports.visturret1
      },
      {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: exports.bigauto4gun1
      },
      {
        POSITION: [5, 16, 0, 45, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [5, 16, 0, 135, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [5, 16, 0, 225, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [5, 16, 0, 315, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [4.3, 7, 0, 90, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 7, 0, 180, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 7, 0, 270, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 7, 0, 0, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 14, 2.5, 45, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 45, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, 2.5, 135, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 135, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, 2.5, 225, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 225, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, 2.5, 315, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 315, 90, 0],
        TYPE: exports.pound
      }
    ]
  };
})();
exports.testboss7 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.ttminionee,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.minibosse],
    LABEL: "SK-5",
    COLOR: 14,
    SHAPE: [
      [0.613, 0.42],
      [1.61, -0.007],
      [0.653, -0.387],
      [1, -0.99],
      [-1, -1.013],
      [-0.59, -0.393],
      [-1.587, 0],
      [-0.6, 0.39],
      [-1.02, 1.01],
      [1.01, 1.01]
    ],
    SIZE: 55,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.3,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 3, 0.6, 7, 0, 45, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 135, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [10, 3, 0.6, 7, 0, 315, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.stream]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 13, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4, 12, 0, 45, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [4, 12, 0, 135, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [4, 12, 0, 225, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [4, 12, 0, 315, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: exports.bigauto4gun1
      },
      {
        POSITION: [5, 16, 0, 45, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [5, 16, 0, 135, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [5, 16, 0, 225, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [5, 16, 0, 315, 90, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [4.3, 7, 0, 90, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 7, 0, 180, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 7, 0, 270, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 7, 0, 0, 360, 1],
        TYPE: exports.nailgun
      },
      {
        POSITION: [4.3, 14, 2.5, 45, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 45, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, 2.5, 135, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 135, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, 2.5, 225, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 225, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, 2.5, 315, 90, 0],
        TYPE: exports.pound
      },
      {
        POSITION: [4.3, 14, -2.5, 315, 90, 0],
        TYPE: exports.pound
      }
    ]
  };
})();
exports.nestKeeper = {
  PARENT: [exports.miniboss],
  LABEL: "Nest Keeper",
  COLOR: 14,
  SHAPE: 5,
  SIZE: 50,
  VARIES_IN_SIZE: false,
  VALUE: 300000,
  BODY: {
    RESIST: 1,
    SPEED: base.SPEED * 0.1,
    HEALTH: 400,
    DAMAGE: 10,
    PENETRATION: 0.15,
    PUSHABILITY: 0,
    FOV: base.FOV * 2,
    HETERO: 0,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN * 1.25
  },
  MAX_CHILDREN: 15,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABLE: "Nest Keeper Mega Crasher"
      }
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABLE: "Nest Keeper Mega Crasher"
      }
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABLE: "Nest Keeper Mega Crasher"
      }
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABLE: "Nest Keeper Mega Crasher"
      }
    },
    {
      POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        LABLE: "Nest Keeper Mega Crasher"
      }
    }
  ],
  TURRETS: [
    {
      /********* SIZE    X      Y      ANGLE   ARC ***/
      POSITION: [8, 9, 0, 72, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [8, 9, 0, 0, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [8, 9, 0, 144, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [8, 9, 0, 216, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [8, 9, 0, -72, 120, 0],
      TYPE: [
        exports.auto4gun,
        {
          INDEPENDENT: true,
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.boomerturret,
        {
          INDEPENDENT: true,
          COLOR: 14
        }
      ]
    }
  ]
};

exports.palisadeking = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "KingMachines",
    COLOR: 17,
    SHAPE: 8,
    SIZE: 40,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 0, 110, 0],
        TYPE: exports.machine
      },
      {
        POSITION: [5, 10, 0, 45, 110, 0],
        TYPE: exports.buildergun
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.machine
      },
      {
        POSITION: [5, 10, 0, 135, 110, 0],
        TYPE: exports.buildergun
      },
      {
        POSITION: [5, 10, 0, 180, 110, 0],
        TYPE: exports.machine
      },
      {
        POSITION: [5, 10, 0, 225, 110, 0],
        TYPE: exports.buildergun
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.machine
      },
      {
        POSITION: [5, 10, 0, 315, 110, 0],
        TYPE: exports.buildergun
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.machine
      },
      {
        POSITION: [7, 0, 0, 0, 360, 1],
        TYPE: exports.factorye
      }
    ]
  };
})();
exports.palisadekinge = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Omega Pentagon",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 45,
    VALUE: 5000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2.5, 8, 1.2, 8, 0, 35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, -35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, -108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.flanke, { COLOR: 14 }]
      }
    ]
  };
})();
exports.palisadekinge1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.trape,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Omega Pentagon",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 45,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2.5, 8, 1.2, 8, 0, 35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, -35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, -108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [3, 8, 0, 0, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 8, 0, 72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 8, 0, 144, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 8, 0, 216, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 8, 0, -72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.singles, { COLOR: 14 }]
      }
    ]
  };
})();
exports.death1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.trape,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Death Pentagon",
    COLOR: 17,
    SHAPE: 5,
    SIZE: 45,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2.5, 8, 1.2, 8, 0, 35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, -35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, -108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.trape,
          AUTOFIRE: true
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 8, 0, 0, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.trape, { COLOR: 2 }]
      },
      {
        POSITION: [5, 8, 0, 72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.trape, { COLOR: 2 }]
      },
      {
        POSITION: [5, 8, 0, 144, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.trape, { COLOR: 2 }]
      },
      {
        POSITION: [5, 8, 0, 216, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.trape, { COLOR: 2 }]
      },
      {
        POSITION: [5, 8, 0, -72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.trape, { COLOR: 2 }]
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.trape, { COLOR: 2 }]
      },
      {
        POSITION: [3, 8, 0, 0, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.directord, { COLOR: 17 }]
      },
      {
        POSITION: [3, 8, 0, 72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.directord, { COLOR: 17 }]
      },
      {
        POSITION: [3, 8, 0, 144, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.directord, { COLOR: 17 }]
      },
      {
        POSITION: [3, 8, 0, 216, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.directord, { COLOR: 17 }]
      },
      {
        POSITION: [3, 8, 0, -72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.directord, { COLOR: 17 }]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.bigauto4gun2, { COLOR: 17 }]
      }
    ]
  };
})();
exports.palisadekinge3 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.trape,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Omega square",
    COLOR: 14,
    SHAPE: 4,
    SIZE: 45,
    VALUE: 5000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2.5, 8, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.bullet999,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.bullet999,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.bullet999,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [2.5, 8, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.bullet999,
          AUTOFIRE: true
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [3, 9, 0, 45, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 9, 0, 135, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 9, 0, 225, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 9, 0, 315, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [3, 0, 0, -72, 360, 1],
        AUTOFIRE: true,
        TYPE: [exports.rindeeyrturret, { COLOR: 14 }]
      },
      {
        POSITION: [5, 10, 0, 45, 360, 0],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [5, 10, 0, 135, 360, 0],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [5, 10, 0, 225, 360, 0],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      },
      {
        POSITION: [5, 10, 0, 315, 360, 0],
        AUTOFIRE: true,
        TYPE: [exports.auto3gun, { COLOR: 14 }]
      }
    ]
  };
})();
exports.helled = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.trap,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "i hell machine",
    COLOR: 2,
    SHAPE: 6,
    SIZE: 40,
    VALUE: 5000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 2,
      HEALTH: base.HEALTH * 4,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 30, 2]
      },
      {
        POSITION: [3, 7, 1.7, 1, 0, 0, 30],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.trap,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 90, 3]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 90],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.trap,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 150, 1]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 150],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.trap,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 210, 4]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 210],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.trap,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 1.3]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 300],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.trap,
          AUTOFIRE: true
        }
      },
      {
        POSITION: [15, 7, 0, 0, 300, 0, 2.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 300],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.trap,
          AUTOFIRE: true
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 30, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 150, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 210, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 10, 0, 330, 110, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [7, 0, 0, 0, 360, 1],
        TYPE: exports.hybrid
      }
    ]
  };
})();
exports.pal = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.pkminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "vyx josaerfe",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 40,
    VALUE: 500000000000000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.pkminion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true
        }
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [7, 10, 0, 30, 110, 0],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [7, 10, 0, 90, 110, 0],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [7, 10, 0, 150, 110, 0],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [7, 10, 0, 210, 110, 0],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [7, 10, 0, 270, 110, 0],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [7, 10, 0, 330, 110, 0],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [7, 0, 0, 0, 360, 1],
        TYPE: exports.shotgun2
      },
      {
        POSITION: [5, 0, 0, 0, 360, 1],
        TYPE: exports.builder
      },
      {
        POSITION: [5, 8, 0, 330, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [5, 8, 0, 270, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [5, 8, 0, 210, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [5, 8, 0, 150, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [5, 8, 0, 90, 360, 1],
        TYPE: exports.VisTurret
      },
      {
        POSITION: [5, 8, 0, 30, 360, 1],
        TYPE: exports.VisTurret
      }
    ]
  };
})();
let mothershipProperties = {
  MAX_CHILDREN: 2,
  SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
  TYPE: exports.drone,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
};

let mothershipAutoProperties = {
  MAX_CHILDREN: 2,
  SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
  TYPE: [
    exports.drone,
    {
      AI: {
        skynet: true
      },
      INDEPENDENT: true
    }
  ],
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
};

exports.mothership = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  NAME: "Mothership",
  DANGER: 7,

  SIZE: 50,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  VALUE: 400000,
  BODY: {
    REGEN: 0,
    FOV: 2.4,
    SHIELD: 0,
    ACCEL: 0.5,
    SPEED: 2,
    HEALTH: 500,
    PUSHABILITY: 0.15,
    DENSITY: 0.2
  },
  GUNS: [
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 45, 0.0625],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, 0.9375],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 90, 0.125],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, 0.875],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 135, 0.1875],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, 0.8125],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 180, 0.25],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, 0.75],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 225, 0.3125],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, 0.6875],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 270, 0.375],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, 0.625],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 315, 0.4375],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, 0.5625],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 360, 0.5],
      PROPERTIES: mothershipAutoProperties
    }
  ],
  LIFETIME: true
};
exports.modemothership = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  NAME: "Mothership",
  TYPE: "mothership",
  DANGER: 7,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "canRepel",
    "fleeAtLowHealth"
  ],
  AI: {
    NO_LEAD: true
  },
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A Mothership has been killed!",
  SIZE: 50,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  VALUE: 400000,
  BODY: {
    REGEN: 0,
    FOV: 2.4,
    SHIELD: 0,
    ACCEL: 0.5,
    SPEED: 2,
    HEALTH: 500,
    PUSHABILITY: 0.15,
    DENSITY: 0.2
  },
  GUNS: [
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 45, 0.0625],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, 0.9375],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 90, 0.125],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, 0.875],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 135, 0.1875],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, 0.8125],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 180, 0.25],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, 0.75],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 225, 0.3125],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, 0.6875],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 270, 0.375],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, 0.625],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 315, 0.4375],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, 0.5625],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 360, 0.5],
      PROPERTIES: mothershipAutoProperties
    }
  ],
  LIFETIME: true
};
exports.Turkey_Iris = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 19
};

exports.Turkey_Eye = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  FACING_TYPE: "toTarget",
  COLOR: 18,
  TURRETS: [
    {
      /****  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.75, 1, 0, 0, -15, 1],
      TYPE: exports.Turkey_Iris
    }
  ]
};

exports.Turkey_Head = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: ["onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
  TURRETS: [
    {
      /*** SIZE      X       Y     ANGLE      ARC  LAYER */
      POSITION: [6.5, 5.97, -5.07, 0, -15, 1],
      TYPE: exports.Turkey_Eye
    },
    {
      POSITION: [6.5, 5.97, 5.07, 0, -15, 1],
      TYPE: exports.Turkey_Eye
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19.81, 8.09, -1.76, 5.48, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
        AUTOFIRE: true
      }
    }
  ]
};

let TurkeyProperties = {
  MAX_CHILDREN: 4,
  SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
  TYPE: exports.drone,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
};

let TurkeyAutoProperties = {
  MAX_CHILDREN: 4,
  SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
  TYPE: [
    exports.drone,
    {
      AI: {
        skynet: true
      },
      INDEPENDENT: true
    }
  ],
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
};

exports.Turkey_Mothership = {
  PARENT: [exports.genericTank],
  LABEL: "Turkey",
  NAME: "Turkey",
  DANGER: 7,
  SIZE: 50,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  VALUE: 400000,
  BODY: {
    REGEN: 0,
    FOV: 2.4,
    SHIELD: 0,
    ACCEL: 0.5,
    SPEED: 2,
    HEALTH: 500,
    PUSHABILITY: 0.15,
    DENSITY: 0.2
  },
  LIFETIME: true,
  TURRETS: [
    {
      /******  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.76, 8.75, 0, 0, -15, 1],
      TYPE: [
        exports.Turkey_Head,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    }
  ],
  GUNS: [
    {
      /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18.0, 4.69, 1, 0, 0, 135, 2 / 3],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [20.96, 6.69, 1, 0, 0, 157.5, 1 / 3],
      PROPERTIES: TurkeyProperties
    },
    {
      POSITION: [18.0, 4.69, 1, 0, 0, 225, 2 / 3],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [20.96, 6.69, 1, 0, 0, 202.5, 1 / 3],
      PROPERTIES: TurkeyProperties
    },
    {
      POSITION: [24.09, 8.69, 1, 0, 0, 180, 0],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [24.09, 8.69, 1, 0, 0, 180, 0],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [4, 5, 1, 10, 0, 105, 0.1],
      PROPERTIES: TurkeyProperties
    },
    {
      POSITION: [4, 5, 1, 10, 0, -105, 0.1],
      PROPERTIES: TurkeyProperties
    }
  ]
};
exports.summoner = {
  PARENT: [exports.miniboss],
  LABEL: "Summoner",
  DANGER: 8,
  SHAPE: 4,
  COLOR: 13,
  SIZE: 25,
  MAX_CHILDREN: 28,
  FACING_TYPE: "autospin",
  VARIES_IN_SIZE: true,
  VALUE: 200000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 7,
    DAMAGE: base.DAMAGE * 2.6
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    spd: 0.3,
    str: 0.6,
    pen: 0.6,
    dam: 0.5,
    rld: 1,
    rgn: 0.2,
    shi: 0.2
  }),
  TURRETS: [
    {
      /******  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.76, 0, 0, 0, -15, 0],
      TYPE: [
        exports.Turkey_Iris,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 8.65, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.5, 8.65, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.summonermk2eyeback = {
  PARENT: [exports.genericTank],
  COLOR: 7
};
exports.summonermk2back = {
  PARENT: [exports.genericTank],
  COLOR: 17,
  FACING_TYPE: "autospin",
  SHAPE: 4
};
exports.summonermk2yellow = {
  PARENT: [exports.genericTank],
  COLOR: 13,
  FACING_TYPE: "autospin",
  SHAPE: 4
};
exports.summonermk2eye = {
  PARENT: [exports.genericTank],
  COLOR: 12
};
exports.summonermk2part = {
  PARENT: [exports.genericTank],
  COLOR: 7,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  SHAPE: 4,
  TURRETS: [
    {
      /******  SIZE      X       Y     ANGLE    ARC  LAYER */

      POSITION: [11, 0, 0, 0, -15, 1],
      TYPE: [
        exports.summonermk2eye,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    }
  ]
};
exports.summonermk2 = {
  PARENT: [exports.miniboss],
  LABEL: "Summoner MK. II",
  DANGER: 8,
  SHAPE: 4,
  COLOR: 13,
  SIZE: 25,
  MAX_CHILDREN: 28,
  FACING_TYPE: "autospin",
  VARIES_IN_SIZE: true,
  VALUE: 200000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.3,
    HEALTH: base.HEALTH * 10,
    DAMAGE: base.DAMAGE * 3
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    spd: 0.3,
    str: 0.6,
    pen: 0.6,
    dam: 0.5,
    rld: 1,
    rgn: 0.2,
    shi: 0.2
  }),
  TURRETS: [
    {
      /******  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [25, 0, 0, 0, 0, 1],
      TYPE: [
        exports.summonermk2back,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    },
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [
        exports.summonermk2yellow,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    },
    {
      POSITION: [10.76, 0, 0, 0, -15, 0],
      TYPE: [
        exports.Turkey_Iris,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    },
    {
      POSITION: [5, 0, 0, 0, -15, 1],
      TYPE: [
        exports.summonermk2eyeback,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    },
    {
      POSITION: [2.5, 0, 0, 0, -15, 1],
      TYPE: [
        exports.summonermk2eye,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    },
    {
      POSITION: [7, 8, -8, 0, -15, 1],
      TYPE: [exports.summonermk2part]
    },
    {
      POSITION: [7, -8, 8, 0, -15, 1],
      TYPE: [exports.summonermk2part]
    },
    {
      POSITION: [7, 8, 8, 0, -15, 1],
      TYPE: [exports.summonermk2part]
    },
    {
      POSITION: [7, -8, -8, 0, -15, 1],
      TYPE: [exports.summonermk2part]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 8.65, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner2]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8.65, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner2]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8.65, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner2]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 8.65, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner2]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
(exports.fallen_hybrid = makeFallenHybrid(
  {
    PARENT: [exports.miniboss],
    SIZE: 41,
    SHAPE: 40,
    COLOR: 8,
    DANGER: 70,
    IS_ON_LEADERBOARD: true,
    CONTROLLERS: ["nearestDifferentMaster"],
    FACING_TYPE: "looseToTarget",
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.pillbox
        }
      }
    ]
  },
  "Fallen Hybrid"
)),
  (exports.bot = {
    AUTO_UPGRADE: "random",
    FACING_TYPE: "looseToTarget",
    BODY: {
      SIZE: 10,
      FOV: 5
    },
    //COLOR: 17,
    VALUE: 24000,
    SKILL: skillSet({
      rld: 1,
      dam: 1,
      pen: 1,
      spd: 1,
      str: 1
    }),
    // NAME: "ai_",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "fleeAtLowHealth"
    ],
    AI: { STRAFE: true }
  });

exports.group = {
  LABEL: "Drone",
  TYPE: "Grouper",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: [
    [-0.607, 0.446],
    [-1.15, 0],
    [-1.147, 0.006],
    [-0.607, -0.414],
    [-0.61, -0.98],
    [0.8, -0.6],
    [0.81, 0.6],
    [-0.607, 1.006]
  ],
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.trapefighter = {
  PARENT: [exports.miniboss],
  LABEL: "Trape Fighter",
  SIZE: 30,
  COLOR: 2,
  FACING_TYPE: "looseToTarget",
  SHAPE: [
    [-0.607, 0.446],
    [-1.15, 0],
    [-1.147, 0.006],
    [-0.607, -0.414],
    [-0.61, -0.98],
    [0.8, -0.6],
    [0.81, 0.6],
    [-0.607, 1.006]
  ],
  TURRETS: [
    {
      /******  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.76, 0, 0, 0, -15, 0],
      TYPE: [
        exports.Turkey_Iris,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 9, 1.2, 6, 1, 75, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.group,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 9, 1.2, 6, -1, -75, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.group,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    }
  ]
};
exports.neut = {
  PARENT: [exports.miniboss],
  LABEL: "NEUTRALIZER",
  SIZE: 30,
  FACING_TYPE: "looseToTarget",
  COLOR: 1,
  SHAPE: [[-0.99, -0.6], [1.2, -0.227], [1.2, 0.2], [-0.99, 0.587]],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 9, 1.2, 4.5, 1, 80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.group,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [4, 9, 1.2, 4.5, -1, -80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.group,
        MAX_CHILDREN: 5,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.visultima = {
  PARENT: [exports.genericTank],
  LABEL: "Vis Ultima",
  SIZE: 40,
  COLOR: 1,
  RESET_UPGRADES: false,
  SHAPE: [
    [-0.01, 0.25],
    [-0.31, 0.97],
    [0.81, 0.21],
    [0.81, -0.21],
    [-0.27, -0.95],
    [-0.007, -0.24],
    [0.43, -0.01]
  ],
  BODY: {
    // def
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 7,
    SHIELD: base.SHIELD * 0.5,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 1.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 5, 1, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 7, 1, -3.7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
        TYPE: exports.VisDrone,
        MAX_CHILDREN: 15
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 2, 4, 0, 360, 1],
      TYPE: exports.VisTurret
    },
    {
      POSITION: [3, 2, -4, 0, 360, 1],
      TYPE: exports.VisTurret
    }
  ]
};
exports.Hybridac = makeHybrid(exports.arenacloser, "Baseac");
exports.rindeeyr_kswyvmexqcxx = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: true },
  LABEL: "Rindeeyr Kswyvmexqcxx",
  SHAPE: 7,
  COLOR: 6,
  SPEED: base.SPEED * 0.5,
  SIZE: 50,
  HEALTH: base.HEALTH * 400,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 6, 0, 180, 190, 0],
      TYPE: [exports.rindeeyrturret, { COLOR: 6 }]
    },
    {
      POSITION: [12, 6, 0, 51.4285714286, 190, 0],
      TYPE: [exports.rindeeyrturret, { COLOR: 6 }]
    },
    {
      POSITION: [12, 6, 0, -51.4285714286, 190, 0],
      TYPE: [exports.rindeeyrturret, { COLOR: 6 }]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.builder, { COLOR: 6 }]
    }
  ]
};
exports.invincible_rindeeyr_kswyvmexqcxx = {
  PARENT: [exports.miniboss],
  AI: { NO_LEAD: true },
  LABEL: "Invincible Rindeeyr Kswyvmexqcxx",
  SHAPE: 7,
  COLOR: 6,
  SPEED: base.SPEED * 0.5,
  SIZE: 50,
  DAMAGE: 1000000000000000000000000000000000000000000,
  HEALTH: 400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 6, 0, 180, 190, 0],
      TYPE: [exports.rindeeyrturret, { COLOR: 6 }]
    },
    {
      POSITION: [12, 6, 0, 51.4285714286, 190, 0],
      TYPE: [exports.rindeeyrturret, { COLOR: 6 }]
    },
    {
      POSITION: [12, 6, 0, -51.4285714286, 190, 0],
      TYPE: [exports.rindeeyrturret, { COLOR: 6 }]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.builder, { COLOR: 6 }]
    }
  ]
};
//exports.testbed.UPGRADES_TIER_1.push(exports.summonermk2, exports.sassafras);
exports.bosses.UPGRADES_TIER_1.push(
  exports.elite_sprayer,
  exports.elite_destroyer,
  exports.elite_gunner,
  exports.elite_trapper,
  exports.skimboss,
  exports.palisade,
  exports.summoner,
  exports.sigma,
  exports.summonermk2,
  exports.sassafras,
  exports.sassaminion,
  exports.machine
);
exports.bosses2.UPGRADES_TIER_1.push(
  exports.aquamarine,
  exports.arrasian,
  exports.trapefighter,
  exports.neut,
  exports.visultima,
  exports.fallen_hybrid,
  exports.necromonster,
  exports.rindeeyr_kswyvmexqcxx
);
exports.misc.UPGRADES_TIER_1.push(
  exports.mothership,
  exports.Turkey_Mothership,
  exports.baseProtector,
  exports.arenacloser,
  exports.MachineCloser,
  exports.DroneCloser,
  exports.TwinCloser,
  exports.SnipeCloser,
  exports.HeavyCloser,
  exports.Hybridac,
  exports.OldAcCloser,
  exports.miniboss,
  exports.twincep,
  exports.opgunner,
  exports.bentboomer,
  exports.bighter,
  exports.bombarder,
  exports.speeder,
  exports.motor,
  exports.mootor,
  exports.tenk,
  exports.harmer,
  exports.fortc,
  exports.invincible_rindeeyr_kswyvmexqcxx,
  exports.opelter,
  exports.fun
);
exports.alphatanks.UPGRADES_TIER_1.push(
  exports.overdoer,
  exports.snipegun,
  exports.saw,
  exports.gun2
);
exports.removed.UPGRADES_TIER_1.push(
  exports.skimmer,
  exports.giga2,
  exports.clicker2,
  exports.bouncer
);
exports.customboba.UPGRADES_TIER_1 = [
  exports.TK55,
  exports.elite_sprayerer,
  exports.servercleaner,
  exports.elite_fofa,
  exports.elite_sprayerey,
  exports.sentrySwarme,
  exports.sentryspray,
  exports.palisade11
];

exports.factory.UPGRADES_TIER_2 = [exports.fact];

exports.hopa.UPGRADES_TIER_3 = [
  exports.test,
  exports.pal,
  exports.elite_y,
  exports.elite_f,
  exports.elite_sprayere,
  exports.elite_sprayerer,
  exports.nestKeeper
];

exports.vovava.UPGRADES_TIER_3 = [
  exports.autosmap,
  exports.autoy,
  exports.nine,
  exports.eight,
  exports.seven
];

exports.testbedkinfg.UPGRADES_TIER_1 = [
  exports.palisadeking,
  exports.palisade11,
  exports.palisade12,
  exports.palisade13
];

exports.testbede.UPGRADES_TIER_1 = [
  exports.testbedhi,
  exports.autosmap,
  exports.autoy,
  exports.nine,
  exports.eight,
  exports.seven,
  exports.caggier,
  exports.skimmer,
  exports.gunney,
  exports.managers,
  exports.double,
  exports.cru,
  exports.str,
  exports.bansheeses,
  exports.tritrapperers,
  exports.vovava,
  exports.pkminion
];

exports.palisade13.UPGRADES_TIER_1 = [exports.palisade14];

exports.palisade14.UPGRADES_TIER_1 = [exports.testboss5];

exports.testboss5.UPGRADES_TIER_1 = [exports.testboss6];

exports.testbed1.UPGRADES_TIER_1 = [
  exports.testboss1,
  exports.testboss89,
  exports.testboss90,
  exports.testboss91
];

exports.xkxbossese.UPGRADES_TIER_1 = [exports.EK1, exports.EKh];

exports.EK1.UPGRADES_TIER_1 = [exports.EK2];

exports.testbed11.UPGRADES_TIER_1 = [
  exports.palisadekinge,
  exports.palisadekinge1,
  exports.palisadekinge3
];

exports.death.UPGRADES_TIER_1 = [exports.death1];

exports.awps.UPGRADES_TIER_1 = [exports.awp1, exports.awpe1, exports.awps1];

exports.awp1.UPGRADES_TIER_1 = [exports.awp2];

exports.awp2.UPGRADES_TIER_1 = [exports.awp3];




exports.awpe1.UPGRADES_TIER_1 = [exports.awpe2];

exports.awp3.UPGRADES_TIER_1 = [exports.awp4];




exports.sas.UPGRADES_TIER_1 = [exports.sassafras1, exports.sassafras];