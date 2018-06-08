module.exports = function(grunt) {
  grunt.initConfig({
  responsive_images: {
    myTask: {
      options: {
        sizes: [{
          name: 'mobile',
          width: 384,
          quality: 60,

        },{
          name: 'desktop',
          width: 460,
          quality: 80,
        },{
          name: '2x',
          width: 768,
          quality: 60,
        }]
      },
      files: [{
        expand: true,
        src: ['**.{jpg,gif,png}'],
        cwd: 'src/img/source/',
        dest: 'dist/tmp/'
      }]
    }
  },
});
  /** connects to the module folder **/
  grunt.loadNpmTasks('grunt-responsive-images');
  /** register a task to start application **/
  grunt.registerTask('default', ['responsive_images']);

};
