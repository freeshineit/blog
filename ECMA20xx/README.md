##  ECMA20xx



编辑中 。。。

```js
var a = [1,2,3,4,6,7,8,9,0,1,3,4,5,6, 1343, 1343, 141,33,33,44,132,14132, '1']

var b = {}

for (let i = 0; i <a.length; i ++ ) {
	if (b.hasOwnProperty(a[i])) {
		b = Object.assign(b, {[a[i]]: b[a[i]] + 1})
	} else {
		b = Object.assign(b, {[a[i]]: 1})
	}
}

console.log(b);

```