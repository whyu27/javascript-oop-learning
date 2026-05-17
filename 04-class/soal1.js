// ===============================
// 🟢 SOAL 1 — CLASS: Digital Wallet System
// ===============================

// Buat class bernama Wallet yang:
// - memiliki property:
//   owner (string)
//   balance (number, default = 0)

// - memiliki method:
//   1. topUp(amount)
//      → menambah balance
//      → tampilkan: "Top up berhasil, saldo sekarang RpX"

//   2. pay(amount, merchant)
//      → jika saldo cukup:
//        kurangi balance
//        tampilkan: "Pembayaran ke Merchant berhasil"
//      → jika tidak cukup:
//        tampilkan: "Saldo tidak cukup"

//   3. transfer(amount, targetWallet)
//      → mengurangi saldo wallet sekarang
//      → menambah saldo targetWallet
//      → tampilkan:
//        "Transfer ke OwnerTarget berhasil"

//   4. checkBalance()
//      → tampilkan saldo saat ini

// Tugas:
// 1. Buat 2 object Wallet
// 2. Lakukan topUp pada keduanya
// 3. Lakukan transfer antar wallet
// 4. Lakukan pembayaran
// 5. Tampilkan saldo akhir

// Target output:

// Top up berhasil, saldo sekarang Rp100000
// Top up berhasil, saldo sekarang Rp50000

// Transfer ke Budi berhasil
// Saldo sekarang Rp50000

// Pembayaran ke Tokopedia berhasil
// Saldo sekarang Rp20000

// Saldo akhir:
// Andi: Rp20000
// Budi: Rp100000


// Let's code
class Wallet{
    constructor(owner, balance = 0){
        this.owner = owner;
        this.balance = balance;
    }

    topUp(amount){
        this.balance += amount;
        console.log(`Top up berhasil, saldo sekarang Rp${this.balance}`);
    }

    pay(amount, merchant){
        if(this.balance >= amount){
            this.balance -= amount;

            console.log(`Pembayaran ke ${merchant} berhasil`);
            console.log(`Saldo sekarang Rp${this.balance}`);
        }
        else{
            console.log('Saldo tidak cukup');
        }
    }

    transfer(amount, targetWallet){
        if(this.balance >= amount){
            this.balance -= amount;
            targetWallet.balance += amount;

            console.log(`Transfer ke ${targetWallet.owner} berhasil`);
            console.log(`Saldo sekarang Rp${this.balance}`);
        }
        else{
            console.log('Saldo tidak cukup');
        }
    }

    checkBalance(){
        console.log(`${this.owner}: Rp${this.balance}`);
    }
}

const andi = new Wallet('Andi');
const budi = new Wallet('Budi');

andi.topUp(100000);
budi.topUp(50000);

andi.transfer(50000, budi);

andi.pay(30000, 'Tokopedia');

console.log('Saldo akhir:')
andi.checkBalance();
budi.checkBalance();