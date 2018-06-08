const inquirer = require('inquirer');
const prompts = async () => {
    let result = await inquirer.prompt([
        {
            type: 'list',
            message: 'which template do you need:',
            name: 'list template',
            choices: ['normal', 'wap', 'h5']
        },
        {
            type: 'rawlist',
            message: 'which template do you need:',
            name: 'rawlist template',
            choices: ['normal', 'wap', 'h5']
        },
        {
            type: 'checkbox',
            message: 'which template do you need:',
            name: 'checkbox template',
            choices: ['normal', 'wap', 'h5']
        }
    ]).then(function (answers) {
        console.log(answers)
        // done();
    });
}

prompts()

const prompt = async () => {
    let result = await inquirer.prompt(
        {
            type: 'list',
            message: 'which template do you need:',
            name: 'list template',
            choices: ['normal', 'wap', 'h5']
        }
    )

    await console.log(result);
}

// prompt()