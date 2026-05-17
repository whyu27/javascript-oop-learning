// Class Initialization
// Class initialization adalah proses menyiapkan object saat pertama kali dibuat.
// Dilakukan di constructor agar object langsung siap digunakan.


// Class color
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
	}

	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}

	colorName() {
		console.log('The color name is ' + this.name);
	}

	rgb() {
		return `rgb(${this.innerRGB()})`;
	}

	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}

	hex() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	hsl() {
		const { h, s, l } = this;
		return `hsl(${h}, ${s}%, ${l}%)`;
	}

	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
	}

	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}

	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		// Blue is max
		else h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const skyColor = new Color(185, 243, 252, 'Sky');
console.log(skyColor);
console.log(skyColor.rgb());
console.log(skyColor.hex());
console.log(skyColor.rgba());
console.log(skyColor.hsl());
console.log(skyColor.fulllySaturated());
console.log(skyColor.opposite());


// Class user untuk validasi password
class User {
    constructor(username, password){
        this.username = username;
        this.password = password;

        this.validate();
    }

    validate(){
        if(this.password.length < 8){
            throw new Error('Password terlalu pendek'); //Menampilkan error
        }
    }
}

const user1 = new User('wahyu123', 'Wahyu123');


// Class database untuk setup koneksi DB
class Database {
    constructor(){
        this.connect();
    }

    connect(){
        console.log('Connect to DB');
    }
}

const database1 = new Database();