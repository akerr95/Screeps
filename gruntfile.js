module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'akerr_95@hotmail.com',
                password: '120895Akerr',
                branch: 'Practice',
                ptr: false
            },
            dist: {
                src: ['Primitive Era/*.js']
            }
        }
    });
}