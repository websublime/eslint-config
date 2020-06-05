class invalidClassName {}

type T = { x: number };

interface Foo {
  B: string; // -> field
  new (); // -> constructor
  A(): void; // -> method
  [Z: string]: any; // -> signature
}

interface Bar {}

const a: number = 10;

class FooBar {
  prop: number = 5;
}

class C {
  new(): C;
}

interface IFace {
  new (): IFace;
  constructor(): void;
}

interface Foob {
  bar?: string;
}

const foob: Foob = getFoob();
const includesBaz: boolean = foob.bar!.includes('baz');

interface Foot {
  (): string;
}

function foot(bar: { (): number }): number {
  return bar();
}

interface Foof extends Function {
  (): void;
}

function f(x: number): void;
function f(x: string): void;

let fooc = () => {
  return 0;
};

class A {
  constructor() {
    super();  // This is a SyntaxError.
  }
}

foo == true
bananas != 1

for (key in foo) {
  doSomething(key);
}
