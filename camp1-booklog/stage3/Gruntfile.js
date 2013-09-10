module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'public/css/style.css': 'sass/style.sass',
                    'public/css/wiki.css': 'sass/wiki.sass',
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/style.css': 'sass/style.sass',
                    'public/css/wiki.css': 'sass/wiki.sass',
                }
            }
        },
        exec: {
            start_server: {
                cmd: 'NODE_ENV=production node app.js'
            },
            start_dev_server: {
                cmd: 'node app.js'
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // default task(s)
    grunt.registerTask('start', ['exec:start_server']);
    grunt.registerTask('start-dev', ['exec:start_dev_server']);
    grunt.registerTask('default', ['start']);
};