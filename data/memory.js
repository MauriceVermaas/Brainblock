// data/memory.js — plaatje↔woord-paren voor de Fotomemory.
// Voor ouders: elk item is { w, plaatje, niveau }. Het spel maakt van elk item twee kaartjes
// (een met het plaatje, een met het woord) die bij elkaar horen.

var MEMORY = [
  {
    "w": "kat",
    "plaatje": "🐱",
    "niveau": 1
  },
  {
    "w": "hond",
    "plaatje": "🐶",
    "niveau": 1
  },
  {
    "w": "vis",
    "plaatje": "🐟",
    "niveau": 1
  },
  {
    "w": "koe",
    "plaatje": "🐮",
    "niveau": 1
  },
  {
    "w": "boom",
    "plaatje": "🌳",
    "niveau": 1
  },
  {
    "w": "bloem",
    "plaatje": "🌸",
    "niveau": 1
  },
  {
    "w": "zon",
    "plaatje": "☀️",
    "niveau": 1
  },
  {
    "w": "maan",
    "plaatje": "🌙",
    "niveau": 1
  },
  {
    "w": "huis",
    "plaatje": "🏠",
    "niveau": 1
  },
  {
    "w": "auto",
    "plaatje": "🚗",
    "niveau": 1
  },
  {
    "w": "bal",
    "plaatje": "⚽",
    "niveau": 1
  },
  {
    "w": "appel",
    "plaatje": "🍎",
    "niveau": 1
  },
  {
    "w": "boot",
    "plaatje": "⛵",
    "niveau": 2
  },
  {
    "w": "trein",
    "plaatje": "🚂",
    "niveau": 2
  },
  {
    "w": "vogel",
    "plaatje": "🐦",
    "niveau": 2
  },
  {
    "w": "paard",
    "plaatje": "🐴",
    "niveau": 2
  },
  {
    "w": "schaap",
    "plaatje": "🐑",
    "niveau": 2
  },
  {
    "w": "taart",
    "plaatje": "🎂",
    "niveau": 2
  },
  {
    "w": "ster",
    "plaatje": "⭐",
    "niveau": 2
  },
  {
    "w": "paraplu",
    "plaatje": "☂️",
    "niveau": 2
  },
  {
    "w": "kikker",
    "plaatje": "🐸",
    "niveau": 3
  },
  {
    "w": "vlinder",
    "plaatje": "🦋",
    "niveau": 3
  },
  {
    "w": "raket",
    "plaatje": "🚀",
    "niveau": 3
  },
  {
    "w": "regenboog",
    "plaatje": "🌈",
    "niveau": 3
  },
  {
    "w": "varken",
    "plaatje": "🐷",
    "niveau": 1
  },
  {
    "w": "kip",
    "plaatje": "🐔",
    "niveau": 1
  },
  {
    "w": "eend",
    "plaatje": "🦆",
    "niveau": 1
  },
  {
    "w": "konijn",
    "plaatje": "🐰",
    "niveau": 1
  },
  {
    "w": "muis",
    "plaatje": "🐭",
    "niveau": 1
  },
  {
    "w": "beer",
    "plaatje": "🐻",
    "niveau": 2
  },
  {
    "w": "leeuw",
    "plaatje": "🦁",
    "niveau": 2
  },
  {
    "w": "tijger",
    "plaatje": "🐯",
    "niveau": 2
  },
  {
    "w": "olifant",
    "plaatje": "🐘",
    "niveau": 2
  },
  {
    "w": "aap",
    "plaatje": "🐵",
    "niveau": 2
  },
  {
    "w": "giraf",
    "plaatje": "🦒",
    "niveau": 3
  },
  {
    "w": "zebra",
    "plaatje": "🦓",
    "niveau": 3
  },
  {
    "w": "slang",
    "plaatje": "🐍",
    "niveau": 2
  },
  {
    "w": "schildpad",
    "plaatje": "🐢",
    "niveau": 2
  },
  {
    "w": "bij",
    "plaatje": "🐝",
    "niveau": 2
  },
  {
    "w": "mier",
    "plaatje": "🐜",
    "niveau": 2
  },
  {
    "w": "uil",
    "plaatje": "🦉",
    "niveau": 2
  },
  {
    "w": "pinguin",
    "plaatje": "🐧",
    "niveau": 2
  },
  {
    "w": "dolfijn",
    "plaatje": "🐬",
    "niveau": 2
  },
  {
    "w": "walvis",
    "plaatje": "🐋",
    "niveau": 3
  },
  {
    "w": "haai",
    "plaatje": "🦈",
    "niveau": 3
  },
  {
    "w": "krab",
    "plaatje": "🦀",
    "niveau": 2
  },
  {
    "w": "octopus",
    "plaatje": "🐙",
    "niveau": 3
  },
  {
    "w": "vos",
    "plaatje": "🦊",
    "niveau": 2
  },
  {
    "w": "wolf",
    "plaatje": "🐺",
    "niveau": 2
  },
  {
    "w": "hert",
    "plaatje": "🦌",
    "niveau": 3
  },
  {
    "w": "slak",
    "plaatje": "🐌",
    "niveau": 2
  },
  {
    "w": "kameel",
    "plaatje": "🐫",
    "niveau": 3
  },
  {
    "w": "poes",
    "plaatje": "🐈",
    "niveau": 1
  },
  {
    "w": "hamster",
    "plaatje": "🐹",
    "niveau": 2
  },
  {
    "w": "kalkoen",
    "plaatje": "🦃",
    "niveau": 3
  },
  {
    "w": "banaan",
    "plaatje": "🍌",
    "niveau": 1
  },
  {
    "w": "druiven",
    "plaatje": "🍇",
    "niveau": 1
  },
  {
    "w": "sinaasappel",
    "plaatje": "🍊",
    "niveau": 2
  },
  {
    "w": "aardbei",
    "plaatje": "🍓",
    "niveau": 2
  },
  {
    "w": "citroen",
    "plaatje": "🍋",
    "niveau": 2
  },
  {
    "w": "kers",
    "plaatje": "🍒",
    "niveau": 2
  },
  {
    "w": "peer",
    "plaatje": "🍐",
    "niveau": 2
  },
  {
    "w": "meloen",
    "plaatje": "🍉",
    "niveau": 3
  },
  {
    "w": "ananas",
    "plaatje": "🍍",
    "niveau": 3
  },
  {
    "w": "perzik",
    "plaatje": "🍑",
    "niveau": 3
  },
  {
    "w": "brood",
    "plaatje": "🍞",
    "niveau": 1
  },
  {
    "w": "kaas",
    "plaatje": "🧀",
    "niveau": 1
  },
  {
    "w": "ei",
    "plaatje": "🥚",
    "niveau": 1
  },
  {
    "w": "melk",
    "plaatje": "🥛",
    "niveau": 1
  },
  {
    "w": "koekje",
    "plaatje": "🍪",
    "niveau": 2
  },
  {
    "w": "ijs",
    "plaatje": "🍦",
    "niveau": 1
  },
  {
    "w": "snoep",
    "plaatje": "🍬",
    "niveau": 2
  },
  {
    "w": "chocola",
    "plaatje": "🍫",
    "niveau": 2
  },
  {
    "w": "pizza",
    "plaatje": "🍕",
    "niveau": 1
  },
  {
    "w": "wortel",
    "plaatje": "🥕",
    "niveau": 2
  },
  {
    "w": "tomaat",
    "plaatje": "🍅",
    "niveau": 1
  },
  {
    "w": "mais",
    "plaatje": "🌽",
    "niveau": 2
  },
  {
    "w": "champignon",
    "plaatje": "🍄",
    "niveau": 2
  },
  {
    "w": "broccoli",
    "plaatje": "🥦",
    "niveau": 3
  },
  {
    "w": "aardappel",
    "plaatje": "🥔",
    "niveau": 2
  },
  {
    "w": "druif",
    "plaatje": "🍇",
    "niveau": 2
  },
  {
    "w": "hamburger",
    "plaatje": "🍔",
    "niveau": 2
  },
  {
    "w": "frietjes",
    "plaatje": "🍟",
    "niveau": 2
  },
  {
    "w": "appelsap",
    "plaatje": "🧃",
    "niveau": 2
  },
  {
    "w": "honing",
    "plaatje": "🍯",
    "niveau": 3
  },
  {
    "w": "wolk",
    "plaatje": "☁️",
    "niveau": 1
  },
  {
    "w": "regen",
    "plaatje": "🌧️",
    "niveau": 2
  },
  {
    "w": "sneeuw",
    "plaatje": "❄️",
    "niveau": 2
  },
  {
    "w": "blad",
    "plaatje": "🍃",
    "niveau": 2
  },
  {
    "w": "gras",
    "plaatje": "🌱",
    "niveau": 2
  },
  {
    "w": "berg",
    "plaatje": "⛰️",
    "niveau": 3
  },
  {
    "w": "vuur",
    "plaatje": "🔥",
    "niveau": 2
  },
  {
    "w": "water",
    "plaatje": "💧",
    "niveau": 1
  },
  {
    "w": "cactus",
    "plaatje": "🌵",
    "niveau": 3
  },
  {
    "w": "palmboom",
    "plaatje": "🌴",
    "niveau": 3
  },
  {
    "w": "bliksem",
    "plaatje": "⚡",
    "niveau": 3
  },
  {
    "w": "druppel",
    "plaatje": "💧",
    "niveau": 2
  },
  {
    "w": "schelp",
    "plaatje": "🐚",
    "niveau": 3
  },
  {
    "w": "vulkaan",
    "plaatje": "🌋",
    "niveau": 3
  },
  {
    "w": "deur",
    "plaatje": "🚪",
    "niveau": 1
  },
  {
    "w": "raam",
    "plaatje": "🪟",
    "niveau": 2
  },
  {
    "w": "stoel",
    "plaatje": "🪑",
    "niveau": 2
  },
  {
    "w": "bed",
    "plaatje": "🛏️",
    "niveau": 1
  },
  {
    "w": "bank",
    "plaatje": "🛋️",
    "niveau": 2
  },
  {
    "w": "lamp",
    "plaatje": "💡",
    "niveau": 2
  },
  {
    "w": "klok",
    "plaatje": "🕐",
    "niveau": 2
  },
  {
    "w": "sleutel",
    "plaatje": "🔑",
    "niveau": 2
  },
  {
    "w": "boek",
    "plaatje": "📖",
    "niveau": 1
  },
  {
    "w": "pen",
    "plaatje": "🖊️",
    "niveau": 2
  },
  {
    "w": "schaar",
    "plaatje": "✂️",
    "niveau": 2
  },
  {
    "w": "tas",
    "plaatje": "👜",
    "niveau": 2
  },
  {
    "w": "ballon",
    "plaatje": "🎈",
    "niveau": 1
  },
  {
    "w": "cadeau",
    "plaatje": "🎁",
    "niveau": 1
  },
  {
    "w": "bril",
    "plaatje": "👓",
    "niveau": 2
  },
  {
    "w": "hoed",
    "plaatje": "👒",
    "niveau": 2
  },
  {
    "w": "schoen",
    "plaatje": "👟",
    "niveau": 1
  },
  {
    "w": "sok",
    "plaatje": "🧦",
    "niveau": 2
  },
  {
    "w": "jas",
    "plaatje": "🧥",
    "niveau": 2
  },
  {
    "w": "shirt",
    "plaatje": "👕",
    "niveau": 1
  },
  {
    "w": "broek",
    "plaatje": "👖",
    "niveau": 2
  },
  {
    "w": "telefoon",
    "plaatje": "📱",
    "niveau": 2
  },
  {
    "w": "camera",
    "plaatje": "📷",
    "niveau": 2
  },
  {
    "w": "potlood",
    "plaatje": "✏️",
    "niveau": 1
  },
  {
    "w": "kroon",
    "plaatje": "👑",
    "niveau": 2
  },
  {
    "w": "bus",
    "plaatje": "🚌",
    "niveau": 1
  },
  {
    "w": "fiets",
    "plaatje": "🚲",
    "niveau": 1
  },
  {
    "w": "vliegtuig",
    "plaatje": "✈️",
    "niveau": 2
  },
  {
    "w": "tractor",
    "plaatje": "🚜",
    "niveau": 3
  },
  {
    "w": "brandweer",
    "plaatje": "🚒",
    "niveau": 3
  },
  {
    "w": "politie",
    "plaatje": "🚓",
    "niveau": 3
  },
  {
    "w": "helikopter",
    "plaatje": "🚁",
    "niveau": 3
  },
  {
    "w": "motor",
    "plaatje": "🏍️",
    "niveau": 3
  },
  {
    "w": "hand",
    "plaatje": "✋",
    "niveau": 1
  },
  {
    "w": "voet",
    "plaatje": "🦶",
    "niveau": 2
  },
  {
    "w": "oog",
    "plaatje": "👁️",
    "niveau": 1
  },
  {
    "w": "oor",
    "plaatje": "👂",
    "niveau": 2
  },
  {
    "w": "neus",
    "plaatje": "👃",
    "niveau": 2
  },
  {
    "w": "mond",
    "plaatje": "👄",
    "niveau": 2
  },
  {
    "w": "tand",
    "plaatje": "🦷",
    "niveau": 2
  },
  {
    "w": "hart",
    "plaatje": "❤️",
    "niveau": 1
  },
  {
    "w": "baby",
    "plaatje": "👶",
    "niveau": 1
  },
  {
    "w": "jongen",
    "plaatje": "👦",
    "niveau": 1
  },
  {
    "w": "meisje",
    "plaatje": "👧",
    "niveau": 1
  },
  {
    "w": "oma",
    "plaatje": "👵",
    "niveau": 2
  },
  {
    "w": "opa",
    "plaatje": "👴",
    "niveau": 2
  },
  {
    "w": "mama",
    "plaatje": "👩",
    "niveau": 1
  },
  {
    "w": "papa",
    "plaatje": "👨",
    "niveau": 1
  },
  {
    "w": "rood",
    "plaatje": "🔴",
    "niveau": 1
  },
  {
    "w": "blauw",
    "plaatje": "🔵",
    "niveau": 1
  },
  {
    "w": "geel",
    "plaatje": "🟡",
    "niveau": 1
  },
  {
    "w": "groen",
    "plaatje": "🟢",
    "niveau": 1
  },
  {
    "w": "paars",
    "plaatje": "🟣",
    "niveau": 2
  },
  {
    "w": "oranje",
    "plaatje": "🟠",
    "niveau": 2
  },
  {
    "w": "zwart",
    "plaatje": "⚫",
    "niveau": 2
  },
  {
    "w": "wit",
    "plaatje": "⚪",
    "niveau": 2
  },
  {
    "w": "voetbal",
    "plaatje": "⚽",
    "niveau": 2
  },
  {
    "w": "muziek",
    "plaatje": "🎵",
    "niveau": 2
  },
  {
    "w": "gitaar",
    "plaatje": "🎸",
    "niveau": 3
  },
  {
    "w": "trommel",
    "plaatje": "🥁",
    "niveau": 3
  },
  {
    "w": "vlieger",
    "plaatje": "🪁",
    "niveau": 3
  },
  {
    "w": "blokje",
    "plaatje": "🧱",
    "niveau": 1
  },
  {
    "w": "puzzel",
    "plaatje": "🧩",
    "niveau": 2
  },
  {
    "w": "robot",
    "plaatje": "🤖",
    "niveau": 2
  },
  {
    "w": "draak",
    "plaatje": "🐉",
    "niveau": 2
  },
  {
    "w": "dinosaurus",
    "plaatje": "🦕",
    "niveau": 2
  },
  {
    "w": "eenhoorn",
    "plaatje": "🦄",
    "niveau": 2
  },
  {
    "w": "spook",
    "plaatje": "👻",
    "niveau": 2
  },
  {
    "w": "worm",
    "plaatje": "🪱",
    "niveau": 2
  },
  {
    "w": "worst",
    "plaatje": "🌭",
    "niveau": 2
  },
  {
    "w": "popcorn",
    "plaatje": "🍿",
    "niveau": 2
  },
  {
    "w": "donut",
    "plaatje": "🍩",
    "niveau": 2
  },
  {
    "w": "kerstboom",
    "plaatje": "🎄",
    "niveau": 2
  },
  {
    "w": "sneeuwpop",
    "plaatje": "⛄",
    "niveau": 2
  },
  {
    "w": "kaars",
    "plaatje": "🕯️",
    "niveau": 2
  },
  {
    "w": "tent",
    "plaatje": "⛺",
    "niveau": 2
  },
  {
    "w": "ski",
    "plaatje": "🎿",
    "niveau": 3
  },
  {
    "w": "anker",
    "plaatje": "⚓",
    "niveau": 3
  },
  {
    "w": "kompas",
    "plaatje": "🧭",
    "niveau": 3
  },
  {
    "w": "viool",
    "plaatje": "🎻",
    "niveau": 3
  },
  {
    "w": "trompet",
    "plaatje": "🎺",
    "niveau": 3
  },
  {
    "w": "microfoon",
    "plaatje": "🎤",
    "niveau": 3
  },
  {
    "w": "koptelefoon",
    "plaatje": "🎧",
    "niveau": 3
  },
  {
    "w": "parachute",
    "plaatje": "🪂",
    "niveau": 3
  }
];
if (typeof module !== 'undefined') module.exports = MEMORY;
