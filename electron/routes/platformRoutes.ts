// const { check } = require('express-validator');

const platformControllers = require('../controllers/platformControllers');
// const fileUpload = require("../middleware/file-upload");
// const checkAuth = require('./../middleware/check-auth')
const expressPlatformRoutes = require('express')
const router = expressPlatformRoutes.Router();

router.get('/', platformControllers.getPlatform);