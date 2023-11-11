const express = require('express');
const sourcecodeController = require('../controller/sourcecode.controller');

const router = express.Router();

router.use((req, resp, next)=>{
    console.log(req.ip);
    next();
});

router.get('/', sourcecodeController.index);
router.get('/:filename', sourcecodeController.codeview);

module.exports = router;