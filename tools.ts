// Return x * 2 after 1 second
const getFutureDouble = (x: number): Promise<number> => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(x * 2), 1000);
  });
};

const doSomethingAsync = (x: number, callback: (y: number) => any) => {
  callback(x * 3);
};

const doSomethingElseAsync = (x: number, callback: (y: number) => any) => {
  callback(x * 5);
};
