// data/talen.js — woordenschat Engels 🇬🇧 en Spaans 🇪🇸.
// Voor ouders: elk item is { nl, en, es, plaatje, niveau }. Het kind ziet plaatje + NL-woord
// en kiest het juiste woord in de doeltaal. Elk niveau bouwt op het vorige voort.

var TALEN = [
  {
    "nl": "kat",
    "en": "cat",
    "es": "gato",
    "plaatje": "🐱",
    "niveau": 1
  },
  {
    "nl": "hond",
    "en": "dog",
    "es": "perro",
    "plaatje": "🐶",
    "niveau": 1
  },
  {
    "nl": "vis",
    "en": "fish",
    "es": "pez",
    "plaatje": "🐟",
    "niveau": 1
  },
  {
    "nl": "koe",
    "en": "cow",
    "es": "vaca",
    "plaatje": "🐮",
    "niveau": 1
  },
  {
    "nl": "paard",
    "en": "horse",
    "es": "caballo",
    "plaatje": "🐴",
    "niveau": 1
  },
  {
    "nl": "boom",
    "en": "tree",
    "es": "árbol",
    "plaatje": "🌳",
    "niveau": 1
  },
  {
    "nl": "bloem",
    "en": "flower",
    "es": "flor",
    "plaatje": "🌸",
    "niveau": 1
  },
  {
    "nl": "zon",
    "en": "sun",
    "es": "sol",
    "plaatje": "☀️",
    "niveau": 1
  },
  {
    "nl": "maan",
    "en": "moon",
    "es": "luna",
    "plaatje": "🌙",
    "niveau": 1
  },
  {
    "nl": "huis",
    "en": "house",
    "es": "casa",
    "plaatje": "🏠",
    "niveau": 1
  },
  {
    "nl": "auto",
    "en": "car",
    "es": "coche",
    "plaatje": "🚗",
    "niveau": 1
  },
  {
    "nl": "bal",
    "en": "ball",
    "es": "pelota",
    "plaatje": "⚽",
    "niveau": 1
  },
  {
    "nl": "appel",
    "en": "apple",
    "es": "manzana",
    "plaatje": "🍎",
    "niveau": 1
  },
  {
    "nl": "boek",
    "en": "book",
    "es": "libro",
    "plaatje": "📖",
    "niveau": 1
  },
  {
    "nl": "water",
    "en": "water",
    "es": "agua",
    "plaatje": "💧",
    "niveau": 1
  },
  {
    "nl": "rood",
    "en": "red",
    "es": "rojo",
    "plaatje": "🟥",
    "niveau": 2
  },
  {
    "nl": "blauw",
    "en": "blue",
    "es": "azul",
    "plaatje": "🟦",
    "niveau": 2
  },
  {
    "nl": "groen",
    "en": "green",
    "es": "verde",
    "plaatje": "🟩",
    "niveau": 2
  },
  {
    "nl": "geel",
    "en": "yellow",
    "es": "amarillo",
    "plaatje": "🟨",
    "niveau": 2
  },
  {
    "nl": "vogel",
    "en": "bird",
    "es": "pájaro",
    "plaatje": "🐦",
    "niveau": 2
  },
  {
    "nl": "boot",
    "en": "boat",
    "es": "barco",
    "plaatje": "⛵",
    "niveau": 2
  },
  {
    "nl": "ster",
    "en": "star",
    "es": "estrella",
    "plaatje": "⭐",
    "niveau": 2
  },
  {
    "nl": "taart",
    "en": "cake",
    "es": "pastel",
    "plaatje": "🎂",
    "niveau": 2
  },
  {
    "nl": "melk",
    "en": "milk",
    "es": "leche",
    "plaatje": "🥛",
    "niveau": 2
  },
  {
    "nl": "brood",
    "en": "bread",
    "es": "pan",
    "plaatje": "🍞",
    "niveau": 2
  },
  {
    "nl": "hand",
    "en": "hand",
    "es": "mano",
    "plaatje": "✋",
    "niveau": 2
  },
  {
    "nl": "oog",
    "en": "eye",
    "es": "ojo",
    "plaatje": "👁️",
    "niveau": 2
  },
  {
    "nl": "één",
    "en": "one",
    "es": "uno",
    "plaatje": "1️⃣",
    "niveau": 2
  },
  {
    "nl": "twee",
    "en": "two",
    "es": "dos",
    "plaatje": "2️⃣",
    "niveau": 2
  },
  {
    "nl": "drie",
    "en": "three",
    "es": "tres",
    "plaatje": "3️⃣",
    "niveau": 2
  },
  {
    "nl": "regen",
    "en": "rain",
    "es": "lluvia",
    "plaatje": "🌧️",
    "niveau": 3
  },
  {
    "nl": "sneeuw",
    "en": "snow",
    "es": "nieve",
    "plaatje": "❄️",
    "niveau": 3
  },
  {
    "nl": "vlinder",
    "en": "butterfly",
    "es": "mariposa",
    "plaatje": "🦋",
    "niveau": 3
  },
  {
    "nl": "kikker",
    "en": "frog",
    "es": "rana",
    "plaatje": "🐸",
    "niveau": 3
  },
  {
    "nl": "raket",
    "en": "rocket",
    "es": "cohete",
    "plaatje": "🚀",
    "niveau": 3
  },
  {
    "nl": "regenboog",
    "en": "rainbow",
    "es": "arcoíris",
    "plaatje": "🌈",
    "niveau": 3
  },
  {
    "nl": "school",
    "en": "school",
    "es": "escuela",
    "plaatje": "🏫",
    "niveau": 3
  },
  {
    "nl": "vriend",
    "en": "friend",
    "es": "amigo",
    "plaatje": "🧑‍🤝‍🧑",
    "niveau": 3
  },
  {
    "nl": "gelukkig",
    "en": "happy",
    "es": "feliz",
    "plaatje": "😀",
    "niveau": 3
  },
  {
    "nl": "groot",
    "en": "big",
    "es": "grande",
    "plaatje": "🐘",
    "niveau": 3
  },
  {
    "nl": "klein",
    "en": "small",
    "es": "pequeño",
    "plaatje": "🐭",
    "niveau": 3
  },
  {
    "nl": "snel",
    "en": "fast",
    "es": "rápido",
    "plaatje": "⚡",
    "niveau": 3
  },
  {
    "nl": "berg",
    "en": "mountain",
    "es": "montaña",
    "plaatje": "⛰️",
    "niveau": 3
  },
  {
    "nl": "zee",
    "en": "sea",
    "es": "mar",
    "plaatje": "🌊",
    "niveau": 3
  },
  {
    "nl": "nacht",
    "en": "night",
    "es": "noche",
    "plaatje": "🌃",
    "niveau": 3
  },
  {
    "nl": "schaap",
    "en": "sheep",
    "es": "oveja",
    "plaatje": "🐑",
    "niveau": 2
  },
  {
    "nl": "varken",
    "en": "pig",
    "es": "cerdo",
    "plaatje": "🐷",
    "niveau": 1
  },
  {
    "nl": "kip",
    "en": "chicken",
    "es": "gallina",
    "plaatje": "🐔",
    "niveau": 1
  },
  {
    "nl": "eend",
    "en": "duck",
    "es": "pato",
    "plaatje": "🦆",
    "niveau": 1
  },
  {
    "nl": "konijn",
    "en": "rabbit",
    "es": "conejo",
    "plaatje": "🐰",
    "niveau": 1
  },
  {
    "nl": "muis",
    "en": "mouse",
    "es": "ratón",
    "plaatje": "🐭",
    "niveau": 1
  },
  {
    "nl": "beer",
    "en": "bear",
    "es": "oso",
    "plaatje": "🐻",
    "niveau": 2
  },
  {
    "nl": "leeuw",
    "en": "lion",
    "es": "león",
    "plaatje": "🦁",
    "niveau": 2
  },
  {
    "nl": "tijger",
    "en": "tiger",
    "es": "tigre",
    "plaatje": "🐯",
    "niveau": 2
  },
  {
    "nl": "olifant",
    "en": "elephant",
    "es": "elefante",
    "plaatje": "🐘",
    "niveau": 2
  },
  {
    "nl": "aap",
    "en": "monkey",
    "es": "mono",
    "plaatje": "🐵",
    "niveau": 2
  },
  {
    "nl": "giraf",
    "en": "giraffe",
    "es": "jirafa",
    "plaatje": "🦒",
    "niveau": 3
  },
  {
    "nl": "zebra",
    "en": "zebra",
    "es": "cebra",
    "plaatje": "🦓",
    "niveau": 3
  },
  {
    "nl": "slang",
    "en": "snake",
    "es": "serpiente",
    "plaatje": "🐍",
    "niveau": 2
  },
  {
    "nl": "schildpad",
    "en": "turtle",
    "es": "tortuga",
    "plaatje": "🐢",
    "niveau": 2
  },
  {
    "nl": "bij",
    "en": "bee",
    "es": "abeja",
    "plaatje": "🐝",
    "niveau": 2
  },
  {
    "nl": "mier",
    "en": "ant",
    "es": "hormiga",
    "plaatje": "🐜",
    "niveau": 2
  },
  {
    "nl": "uil",
    "en": "owl",
    "es": "búho",
    "plaatje": "🦉",
    "niveau": 2
  },
  {
    "nl": "pinguin",
    "en": "penguin",
    "es": "pingüino",
    "plaatje": "🐧",
    "niveau": 2
  },
  {
    "nl": "dolfijn",
    "en": "dolphin",
    "es": "delfín",
    "plaatje": "🐬",
    "niveau": 2
  },
  {
    "nl": "walvis",
    "en": "whale",
    "es": "ballena",
    "plaatje": "🐋",
    "niveau": 3
  },
  {
    "nl": "haai",
    "en": "shark",
    "es": "tiburón",
    "plaatje": "🦈",
    "niveau": 3
  },
  {
    "nl": "krab",
    "en": "crab",
    "es": "cangrejo",
    "plaatje": "🦀",
    "niveau": 2
  },
  {
    "nl": "octopus",
    "en": "octopus",
    "es": "pulpo",
    "plaatje": "🐙",
    "niveau": 3
  },
  {
    "nl": "vos",
    "en": "fox",
    "es": "zorro",
    "plaatje": "🦊",
    "niveau": 2
  },
  {
    "nl": "wolf",
    "en": "wolf",
    "es": "lobo",
    "plaatje": "🐺",
    "niveau": 2
  },
  {
    "nl": "hert",
    "en": "deer",
    "es": "ciervo",
    "plaatje": "🦌",
    "niveau": 3
  },
  {
    "nl": "slak",
    "en": "snail",
    "es": "caracol",
    "plaatje": "🐌",
    "niveau": 2
  },
  {
    "nl": "kameel",
    "en": "camel",
    "es": "camello",
    "plaatje": "🐫",
    "niveau": 3
  },
  {
    "nl": "poes",
    "en": "kitten",
    "es": "gatito",
    "plaatje": "🐈",
    "niveau": 1
  },
  {
    "nl": "hamster",
    "en": "hamster",
    "es": "hámster",
    "plaatje": "🐹",
    "niveau": 2
  },
  {
    "nl": "kalkoen",
    "en": "turkey",
    "es": "pavo",
    "plaatje": "🦃",
    "niveau": 3
  },
  {
    "nl": "banaan",
    "en": "banana",
    "es": "plátano",
    "plaatje": "🍌",
    "niveau": 1
  },
  {
    "nl": "druiven",
    "en": "grapes",
    "es": "uvas",
    "plaatje": "🍇",
    "niveau": 1
  },
  {
    "nl": "sinaasappel",
    "en": "orange",
    "es": "naranja",
    "plaatje": "🍊",
    "niveau": 2
  },
  {
    "nl": "aardbei",
    "en": "strawberry",
    "es": "fresa",
    "plaatje": "🍓",
    "niveau": 2
  },
  {
    "nl": "citroen",
    "en": "lemon",
    "es": "limón",
    "plaatje": "🍋",
    "niveau": 2
  },
  {
    "nl": "kers",
    "en": "cherry",
    "es": "cereza",
    "plaatje": "🍒",
    "niveau": 2
  },
  {
    "nl": "peer",
    "en": "pear",
    "es": "pera",
    "plaatje": "🍐",
    "niveau": 2
  },
  {
    "nl": "meloen",
    "en": "melon",
    "es": "melón",
    "plaatje": "🍉",
    "niveau": 3
  },
  {
    "nl": "ananas",
    "en": "pineapple",
    "es": "piña",
    "plaatje": "🍍",
    "niveau": 3
  },
  {
    "nl": "perzik",
    "en": "peach",
    "es": "durazno",
    "plaatje": "🍑",
    "niveau": 3
  },
  {
    "nl": "kaas",
    "en": "cheese",
    "es": "queso",
    "plaatje": "🧀",
    "niveau": 1
  },
  {
    "nl": "ei",
    "en": "egg",
    "es": "huevo",
    "plaatje": "🥚",
    "niveau": 1
  },
  {
    "nl": "koekje",
    "en": "cookie",
    "es": "galleta",
    "plaatje": "🍪",
    "niveau": 2
  },
  {
    "nl": "ijs",
    "en": "ice cream",
    "es": "helado",
    "plaatje": "🍦",
    "niveau": 1
  },
  {
    "nl": "snoep",
    "en": "candy",
    "es": "dulce",
    "plaatje": "🍬",
    "niveau": 2
  },
  {
    "nl": "chocola",
    "en": "chocolate",
    "es": "chocolate",
    "plaatje": "🍫",
    "niveau": 2
  },
  {
    "nl": "pizza",
    "en": "pizza",
    "es": "pizza",
    "plaatje": "🍕",
    "niveau": 1
  },
  {
    "nl": "wortel",
    "en": "carrot",
    "es": "zanahoria",
    "plaatje": "🥕",
    "niveau": 2
  },
  {
    "nl": "tomaat",
    "en": "tomato",
    "es": "tomate",
    "plaatje": "🍅",
    "niveau": 1
  },
  {
    "nl": "mais",
    "en": "corn",
    "es": "maíz",
    "plaatje": "🌽",
    "niveau": 2
  },
  {
    "nl": "champignon",
    "en": "mushroom",
    "es": "champiñón",
    "plaatje": "🍄",
    "niveau": 2
  },
  {
    "nl": "broccoli",
    "en": "broccoli",
    "es": "brócoli",
    "plaatje": "🥦",
    "niveau": 3
  },
  {
    "nl": "aardappel",
    "en": "potato",
    "es": "papa",
    "plaatje": "🥔",
    "niveau": 2
  },
  {
    "nl": "druif",
    "en": "grape",
    "es": "uva",
    "plaatje": "🍇",
    "niveau": 2
  },
  {
    "nl": "hamburger",
    "en": "hamburger",
    "es": "hamburguesa",
    "plaatje": "🍔",
    "niveau": 2
  },
  {
    "nl": "frietjes",
    "en": "fries",
    "es": "papas fritas",
    "plaatje": "🍟",
    "niveau": 2
  },
  {
    "nl": "appelsap",
    "en": "juice",
    "es": "jugo",
    "plaatje": "🧃",
    "niveau": 2
  },
  {
    "nl": "honing",
    "en": "honey",
    "es": "miel",
    "plaatje": "🍯",
    "niveau": 3
  },
  {
    "nl": "wolk",
    "en": "cloud",
    "es": "nube",
    "plaatje": "☁️",
    "niveau": 1
  },
  {
    "nl": "blad",
    "en": "leaf",
    "es": "hoja",
    "plaatje": "🍃",
    "niveau": 2
  },
  {
    "nl": "gras",
    "en": "grass",
    "es": "hierba",
    "plaatje": "🌱",
    "niveau": 2
  },
  {
    "nl": "vuur",
    "en": "fire",
    "es": "fuego",
    "plaatje": "🔥",
    "niveau": 2
  },
  {
    "nl": "cactus",
    "en": "cactus",
    "es": "cactus",
    "plaatje": "🌵",
    "niveau": 3
  },
  {
    "nl": "palmboom",
    "en": "palm",
    "es": "palmera",
    "plaatje": "🌴",
    "niveau": 3
  },
  {
    "nl": "bliksem",
    "en": "lightning",
    "es": "rayo",
    "plaatje": "⚡",
    "niveau": 3
  },
  {
    "nl": "druppel",
    "en": "drop",
    "es": "gota",
    "plaatje": "💧",
    "niveau": 2
  },
  {
    "nl": "schelp",
    "en": "shell",
    "es": "concha",
    "plaatje": "🐚",
    "niveau": 3
  },
  {
    "nl": "vulkaan",
    "en": "volcano",
    "es": "volcán",
    "plaatje": "🌋",
    "niveau": 3
  },
  {
    "nl": "deur",
    "en": "door",
    "es": "puerta",
    "plaatje": "🚪",
    "niveau": 1
  },
  {
    "nl": "raam",
    "en": "window",
    "es": "ventana",
    "plaatje": "🪟",
    "niveau": 2
  },
  {
    "nl": "stoel",
    "en": "chair",
    "es": "silla",
    "plaatje": "🪑",
    "niveau": 2
  },
  {
    "nl": "bed",
    "en": "bed",
    "es": "cama",
    "plaatje": "🛏️",
    "niveau": 1
  },
  {
    "nl": "bank",
    "en": "couch",
    "es": "sofá",
    "plaatje": "🛋️",
    "niveau": 2
  },
  {
    "nl": "lamp",
    "en": "lamp",
    "es": "lámpara",
    "plaatje": "💡",
    "niveau": 2
  },
  {
    "nl": "klok",
    "en": "clock",
    "es": "reloj",
    "plaatje": "🕐",
    "niveau": 2
  },
  {
    "nl": "sleutel",
    "en": "key",
    "es": "llave",
    "plaatje": "🔑",
    "niveau": 2
  },
  {
    "nl": "pen",
    "en": "pen",
    "es": "bolígrafo",
    "plaatje": "🖊️",
    "niveau": 2
  },
  {
    "nl": "schaar",
    "en": "scissors",
    "es": "tijeras",
    "plaatje": "✂️",
    "niveau": 2
  },
  {
    "nl": "tas",
    "en": "bag",
    "es": "bolsa",
    "plaatje": "👜",
    "niveau": 2
  },
  {
    "nl": "ballon",
    "en": "balloon",
    "es": "globo",
    "plaatje": "🎈",
    "niveau": 1
  },
  {
    "nl": "cadeau",
    "en": "gift",
    "es": "regalo",
    "plaatje": "🎁",
    "niveau": 1
  },
  {
    "nl": "paraplu",
    "en": "umbrella",
    "es": "paraguas",
    "plaatje": "☂️",
    "niveau": 2
  },
  {
    "nl": "bril",
    "en": "glasses",
    "es": "gafas",
    "plaatje": "👓",
    "niveau": 2
  },
  {
    "nl": "hoed",
    "en": "hat",
    "es": "sombrero",
    "plaatje": "👒",
    "niveau": 2
  },
  {
    "nl": "schoen",
    "en": "shoe",
    "es": "zapato",
    "plaatje": "👟",
    "niveau": 1
  },
  {
    "nl": "sok",
    "en": "sock",
    "es": "calcetín",
    "plaatje": "🧦",
    "niveau": 2
  },
  {
    "nl": "jas",
    "en": "coat",
    "es": "abrigo",
    "plaatje": "🧥",
    "niveau": 2
  },
  {
    "nl": "shirt",
    "en": "shirt",
    "es": "camisa",
    "plaatje": "👕",
    "niveau": 1
  },
  {
    "nl": "broek",
    "en": "pants",
    "es": "pantalón",
    "plaatje": "👖",
    "niveau": 2
  },
  {
    "nl": "telefoon",
    "en": "phone",
    "es": "teléfono",
    "plaatje": "📱",
    "niveau": 2
  },
  {
    "nl": "camera",
    "en": "camera",
    "es": "cámara",
    "plaatje": "📷",
    "niveau": 2
  },
  {
    "nl": "potlood",
    "en": "pencil",
    "es": "lápiz",
    "plaatje": "✏️",
    "niveau": 1
  },
  {
    "nl": "kroon",
    "en": "crown",
    "es": "corona",
    "plaatje": "👑",
    "niveau": 2
  },
  {
    "nl": "bus",
    "en": "bus",
    "es": "autobús",
    "plaatje": "🚌",
    "niveau": 1
  },
  {
    "nl": "trein",
    "en": "train",
    "es": "tren",
    "plaatje": "🚆",
    "niveau": 2
  },
  {
    "nl": "fiets",
    "en": "bike",
    "es": "bicicleta",
    "plaatje": "🚲",
    "niveau": 1
  },
  {
    "nl": "vliegtuig",
    "en": "airplane",
    "es": "avión",
    "plaatje": "✈️",
    "niveau": 2
  },
  {
    "nl": "tractor",
    "en": "tractor",
    "es": "tractor",
    "plaatje": "🚜",
    "niveau": 3
  },
  {
    "nl": "brandweer",
    "en": "fire truck",
    "es": "bombero",
    "plaatje": "🚒",
    "niveau": 3
  },
  {
    "nl": "politie",
    "en": "police car",
    "es": "policía",
    "plaatje": "🚓",
    "niveau": 3
  },
  {
    "nl": "helikopter",
    "en": "helicopter",
    "es": "helicóptero",
    "plaatje": "🚁",
    "niveau": 3
  },
  {
    "nl": "motor",
    "en": "motorbike",
    "es": "moto",
    "plaatje": "🏍️",
    "niveau": 3
  },
  {
    "nl": "voet",
    "en": "foot",
    "es": "pie",
    "plaatje": "🦶",
    "niveau": 2
  },
  {
    "nl": "oor",
    "en": "ear",
    "es": "oreja",
    "plaatje": "👂",
    "niveau": 2
  },
  {
    "nl": "neus",
    "en": "nose",
    "es": "nariz",
    "plaatje": "👃",
    "niveau": 2
  },
  {
    "nl": "mond",
    "en": "mouth",
    "es": "boca",
    "plaatje": "👄",
    "niveau": 2
  },
  {
    "nl": "tand",
    "en": "tooth",
    "es": "diente",
    "plaatje": "🦷",
    "niveau": 2
  },
  {
    "nl": "hart",
    "en": "heart",
    "es": "corazón",
    "plaatje": "❤️",
    "niveau": 1
  },
  {
    "nl": "baby",
    "en": "baby",
    "es": "bebé",
    "plaatje": "👶",
    "niveau": 1
  },
  {
    "nl": "jongen",
    "en": "boy",
    "es": "niño",
    "plaatje": "👦",
    "niveau": 1
  },
  {
    "nl": "meisje",
    "en": "girl",
    "es": "niña",
    "plaatje": "👧",
    "niveau": 1
  },
  {
    "nl": "oma",
    "en": "grandma",
    "es": "abuela",
    "plaatje": "👵",
    "niveau": 2
  },
  {
    "nl": "opa",
    "en": "grandpa",
    "es": "abuelo",
    "plaatje": "👴",
    "niveau": 2
  },
  {
    "nl": "mama",
    "en": "mom",
    "es": "mamá",
    "plaatje": "👩",
    "niveau": 1
  },
  {
    "nl": "papa",
    "en": "dad",
    "es": "papá",
    "plaatje": "👨",
    "niveau": 1
  },
  {
    "nl": "paars",
    "en": "purple",
    "es": "morado",
    "plaatje": "🟣",
    "niveau": 2
  },
  {
    "nl": "oranje",
    "en": "orange",
    "es": "naranja",
    "plaatje": "🟠",
    "niveau": 2
  },
  {
    "nl": "zwart",
    "en": "black",
    "es": "negro",
    "plaatje": "⚫",
    "niveau": 2
  },
  {
    "nl": "wit",
    "en": "white",
    "es": "blanco",
    "plaatje": "⚪",
    "niveau": 2
  },
  {
    "nl": "voetbal",
    "en": "soccer",
    "es": "fútbol",
    "plaatje": "⚽",
    "niveau": 2
  },
  {
    "nl": "muziek",
    "en": "music",
    "es": "música",
    "plaatje": "🎵",
    "niveau": 2
  },
  {
    "nl": "gitaar",
    "en": "guitar",
    "es": "guitarra",
    "plaatje": "🎸",
    "niveau": 3
  },
  {
    "nl": "trommel",
    "en": "drum",
    "es": "tambor",
    "plaatje": "🥁",
    "niveau": 3
  },
  {
    "nl": "vlieger",
    "en": "kite",
    "es": "cometa",
    "plaatje": "🪁",
    "niveau": 3
  },
  {
    "nl": "blokje",
    "en": "block",
    "es": "bloque",
    "plaatje": "🧱",
    "niveau": 1
  },
  {
    "nl": "puzzel",
    "en": "puzzle",
    "es": "rompecabezas",
    "plaatje": "🧩",
    "niveau": 2
  },
  {
    "nl": "robot",
    "en": "robot",
    "es": "robot",
    "plaatje": "🤖",
    "niveau": 2
  },
  {
    "nl": "draak",
    "en": "dragon",
    "es": "dragón",
    "plaatje": "🐉",
    "niveau": 2
  },
  {
    "nl": "dinosaurus",
    "en": "dinosaur",
    "es": "dinosaurio",
    "plaatje": "🦕",
    "niveau": 2
  },
  {
    "nl": "eenhoorn",
    "en": "unicorn",
    "es": "unicornio",
    "plaatje": "🦄",
    "niveau": 2
  },
  {
    "nl": "spook",
    "en": "ghost",
    "es": "fantasma",
    "plaatje": "👻",
    "niveau": 2
  },
  {
    "nl": "worm",
    "en": "worm",
    "es": "gusano",
    "plaatje": "🪱",
    "niveau": 2
  },
  {
    "nl": "worst",
    "en": "sausage",
    "es": "salchicha",
    "plaatje": "🌭",
    "niveau": 2
  },
  {
    "nl": "popcorn",
    "en": "popcorn",
    "es": "palomitas",
    "plaatje": "🍿",
    "niveau": 2
  },
  {
    "nl": "donut",
    "en": "donut",
    "es": "dona",
    "plaatje": "🍩",
    "niveau": 2
  },
  {
    "nl": "kerstboom",
    "en": "christmas tree",
    "es": "árbol de navidad",
    "plaatje": "🎄",
    "niveau": 2
  },
  {
    "nl": "sneeuwpop",
    "en": "snowman",
    "es": "muñeco de nieve",
    "plaatje": "⛄",
    "niveau": 2
  },
  {
    "nl": "kaars",
    "en": "candle",
    "es": "vela",
    "plaatje": "🕯️",
    "niveau": 2
  },
  {
    "nl": "tent",
    "en": "tent",
    "es": "tienda",
    "plaatje": "⛺",
    "niveau": 2
  },
  {
    "nl": "ski",
    "en": "ski",
    "es": "esquí",
    "plaatje": "🎿",
    "niveau": 3
  },
  {
    "nl": "anker",
    "en": "anchor",
    "es": "ancla",
    "plaatje": "⚓",
    "niveau": 3
  },
  {
    "nl": "kompas",
    "en": "compass",
    "es": "brújula",
    "plaatje": "🧭",
    "niveau": 3
  },
  {
    "nl": "viool",
    "en": "violin",
    "es": "violín",
    "plaatje": "🎻",
    "niveau": 3
  },
  {
    "nl": "trompet",
    "en": "trumpet",
    "es": "trompeta",
    "plaatje": "🎺",
    "niveau": 3
  },
  {
    "nl": "microfoon",
    "en": "microphone",
    "es": "micrófono",
    "plaatje": "🎤",
    "niveau": 3
  },
  {
    "nl": "koptelefoon",
    "en": "headphones",
    "es": "auriculares",
    "plaatje": "🎧",
    "niveau": 3
  },
  {
    "nl": "parachute",
    "en": "parachute",
    "es": "paracaídas",
    "plaatje": "🪂",
    "niveau": 3
  }
];
if (typeof module !== 'undefined') module.exports = TALEN;
