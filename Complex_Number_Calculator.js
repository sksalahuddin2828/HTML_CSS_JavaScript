class Complex {
  constructor(real = 0.0, imag = 0.0) {
    this.real = real;
    this.imag = imag;
  }

  static promptForComplex() {
    const real = parseFloat(prompt("Enter the real value of the complex number: "));
    const imag = parseFloat(prompt("Enter the imaginary value of the complex number: "));
    return new Complex(real, imag);
  }

  add(other) {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  subtract(other) {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  multiply(other) {
    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real
    );
  }

  divide(other) {
    const denominator = other.real * other.real + other.imag * other.imag;
    if (denominator === 0) {
      throw new Error("Cannot divide by zero");
    }
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator
    );
  }

  toString() {
    return `${this.real}${this.imag >= 0 ? '+' : ''}${this.imag}i`;
  }

  print() {
    console.log(this.toString());
  }
}

function main() {
  const x1 = Complex.promptForComplex();
  const x2 = Complex.promptForComplex();

  console.log("Complex number 1 is:");
  x1.print();
  console.log("Complex number 2 is:");
  x2.print();

  let ans = 1;
  while (ans === 1) {
    console.log("Choose the operation to perform:");
    console.log("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");
    const choice = parseInt(prompt());

    try {
      switch (choice) {
        case 1:
          const addition = x1.add(x2);
          console.log("Addition of Complex 1 and Complex 2 is:");
          addition.print();
          break;
        case 2:
          const subtraction = x1.subtract(x2);
          console.log("Subtraction of Complex 2 from Complex 1 is:");
          subtraction.print();
          break;
        case 3:
          const multiplication = x1.multiply(x2);
          console.log("Multiplication of Complex 1 and Complex 2 is:");
          multiplication.print();
          break;
        case 4:
          const division = x1.divide(x2);
          console.log("On division of Complex 1 by Complex 2, we get:");
          division.print();
          break;
        default:
          console.log("Invalid option chosen!");
      }
    } catch (error) {
      console.log(error.message);
    }

    ans = parseInt(prompt("Do you want to check more? (1 for yes / 2 for no): "));
  }

  console.log("\nThank you");
}

main();

