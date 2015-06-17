module.exports = function(grunt) {

    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: 'public/scss',
                    cssDir: 'public/styles'
                }
            }
        },
        clean: {
            build: ["holidaywebsite"]
        },
        copy: {
            main : {
                cwd: 'public',  // set working folder / root to copy
                src: [
                    'images/**/*',
                    'js/**/*',
                    'styles/**/*',
                    'views/**/*'
                ],           // copy all files and subfolders
                dest: 'holidaywebsite',    // destination folder
                expand: true           // required when using cwd
            },
            lib  : {
                cwd : 'app/components',
                src : [
                    'angular/angular.js',
                    'angular-animate/angular-animate.js',
                    'angular-aria/angular-aria.js',
                    'angular-cookies/angular-cookies.js',
                    'angular-google-maps/**/*',
                    'angular-messages/angular-messages.js',
                    'angular-route/angular-route.js',
                    'angular-resource/angular-resource.js',
                    'angular-sanitize/angular-sanitize.js',
                    'angular-touch/angular-touch.js',
                    'lodash/lodash.js'
                ],
                dest : 'holidaywebsite/lib',
                expand : true
            },
            indexfile : {
                src : 'public/build-index.html',
                dest : 'holidaywebsite/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass']);
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean:build','compass', 'copy']);

};