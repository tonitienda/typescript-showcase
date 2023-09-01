// Global to the whole project
// Missing in TS/JS is "namespacing" (like in C#, Golang etc)
// But most JS projects are bundled together. Modules are used for that purpose
const globalScope = 5;

function scopes() {
  // Global to the function
  const functionScope = 6;

  {
    // Local to the block
    const localScope = 7;
    console.log("localScope = ", localScope);
    console.log("functionScope = ", functionScope);
    console.log("globalScope = ", globalScope);
  }
  // Not accessible: console.log("localScope = ", localScope);
  console.log("functionScope = ", functionScope);
  console.log("globalScope = ", globalScope);
}

console.log("globalScope = ", globalScope);

scopes();

console.log("----------");

// Weirdness - Function Hoisting and scope
{
  const fn = (x: number) => x + 1;
  console.log("Scope 1, fn(1) = ", fn(1));

  function func(x: number): number {
    return x + 1;
  }
}

{
  const fn = (x: number) => x * 5;
  console.log("Scope 2, fn(1) = ", fn(1));

  // Compilation error: Function is already declared
  // Related to where function is bound
  // function func(x: number): number {
  //   return x * 5;
  // }
}
