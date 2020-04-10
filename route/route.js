const {UploadController , getFiles ,deleteFiles , updateFile} = require('../controller/upload');
const upload = require('../config/multerConfiguration')
const express = require('express');
const router  = express.Router();

router.route('/:id?').get(getFiles)
router.route('/:id').delete(deleteFiles)
router.route('/').post(upload.array("files") , UploadController )
router.route('/:id').patch(updateFile)




module.exports = router