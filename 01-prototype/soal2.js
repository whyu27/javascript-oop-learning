// ===============================
// 🟡 SOAL 2 — Function biasa vs Prototype
// ===============================

// Buat 2 constructor:

// A. Mobil (tanpa prototype)
// - punya method jalan() di dalam constructor

// B. Motor (pakai prototype)
// - method jalan() dibuat di prototype

// Tugas:
// 1. Buat masing-masing 2 object
// 2. Bandingkan reference function:

// console.log(obj1.jalan === obj2.jalan);

// Tujuan:
// lihat perbedaan function biasa vs prototype


// Let's code
function Mobil(nama){
    this.nama = nama;

    this.jalan = function(){
        return `Mobil ${this.nama} mampu berjalan hingga 200km/jam`;
    }
}

let avanza = new Mobil('Avanza');
let xenia = new Mobil('Xenia');
console.log(avanza.jalan());
console.log(xenia.jalan());
console.log(avanza.jalan === xenia.jalan);


function Motor(nama){
    this.nama = nama;
}

Motor.prototype.jalan = function(){
    return `Motor ${this.nama} mampu berjalan hingga 130km/jam`;
}

let beat = new Motor('Beat');
let vario = new Motor('Vario');
console.log(beat.jalan());
console.log(vario.jalan());


console.log(beat.jalan === vario.jalan);