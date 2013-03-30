'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

    grunt.initConfig({

        // live reload, in case you want to change the port or anything
        livereload: {
            port: 8080
        },

        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '_site')
                        ];
                    }
                }
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                "bitwise": true,
                "eqeqeq": true,
                "eqnull": true,
                "immed": true,
                "newcap": true,
                "es5": true,
                "esnext": true,
                "camelcase": true,
                "latedef": true,
                "noarg": true,
                "node": true,
                "undef": true,
                "browser": true,
                "trailing": true,
                "jquery": true,
                "curly": true,
                "supernew": true,
                "globals": {
                    "Backbone": true,
                    "_": true,
                    "jQuery": true
                },
                "force": true
            },
            all: [
                'Gruntfile.js', // add more scripts here if you wish to lint them
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            dist: {
                options: {
                    sourceMap: 'assets/js/map/source-map.js'
                },
                files: {
                    'assets/javascripts/plugins.min.js': [
                        'assets/javascripts/bootstrap-*.js',
                    ],
                    'assets/js/main.min.js': [
                        'assets/javascripts/prism*.js'
                    ],
                    'assets/js/donuts.min.js': [
                        'assets/javascripts/donuts*.js'
                    ]
                }
            }
        },

        // compass and scss
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        shell: {
            jekyll: {
                command: 'jekyll build',
                options: {
                  stdout: true
                }
            },
            compass: {
                command: 'http-server _site',
                  options: {
                    stdout: true
                }
            }
        },

        // regarde to watch for changes and trigger compass, jshint, uglify, jekyll and live reload

        regarde: {
            compass: {
                files: '_sass/*.scss',
                tasks: ['compass', 'livereload']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify', 'livereload']
            },
            jekyll: {
                files: [
                  // capture all except css - add your own
                  '*.html', '*.yml', 'assets/javascripts/**.js',
                  '_posts/**', '_includes/**', '*.json',
                  'assets/images/**', 'compass/**', '*.md',
                  '_layouts/**', '_plugins/**', '*.markdown'
                  ],
                tasks: ['shell:jekyll', 'livereload']
            },
            watchjekyll: {
                files: [
                  // capture all except css - add your own
                  '*.html', '*.yml', 'assets/javascripts/**.js',
                  '_posts/**', '_includes/**', '*.json',
                  'assets/images/**', 'compass/**', '*.md',
                  '_layouts/**', '_plugins/**', '*.markdown'
                  ],
                tasks: ['shell:jekyll']
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: '**/*',
                    dest: 'assets/images/'
                }]
            }
        },

        // deploy via rsync
        rsync: {
            staging: {
                src: "./",
                dest: "~/path/to/theme",
                host: "user@host.com",
                recursive: true,
                syncDest: true,
                exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb']
            },
            production: {
                src: "./",
                dest: "~/path/to/theme",
                host: "user@host.com",
                recursive: true,
                syncDest: true,
                exclude: '<%= rsync.staging.exclude %>'
            }
        }

    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-rsync');

    // register default task
    grunt.registerTask('default', [
        'livereload-start',
        'connect',
        'jshint',
        'compass',
        'uglify',
        'regarde'
    ]);

    // register task without js linting
    grunt.registerTask('raken', [
        'livereload-start',
        'connect',
        'compass',
        'regarde:watchjekyll'
    ]);

};