var pubsub = (function () {
    var q = {}
    topics = {},
        subUid = -1;
    //发布消息
    q.publish = function (topic, args) {
        if (!topics[topic]) { return; }
        var subs = topics[topic],
            len = subs.length;
        while (len--) {
            subs[len].func(topic, args);
        }
        return this;
    };
    //订阅事件
    q.subscribe = function (topic, func) {
        topics[topic] = topics[topic] ? topics[topic] : [];
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
    return q;
    //取消订阅就不写了，遍历topics，然后通过保存前面返回token，删除指定元素
})();
//触发的事件
var logmsg = function (topics, data) {
    console.log("logging:" + topics + ":" + data);
}
//监听指定的消息'msgName'
pubsub.subscribe('msgName', logmsg);
pubsub.subscribe('msgName', logmsg);
pubsub.subscribe('anotherMsgName', logmsg);

//发布消息'msgName'
pubsub.publish('msgName', 'hello world');
//发布无人监听的消息'msgName1'
pubsub.publish('anotherMsgName', 'me too!');

