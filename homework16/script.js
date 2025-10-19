class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
        this.attendanceIndex = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex++] = true;
        } else {
            console.log('Відвідуваність уже повністю заповнена.');
        }
    }

    absent() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex++] = false;
        } else {
            console.log('Відвідуваність уже повністю заповнена.');
        }
    }

    getAverageAttendance() {
        const attended = this.attendance.filter(val => val === true).length;
        return attended / 25;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        console.log(`Студент: ${this.firstName}:`);
        console.log(`Середній бал: ${avgGrade}`);
        console.log(`Відвідуваність: ${avgAttendance}`);

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student('Іван', 'Іваненко', 2003, [95, 92, 88, 91]);
const student2 = new Student('Оля', 'Петренко', 2004, [90, 85, 97, 89]);
const student3 = new Student('Сергій', 'Коваленко', 2002, [60, 65, 58, 62]);

for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

for (let i = 0; i < 15; i++) student2.present();
for (let i = 0; i < 10; i++) student2.absent();

for (let i = 0; i < 5; i++) student3.present();
for (let i = 0; i < 20; i++) student3.absent();

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
