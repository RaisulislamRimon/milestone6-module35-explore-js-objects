const student = {
  name: "kodom ali",
  money: 5000,
  study: "mathematics",
  subjects: ["calculas", "algebra", "geometry"],
  exam: function () {
    console.log(this.name, " is participating an exam");
  },
};

student.exam();

const student1 = {
  name: "kodom ali",
  money: 5000,
  study: "mathematics",
  subjects: ["calculas", "algebra", "geometry"],
  exam: function () {
    // return this.name + " is participating an exam";
    return `${this.name} is participating an exam`;
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement exam on  ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const result = student1.exam();
console.log(result);
const reExam = student1.improveExam("calculas");
console.log(reExam);
const remaining = student1.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student1.treatDey(500, 50);
console.log(dolaRemaining);
