class Coach {
    constructor(fullname, specialization, rate) {
        this.fullname = fullname;
        this.specialization = specialization;
        this.rate = rate;
    }
}
Coach.prototype.displayInfo = function () {
    console.log(`Coach: ${this.fullname}, Specialization: ${this.specialization}, Rating: ${this.rate}`);
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();