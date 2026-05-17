// ===============================
// 🟡 SOAL 2 — CLASS: School Grading System
// ===============================

// Buat class bernama Student yang:
// - memiliki property:
//   name
//   scores (array angka)

// - memiliki method:
//   1. addScore(score)
//      → menambahkan nilai ke array scores

//   2. getAverage()
//      → menghitung rata-rata nilai
//      → return nilai rata-rata (bukan console log)

//   3. getGrade()
//      → menentukan grade berdasarkan rata-rata:
//        >= 90 : "A"
//        >= 80 : "B"
//        >= 70 : "C"
//        >= 60 : "D"
//        < 60  : "E"

//   4. getSummary()
//      → tampilkan:
//        Name: ...
//        Average: ...
//        Grade: ...

// Tugas:
// 1. Buat 1 object Student
// 2. Tambahkan minimal 5 score
// 3. Tampilkan summary

// Target output:
// Name: Wahyu
// Average: 93
// Grade: A


// Let's code
class Student {
    constructor(name){
        this.name = name;
        this.scores = [];
    }

    addScore(score){
        this.scores.push(score);
    }

    getAverage(){
        if(this.scores.length === 0) return 0;
        return this.scores.reduce((start, current) => start + current, 0)/this.scores.length;
    }

    getGrade(){
        const avg = this.getAverage();

        if(avg >= 90){
            return 'A';
        }
        else if(avg >= 80){
            return 'B';
        }
        else if(avg >= 70){
            return 'C';
        }
        else if(avg >= 60){
            return 'D';
        }
        else{
            return 'E';
        }
    }

    getSummary(){
        console.log(`Nama: ${this.name}`);
        console.log(`Average: ${this.getAverage()}`)
        console.log(`Grade: ${this.getGrade()}`);
    }
}

const student1 = new Student('Wahyu');

student1.addScore(91);
student1.addScore(92);
student1.addScore(93);
student1.addScore(94);
student1.addScore(95);

student1.getSummary();