type TestCaseStep = {
  action: string;
  expectedResult: string;
};

type TestCase = {
  id: number;
  name: string;
  steps: TestCaseStep[];
};

type TestRunStep = TestCaseStep & {
  result: boolean;
};

type TestRun = {
  id: number;
  name: string;
  steps: TestRunStep[];
  result: boolean;
};

// Different file
type GherkinFeature = { steps: { action: string; expectedResult: string }[] };
// function validateGherkin(feature: {
//   steps: { action: string; expectedResult: string }[];
// }) {
//   // ...
// }
function validateGherkin(feature: GherkinFeature) {
  // ...
}
function validateTestCaseGherkin(testcase: TestCase) {
  // ...
  validateGherkin(testcase);
}

// Different file
const testcase: TestCase = {
  id: 1,
  name: "Testcase 1",
  steps: [
    { action: "Step 1", expectedResult: "Result 1" },
    { action: "Step 2", expectedResult: "Result 2" },
  ],
};

const testrun: TestRun = {
  id: 1,
  name: "Testrun 1",
  steps: [
    { action: "Step 1", expectedResult: "Result 1", result: true },
    { action: "Step 2", expectedResult: "Result 2", result: false },
  ],
  result: false,
};

const testCaseValid = validateGherkin(testcase);
const testRunValid = validateGherkin(testrun);

const testCaseValid2 = validateTestCaseGherkin(testcase);

// This also works. Nominal typing is not built-in supported in TypeScript.
// It can be achieved using some tricks
const testrunValid2 = validateTestCaseGherkin(testrun);

// NOMINAL TYPING IN TYPESCRIPT
// Not built-in supported in TypeScript.
// A differentiating field is needed. Any value can be used although a symbol is preferred
// Using string to simplify the code
type A = { type: "A"; a: string };
type B = { type: "B"; a: string };

function structural(value: { a: string }) {
  // do something
}

function nominalA(value: A) {
  // do something
}

// PROBLEM: We need to pass type when initializing obhects.
// I could not find a way to avoid it
const a: A = { type: "A", a: "hello" };
const b: B = { type: "B", a: "hello" };

structural(a); // compiles
structural(b); // compiles

nominalA(a); // compiles
// nominalA(b); // error: Argument of type 'B' is not assignable to parameter of type 'A'
