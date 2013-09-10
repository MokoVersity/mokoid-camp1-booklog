exports = module.exports = function(app, mongoose) {
    require('./schema/BookIndex')(app, mongoose);
};
