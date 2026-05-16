// ===============================
// 🔴 SOAL 3 — Constructor Function (Mini Sistem Toko)
// ===============================

// Buat constructor function bernama ShoppingCart yang:
// - memiliki property: namaUser, items (array)

// items berisi object dengan struktur:
// { namaProduk, harga, jumlah }

// Method prototype:    
// 1. tambahItem(namaProduk, harga, jumlah)
// 2. hitungTotal()
// 3. checkout()

// Aturan:
// - tambahItem harus menambahkan object ke array items
// - hitungTotal mengembalikan total belanja
// - checkout menampilkan:
//   "User membeli X item dengan total RpXXXX"

// Tugas:
// 1. Buat 1 object cart
// 2. Tambahkan minimal 2–3 item
// 3. Panggil checkout()

// Target output contoh:
// User membeli 3 item dengan total Rp750000


// Let's code
function ShoppingCart(namaUser, items){
    this.namaUser = namaUser;
    this.items = items || [];
}

ShoppingCart.prototype.tambahItem = function(namaProduk, harga, jumlah){
    let tambahItemObj = {
        namaProduk : namaProduk,
        harga : harga,
        jumlah : jumlah
    }

    this.items.push(tambahItemObj);
}

ShoppingCart.prototype.hitungTotal = function(){
    let total = 0;
    for(let i = 0; i < this.items.length; i++){
        let sum = this.items[i].harga * this.items[i].jumlah;
        total += sum;
    }

    return total;
}

ShoppingCart.prototype.checkout = function(){
    console.log(`${this.namaUser} membeli ${this.items.length} item dengan total Rp${this.hitungTotal()}`)
}


const user1 = new ShoppingCart('Wahyu');

user1.tambahItem('Laptop', 5000000, 1);
user1.tambahItem('Handphone', 3000000, 2);
user1.tambahItem('Headset', 150000, 3);

user1.checkout();