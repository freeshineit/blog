const rm = require('rimraf');
const fs = require('fs');

console.log(fs.statSync(__dirname + '/target').isDirectory());

rm(__dirname +'/target/haha', (err) => {
    if (err) throw err
});

rm.sync(__dirname +'/sync');

rm(__dirname +'/target/f-*', (err) => {
    if (err) throw err
});