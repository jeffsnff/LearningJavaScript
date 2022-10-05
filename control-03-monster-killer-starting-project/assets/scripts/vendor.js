const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage, perryChance) {
  // Perry Chance
  
  if (perry(perryChance)) {
    console.log('The Monster Perried your attack!');
    increaseMonsterHealth(Math.random(10));
    console.log('The Monster Healed!');
    return;
  } else {
    const dealtDamage = Math.random() * damage;
    monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
    return dealtDamage;
  }
}

function dealPlayerDamage(damage, perryChance) {
  // Perry Chance
  if (perry(perryChance)) {
    console.log("You Perried the Monsters'!");
    return;
  } else {
    const dealtDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealtDamage;
    return dealtDamage;
  }
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

function increaseMonsterHealth(health) {
  monsterHealthBar.value = +monsterHealthBar.value + health;
}

function perry(chance) {
  let perryChance = Math.floor(Math.random(10) * 10 - chance);
  console.log(perryChance)
  if (perryChance >= 5) {
    return true;
  }
}
