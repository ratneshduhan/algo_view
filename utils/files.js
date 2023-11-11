const fs = require('fs');
const path = require('path');

exports.readFile = (pathToFile) => {
    return fs.readFileSync(path.join(__dirname, '..', pathToFile));
};

exports.readFileNames = (dir) => {
    return fs.readdirSync(path.join(__dirname, '..', dir));
};