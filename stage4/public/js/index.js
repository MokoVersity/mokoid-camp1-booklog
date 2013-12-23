var app = app || {};

app.BookIndex = Backbone.Model.extend({
    defaults: {
    },
    url: function() {
        return '/books/1/collections/index'
    }
});

app.BookIndexCollection = Backbone.Collection.extend({
    model: app.BookIndex
});

app.BookIndexView = Backbone.View.extend({
    el: '#bookIndex',
    template: _.template($('#tmpl-bookindex').html()),
    initialize: function() {
        this.collection = new app.BookIndexCollection();
        this.collection.on('reset', this.render, this);
        this.model = new this.collection.model();
        this.listenTo(this.model, 'change', this.syncUp);
        this.reload();
    },
    reload: function() {
        this.model.fetch();
    },
    syncUp: function() {
        this.collection.reset(this.model.get('data'));
    },
    render: function() {
        console.log(456);
        var result = '';

        var me = this;
        console.log(this.model.attributes);
        this.collection.each(function(model) {
            result += me.template(model.attributes);
        });

        this.$el.html(result);
    }
});

app.NewBookIndexView = Backbone.View.extend({
    el: '#newBookIndex',
    events: {
        'click .btn-add': 'addNew',
    },
    initialize: function() {
        this.model = new app.BookIndex();
    },
    addNew: function() {
        this.model.save({
            filename: this.$el.find('#filename').val(),
            title: this.$el.find('#title').val()
        }, {
            success: function(model, response, options) {
                app.bookIndexView.reload();
            }
        });
    }
});

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
        app.bookIndexView = new app.BookIndexView();
        app.newBookIndexView = new app.NewBookIndexView();
    }
});

$(function() {
    app.mainView = new app.MainView();
});