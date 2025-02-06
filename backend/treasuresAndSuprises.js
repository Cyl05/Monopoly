function advanceToGo(playerId) {
  players[playerId].pos = 0;
  return { posChange: true, jailed: false };
}

function goToNewYork(playerId) {
  players[playerId].pos = 40;
  return { posChange: true, jailed: false };
}

function goToShangai(playerId) {
  players[playerId].pos = 21;
  return { posChange: true, jailed: false };
}
function goToJail(playerId) {
  players[playerId].pos = 10;
  return { posChange: true, jailed: true };
}

function fine(playerId) {
  players[playerId].cash -= Math.floor(Math.random() * 10) + 1;
  return { posChange: false, jailed: false };
}

function collect(playerId) {
  players[playerId].cash += Math.floor(Math.random() * 10) + 1;
  return { posChange: true, jailed: false };
}

const functions = [
  advanceToGo,
  goToNewYork,
  goToShangai,
  goToJail,
  fine,
  fine,
  fine,
  collect,
  collect,
  collect,
];

export default functions;
