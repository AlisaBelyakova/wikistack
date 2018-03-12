const router = require('express').Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wikistack', wikiRouter);
router.use('/user', userRouter);


router.get('/wikistack', (req, res)=>{
    res.render('index');
})

router.post('/wikistack', (req, res, next) => {
    let bodyReq = req.body;
    res.send()
})

module.exports = router;
