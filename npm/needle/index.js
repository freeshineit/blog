var needle = require('needle');

needle.get('http://www.baidu.com', function (error, response) {
    if (!error && response.statusCode == 200)
        console.log('成功');
    else 
        console.log('请求失败')
});

var data = {
    file: '/home/johnlennon/walrus.png',
    content_type: 'image/png'
};

// the callback is optional, and needle returns a `readableStream` object
// that triggers a 'done' event when the request/response process is complete.
needle
    .post('https://my.server.com/foo', data, { multipart: true })
    .on('readable', function () { /* eat your chunks */ })
    .on('done', function (err, resp) {
        console.log('Ready-o!');
    })