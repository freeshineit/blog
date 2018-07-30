function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName('滚'));
getName(function () {
    console.log('你滚吧！');
    return '';
});
function handleEvent(ele, event) {
    console.log(ele);
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'mousemove'); //
