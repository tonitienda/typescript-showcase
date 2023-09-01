// Long declaration
function sum1(num1: number, num2: number): number {
  return num1 + num2;
}

// Declaration as a constant
const sum2 = function (num1: number, num2: number): number {
  return num1 + num2;
};

const sum3 = (num1: number, num2: number): number => num1 + num2;
// const sum3 = (num1, num2) => num1 + num2

// Function type is just a type
type Adder = (n1: number, n2: number) => number;

// Functions can be stored in arrays or other data structures
const SumArray: Adder[] = [sum1, sum2, sum3];
const result1 = SumArray[0](1, 2);

// Functions can be stored in objects
const SumObject: { [key: string]: Adder } = {
  sum1,
  sum2,
  sum3,
};
const result2 = SumObject.sum2(1, 2);
