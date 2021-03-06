var express = require('express');
var router = express.Router();
var signController = require('../controllers/sign-controller');
var blogController = require('../controllers/blog-controller');
var siteController = require('../controllers/site-controller');
var replyController = require('../controllers/reply-controller');
var auth = require('../middlewares/auth');

//显示登录界面
router.get('/signin',signController.showSignin);
//处理登录信息
router.post('/signin',signController.signin);
//显示注册界面
router.get('/signup',signController.showSignup);
//处理注册信息
router.post('/signup',signController.signup);
//登出操作
router.get('/signout',signController.signout);
//显示博文编写页面
router.get('/create',auth,blogController.showCreate);
//处理用户上传博文信息
router.post('/create',blogController.create);
//显示主页
router.get('/',siteController.index);
//显示博文详情
router.get('/detail/:id',blogController.detail);
//回复博文
router.post('/detail/reply',auth,replyController.reply);



module.exports = router;
