// ===============================
// 🟢 SOAL 1 — Factory Function Dasar
// ===============================

// Buat factory function bernama buatMahasiswa yang:
// - memiliki property: nama, jurusan, umur
// - memiliki method: perkenalan()

// Tugas:
// 1. Buat 2 object mahasiswa
// 2. Panggil method perkenalan()

// Target output:
// Halo, nama saya Wahyu dari jurusan Informatika umur 20
// Halo, nama saya Alya dari jurusan Psikologi umur 21


// Let's code
function buatMahasiswa(nama, jurusan, umur){
    return{
        nama,
        jurusan,
        umur,

        perkenalan : function(){
            return `Halo, nama saya ${nama} dari jurusan ${jurusan} umur ${umur}`;
        }
    }
}

const mahasiswa1 = buatMahasiswa('Wahyu', 'Informatika', 20);
const mahasiswa2 = buatMahasiswa('Alya', 'Psikologi', 21);

console.log(mahasiswa1.perkenalan());
console.log(mahasiswa2.perkenalan());