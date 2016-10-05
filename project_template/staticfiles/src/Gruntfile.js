module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    sass: {
      compile: {
        files: {
          'css/app.css': 'css/app.sass'
        }
      }
    },

    concat: {
      css: {
        src: [
        //'../lib/css/bootstrap.3.3.7.min.css',
        'bower_components/angular-material/angular-material.min.css',
        'css/app.css'

       /*   'main/static/css/app.css',
          'main/static/lib/angular-bootstrap-timepicker/uit-bootstrap-custom-1.1.2.csp.css'*/
        ],
        dest: 'dist/app.css'
      },
      libjs: {
        src: [
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-messages/angular-messages.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/angular-svg-round-progressbar/build/roundProgress.js'

        //'bower_components/angular-semantic-ui/dist/angular-semantic-ui.min.js'
/*          'main/static/lib/angular/angular.js',
          'main/static/lib/angular-animate/angular-animate.min.js',
          'main/static/lib/angular-aria/angular-aria.min.js',
          'main/static/lib/angular-cookies/angular-cookies.js',
          'main/static/lib/angular-load/angular-load.js',
          'main/static/lib/angular-material/angular-material.js',
          'main/static/lib/angular-messages/angular-messages.js',
          'main/static/lib/angular-scroll-glue/src/scrollglue.js',
          'main/static/lib/angular-ui-router/release/angular-ui-router.min.js',
          'main/static/lib/angular-validation-match/src/angular-validation-match.js',
          'main/static/lib/geolocator/src/geolocator.js',
          'main/static/lib/jquery/dist/signup/jquery.min.js',
          'main/static/lib/moment/moment.js',
          'main/static/lib/ngmap/build/scripts/ng-map.js',
          'main/static/lib/ng-file-upload/ng-file-upload-all.js',
          'main/static/lib/ngstorage/ngStorage.js',
          'main/static/lib/phoneformat.js/dist/signup/phone-format.min.js',
          'main/static/lib/pusher/dist/signup/pusher.min.js',
          'main/static/lib/pusher-angular/lib/pusher-angular.js',
          'main/static/lib/underscore/underscore-min.js',
          'main/static/js/ui-bootstrap-custom-tpls-1.1.2.min.js',*/

        ],
        dest: 'dist/vendor.js'
      },
      appjs: {
        src: [
            '*.js',
            'myapps/*.js',
            'myapps/*/*.js',
            'myapps/*/*/*.js',
            '!Gruntfile.js'
//          'app/**/*.js',
  //        'main/static/js/**/*.js',
    //      '!app/**/*.spec.js',
      //    '!app/**/**/*.spec.js',
        ],
        dest: 'dist/app.js'
      },
    },
    cssmin: {
      options: {
        shorthandandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/app.min.css': [
            'dist/app.css'
          ]
        }
      }
    },

    uglify: {
      js: {
        files: {
          'dist/app.min.js': [
            'dist/vendor.js',
            'dist/app.js'
          ]
        }
      }
    },

    watch : {
      sass: {
        files: ['main/static/css/**/*.sass'],
        tasks: ['sass']
      },
      css: {
        files: ['main/static/css/**/*.css'],
        tasks: ['concat:css']
      },
      appjs: {
        files: ['main/static/js/**/*.js', 'app/**/*.js'],
        tasks: ['concat:appjs', 'karma']
      },
      libjs: {
        files: ['main/static/lib/**/*.js'],
        tasks: ['concat:libjs', 'karma']
      },
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    }
  });
  grunt.registerTask('default', [
    'sass',
    'concat',
    'karma',
    'watch'
  ]);

  grunt.registerTask('nowatch', [
    'sass',
    'concat',
    'karma'
  ]);

  grunt.registerTask('minify', [
    //'sass',
    'concat',
    'cssmin',
    //'uglify'
  ]);
};
