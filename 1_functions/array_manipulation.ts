// Arrow functions
const isOdd = (num: number): boolean => num % 2 !== 0;
const isEven = (num: number): boolean => !isOdd(num);
const sum = (num1: number, num2: number): number => num1 + num2;

// High order functions
const add = (num1: number) => (num2: number) => num1 + num2;
const add3 = add(3);

const times = (num1: number) => (num2: number) => num1 * num2;
const times2 = times(2);

// Array functions
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter - returns a new array with the elements that pass the predicate
const largerThan3 = array.filter((x) => x > 3);
const oddNumbers = array.filter(isOdd);

// Map - returns a new array with the results of calling a function for every element
const arrayTimes4 = array.map((x) => x * 4);
const arrayTimes3 = array.map(times(3));
const arrayTimes2 = array.map(times2);

// First odd element
const firstLargerThan = array.find(isOdd);

// Reduce - returns a single value from an array
const total = array.reduce(sum, 0);

const sumOfEvenTimes2 = array.filter(isEven).map(times2).reduce(sum);
const sumOfTimes5Even = array.map(times(5)).filter(isEven).reduce(sum);

// Complex example
{
  type Step = {
    name: string;
    description: string;
    keywords: string[];
  };

  const steps: Step[] = [
    {
      name: "some name",
      description: "some step",
      keywords: [],
    },
    {
      name: "hello",
      description: "world",
      keywords: ["given", "when"],
    },
    {
      name: "hello",
      description: "world",
      keywords: ["then"],
    },
  ];

  const withKeywords = (step: Step) => step.keywords.length > 0;

  const areEquivalent = (a: Step, b: Step) =>
    a.name === b.name && a.description === b.description;

  const isEquivalentWith = (a: Step) => (b: Step) =>
    a.name === b.name && a.description === b.description;

  const aggregateKeywords = (list: Step[], item: Step): Step[] => {
    const equivalentStepIdx = list.findIndex(isEquivalentWith(item));

    if (equivalentStepIdx > -1) {
      list[equivalentStepIdx].keywords = [
        ...list[equivalentStepIdx].keywords,
        ...item.keywords,
      ];
    } else {
      list.push(item);
    }

    return list;
  };

  const combined = steps.filter(withKeywords).reduce(aggregateKeywords, []);
}
