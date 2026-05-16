// ===============================
// 🟡 SOAL 2 — Constructor Function (Kasus Real Aplikasi)
// ===============================

// Buat constructor function bernama BankAccount yang:
// - memiliki property: namaPemilik, saldo
// - memiliki method prototype:
//   1. setor(uang) → menambah saldo
//   2. tarik(uang) → mengurangi saldo
//   3. cekSaldo() → menampilkan saldo saat ini

// Aturan:
// - saldo tidak boleh negatif
// - jika tarik melebihi saldo, tampilkan:
//   "Saldo tidak cukup"

// Tugas:
// 1. Buat 2 object rekening bank
// 2. Lakukan beberapa transaksi
// 3. Tampilkan hasil saldo akhir

// Contoh output:
// Saldo saat ini: Rp1500000
// Saldo saat ini: Rp1200000
// Saldo tidak cukup


// Let's code
function BankAccount(namaPemilik, saldo){
    this.namaPemilik = namaPemilik;
    this.saldo = saldo < 0 ? 0 : saldo;

}

BankAccount.prototype.setor = function(uang){
    this.saldo += uang;
}

BankAccount.prototype.tarik = function(uang){
    if(uang > this.saldo){
        console.log('Saldo tidak cukup');
        return;
    }

    this.saldo -= uang;

}

BankAccount.prototype.cekSaldo = function(){
    console.log(`Saldo saat ini: Rp${this.saldo}`);
}

const bri = new BankAccount('Wahyu', 1000000);
const bca = new BankAccount('Alya', 1000000);

bri.setor(200000);
bri.setor(300000);
bri.setor(500000);
bri.tarik(500000);
bri.cekSaldo();

bca.setor(500000);
bca.tarik(300000);
bca.cekSaldo();

bca.tarik(1500000);