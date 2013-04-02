## rake-jekyll-grunt -` :a_whole_new_kind_of_beast => :awaken do`

## This is the Rakefile from Octopress with some Special Sauce just for Jekyll.

- Thanks to @imathis for making most of the rakefile, which was configured for octopress, and I just hacked for use with Jekyll

## Usage

### Install npm
- [go here for install instructions for npm](https://github.com/isaacs/npm)

- or with windows and [chocolatey.org](http://chocolatey.org) just use

```
$ cinst npm
```

## Install Grunt-Cli using npm with the `-g` flag for npm to install globally

```
$ npm install -g grunt-cli
```

## Install Grunt Dependancies

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
        .scss           # all your .scss files live here
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
        prism.rb        # this file is just here so the grunt uglify task doesn't fail see below
    node_modules/
    _config.yml
    Rakefile
    Gruntfile.js
    package.json
    config.rb # compass config file for grunt
    _compass.rb # compass config for jekyll plugin compass generator
```

## You will have to change a few settings to your liking / preferences

- The settings for grunt uglify are in Gruntfile.js

- You will have to adjust the settings to match your project here is a gist

```
// uglify to concat, minify, and make source maps
        uglify: {
            dist: {
                options: {
                    sourceMap: 'assets/js/map/source-map.js'        // this is where your source map will live for any .js files you feed uglify
                },
                files: {
                    'assets/js/app.min.js': [           // this is the file that you will have once uglify minifies the .js
                        'assets/js/*.js',
                    ],
                    'assets/js/prism.min.js': [
                        'assets/js/prism.js'
                    ],
                }
            }
        },
```

## Lastly make sure your compass config.rb files, your _compass.rb, and _config.yml for jekyll are ilk in the diagram above

- Put the Rakefile in the root of your project

- You should be good to go.

## Now you can list out the rake tasks you have at your disposal like

```
$ rake list
```

- or to get more info on each task

```
$ rake -T
```

## Here is a list of all the tasks

```
rake clean                     # Clean out caches: .pygments-cache, .gist-c...
rake copydot[source,dest]      # copy dot files for deployment
rake deploy                    # Default deploy task
rake gen_deploy                # Generate website and deploy
rake generate                  # Generate jekyll site
rake integrate                 # Move all stashed posts back into the posts...
rake iso_post[title]           # Begin a new post in c:/Users/Owner/Desktop...
rake isolate[filename]         # Move all other posts than the one currentl...
rake list                      # list tasks
rake list_posts[type]          # List all posts with an asterisk if it's pu...
rake livegrunt                 # preview the site with grunt and live reloa...
rake master_config_push        # set master as default merge and push for o...
rake new_page[filename]        # Create a new page in (filename)/index.md
rake new_post[title]           # Begin a new post in c:/Users/Owner/Desktop...
rake preview                   # preview the site in a web browser
rake push                      # deploy public directory to github pages
rake push_master               # commit changes to core source files on mas...
rake rsync                     # Deploy website via rsync
rake set_root_dir[dir]         # Update configurations to support publishin...
rake setup_github_pages[repo]  # Set up _deploy folder and deploy branch fo...
rake watch                     # Watch the site and regenerate when it changes
```

## The new ones are `rake iso_post` and `rake list_post`

```
$ rake iso_post               # will create a new post then isolate it and open it in Sublime Text 2
```

```
$ rake list_post            # will list out the published and unpublished (drafts) in you _posts dir
```

## You can just run the rake preview task as well by using

```
$ grunt
```

- Which will run the configured default grunt task in Gruntfile.js

## TODO

- make another version of Rakefile that uses Guard to watch, minify, optimize, run compass, jekyll, and live reload instead of grunt

- also make another version that just works without Grunt or Guard as some people are not playing with those tools yet.



## Attribution and Many Thanks go to:

- Thanks for all my knowledge I compiled from the brains of the following geniuses:
- @mattbanks @parkr @zenshin @thanpolas @imathis and so many more of you. Thanks a Million.

## License

- DWTFYWL License
DO Whatever The F%$# you would like License.
You just do whatever the F&%$ you like.

## Contributing

- If you would like to contribute your tasks or make these better:

1. Fork this project on github

- Make a feature branch and hack

3. Send a PR (Pull Request)

- Enjoy :)