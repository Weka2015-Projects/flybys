module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Configure a mochaTest task
        watch: {
          scripts: {
            files: '**/*.scss',
            tasks: ['sass'],
            options: {
              interrupt: true,
            },
        },
    },
    sass: {
       dist: {
         options: {
           style: 'expanded'
         },
         files: {
           'client/styles/main.css': 'styles/main.scss'
         }
       }
    }
  });

  grunt.registerTask('default', ['sass', 'watch']);

};
