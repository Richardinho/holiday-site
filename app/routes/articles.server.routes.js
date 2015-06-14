var articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
    app.route('/articles')
        .post(articles.create).get(articles.list);

    app.route('/articles/:userId')
        .get(articles.read)
        //.put(users.update)
       // .delete(users.delete);

    app.param('userId', articles.articleByID);
};