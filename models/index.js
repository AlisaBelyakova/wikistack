const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
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
        urlGetter () {
            // we want to take the title from user and return one that has no spaces
        },
        get () {
            return '/wiki/' + this.urlTitle;
        }
    },
    // setterMethods: {} if we were putting in settermethods, this is where they would go

    } //end of third argument

)

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
