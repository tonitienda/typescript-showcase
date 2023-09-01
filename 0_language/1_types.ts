function types() {
  const x: number = 0;
  const y: string = "hello";
  const z: boolean = true;

  const numbers: number[] = [1, 2, 3, 4, 5];
  const strings: string[] = ["hello", "world"];
  const booleans: boolean[] = [true, false, true];

  const multipleTypes: (number | string | boolean)[] = [
    1,
    "hello",
    true,
    "world",
  ];
  const tuple: [number, string, boolean] = [1, "hello", true];
  // const wrongTuple: [number, string, boolean] = [1, "hello", true, "world"];

  // ~ Dictionary str => number
  type StrToNum = { [key: string]: number };
  const object: StrToNum = {
    x: 1,
    y: 2,
    z: 3,
  };

  // ~ Dataclass
  type Point = { x: number; y: number };
  const point: Point = { x: 1, y: 2 };

  // ~ Function type
  type EmptyFuncType = () => void;

  // Optional
  type SomeOptionalX = { y: number; x?: number };
  const someOptionalX: SomeOptionalX = { y: 1 };

  // Union
  type A = { a: number };
  type B = { b: number };
  type C = { c: number };

  type ABC = A | B | C;
  const abc: ABC = { a: 1, b: 2, c: 3 };
  const a: ABC = { a: 1 };

  // Intersection
  type D = { a: number; b: number };
  type AD = A & D;
  const ad: AD = { a: 1, b: 2 };
  // const wrongAD: A_D = { a: 1 };

  // Generics
  type MyGenericType<T> = { value: T };

  const genericNumber: MyGenericType<number> = { value: 1 };
  const genericString: MyGenericType<string> = { value: "hello" };

  // Any and AS
  const someInput: any = { d: 1 };

  // someInput is not compatible with AD but Typescript trust us
  const validatedInput: AD = someInput as AD;
}
