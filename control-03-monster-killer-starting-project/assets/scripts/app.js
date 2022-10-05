const ATTACK_VALUE = 10; // Global hardcoded variable
let chosenMaxLife = 50; //


// Event Listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', showLog);

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  console.log(monsterHealthBar.value)
  dealMonsterDamage(ATTACK_VALUE, 0);
  dealPlayerDamage(ATTACK_VALUE, 0);
}

function healPlayer() {
  console.log('Player Healed');
  restoreHealth = Math.random(10);
  increasePlayerHealth(restoreHealth);
}

function strongAttack() {
  // console.log('Strong Attack');
  dealMonsterDamage(ATTACK_VALUE, 4);
  dealPlayerDamage(ATTACK_VALUE, 2)
}
function showLog() {
  console.log('Show Logs');
}
