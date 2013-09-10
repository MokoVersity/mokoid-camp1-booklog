# Startup Engineering Camp #1

## 關於

由 Moko365 所成立的創業課程訓練營。訓練課程著重實際的開發面，訴求如何把一個新創的想法，透過工程技術產出實際的成果，這就是 Startup Engineering 課程的目標。

對創業者來說，比開設公司更重要的工作，就是做出想法。 典型的 Startup 課程，著重「創業」層面；Startup Engineering 則看重「實現想法」的工程面。

Startup Engineering 源自史丹佛大學今年新開設的 Startup Engineering 課程。這門課程講究如何利用開源工具、外部資源與 HTML5 技術，將想法創作出來。透過 Startup Engineering 課程，導師們將分享如何以開源工具與 HTML5 技術等，將想法變成實際的成品。

軟體專案的管理技術，因為 Open Innovation 的文化，也產生巨大的改變。Startup Engineering 也將介紹，如何採用新的管理方式來運作你的軟體專案 。我們也不定時邀請業界導師，和大家討論 Startup 的創業層面。

## Stage 1 

### Version control with Github

- 在 github 上建立一個 repository

```
git clone
git add files
git commit
git push origin master
git pull
```

### Fast prototyping in Bootstrap (index.html)

- [jQuery](http://jquery.com)
- [bootstrap](http://getbootstrap.com/)

### Use jade template engine (jade, html2jade), layout (header, footer)

- [jade](http://jade-lang.com/)

	```
	$ jade templateFolderName
	$ jade template.jade
	$ jade views/*.jade -o public/
	```

- [html2jade](https://github.com/donpark/html2jade)

	```
	$ html2jade *.html
	$ html2jade *.html -o outFolder
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

### Use front-end package management

- [bower](http://bower.io)

```
$ bower install bootstrap
```

```
$ bower init
$ bower install bootstrap --save
$ bower list
$ bower uninstall bootstrap --save
```

**.bowerrc**
```
{
    "directory": "public/vendor"
}
```

### Application Server: Node and Express

- [express](http://expressjs.com/)

```
$ express
$ npm i
```

### Use back-end package management

- [npm](http://npmjs.org)

package.json

## Stage 3

### Use stylesheet language - Sass

- [sass](http://sass-lang.com/)
	- grunt-contrib-sass
	- grunt-contrib-watch
	- grunt-contrib-uglify

### Create grunt task

- [grunt](http://gruntjs.com)
	- [grunt-contrib-jade](https://github.com/gruntjs/grunt-contrib-jade)
	- grunt-exec

### Use MVC, MVP and MVVM

- [underscore](underscorejs.org)
- [Backbone](http://backbonejs.org/)

backbone with API (sample)

## Stage 4

Implement CRUD (test case)
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



