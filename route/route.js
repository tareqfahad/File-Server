const {UploadController} = require('../controller/upload');
const upload = require('../config/multerConfiguration')
const express = require('express');
const router  = express.Router();

router.route('/').get()
router.route('/').delete()

router.route('/').post(upload.array("files") , UploadController )

router.route('/').patch()



module.exports = router