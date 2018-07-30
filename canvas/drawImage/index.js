(function () {


	var width = document.body.clientWidth;
	var height = document.body.clientHeight;

	var canvas = document.getElementById('canvas');

	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');

	var photo1 = './photo1.jpg';
	var photo2 = './photo2.jpg';

	var photo1Img = new Image();
	var photo2Img = new Image();

	photo1Img.src= photo1;
	photo2Img.src= photo2;

	// photo1Img.onload = function () {
	// 	console.log(photo1Img.width)
	// 	ctx.drawImage(photo1Img, 10, 10)
	// }

	photo2Img.onload = function () {
		var chunkHeight = 50;
		var count = Math.floor(photo2Img.height / chunkHeight);
		ctx.drawImage(photo2Img, 
			0, 0 , photo2Img.width, photo2Img.height,
		)

		ctx.globalAlpha = 0.5; // 透明度
		ctx.globalCompositeOperation = "xor" // 合成操作

		for (let i = 0; i < count; i ++) {
			ctx.drawImage(photo2Img, 
				chunkHeight - 10, chunkHeight * i, photo2Img.width, chunkHeight,
				photo2Img.width + Math.floor(Math.random() * 10), chunkHeight * i, photo2Img.width, chunkHeight,
			)
		}

		console.log(ctx.canvas)
	}

})()


// var a = [1,2,3,4,6,7,8,9,0,1,3,4,5,6]

// var b = {}

// for (let i = 0; i <a.length; i ++ ) {
// 	if (b.hasOwnProperty(a[i])) {
// 		b = Object.assign(b, {[a[i]]: b[a[i]] + 1})
// 	} else {
// 		b = Object.assign(b, {[a[i]]: 1})
// 	}
// }

// console.log(b);


