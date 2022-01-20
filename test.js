// can't compile
// function padLeft(padding: number | string, input: string) {
//     return " ".repeat(padding) + input;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function move(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
// type Shape = Circle | Square;
// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//       return Math.PI * shape.radius! ** 2;
//     }
// }
function hi(name) {
    console.log("hello" + name);
}
hi("wei");
var writablePerson = {
    name: "Person McPersonface",
    age: 42
};
// works
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
function doS(fn) {
    console.log(fn.description + "return" + fn(6));
}
function firstElement(arr) {
    return arr[0];
}
var xs = [1, 2, 3];
var x = firstElement(xs);
console.log(x);
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
console.log(parsed);
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
var longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
var longerString = longest("alice", "bob");
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
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// const arr = combine([1, 2, 3], ["hello"]);
var arr = combine([1, 2, 3], ["hello"]);
console.log(arr);
// 1. Push Type Parms Down
// 2. Fewer Type Parms
function filter1(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
// 3. Type Parameters Should Appear Twice
function greet2(s) {
    console.log(s);
}
function greet3(s) {
    console.log(s);
}
// When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i]);
    }
}
// wtf
myForEach([1, 2, 3], function (a, i) {
    // console.log(i.toFixed());
    console.log(i === null || i === void 0 ? void 0 : i.toFixed());
});
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
console.log(d1, d2);
function fn() {
    var x = 1;
    return x;
}
// fn();
function len(x) {
    return x.length;
}
var user = {
    id: 128,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
user.becomeAdmin();
console.log(user.admin);
// const db = getDB();
// const admin = db.filterUsers(function (this: User) {
//     return this.admin;
// })
// void is not the same as undefined.
function noop() {
    return;
}
// object refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined
function f1(a) {
    a.b();
}
// function f2(a: unknown) {
//     a.b();
// }
function safeParse(s) {
    return JSON.parse(s);
}
// const obj = safeParse(somethingRandom);
// The never type represents values which are never observed. 
// In a return type, this means that the function throws an exception or terminates execution of the program.
function fail(msg) {
    throw new Error(msg);
}
function fun(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
var fun1 = function () {
    return true;
};
var fun2 = function () { return true; };
var fun3 = function () {
    return true;
};
var v1 = fun1();
var src = [1, 2, 3];
var dst = [0];
src.forEach(function (el) { return dst.push(el); });
function visitForBirthday(home) {
    // We can read and update properties from 'home.resident'.
    console.log("Happy birthday ".concat(home.resident.name, "!"));
    home.resident.age++;
}
var cc = {
    color: "red",
    radius: 42
};
console.log(cc);
var box;
var boxA = { contents: "hello" };
console.log(boxA.contents);
// interface Array<Type> {
//     length: number;
//     pop(): Type | undefined;
//     push(...items: Type[]): number;
// }
// wtf
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var tmp = loggingIdentity({ length: 10, value: 3 });
// cool 
function getProperty(obj, key) {
    return obj[key];
}
var t = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
getProperty(t, "a");
// getProperty(t, "m");
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametag = "Mikle";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLegs = 4;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
console.log(typeof "Hello");
var s = "1";
var n = typeof s;
console.log(n);
