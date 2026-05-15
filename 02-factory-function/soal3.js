// ===============================
// 🔴 SOAL 3 — Factory Function (Mini Game Logic)
// ===============================

// Buat factory function bernama buatKarakterGame yang:
// - memiliki property: nama, hp (100), power
// - memiliki method: serang(target), terkenaSerang(damage), status()

// Aturan:
// - serang(target) mengurangi hp target sebesar power
// - terkenaSerang mengurangi hp sendiri
// - status menampilkan kondisi HP

// Tugas:
// 1. Buat 2 karakter
// 2. Lakukan pertarungan 2–3 kali
// 3. Tampilkan status akhir kedua karakter

// Target output (contoh konsep):
// Andi menyerang Budi
// Budi HP tersisa 70
// ...


// Let's code
function buatKarakterGame(nama, power){
    return{
        nama,
        hp : 100,
        power,

        serang : function(target){
            console.log(`${this.nama} menyerang ${target.nama}`);
            target.terkenaSerang(this.power);
        },

        terkenaSerang : function(damage){
            this.hp = this.hp - damage;
        },

        status : function(){
            console.log(`HP ${this.nama} tersisa ${this.hp}`);
        }
    }
}

let char1 = buatKarakterGame('Andi', 20);
let char2 = buatKarakterGame('Budi', 10);

char1.serang(char2);
char2.serang(char1);
char2.serang(char1);

char1.status();
char2.status();