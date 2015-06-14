var Article = require('mongoose').model('Article');

exports.create = function(req, res, next) {
    var article = new Article(req.body);
    article.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(article);
        }
    });
};

exports.list = function(req, res, next) {
    Article.find({}, function(err, articles) {
        if (err) {
            return next(err);
        }
        else {
            res.json(articles);
        }
    });
};

exports.articleByKeyword = function(req, res, next, keyword) {
    Article.findOne({
            title : keyword
        },
        function(err, article) {
            if (err) {
                return next(err);
            }
            else {
                req.article= article;
                next();
            }
        }
    );
}

exports.read = function(req, res) {
    res.json(req.article);
};

exports.articleByID = function(req, res, next, id) {
    Article.findOne({
            _id: id
        },
        function(err, article) {
            if (err) {
                return next(err);
            }
            else {
                req.article= article;
                next();
            }
        }
    );
};
/*

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.user);
        }
    })
};*/
