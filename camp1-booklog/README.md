# Startup engineering camp 1

## Stage 1 

### Version control with Github

- 在 github 上建立一個 repository

### Fast prototyping in Bootstrap (index.html)

- [jQuery](http://jquery.com)
- [bootstrap](http://getbootstrap.com/)

### Use jade template engine (jade, html2jade), layout (header, footer)

- [jade](http://jade-lang.com/)
- [html2jade](https://github.com/donpark/html2jade)

	```
	$ html2jade *.html
	```

### Extract project structure

```
.
.bowerrc
.editorconfig
.gitignore
Gruntfile.js
LICENSE
bower.json
package.json
|-public
   |---css
   |---fonts
   |---images
   |---js
   |---vendor
      |-----bootstrap
      |-----jquery
|-fixes
|-sass
|-schema
|-scripts
|-utilities
|-views
```

### Import JavaScript and CSS (Bootstrap, jQuery, custom)

## Stage 2 

- [bower](http://bower.io)
- [express](http://expressjs.com/)
- [grunt](http://gruntjs.com)
	- [grunt-contrib-jade](https://github.com/gruntjs/grunt-contrib-jade)

## Stage 3

- [sass](http://sass-lang.com/)
- [grunt](http://gruntjs.com)
- [underscore](underscorejs.org)
- [Backbone](http://backbonejs.org/)

sass -> grunt-sass
backbone with API (sample)

## Stage 4

Implement CRUD (test case)

npm - package.json

Backbone Way with CRUD API 

### Restful API

- /books/id/collections/index
- /books/id/collections/cover_image
- /books/id/collections/chapter/1

```
{
 	"chapter1" : "第1課：手機與瀏覽器就是HTML5",
 	"filename" : "title"
}
```


## Stage 5

- forever
- winston
- github hook



