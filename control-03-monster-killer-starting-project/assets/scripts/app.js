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

function attack(mode) {
  let maxDamage
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
    addLog(`Player ATTACKED for ${maxDamage}`)
  } else if (mode === 'STRONG_ATTACK') {
    let critical = Math.floor(Math.random(10)* 10)
    maxDamage = ATTACK_VALUE + critical;
    addLog(`Player STRONG ATTACKED for ${maxDamage}`)
  }

  if (playerHealth > 0 && monsterHealth > 0) {
    const playerAttackDamage = dealMonsterDamage(maxDamage);
    monsterHealth -= playerAttackDamage;
    const monsterAttackDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playerHealth -= monsterAttackDamage;
    console.log(maxDamage);  
  }

  if (monsterHealth <= 0) {
    alert('The Monster has been vanquished!');
    addLog(`Player has succeeded`)
  } else if (playerHealth <= 0) {
    alert('You have been vanquished!');
    addLog(`Player has died`)
  }
}

function strongAttackHandler() {
  attack('STRONG_ATTACK');
}

function healPlayer() {
  restoreHealth = Math.floor(Math.random(10) * 10);
  increasePlayerHealth(restoreHealth);
  playerHealth += restoreHealth;
  addLog(`Player Healed : ${restoreHealth}`)
}

function showLog(action) {
  // console.log('Show Logs');
  console.log(logs)
}

function addLog(log){
  logs.push(log)
}