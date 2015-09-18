# MEAN Manga Reader
Simple web manga reader using Angular+Node with a twist: You can store your mangas (or comics or simple images) on your personal Dropbox account to access them anywhere!

Demo
----

See it in action [on my page](http://las.readerman.ga)

Installation
------------

To install the reader you'll need [`grunt-cli`](https://www.npmjs.com/package/grunt-cli) and [`bower`](https://www.npmjs.com/package/bower).

After you clone the repo, run on your terminal
```
$ npm install
$ bower install
$ grunt
```

Maybe you'll need to run grunt in force mode (`grunt --force`) as some tests are failing right now (because I haven't written/changed them!).

Once you have all the required dependencies, run the server!

```
$ node server/app.js
```

and check it with your browser on [http://localhost:9000](). That's it!

#### Note for production
The `grunt` directive creates a new folder, `dist`. It contains the minimum, minified, production-ready files you need for your server.
If you just want to install-and-forget-it, use this one. Note that you'll have to install the node modules (`$ npm install`) for this folder once you move it to its final location.