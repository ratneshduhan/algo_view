const {readFile, readFileNames} = require('../utils/files');

function index(req, res) {
    let output = readFileNames('source_code');
    console.log(output);
    res.status(200).render('index-view', {
        title: 'Codemirror',
        data: output,
    });
};

function codeview(req, res) {
    let filename = req.params.filename;
    let output;
    try {
        output = readFile(`source_code/${filename}`);
    } catch (e) {
        res.status(400).send("error");
    }
    res.status(200).render('code-view', {
        title: 'Codemirror',
        data: output,
    });
};

module.exports = {
    index, codeview
}