# Startup Engineering Camp #1

## 關於

由 Moko365 所成立的創業課程訓練營。訓練課程著重實際的開發面，訴求如何把一個新創的想法，透過工程技術產出實際的成果，這就是 Startup Engineering 課程的目標。

對創業者來說，比開設公司更重要的工作，就是做出想法。 典型的 Startup 課程，著重「創業」層面；Startup Engineering 則看重「實現想法」的工程面。

Startup Engineering 源自史丹佛大學今年新開設的 Startup Engineering 課程。這門課程講究如何利用開源工具、外部資源與 HTML5 技術，將想法創作出來。透過 Startup Engineering 課程，導師們將分享如何以開源工具與 HTML5 技術等，將想法變成實際的成品。

軟體專案的管理技術，因為 Open Innovation 的文化，也產生巨大的改變。Startup Engineering 也將介紹，如何採用新的管理方式來運作你的軟體專案 。我們也不定時邀請業界導師，和大家討論 Startup 的創業層面。

## Reference Course

- [Startup Engineering on Cousera](https://class.coursera.org/startup-001/class)
- [nodejs oveview on Mokoversity](http://www.mokoversity.com/course/html5/nodejs-overview)
- [bootstrap & html5 overview on Mokoversity](http://www.mokoversity.com/course/html5/bootstrap-html5-intro)
- [jQuery overview on Mokoversity](http://www.mokoversity.com/course/html5/jquery-overview)


## Stage 1 

### Version control with Github

- 在 [github](https://github.com) 上建立一個 repository

```
git clone
git add files
git commit
git push origin master
git pull
git checkout files
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
	$ npm install -g bower
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
	$ npm install -g express
	$ express
	$ node app.js
	```


### Use back-end package management

- [npm](http://npmjs.org)

	```
	$ npm i
	```

## Stage 3

### Use stylesheet language - Sass

- [sass](http://sass-lang.com/)

	- convert sass/scss to css
	```
	$ sass sass/style.sass:public/css/style.css
	```

	- convert css to sass/scss
	```
	$ sass-convert -F css -T sass public/css/wiki.css sass/wiki.sass
	```

### Create grunt task

- [grunt](http://gruntjs.com)
	- grunt-exec
	- grunt-contrib-sass
	- grunt-contrib-uglify
	- grunt-contrib-watch

	```
	$ npm install -g grunt
	$ npm install grunt --save-dev
	$ npm search grunt-contrib
	$ npm install grunt-exec --save-dev
	$ npm install grunt-contrib-sass --save-dev
	$ npm install grunt-contrib-uglify --save-dev
	$ npm install grunt-contrib-watch --save-dev
	```

## Stage 4

### Define Restful API

- /books/id/collections/index
- /books/id/collections/cover_image
- /books/id/collections/chapter/1
- /books/id/collections/comments

#### JSON Data

```
{
 	"chapter1" : "第1課：手機與瀏覽器就是HTML5",
 	"filename" : "CS_LESSON_1"
}
```

### Implement CRUD

- [MongoDB](http://www.mongodb.org)

### Backbone Way with CRUD API 

- [underscore](underscorejs.org)
- [Backbone](http://backbonejs.org/)

	```
	Create - POST - model.save
	Read   - GET - model.fetch
	Update - PUT - model.save
	Delete - DELETE - model.destroy
	```

## Stage 5

- [forever](https://github.com/nodejitsu/forever)

	```
	$ npm install -g forever-cli
	$ forever start -w app.js
	```

- [winston](https://github.com/flatiron/winston)
- Auto deploy with github hook
	- [node-hook](https://github.com/hankwang/node-github-hook-deploy)
- Deploy on heroku or AWS

## Additional

- [editorconfig](http://editorconfig.org)
- [sublime text](http://www.sublimetext.com)
