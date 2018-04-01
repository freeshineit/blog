(function () {
	var file = document.getElementById('file');
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	var image = document.getElementById('imgContent')

	file.addEventListener('change', function (e) {
		var file = this.files[0];
		var imageType = /image.*/;
		if (file.type.match(imageType)) {
			var reader = new FileReader();
			reader.onload = function () {
				var img = new Image();
				img.src = reader.result;
				setTimeout(function (){
					ctx.drawImage(img, 10, 10)
					var imgUrl = canvas.toDataURL("image/png", 0.5);

					var file1=convertBase64UrlToBlob(imgUrl,"png");
					console.log(file1)
				}, 0);
				// console.log(img.src)
			};
			reader.readAsDataURL(file);
		} else {
			alert(opts.errorMessage);
		}
	})

	function convertBase64UrlToBlob(urlData,type){
	    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
	    //处理异常,将ascii码小于0的转换为大于0
	    var ab = new ArrayBuffer(bytes.length);
	    var ia = new Uint8Array(ab);
	    for (var i = 0; i < bytes.length; i++) {
	        ia[i] = bytes.charCodeAt(i);
	    }
	    return new Blob( [ab] , {type : 'image/'+type});
	}

})();