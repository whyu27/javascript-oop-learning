// ===============================
// 🔥 SOAL 2 — GAME SYSTEM (INHERITANCE + DAMAGE + CRITICAL + ARMOR)
// ===============================

// Buat class parent bernama Character:
// - property:
//   name (string)
//   hp (number)
//   attack (number)

// - method:
//   1. takeDamage(damage)
//      → kurangi hp sebesar damage
//      → jika hp <= 0:
//          tampilkan: "Name kalah"
//          hp = 0
//      → jika masih hidup:
//          tampilkan: "Name HP tersisa: X"

// -------------------------------
// Buat class child bernama Hero (extends Character):
// - tambahan property:
//   critChance (number, 0 - 100)

// - method:
//   attackEnemy(enemy)
//   RULE:
//   - generate random 1 - 100
//   - jika <= critChance:
//       damage = attack * 2
//       tampilkan: "CRITICAL HIT!"
//   - jika tidak:
//       damage = attack
//       tampilkan: "Normal attack"

//   - panggil enemy.takeDamage(damage)
//   - tampilkan: "Hero menyerang EnemyName sebesar X damage"

// -------------------------------
// TUGAS:
// 1. Buat Hero:
//    name = "Archer"
//    hp = 100
//    attack = 20
//    critChance = 30

// 2. Buat Enemy (Character):
//    name = "Goblin"
//    hp = 80
//    attack = 10

// 3. Lakukan:
//    - attackEnemy 3 kali

// -------------------------------
// TARGET OUTPUT (MUNGKIN TIDAK SAMA KARENA SIFATNYA RANDOM):

// Normal attack
// Archer menyerang Goblin sebesar 20 damage
// Goblin HP tersisa: 60

// CRITICAL HIT!
// Archer menyerang Goblin sebesar 40 damage
// Goblin HP tersisa: 20

// Normal attack
// Archer menyerang Goblin sebesar 20 damage
// Goblin kalah


// Let's code
class Character {

    constructor(name, hp, attack){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
    }

    takeDamage(damage){
        this.hp -= damage;
        if(this.hp <= 0){
            this.hp = 0;
            console.log(`${this.name} kalah`);
        }
        else{
            console.log(`${this.name} HP tersisa: ${this.hp}`);
        }
    }
}

class Hero extends Character {

    constructor(name, hp, attack, critChance){

        super(name, hp, attack);

        this.critChance = critChance;
    }

    attackEnemy(enemy){
        let damage;
        let random = Math.floor(Math.random() * 100) + 1;

        if(random <= this.critChance){
            damage = this.attack * 2;
            console.log(`CRITICAL HIT!`);
        }
        else{
            damage = this.attack;
            console.log(`Normal attack`);
        }

        console.log(`${this.name} menyerang ${enemy.name} sebesar ${damage} damage`);
        enemy.takeDamage(damage)
    }

}


const archer = new Hero('Archer', 100, 20, 30);
const goblin = new Character('Goblin', 80, 10);

archer.attackEnemy(goblin);
archer.attackEnemy(goblin);
archer.attackEnemy(goblin);