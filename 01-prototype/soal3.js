
// ===============================
// 🔴 SOAL 3 — Array Prototype Custom
// ===============================

// Diberikan array:
// let angka = [1, 2, 3];

// Tugas:
// 1. Tambahkan method "jumlah" ke Array.prototype
// 2. Method harus mengembalikan total isi array

// Target output:
// 6

// Bonus:
// Pastikan bisa dipakai juga di array lain:
// [10, 20].jumlah() // 30


// Let's code
let angka = [1, 2, 3];
let data = [10, 20];

Array.prototype.jumlah = function(){
    return this.reduce((sum, current) => sum + current, 0);
}
console.log(angka.jumlah());
console.log(data.jumlah());