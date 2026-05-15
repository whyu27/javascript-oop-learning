// Factory Function
// Factory function adalah function yang tugasnya membuat dan mengembalikan object baru.
// Ibaratnya seperti pabrik. Sekali buat mesin, bisa menghasilkan banyak object baru dengan value yang berbeda sesuai kebutuhan kita.


// Factory function untuk membuat karakter game
function buatPlayer(nama, score){
    return{
        nama : nama,
        score : score   
    }
}

const player1 = buatPlayer('Wahyu', 97);
const player2 = buatPlayer('Ilham', 96);
const player3 = buatPlayer('Fizi', 96);

console.log(player1);
console.log(player2);
console.log(player3);


// Factory function untuk mengubah nilai rgb menjadi hexa
// function convertValue(r, g, b){
//     let color = {};

//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function(){
//         const {r, g, b} = this
//         return `rgb(${r} ${g} ${b})`;
//     }

//     color.hex = function(){
//         const {r, g, b} = this
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };

//     return color;
// }

// const textColor = convertValue(12, 23, 13);
// console.log(textColor);
// console.log(textColor.rgb());
// console.log(textColor.hex());

// Factory function untuk mengubah nilai rgb menjadi hexa (versi lebih ringkas dan modern)
function convertValue(r, g, b){
    return {
        r,
        g,
        b,

       rgb : function(){
            return `rgb(${r} ${g} ${b})`;
        },

        hex : function(){
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
    }
}

const textColor = convertValue(12, 23, 13);
console.log(textColor);
console.log(textColor.rgb());
console.log(textColor.hex());

const backgroundColor = convertValue(17, 70, 10);
console.log(backgroundColor);
console.log(backgroundColor.rgb());
console.log(backgroundColor.hex());