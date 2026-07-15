// data/mascottes.js — de mascotte per thema (startscherm).
// Voor ouders/redacteuren: elk thema heeft een eigen maatje dat het kind begroet en aanmoedigt.
// Formaat per thema: { emoji, naam, zinnen:[...], afbeelding? }
//   emoji      — het figuurtje als emoji (gebruikt als er geen afbeelding is).
//   naam       — de naam van de mascotte.
//   zinnen     — aanmoedigingen die het maatje uitspreekt (minstens 1).
//   afbeelding — (optioneel) een eigen plaatje: een pad ("mascottes/bram.png") of een
//                data-URL uit het beheer. Staat er een afbeelding, dan toont de app die
//                in plaats van de emoji. Zo kun je de emoji's vervangen door eigen beelden.

var MASCOTTES = {
  craft:   { emoji:"🦫", naam:"Bram de Bouwbever", afbeelding:"", zinnen:["Zullen we samen blokjes hakken?","Elke som is een nieuw blokje voor je wereld!","Kom, we gaan bouwen!"] },
  galaxy:  { emoji:"👽", naam:"Kosmo", afbeelding:"", zinnen:["Klaar voor de lancering?","Elke ster die je verdient laat je verder reizen!","Op naar het volgende sterrenstelsel!"] },
  powerup: { emoji:"🍄", naam:"Turbo", afbeelding:"", zinnen:["Pak die power-up en ga ervoor!","Elk goed antwoord is een muntje extra!","Sprong-klaar? Let's go!"] },
  unicorn: { emoji:"🦄", naam:"Fee", afbeelding:"", zinnen:["Laten we samen dromen waarmaken!","Elk hartje maakt je droomwereld mooier!","Sprankelen maar!"] }
};

if (typeof module !== 'undefined') module.exports = MASCOTTES;
