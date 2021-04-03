class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get sum() {
    return this.x + this.y;
  }
  get diff() {
    return this.x - this.y;
  }
  get mult() {
    return this.x * this.y;
  }
  get div() {
    return this.x / this.y;
  }
}
let myCalculator = new Calculator(8, 4);
console.log(myCalculator.sum);
console.log(myCalculator.diff);
console.log(myCalculator.mult);
console.log(myCalculator.div);
