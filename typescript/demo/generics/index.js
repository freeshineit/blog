// function createArray(length: number, value: any): Array<any> {
//     let result = [];
//     for (let i = 0; i < length; i ++) {
//         result.push(value);
//     }
//     return result;
// }
// console.log(createArray(5, {name: 'shine'}))
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(value);
    }
    return result;
}
console.log(createArray(5, { name: 'shine' }));
var Box = /** @class */ (function () {
    function Box(t) {
        this.t = t;
    }
    Box.prototype.sayHi = function () {
        console.log(this.t);
    };
    return Box;
}());
var numberBox = new Box(1231);
var objectBox = new Box({ name: 'shine' });
var stringBox = new Box('141');
numberBox.sayHi();
objectBox.sayHi();
stringBox.sayHi();
