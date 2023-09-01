// Parallel execution
const inputs: number[] = [1, 2, 3, 4, 5];
const futures: Promise<number>[] = inputs.map(getFutureDouble);
console.log(futures);

// Sync all parallel executions
Promise.all(futures).then((x) => console.log("All promises resolved:", x));
