// ===============================
// 🔴 SOAL 3 — CLASS: E-commerce Order System
// ===============================

// Buat class Order yang:
// - memiliki property:
//   customerName
//   items (array kosong)

// Setiap item:
// { name, price, quantity }

// - memiliki method:
//   1. addItem(name, price, quantity)
//      → menambahkan item ke order

//   2. removeItem(name)
//      → menghapus item berdasarkan name
//      → jika tidak ditemukan:
//        "Item tidak ditemukan"

//   3. getTotal()
//      → menghitung total semua item (price * quantity)
//      → return total

//   4. checkout()
//      → tampilkan:
//        "Pesanan atas nama X"
//        "Total pembayaran: RpY"
//        "Terima kasih telah berbelanja"

// Tugas:
// 1. Buat 1 object Order
// 2. Tambahkan minimal 3 item
// 3. Hapus 1 item
// 4. Tampilkan total
// 5. Checkout

// Target output (contoh skenario):

// Item "Keyboard" ditambahkan
// Item "Mouse" ditambahkan
// Item "Monitor" ditambahkan

// Item "Mouse" dihapus

// Total pembayaran: Rp3500000

// Pesanan atas nama Wahyu
// Total pembayaran: Rp3500000
// Terima kasih telah berbelanja


// Let's code
class Order{
    constructor(customerName){
        this.customerName = customerName;
        this.items = [];
    }

    addItem(name, price, quantity){
        this.items.push({ name, price, quantity });

        console.log(`Item "${name}" ditambahkan`);
    }

    removeItem(name){

        const index = this.items.findIndex(item => item.name === name);

        if(index !== -1){
            this.items.splice(index, 1);
            console.log(`Item "${name}" dihapus`);
        }
        else{
            console.log('Item tidak ditemukan');
        }


    }

    getTotal(){
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity; 
        }, 0);
    }

    checkout(){
        const total = this.getTotal()
        console.log(`Pesanan atas nama ${this.customerName}`);
        console.log(`Total pembayaran: Rp${total}`);
        console.log(`Terima kasih telah berbelanja`);
    }
}

const order1 = new Order('Wahyu');
order1.addItem('Keyboard', 700000, 2);
order1.addItem('Mouse', 300000, 3);
order1.addItem('Monitor', 3000000, 1);

order1.removeItem('Mouse');

order1.checkout();