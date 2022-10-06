const MONSTER_ATTACK_VALUE = 13;
const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let playerHealth = chosenMaxLife;
let monsterHealth = chosenMaxLife;
let logs = [];

// Event Listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', showLog);

// Sets users health
adjustHealthBars(chosenMaxLife);

function attackHandler(mode) {
  attack('ATTACK');
}

function strongAttackHandler() {
  attack('STRONG_ATTACK');
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
  if (monsterHealth <= 0) {
    alert('The Monster has been vanquished!');
    addLog(`Player has succeeded`);
  } else if (playerHealth <= 0) {
    alert('You have been vanquished!');
    addLog(`Player has died`);
  }
}

function attack(mode) {
  let maxDamage;

  // determines which attack value to use normal or strong
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
    addLog(`Player ATTACKED for ${maxDamage}`);
  } else if (mode === 'STRONG_ATTACK') {
    let critical = Math.floor(Math.random(10) * 10);
    maxDamage = ATTACK_VALUE + critical;
    addLog(`Player STRONG ATTACKED for ${maxDamage}`);
  }

  // only runs if both monster and player are alive
  if (playerHealth > 0 && monsterHealth > 0) {
    playerAttack(maxDamage);
    monsterAttack();
  }
  winOrLose();
}

function healPlayer() {
  console.log(playerHealth)
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

function showLog() {
  console.log(logs);
}

function addLog(log) {
  logs.push(log);
}
