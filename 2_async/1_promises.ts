const future1: Promise<number> = getFutureDouble(1);
console.log(future1);

// Execute something when promise is resolved
future1.then((x) => console.log("Promise resolved:", x));
