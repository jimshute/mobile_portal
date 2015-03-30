// Generated on 2014-12-24 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'public',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    requirejs: {
      options: {
        baseUrl: '',
        webroot: '',
        config: [],
        name: 'main',
        require: 'lib/require',
        almond: 'lib/almond',
        out: ''
      },
      dev: {
        options: {
          build: false
        }
      },
      prod: {
        options: {
          build: true
        }
      }
    },

    cssmin: {
      //target: {
      //  files: [{
      //    expand: true,
      //    cwd: 'src/stylesheets',
      //    src: ['*.css'],
      //    dest: 'src/stylesheets',
      //    ext: '.min.css'
      //  }]
      //}
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      prod: {
        files: {
          'public/stylesheets/main.min.css': [
            //'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-base.css',
            //'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-hover.css',
            //'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.css',
            'src/stylesheets/*.css', '!src/stylesheets/*.min.css', '!src/stylesheets/login.css'
          ],
          'public/stylesheets/login.min.css': [
            'src/stylesheets/login.css'
          ]
        }
      },
      dev: {
        files: {
          'src/stylesheets/main.min.css': [
            'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-base.css',
            'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-hover.css',
            'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.css',
            'src/stylesheets/*.css', '!src/stylesheets/*.min.css', '!src/stylesheets/login.css'
          ],
          'src/stylesheets/login.min.css': [
            'src/stylesheets/login.css'
          ]
        }
      }
    },

    concat: {
      build: {
        src: ['public/stylesheets/*.min.css'],
        dest: 'public/stylesheets/index.min.css'
      },
      dev: {}
    },

    uglify: {
      options: {
        mangle: false
      },
      prod: {
        files: {
          'public/scripts/main.min.js': [
            'src/scripts/app.js',
            'src/scripts/config.js',
            'src/scripts/constants/*.js',
            'src/scripts/service/*.js',
            'src/scripts/directive/*.js',
            'src/scripts/controller/*.js'
          ],
          'public/scripts/lib/highcharts/highcharts.js': ['src/scripts/lib/highcharts/highcharts.js']
        }
      },
      dev: {
        files: {
          'src/scripts/main.min.js': [
            'src/scripts/app.js',
            'src/scripts/config.js',
            'src/scripts/constants/*.js',
            'src/scripts/service/*.js',
            'src/scripts/directive/*.js',
            'src/scripts/controller/*.js'
          ]
        }
      }
    },

    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      prod: {
        files: {
          'public/scripts/view/menus/sidebar.html': 'src/scripts/view/menus/sidebar.html',
          'public/scripts/view/applications/index.html': 'src/scripts/view/applications/index.html',
          'public/scripts/view/applications/appOverview.html': 'src/scripts/view/applications/appOverview.html',
          'public/scripts/view/overview/index.html': 'src/scripts/view/overview/index.html',
          'public/scripts/view/services/index.html': 'src/scripts/view/services/index.html',
          'public/scripts/view/services/instanceDetail.html': 'src/scripts/view/services/instanceDetail.html',
          'public/scripts/view/services/serviceDetail.html': 'src/scripts/view/services/serviceDetail.html',
          'public/scripts/view/services/serviceList.html': 'src/scripts/view/services/serviceList.html'
          //'public/scripts/view/menus/sidebar.html': 'src/scripts/view/menus/sidebar.html',
          //'public/scripts/view/menus/sidebar.html': 'src/scripts/view/menus/sidebar.html',
          //'public/scripts/view/menus/sidebar.html': 'src/scripts/view/menus/sidebar.html',
          //'public/scripts/view/menus/sidebar.html': 'src/scripts/view/menus/sidebar.html',
          //'public/scripts/view/menus/sidebar.html': 'src/scripts/view/menus/sidebar.html'
        }
      },
      directive: {
        files: [{
          expand: true,
          cwd: 'src/scripts/directive/templates',
          src: '*.html',
          dest: 'public/scripts/directive/templates'
        }]
      }
    },

    imagemin: {
      options: {
        optimizationLevel: 4
      },
      appFramework: {
        files: [{
          expand: true,
          cwd: 'src/images/appFrameworks',
          src: '*.png',
          dest: 'public/images/appFrameworks'
        }]
      },
      service: {
        files: [{
          expand: true,
          cwd: 'src/images/services',
          src: '*.png',
          dest: 'public/images/services'
        }]
      },
      user: {
        files: {
          'public/images/avatar.png': 'src/images/avatar.png'
        }
      }
    },

    clean: {
      build: ['public/stylesheets', 'public/scripts']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //grunt.registerTask('cssmin', ['cssmin:dev']);
  //grunt.registerTask('uglify', ['uglify:dev']);
  //grunt.registerTask('default', ['cssmin:dev']);
  grunt.registerTask('build', ['cssmin:prod', 'uglify:prod', 'htmlmin']);
};
