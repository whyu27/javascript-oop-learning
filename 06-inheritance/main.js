// Inheritance
// Inheritance adalah konsep pewarisan pada OOP,
// dimana child class dapat mewarisi property dan method
// dari parent class.
//
// Dengan inheritance, kode bisa digunakan ulang
// sehingga lebih rapi dan mudah dikembangkan.
//
// Keyword:
// - extends => digunakan untuk mewarisi class lain
// - super() => digunakan untuk memanggil constructor parent class


// Class parent
class Peliharaan {

    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    getInfo(){
        return `${this.nama} berumur ${this.umur} tahun`;
    }

}

class Kucing extends Peliharaan{
    constructor(nama, umur, warna){
        super(nama, umur);

        this.warna = warna;
    }

    suara(){
        return 'Meeoong!!'
    }
}

class Anjing extends Peliharaan{
    constructor(nama, umur, warna){
        super(nama, umur);

        this.warna = warna;
    }

    suara(){
        return 'Gukk!! Gukk!!'
    }
}

const kucing = new Kucing('Mochi', 2, 'Oren');
const anjing = new Anjing('Milo', 3, 'Putih');

console.log(kucing.getInfo());
console.log(anjing.getInfo());

console.log(kucing.suara());
console.log(anjing.suara());

console.log(kucing);
console.log(anjing);