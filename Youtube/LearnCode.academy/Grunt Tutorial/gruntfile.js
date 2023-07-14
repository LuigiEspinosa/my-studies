module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/1.js', 'js/2.js'],
        dest: 'dist/js/script.js',
      },
      css: {
        src: ['css/main.css'],
        dest: 'dist/css/styles.css',
      },
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'watch']);

  // grunt.registerTask('speak', function () {
  //   console.log("I'm Speaking");
  // });

  // grunt.registerTask('yell', function () {
  //   console.log("I'm YELLING!");
  // });

  // grunt.registerTask('both', ['speak', 'yell']);
};
