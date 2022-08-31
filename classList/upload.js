const {path, multer} = require('../src/appConfig');

//文件上传
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, path.join(`${process.cwd()}/public/images/`));
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = file.originalname.split('.');
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
  }
});
//加载配置
var upload = multer({storage: storage});

module.exports = upload;

/**
 * 使用
 * router.post('/xx/xx', upload.single('file'), async ctx => {
 *    ctx.body = ctx.req.file;
 * })
 */
