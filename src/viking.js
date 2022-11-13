// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
         return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name; 
    }
    //attack inherited
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    //constructor inherited
    //attack inherited
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return 'A Saxon has died in combat';
        }
    }
}

// War (Bonus iteration 4)
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(oneViking) {
        this.vikingArmy.push(oneViking) 
    }
    addSaxon(oneSaxon) {
        this.saxonArmy.push(oneSaxon);
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(this.randomSaxon), 1);
        }
        return result;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return result;
    }

    /*Refactor (Bonus iteration 5)
    In stand by:
    Refactor these two attacks methods in one that can be applied to both cases.*/

    showStatus() {
        if (!saxonArmy.length) {
            console.log( 'Vikings have won the war of the century!')
        }
        else if (!vikingArmy.length) {
            return 'Saxons hace fougth for their lives and survived another day...'
        }
        else if (vikingArmy.length === 1 && saxonArmy.length === 1) {
            return 'Vikings and Saxons are still in thick of battle.'
        }
        else { return '¿How are we?'}
    }
}
