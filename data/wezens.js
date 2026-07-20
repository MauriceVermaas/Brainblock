// data/wezens.js — rondlopend leven in de bouwmodus, per wereld + wat je bij kunt kopen.
// Elk figuurtje: { emoji, afbeelding? }. Een eigen afbeelding (pad of data-URL) vervangt de emoji.
// Te bewerken in beheer.html (tab "Dieren"): emoji wijzigen of een eigen plaatje uploaden.
var WEZENS = {
  start:    [{emoji:"🐔",afbeelding:""},{emoji:"🐑",afbeelding:""},{emoji:"🐷",afbeelding:""},{emoji:"🐴",afbeelding:""},{emoji:"🐤",afbeelding:""},{emoji:"🐕",afbeelding:""},{emoji:"🧒",afbeelding:""},{emoji:"🧑‍🌾",afbeelding:""}],
  strand:   [{emoji:"🦀",afbeelding:""},{emoji:"🦆",afbeelding:""},{emoji:"🐕",afbeelding:""},{emoji:"🐤",afbeelding:""},{emoji:"🧒",afbeelding:""},{emoji:"🏄",afbeelding:""}],
  park:     [{emoji:"🐕",afbeelding:""},{emoji:"🐇",afbeelding:""},{emoji:"🦆",afbeelding:""},{emoji:"🐿️",afbeelding:""},{emoji:"🐈",afbeelding:""},{emoji:"🧒",afbeelding:""},{emoji:"🧑",afbeelding:""}],
  huis:     [{emoji:"🐈",afbeelding:""},{emoji:"🐕",afbeelding:""},{emoji:"🐁",afbeelding:""},{emoji:"🧒",afbeelding:""}],
  koopbaar: [{emoji:"🐔",afbeelding:""},{emoji:"🐑",afbeelding:""},{emoji:"🐕",afbeelding:""},{emoji:"🐇",afbeelding:""},{emoji:"🐤",afbeelding:""},{emoji:"🐈",afbeelding:""},{emoji:"🧒",afbeelding:""}]
};
if (typeof module !== 'undefined') module.exports = WEZENS;
