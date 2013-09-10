exports = module.exports = function(app, mongoose) {
  var bookIndexSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    title: { type: String, required: true }
  }, { versionKey: false });
  bookIndexSchema.set('autoIndex', (app.get('env') == 'development'));
  app.db.model('BookIndex', bookIndexSchema);
}