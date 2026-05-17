// Class
// Class adalah adalah fitur untuk membuat template atau cetakan objek. 
// Dengan class, kita bisa membuat banyak objek yang memiliki properti dan method yang sama dengan lebih rapi dan mudah dibaca.
// Sederhananya : Class digunakan untuk membungkus constructor dan method agar tidak dibuat secara terpisah.


// Class user untuk membuat data user
class User{

    constructor(nama, email){
        this.nama = nama;
        this.email = email;
        this.isLogin = false;
    }

    login(){
        this.isLogin = true;
        console.log(`${this.nama} berhasil login`);
    }

    logout(){
        this.isLogin = false;
        console.log(`${this.nama} berhasil logout`);
    }

    getInfo(){
        console.log(`
            Nama : ${this.nama}
            Email : ${this.email}
            isLogin : ${this.isLogin}
        `);
    }
}

const user1 = new User('Wahyu', 'wahyugamteng@gmail.com');
console.log(user1);

user1.login();
user1.getInfo();


user1.logout();
user1.getInfo();



// Class color untuk mengubah rgb ke format lain
class Color{

    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb(){
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    hex(){
        const {r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgba(a = 1.0){
        const {r, g, b} = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

const color1 = new Color(121, 122, 123)
console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba());