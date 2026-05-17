// ===============================
// 🔥 SOAL 1 — BANK SYSTEM (INHERITANCE + LIMIT + FEE LOGIC)
// ===============================

// Buat class parent bernama Account:
// - property:
//   owner (string)
//   balance (number)

// - method:
//   1. deposit(amount)
//      → tambah balance
//      → tampilkan: "Deposit berhasil"
//      → tampilkan: "Saldo sekarang: RpX"

//   2. getBalance()
//      → tampilkan: "Saldo owner: RpX"

// -------------------------------
// Buat class child: SavingsAccount (extends Account)
// - tambahan property:
//   withdrawLimit (number)

// - override method:
//   withdraw(amount)
//   RULE:
//   - jika amount > withdrawLimit:
//       tampilkan: "Withdraw gagal: Melebihi limit penarikan"
//   - jika balance < amount + 2000 (admin fee):
//       tampilkan: "Withdraw gagal: Saldo tidak cukup"
//   - jika valid:
//       kurangi balance sebanyak (amount + 2000)
//       tampilkan: "Withdraw berhasil"
//       tampilkan: "Saldo sekarang: RpX"

// -------------------------------
// TUGAS:
// 1. Buat object SavingsAccount:
//    owner = "Andi"
//    balance = 100000
//    withdrawLimit = 50000

// 2. Lakukan urutan:
//    - withdraw(60000)
//    - withdraw(30000)
//    - deposit(20000)
//    - withdraw(40000)

// -------------------------------
// TARGET OUTPUT:

// Withdraw gagal: Melebihi limit penarikan
// Withdraw berhasil
// Saldo sekarang: Rp68000

// Deposit berhasil
// Saldo sekarang: Rp88000

// Withdraw berhasil
// Saldo sekarang: Rp46000


// Let's code
class Account {
    
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log('Deposit berhasil');
        console.log(`Saldo sekarang: Rp${this.balance}`);
    }

    getBalance(){
        console.log(`Saldo ${this.owner}: Rp${this.balance}`);
    }

}

class SavingsAccount extends Account{

    constructor(owner, balance, withdrawLimit){
        super(owner, balance);
        this.withdrawLimit = withdrawLimit;
    }

    withdraw(amount){
        if(amount > this.withdrawLimit){
            console.log('Withdraw gagal: Melebihi limit penarikan');
        }
        else if(this.balance < amount + 2000){
            console.log('Withdraw gagal: Saldo tidak cukup');
        }
        else{
            this.balance -= (amount + 2000);
            console.log('Withdraw berhasil');
            console.log(`Saldo sekarang: Rp${this.balance}`);
        }
    }

}

const owner1 = new SavingsAccount('Andi', 100000, 50000);

owner1.withdraw(60000);
owner1.withdraw(30000);
owner1.deposit(20000);
owner1.withdraw(40000);
