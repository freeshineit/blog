const promise = new Promise((resolve, reject) => {
    // resolve('hahah')
    setTimeout(() => {
        reject('这是一个reject')
    }, 5000);
})
.then((data) => {
    console.log(data)
}, (err) => {
    console.log('reject', err)
})
.catch(err => {
    console.log('catch', err)
})
.finally(() => { // node v8.9.4 还没实现
    console.log('finally')
});


const timeout = (ms = 1000) => new Promise ((resolve, reejct) => {
    setTimeout(() => {
        resolve('timeout success')
    }, ms);
});

timeout(5000).then( resolve => {
    console.log(resolve)
}, reject => {
    console.log(reject)
});


// function loadImageAsync(url) {
//     return new Promise(function (resolve, reject) {
//         const image = new Image();

//         image.onload = function () {
//             console.log('image', image)
//             resolve(image);
//         };

//         image.onerror = function () {
//             reject(new Error('Could not load image at ' + url));
//         };

//         image.src = url;
//     });
// }


// loadImageAsync('http://www.baidu.com')


// const getJSON = function (url) {
//     const promise = new Promise(function (resolve, reject) {
//         const handler = function () {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();

//     });

//     return promise;
// };

// getJSON("http://localhost:9001/api/global.json").then(function (json) {
//     console.log('Contents: ' + json);
// }, function (error) {
//     console.error('出错了', error);
// });


function getFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

const g = function* () {
    try {
        const foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run(generator) {
    const it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);


const f = () => console.log('now');
(async () => f())();
console.log('next');



console.log('底部');
