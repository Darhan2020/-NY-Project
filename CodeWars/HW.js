let obj = {
  arr: [],
  print: function () {
    console.log(this.arr.filter((el) => el % 2 === 0));
  },

  initiate(x, y) {
    this.x = 4;
    this.y = 5;
  },
  sum: function () {
    return this.x + this.y;
  },
  min: function () {
    return Math.min(...this.arr);
  },
  grow: function () {
    this.arr.sort((a, b) => a - b);
  },
};

obj.arr.push(1, 2, 5, 6, 8, 9);
obj.print();

