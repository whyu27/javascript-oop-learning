// ===============================
// 🟡 SOAL 2 — Factory Function (Manipulasi Data & State)
// ===============================

// Buat factory function bernama buatLampu yang:
// - memiliki property: status (awal "mati")
// - memiliki method: nyalakan(), matikan(), cekStatus()

// Tugas:
// 1. Buat 1 object lampu
// 2. Panggil method secara bergantian
// 3. Tampilkan status setiap perubahan

// Target output:
// Lampu menyala
// Lampu mati
// Status: mati


// Let's code
function buatLampu(){
    return{
        status : 'mati',

        nyalakan : function(){
            this.status = 'menyala';
            return `Lampu ${this.status}`
        },
        
        matikan : function(){
            this.status = 'mati'
            return `Lampu ${this.status}`
        },

        cekStatus : function(){
            return `Status: ${this.status}`;
        }
    }
}

const lampu = buatLampu();
console.log(lampu.nyalakan());
console.log(lampu.matikan());
console.log(lampu.cekStatus());