// ===============================
// 🔥 SOAL 3 — E-COMMERCE SYSTEM (INHERITANCE + TAX + SHIPPING + DISCOUNT)
// ===============================

// Buat class parent bernama Product:
// - property:
//   name (string)
//   price (number)

// - method:
//   1. getPrice()
//      → return price

// -------------------------------
// Buat class child: DigitalProduct (extends Product)
// - tambahan property:
//   taxFree (boolean)

// - method:
//   finalPrice()
//   RULE:
//   - jika taxFree = true:
//       final = price
//   - jika taxFree = false:
//       final = price + 10% pajak

//   → tampilkan:
//     "Product: Name"
//     "Base Price: RpX"
//     "Final Price: RpY"

// -------------------------------
// Buat class child: PhysicalProduct (extends Product)
// - tambahan property:
//   shippingFee (number)

// - method:
//   finalPrice()
//   RULE:
//   - jika price > 150000:
//       shippingFee = shippingFee / 2
//   - final = price + shippingFee

//   → tampilkan:
//     "Product: Name"
//     "Base Price: RpX"
//     "Shipping Fee: RpY"
//     "Final Price: RpZ"

// -------------------------------
// TUGAS:
// 1. Buat DigitalProduct:
//    name = "Online Course JS"
//    price = 100000
//    taxFree = false

// 2. Buat PhysicalProduct:
//    name = "Mechanical Keyboard"
//    price = 200000
//    shippingFee = 20000

// 3. Panggil:
//    - finalPrice() untuk keduanya

// -------------------------------
// TARGET OUTPUT:

// Product: Online Course JS
// Base Price: Rp100000
// Final Price: Rp110000

// Product: Mechanical Keyboard
// Base Price: Rp200000
// Shipping Fee: Rp10000
// Final Price: Rp210000


// Let's code
class Product {
    
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    getPrice(){
        return this.price;
    }

}

class DigitalProduct extends Product {

    constructor(name, price, taxFree){
        super(name, price);
        this.taxFree = taxFree;
    }

    finalPrice(){

        let final = this.taxFree ? this.price : this.price + (this.price*(10 / 100));

        console.log(`Product: ${this.name}`);
        console.log(`Base Price: Rp${this.getPrice()}`);
        console.log(`Final Price: Rp${final}`);
    }

}


class PhysicalProduct extends Product {

    constructor(name, price, shippingFee){
        super(name, price);
        this.shippingFee = shippingFee;
    }

    finalPrice(){

        let discShippingFee = this.price > 150000 ? this.shippingFee / 2 : this.shippingFee;

        let final = this.price + discShippingFee;

        console.log(`Product: ${this.name}`);
        console.log(`Base Price: Rp${this.getPrice()}`);
        console.log(`Shipping Fee: Rp${discShippingFee}`);
        console.log(`Final Price: Rp${final}`);
    }
}

const product1 = new DigitalProduct('Online Course JS', 100000, false);
const product2 = new PhysicalProduct('Mechanical Keyboard', 200000, 20000);

product1.finalPrice();
product2.finalPrice();