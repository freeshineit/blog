var xml2js = require('xml2js');
var xml = "<root>Hello xml2js!</root>"
xml2js.parseString(xml, {trim: true},function (err, result) {
    console.dir(result);
});

var obj = {name: "Super", Surname: "Man", age: 23};
 
var builder = new xml2js.Builder();
var xml1 = builder.buildObject(obj);

console.dir(xml1)