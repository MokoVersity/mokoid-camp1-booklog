module.exports = function(grunt) {
    grunt.initConfig({
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

    // default task(s)
    grunt.registerTask('start', ['exec:start_server']);
    grunt.registerTask('start-dev', ['exec:start_dev_server']);
    grunt.registerTask('default', ['start']);
};