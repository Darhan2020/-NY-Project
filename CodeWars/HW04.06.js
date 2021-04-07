class Strings {
  constructor(a) {
    this.x = a;
  }
  get sum() {
    return this.x.length;
  }
  get secondSign() {
    return this.x[1];
  }
  get inside() {
    return this.x.includes("t");
  }
  get letter() {
    return this.x.indexOf("t");
  }
  get start() {
    return this.x.startsWith("My");
  }
  get small() {
    return this.x.toLowerCase();
  }
  get short() {
    return this.x.slice(3, 5);
  }
  get change() {
    return this.x.replace("My", "His");
  }
  get again() {
    return this.x.repeat(2);
  }
}

let words = new Strings("My name is Timur");
console.log(words.sum);
console.log(words.secondSign);
console.log(words.inside);
console.log(words.letter);
console.log(words.start);
console.log(words.small);
console.log(words.short);
console.log(words.change);
console.log(words.again);
