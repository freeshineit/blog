const fs = require('fs');
const http = require('http');
const qs = require('querystring');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

const asyncReadFile = async function () {
    const f1 = await readFile('./a');
    const f2 = await readFile('./b');

    fs.writeFileSync('s', f1.toString() + '' + f2.toString(), {},  () => {});

    console.log('asyncReadFile: ', f1.toString());
    console.log('asyncReadFile: ', f2.toString());
};

asyncReadFile ();


const foo = () => {
    console.log('foo')
    return setTimeout(() => {
        console.log('5000')
    }, 5000);
}

const foo2 = () => {
    console.log('foo2')
    return setTimeout(() => {
        console.log('1000')
    }, 1000);
}

const settime = async () => {
    await foo();
    await foo2();
    console.log('settime')
}

settime()



// 我们现在正在等待一个包含两个元素的数组的 Promise ，而不是等待两个 Promise
async function foo3() {
    const [result1, result2] = await Promise.all([
        asyncFunc1(),
        asyncFunc2(),
    ]);
}

function asyncFunc1 () {
    console.log('asyncFunc1')
}

function asyncFunc2 () {
    console.log('asyncFunc2')
}

foo3()



