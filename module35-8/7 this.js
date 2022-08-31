// console.log(this);

const kodomAli = {
  name: "kodom ali",
  money: 5000,
  study: "mathematics",
  subjects: ["calculas", "algebra", "geometry"],
  exam: function () {
    console.log(this);
    // return this.name + " is participating an exam";
    return `${this.name} is participating an exam`;
  },
  examArrow: () => {
    console.log(this);
  },
  examNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
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

// kodomAli.exam();

const badamAli = {
  name: "badam ali",
  money: 5000,
};

badamAli.exam = kodomAli.exam;
badamAli.exam();
kodomAli.examArrow();
kodomAli.examNested();

function clickHandler() {
  console.log("Inside click handler ", this);
}
document.getElementById("btn-click2").addEventListener("click", function () {
  console.log(this);
});
