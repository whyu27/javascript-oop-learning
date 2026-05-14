// Prototype
// Prototype adalah “tempat kemampuan bersama” yang dipakai banyak object.

let arr = [1, 2, 3];

Array.prototype.pop = () => {
    return 'pop dinonaktifkan';
}

console.log(arr); //[1, 2, 3]
console.log(arr.pop()); // 'pop dinonaktifkan' tidak menghapus element terakhir karena isi dari method pop() sudah diganti
console.log(arr); //[1, 2, 3]


// Membuat prototype sendiri
// - Konstruktor untuk sebagai pencetak object
function User(nama) {
    this.nama = nama;
}

// - Prototype untuk membuat default password
User.prototype.pass = function(){
    return(
        `Username : ${this.nama} | Password : ${this.nama}123`
    );
}

let user1 = new User('Wahyu');
let user2 = new User('Saputra');

console.log(user1.pass());
console.log(user2.pass());


// Tanpa prototype ==> object punya method sendiri (boros memory)
// function User(nama) {
//   this.nama = nama;

//   this.pass = function() {
//     return `Username : ${this.nama} | Password : ${this.nama}123`
//   };
// }

// let user1 = new User("Wahyu");
// let user2 = new User("Saputra");

// console.log(user1.pass());
// console.log(user2.pass());