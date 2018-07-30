// function createArray(length: number, value: any): Array<any> {

//     let result = [];

//     for (let i = 0; i < length; i ++) {
//         result.push(value);
//     }

//     return result;
// }

// console.log(createArray(5, {name: 'shine'}))

function createArray<T>(length: number, value: T): Array<T> {

    let result = [];

    for (let i = 0; i < length; i ++) {
        result.push(value);
    }

    return result;
}

console.log(createArray<object>(5, {name: 'shine'}))


class Box<T> {
    private t: T;
    public constructor(t) {
        this.t = t;
    }
    sayHi() {
        console.log(this.t);
    }
}

const numberBox = new Box<number>(1231);
const objectBox = new Box<object>({name: 'shine'});
const stringBox = new Box<string>('141');

numberBox.sayHi();
objectBox.sayHi();
stringBox.sayHi();

interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArrays: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArrays(3, 'x'); // ['x', 'x', 'x']