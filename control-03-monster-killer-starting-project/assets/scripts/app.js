const MONSTER_ATTACK_VALUE = 13;
const ATTACK_VALUE = 10;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
let hasBonusLife = true;
let gameOver = false;
let startGame = false;
let logs = [];
let chosenMaxLife;
let playerHealth;
let monsterHealth;

// Event Listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', showLogHandler);

// Sets users health
while (!startGame) {
  onStart();
}

function onStart() {
  const userValue = prompt('What is the maximum life for the monster and you?');
  chosenMaxLife = parseInt(userValue);

  if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
  }

  playerHealth = chosenMaxLife;
  monsterHealth = chosenMaxLife;
  adjustHealthBars(chosenMaxLife);
  startGame = true;
}
function reset() {
  playerHealth = chosenMaxLife;
  monsterHealth = chosenMaxLife;
  hasBonusLife = true;
  gameOver = false;
  resetGame(chosenMaxLife);
  addLog(`Game has been reset`);
}

function attackHandler() {
  attack(MODE_ATTACK);
}

function strongAttackHandler() {
  attack(MODE_STRONG_ATTACK);
}

function monsterAttack() {
  const monsterAttackDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerHealth -= monsterAttackDamage;
  addLog(`Monster Attacked for ${monsterAttackDamage}`);
}

function playerAttack(maxDamage) {
  const playerAttackDamage = dealMonsterDamage(maxDamage);
  monsterHealth -= playerAttackDamage;
}

function winOrLose() {
  if (playerHealth <= 0 && hasBonusLife) {
    alert('The Lord has GIVITH!');
    playerHealth = chosenMaxLife / 2;
    increasePlayerHealth(playerHealth);
    hasBonusLife = false;
    bonusLifeEl.innerHTML = 0;
    addLog(`Player has been healed 100%!`);
  }
  if (monsterHealth <= 0 && playerHealth > 0) {
    alert('The Monster has been vanquished!');
    addLog(`Player has succeeded`);
    gameOver = true;
  } else if (playerHealth <= 0 && monsterHealth > 0) {
    alert('You have been vanquished!');
    addLog(`Player has died`);
    gameOver = true;
  } else if (playerHealth <= 0 && monsterHealth <= 0) {
    alert('The realm is safe from the monster, but you have died in battle!');
    addLog(`The monster has been slain, but you lost your life doing so.`);
    gameOver = true;
  }

  if (gameOver) {
    reset();
  }
}

function attack(mode) {
  let maxDamage;

  // determines which attack value to use normal or strong
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    addLog(`Player ${MODE_ATTACK} for ${maxDamage}`);
  } else if (mode === MODE_STRONG_ATTACK) {
    let critical = Math.floor(Math.random(10) * 10);
    maxDamage = ATTACK_VALUE + critical;
    addLog(`Player ${MODE_STRONG_ATTACK} for ${maxDamage}`);
  }

  // only runs if both monster and player are alive
  if (playerHealth > 0 && monsterHealth > 0) {
    playerAttack(maxDamage);
    monsterAttack();
  }
  winOrLose();
}

function healPlayer() {
  if (playerHealth <= 0 || monsterHealth <= 0) {
    return;
  }
  if (playerHealth >= chosenMaxLife) {
    console.log('You are at max health!');
    return;
  }
  restoreHealth = Math.floor(Math.random(10) * 10);
  // increases player health bar
  increasePlayerHealth(restoreHealth);
  // increases player health
  playerHealth += restoreHealth;

  addLog(`Player Healed : ${restoreHealth}`);
  monsterAttack();
  winOrLose();
}

function showLogHandler() {
  console.log(logs);
}

function addLog(log) {
  logs.push(log);
}