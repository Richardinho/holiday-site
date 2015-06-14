module.exports = function(grunt) {

    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: 'public/scss',
                    cssDir: 'public/styles'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass']);

};