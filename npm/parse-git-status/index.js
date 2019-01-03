const parseGitStatus = require('parse-git-status');
const execa = require('execa');
 
execa('git', ['status' ,'--porcelain', './npm/pre-commit/'])
    .then(({stdout}) => {
        console.log(parseGitStatus(stdout)[0].to);
    });
