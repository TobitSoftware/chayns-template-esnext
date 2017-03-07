# chayns+ES2015 Template

This template will show you the basic project structure for building your own custom Tapps with `ES2015` and the `chayns`-Framework.

###Requirements

* A Chayns Site
* Node.js

## Getting started

The template is based on several npm-Packages, which have to be installed first. If you haven´t installed `node.js` already, please install it now.
For installing the dependecies you have to open your `node.js` terminal, change the path to the cloned project and run:

```
npm i
```

For setting up the recommended folder structure you just have to run:

```
npm run setup
```

This project uses `webpack` and `Babel` for building and debugging. You can start the `webpack-dev-server` with the following statement:

```
npm start
```

For creating an production build execute this code:

```
npm run release
```

To test your site you need a Chayns site and rights to add content. To add your site to Chayns we need to do some changes:

In webpack/dev.babel.js:
* ```webpack-dev-server/client?http://0.0.0.0:8080``` 0.0.0.0 to your ip like 192.168.178.XXX

In package.json:
* ```"start": "webpack-dev-server --colors --progress --config ./webpack/dev.babel.js --host 0.0.0.0 --port 8080",``` here too

When you have changed this settings you need to go to your Chayns site. There you need to follow these steps:

1. Go to configuration -> Tapps
2. Click ```Add Tapp```
3. Use external content
4. Fill out the name and in the field data source put your ip like this: ```http://192.168.178.XXX/index.html```
5. Click ```add```
6. If your website isn't running make sure you have entered ```npm start```