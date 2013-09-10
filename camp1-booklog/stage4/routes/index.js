
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {});
};

exports.contact = function(req, res){
  res.render('contact', {});
};


// chapter
exports.chapter = function(req, res){

    var markdown = '## 尚無資訊';

    req.app.db.models.BookIndex.findOne({_id:req.params.id}, function(err, bookIndex) {

        if (!err && bookIndex) {
            // Read file async
            require('fs').readFile('wiki/' + bookIndex.filename + '.md', 'utf8', function (err, data) {
                console.log(err);

                if (!err) markdown = data;
                res.render('index', {
                    markdown: markdown
                });
            });
        }
    });
};

// index
exports.bookIndex = function(req, res){
    req.app.db.models.BookIndex.find({}, function(err, bookIndex) {
        if (err) res.send(err);
        res.send({
            status: 'ok',
            data: bookIndex
        });
    });
};

exports.updateBookIndex = function(req, res){
    req.app.db.models.BookIndex.update({
        _id: req.body.id
    }, { filename: req.body.filename, title: req.body.title }, { upsert: false, multi: true }, function(err, numAffected) {
        if (err) res.send(err);

        res.send({
            status: 'ok'
        });
    });
};

exports.createBookIndex = function(req, res){
    var filedToSet = {
        filename: req.body.filename,
        title: req.body.title,
    }

    req.app.db.models.BookIndex.create(filedToSet, function(err, bookIndex) {
        if (err) res.send(err);
        res.send(bookIndex);
    });
};

exports.deleteBookIndex = function(req, res){
    req.app.db.models.BookIndex.remove({_id: req.body.id}, function(err, bookIndex) {
        if (err) res.send(err);
        res.send(bookIndex);
    });
};