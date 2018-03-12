const router = require('express').Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;
// const nunjucks = require('nunjucks');
// const env = nunjucks.configure('views', {noCache: true});
// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);

router.get('/', (req, res) =>{
    res.render('index');
})

function urlGetter (title) {
    // we want to take the title from user and return one that has no spaces
    return title.replace(/\s+/g, '_').replace();
}


router.post('/', (req, res, next) => {
    Page.hook('beforeValidate', (page)=>{
        page.urlTitle = urlGetter(req.body.title)
    })

    const page = Page.build({
        // urlTitle: Page.urlGetter(req.body.title),
        title: req.body.title,
        content: req.body.content,
        status: req.body.status,
        email: req.body.email,
        name: req.body.name    
    });

    console.log('POSTED in wiki root');
    page.save();
});

router.get('/add', (req, res, next)=>{
    res.render('addpage');
});

module.exports = router;