const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
        // , validate: {
        //     isAlphanumeric: true
        // }
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
        //, validate: {
        //     isUrl: true
        // }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: 'open'
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
}, { //beginning of third argument
    getterMethods: { 
        get () {
            return '/wiki/' + this.urlTitle;
        }
    }, 
    // hooks: {
    //     // beforeValidate: urlGetter (title) {
    //     // }
    // }
    // setterMethods: {} if we were putting in settermethods, this is where they would go

    } //end of third argument

)




// Page.hook('beforeValidate', (page)=>{
//     page.urlTitle = urlGetter()
// })


const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});


module.exports = {
    Page: Page,
    User: User,
    db: db
}
