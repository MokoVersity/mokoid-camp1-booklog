var app = app || {};

app.Author = Backbone.Model.extend({
    defaults: {
        "name":  "Jollen Chen",
        "hash": "400c529007e2242ac7132c78fc772e91"
    }
});

app.AuthorView = Backbone.View.extend({
    el: '#author',
    template: _.template($('#tmpl-author').html()),
    initialize: function() {
        this.model = new app.Author();
        this.render();
    },
    render: function() {
        console.log(this.template(this.model.attributes));
        this.$el.html(this.template(this.model.attributes));
    }
});

app.WikiView = Backbone.View.extend({
    initialize: function() {
        if ($('#markdown').length > 0) {
            var converter = new Showdown.converter();
            var markdown = $('#markdown').html();
            var html = converter.makeHtml(markdown);
            $('.wiki-content').html(html);
        }
    }
});

app.MainView = Backbone.View.extend({
    initialize: function() {
        app.mainView = this;
        app.wikiView = new app.WikiView();
        app.authorView = new app.AuthorView();
    }
});

$(function() {
    app.mainView = new app.MainView();
});