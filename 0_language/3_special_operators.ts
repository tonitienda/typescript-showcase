function operators() {
  // Object spread operator

  // Merging objects
  type AB = { a: number; b: number };
  type BC = { b: number; c: number };

  type ABC = AB & BC;

  const ab: AB = { a: 1, b: 2 };
  const bc: BC = { b: 3, c: 4 };

  const abc: ABC = { ...ab, ...bc };
  const abc2: ABC = { ...bc, ...ab };

  console.log(abc);
  console.log(abc2);

  // Splitting objects
  const { a, b } = abc;
  console.log("a = ", a);
  console.log("b = ", b);

  // Array spread operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const arr3 = [...arr1, ...arr2];

  console.log(arr3);

  // Destructuring
  const [x, y, z] = arr3;
  console.log("x = ", x);
  console.log("y = ", y);
  console.log("z = ", z);

  // Destructuring with rest
  const [x1, x2, ...rest] = arr3;
  console.log("x1 = ", x1);
  console.log("x2 = ", x2);
  console.log("rest = ", rest);
}

function nullable() {
  type A = {
    a: number;
    child?: A;
  };

  const a1: A = { a: 1 };
  const a2: A = { a: 2, child: { a: 3 } };

  // Using ? to access fields in variables that might not exist
  // Does not compile:  console.log("a1 = ", a1.child.a);
  console.log("a1 = ", a1.child?.child?.child?.a);
  console.log("a2 = ", a2.child?.a);

  // Using ?? to provide a default value
  console.log("a1 or 5 =", a1.child?.child?.child?.a ?? 5);

  // We can also use || but it will not work as expected for 0, false
  console.log("a1 or 5 =", a1.child?.child?.child?.a || 5);

  // Difference of ?? and ||
  console.log(false ?? 5);
  console.log(false || 5);

  console.log(0 ?? 5);
  console.log(0 || 5);

  console.log(null ?? 5);
  console.log(null || 5);

  // Nice for defining big numbers
  const ten_million = 10_000_000;
  console.log(`$${ten_million}`);
}

operators();
nullable();
