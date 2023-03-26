/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.values = [area, circumference];
    print();
  }
}

const shape = new Shape(5, 10);
console.log('Shape:', shape);
