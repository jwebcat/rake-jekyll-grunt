## rake-jekyll-grunt - :a_whole_new_kind_of_beast => do


- Usage

1. Install npm
- [go here for install instructions for npm](https://github.com/isaacs/npm)

or with windows and [chocolatey.org](http://chocolatey.org) just use the below in your shell

```
$ cinst npm
```

2. Install Grunt-Cli using npm with the `-g` flag for npm to install globally

```
$ npm install -g grunt-cli
```

3. Install Grunt Dependancies
- make sure the package.json file is the root of your project then use npm to install the dependancies locally like so

```
$ npm install
```

## You should now be up and running with npm and grunt ...

- Almost Done

4. Setup your sass files like below for minmal config of the Rakefile and Gruntfile.js
- The only really important part is that your .scss files are in _sass and your .js files, images, and fonts live

```
project
    _site/
    _sass/
        .scss # all .scss files live here
    _assets/
        js/
        images/
        fonts/
    _layouts/
    _assets/
    _includes/
    _posts/
    _plugins
        compass.rb
        prism.rb
    node_modules/
    _config.yml
    Rakefile
    Gruntfile.js
    package.json
    config.rb # compass config file for grunt
    _compass.rb # compass config for jekyll plugin compass generator
```

5. Lastly make sure your compass config files are correct

- You should be good to go.

