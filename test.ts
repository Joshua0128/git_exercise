
// can't compile
// function padLeft(padding: number | string, input: string) {
//     return " ".repeat(padding) + input;
// }

/* Type include 
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
*/

// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     } else {
//       // do nothing
//     }
//   }

// function example(x: string | number, y: string | boolean) {
//     if (x === y) {
//         x.toUpperCase();
//         y.toLowerCase();
//     } else {
//         console.log(x);
//         console.log(y);
//     }
// }

// example("she", "she");

// interface Container {
//     value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//     if (container.value != null) {
//         console.log(container.value);
//         container.value *= factor;
//     }
//     container.value *= factor;
// }

// let val = {value : undefined};

// multiplyValue(val, 5);
// multiplyValue(val, 5);

type Fish = {swim: () => void};
type Bird = {fly: ()=> void};
type Human = {swim?: ()=>void; fly?: ()=>void};

function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        animal;
    } else {
        animal;
    }
}


// interface PaintOptions {
//     shape: Shape;
//     xPos?: number;
//     yPos?: number;
// }

// function paintShape(opts: PaintOptions) {
//     console.log(opts.Shape);
// }

// const shape = {shape: 10}

// interface Circle {
//     kind: "circle";
//     radius: number;
// }
   
interface Square {
    kind: "square";
    sideLength: number;
}
   
// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//       return Math.PI * shape.radius! ** 2;
//     }
// }

function hi(name: string) {
    console.log("hello" + name);
}

hi("wei");

interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

interface StringArray {
    [index: number]: string;
}

// declare function getStringArray(): StringArray;

// const myArray: StringArray = getStringArray();
// const secondItem = myArray[1];

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doS(fn: DescribableFunction) {
    console.log(fn.description + "return" + fn(6));
}


// wtf
interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
}

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

let xs = [1, 2, 3];

let x = firstElement(xs);
console.log(x);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);

function longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

// function minimumLength<Type extends {length: number}>(
//     obj: Type,
//     minimum: number
// ): Type {
//     if(obj.length >= minimum) {
//         return obj;
//     } else {
//         return {length: minimum};
//     }
// }

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

// const arr = combine([1, 2, 3], ["hello"]);
const arr = combine<string | number>([1, 2, 3], ["hello"]);
console.log(arr);

// 1. Push Type Parms Down
// 2. Fewer Type Parms
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}
// 3. Type Parameters Should Appear Twice
function greet2<Str extends string>(s: Str) {
    console.log(s);
}

function greet3(s: string) {
    console.log(s);
}

// When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      // I don't feel like providing the index today
      callback(arr[i], i);
    }
}

// wtf
// argument use ? -> if undefined, return undefined, else function the previous function.
myForEach([1, 2, 3], (a, i) => {
    console.log(i.toFixed());
    // console.log(i?.toFixed());
});
// wtf
function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

console.log(d1, d2);
const d3 = makeDate(1, 3);

function fn(x: string): void;
function fn() {
  let x = 1;
  return x;
}

// fn();

function len(x: any[] | string) {
    return x.length;
}

const user = {
    id: 128,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

user.becomeAdmin();
console.log(user.admin);

interface User {
    id: number;
    admin: boolean;
}

declare const getDB: () => DB;

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

// const db = getDB();
// const admin = db.filterUsers(function (this: User) {
//     return this.admin;
// })

// void is not the same as undefined.

function noop() {
    return;
}

// object refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined

function f1(a: any) {
    a.b();
}

// function f2(a: unknown) {
//     a.b();
// }
function safeParse(s: string): unknown {
    return JSON.parse(s);
}

// const obj = safeParse(somethingRandom);

// The never type represents values which are never observed. 
// In a return type, this means that the function throws an exception or terminates execution of the program.
function fail(msg: string): never {
    throw new Error(msg);
}

function fun(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
}

type voidFunc = () => void;

const fun1: voidFunc = () => {
    return true;
};

const fun2: voidFunc = () => true;

const fun3: voidFunc = function () {
    return true;
}

const v1 = fun1();

const src = [1, 2, 3];
const dst = [0];
 
src.forEach((el) => dst.push(el));

interface t {
    readonly prop: string;
}

interface Home {
    readonly resident: { name: string; age: number };
  }
   
function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}

// function evict(home: Home) {
// // But we can't write to the 'resident' property itself on a 'Home'.
// // home.resident = {
// //     name: "Victor the Evictor",
// //     age: 42,
// // };
// }


interface StringArray1 {
    [index: number]: string;
}

// declare function getString(): StringArray1;

// const myArr: StringArray = getString();
// const secondItem = myArr[1];

interface Animal {
    name: string;
}

interface Dog extends Animal{
    breed: string;
}

interface NotOkay {
    [x: number]: Animal;
    // [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number | string;
    length:number;
    name: string;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

// declare function getReadonlyStringArray():ReadonlyStringArray;

// let myArray: ReadonlyStringArray = getReadonlyStringArray();
// Read only
// myArray[2] = "joshua";

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

interface Colorful {
    color: string;
  }
   
interface Circle {
    radius: number;
}
   
// interface ColorfulCircle extends Colorful, Circle {}
   
type ColorfulCircle = Colorful & Circle;

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};

console.log(cc);

interface Box<Type> {
    contents: Type;
}

let box: Box<string>;
let boxA: Box<string> = { contents: "hello" };
console.log(boxA.contents);

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

// interface Array<Type> {
//     length: number;

//     pop(): Type | undefined;
//     push(...items: Type[]): number;
// }


// wtf
class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;

    
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type):Type {
    console.log(arg.length);
    return arg;
}

let tmp = loggingIdentity({ length: 10, value: 3 });


// cool 
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
let t = { 
    a: 1, 
    b: 2, 
    c: 3, 
    d: 4 
};

getProperty(t, "a");
// getProperty(t, "m");

class BeeKeeper {
    hasMask: boolean = true;
}
   
class ZooKeeper {
    nametag: string = "Mikle";
}
    
class Animal {
    numLegs: number = 4;
}
   
class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}
   
class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}
   
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
   
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

type Point = { x: number; y: number };
type P = keyof Point;


console.log(typeof "Hello");
let s = "1";
let n = typeof s;
console.log(n);

function f() {
    return { x: 10, y: 3};
}

type K = ReturnType<typeof f>;

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type Person2 = { age: number; name: string; alive: boolean };
type Age = Person["age"];
   
type person = typeof MyArray[number];

type I2 = Person[keyof Person];

interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}
   
type exp3 = Dog extends Animal ? number : string;
          
// type exp1 = number
   
type exp2 = RegExp extends Animal ? number : string;

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
    message: string;
}
 
interface Dog {
    bark(): void;
}
type EmailMessageContents = MessageOf<Email>;

type DogMessageContents = MessageOf<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type Str = Flatten<string[]>;
     
 
// Leaves the type alone.
type Num = Flatten<number>;

const experience:never = 3 as any;
