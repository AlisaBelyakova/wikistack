const router = require('express').Router();
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true})); 

router.get('/', (req, res)=>{
    res.redirect('/wiki');
});
// router.use('/', wikiRouter)
router.use('/wiki', wikiRouter);
// router.use('/user', userRouter);




module.exports = router;
