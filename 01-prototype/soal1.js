// ===============================
// 🟢 SOAL 1 — Prototype dasar
// ===============================

// Buat constructor User yang punya:
// - property nama
// - method salam() lewat prototype

// Tugas:
// 1. Buat 2 object User
// 2. Panggil method salam()

// Target output:
// Hallo Wahyu
// Hallo Budi


// Let's code
function User(nama){
    this.nama = nama;
}

User.prototype.salam = function(){
    return `Hallo ${this.nama}`;
}

let wahyu = new User('Wahyu');
let budi = new User('Budi');

console.log(wahyu.salam());
console.log(budi.salam());