'use strict';

module.exports = function(grunt) {

  // Load Grunt tasks declared in the package
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    aglio: {
      api1:{
        files:{
          'dest/api.html':['first.md']
        }
      }
    },
    connect: {
        all: {
            //options: {
                port: 7000,
                hostname: "0.0.0.0",
                base: "dest/",
                // Prevents Grunt to close just after the task (starting the server) completes
                // This will be removed later as 'watch' will take care of that
                keepalive: true
            //}
        }
    },
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['aglio']);
  grunt.registerTask('server', ['connect']);
};
