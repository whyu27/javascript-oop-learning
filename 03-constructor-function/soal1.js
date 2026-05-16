// ===============================
// 🟢 SOAL 1 — Constructor Function Dasar (Versi Baru)
// ===============================

// Buat constructor function bernama Buku yang:
// - memiliki property: judul, penulis, tahunTerbit
// - memiliki method prototype: infoBuku()

// Method infoBuku() harus mengembalikan string:
// "Buku berjudul 'Judul' ditulis oleh Penulis (Tahun)"

// Tugas:
// 1. Buat 2 object buku menggunakan keyword `new`
// 2. Tampilkan hasil method infoBuku()

// Target output:
// Buku berjudul 'Laskar Pelangi' ditulis oleh Andrea Hirata (2005)
// Buku berjudul 'Bumi Manusia' ditulis oleh Pramoedya Ananta Toer (1980)


// Let's code
function Buku(judul, penulis, tahunTerbit){
    this.judul = judul;
    this.penulis = penulis;
    this.tahunTerbit = tahunTerbit;
}

Buku.prototype.infoBuku = function(){
    const {judul, penulis, tahunTerbit} = this;
    return `Buku berjudul '${judul}' ditulis oleh ${penulis} (${tahunTerbit})`;
}

const buku1 = new Buku('Laskar Pelangi', 'Andrea Hirata', 2005);
const buku2 = new Buku('Bumi Manusia', 'Pramoedya Ananta Toer', 1980);

console.log(buku1.infoBuku());
console.log(buku2.infoBuku());