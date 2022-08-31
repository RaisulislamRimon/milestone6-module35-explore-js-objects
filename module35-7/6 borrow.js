const kodomAli = {
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

const result = kodomAli.exam();
console.log(result);

const badamAli = {
  name: "kacha badam",
  money: 8000,
};

const result2 = kodomAli.exam.call(badamAli);
console.log(result2);

const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40);
console.log(badamMoney);

const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDey.bind(badamAli, 500, 50);
const badamMoney3 = badamAliTreat();
console.log(badamMoney3);

const badamAliTreat2 = kodomAli.treatDey.bind(badamAli);
const badamMoney4 = badamAliTreat2(500, 50);
console.log(badamMoney4);