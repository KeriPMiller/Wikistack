const Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        get()   {
            return ('/wiki/' + this.getDataValue('urlTitle'));
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.Now
    }
})
Page.hook('beforeValidate', (page,options)  =>  {
    if (page.title)   {
        var spc = new RegExp(/\s/,'g');
        var newT = page.title.replace(spc, '_');
        page.urlTitle =  newT;
    }
    else {
    // Generates random 5 letter string
    page.urlTitle = Math.random().toString(36).substring(2, 7);
    }
})
var User = db.define('user',   {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {isEmail: true}
    }
})
module.exports = {Page: Page, User: User, db: db};
