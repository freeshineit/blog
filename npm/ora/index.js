const ora = require('ora');
const spinner = ora('Loading unicorns').start();
 
// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = 'Loading rainbows';
// }, 1000);
const start = async () => {
    await new Promise((resolve)=> {
        setTimeout(() => {
            spinner.succeed('哈哈哈😂');
            resolve();
        }, 1000);
    })
    await new Promise((resolve)=> {
        spinner.start();
        setTimeout(() => {
            spinner.fail('哈哈哈😂, 不好意思fail');
            resolve();
        }, 1000);
    })
    await new Promise((resolve)=> {
        spinner.start();
        setTimeout(() => {
            spinner.warn('哈哈哈😂, 不好意思warn');
            resolve();
        }, 1000);
    })
    await new Promise((resolve)=> {
        spinner.start();
        setTimeout(() => {
            spinner.info('哈哈哈😂, 不好意思info');
            resolve();
        }, 1000);
    })

    console.log('isSpinning',spinner.isSpinning);

    await spinner.stop();
}

start();

