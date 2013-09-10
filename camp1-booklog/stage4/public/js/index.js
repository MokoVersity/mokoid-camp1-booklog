var app = app || {};

app.MainView = Backbone.View.extend({
    initialize: function() {
        app.mainView = this;

        if ($('#markdown').length > 0) {
            var converter = new Showdown.converter();
            var markdown = $('#markdown').html();
            var html = converter.makeHtml(markdown);
            $('.wiki-content').html(html);
        }
    }
});

$(function() {
    app.mainView = new app.MainView();
});