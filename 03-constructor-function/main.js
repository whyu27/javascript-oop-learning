// Constructor Function
// Constructor function adalah function yang digunakan sebagai cetakan untuk membuat object baru menggunakan keyword `new`.
// Ibaratnya seperti blueprint atau template. Sekali dibuat, constructor bisa menghasilkan banyak object dengan struktur yang sama tetapi isi/value berbeda.
// Penulisan constructor menggunakan Pascal case

// Constructor product
function Product(nama, price, stock){
    this.nama = nama;
    this.price = price;
    this.stock = stock;
}

const product1 = new Product('Sepatu', 300000, 12);
console.log(product1);

const product2 = new Product('Handphone', 4000000, 17);
console.log(product2)

// Menggunakan prototype method untuk menampilkan output
Product.prototype.showInfo = function(){
    console.log(`Produk: ${this.nama}, Harga: Rp${this.price}, Stok: ${this.stock}`);
}

product1.showInfo();
product2.showInfo();


// Constructor color
function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}

// Prototype method untuk mengubah rgb ke hexa
Color.prototype.hex = function(){
    const {r, g, b} = this
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const color1 = new Color(255, 255, 255);

console.log(color1);
console.log(color1.rgb());
console.log(color1.hex());