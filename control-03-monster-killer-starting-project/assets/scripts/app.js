const ATTACK_VALUE = 10; // Global hardcoded variable
const MONSTER_ATTACK_VALUE = 13;
let chosenMaxLife = 100;
let playerHealth = chosenMaxLife;
let monsterHealth = chosenMaxLife;

// Event Listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', showLog);

// Sets users health
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  if(playerHealth > 0 && monsterHealth > 0){
    
    const playerAttackDamage = dealMonsterDamage(ATTACK_VALUE);
    monsterHealth -= playerAttackDamage;
    
    const monsterAttackDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playerHealth -= monsterAttackDamage;

    if(monsterHealth <= 0){
      alert('The Monster has been vanquished!');
    }else if(playerHealth <= 0){
      alert('You have been vanquished!')
    }
  }
}

function healPlayer() {
  restoreHealth = Math.floor(Math.random(10) * 10);
  console.log(restoreHealth);
  increasePlayerHealth(restoreHealth);
  playerHealth +=restoreHealth;
}

function strongAttack() {
  console.log('Strong Attack');
}
function showLog() {
  console.log('Show Logs');
}
