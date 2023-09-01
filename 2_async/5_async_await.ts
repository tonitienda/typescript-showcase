async function awaitForOne() {
  const result = await getFutureDouble(1);
  console.log(result);
}

// awaitForOne - Translated to
/*
getFutureDouble(1).then(result => console.log(result))
*/

async function awaitForTwoParallel() {
  const result = await Promise.all([getFutureDouble(1), getFutureDouble(2)]);
  console.log(result);
}

async function awaitForTwoSequencial() {
  const result1 = await getFutureDouble(1);
  const result2 = await getFutureDouble(2);
  console.log(result1, result2);
}

// awaitForTwoSequencial - Translated to
/*
getFutureDouble(1).then(result1 => {
       getFutureDouble(2).then(result2 => {
           console.log(result1, result2)
       }) 
    })
*/

async function awaitForManyParallel() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = await Promise.all(arr.map(getFutureDouble));
  console.log(result);
}

async function awaitForManySequencial() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (const n of arr) {
    const result = await getFutureDouble(n);
    console.log(result);
  }
}
