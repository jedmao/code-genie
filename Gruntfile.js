module.exports = function(grunt) {

	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			files: [
				'<%= watch.js.files %>',
				'!lib/api.js'
			]
		},
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json')
			},
			files: {
				src: '<%= watch.ts.files %>'
			}
		},
		typescript: {
			options: {
				module: 'commonjs',
				target: 'es5'
			},
			test: {
				src: '<%= watch.ts.files %>',
				dest: ''
			}
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					clearRequireCache: true
				},
				src: ['test/**/*.js']
			}
		},
		watch: {
			ts: {
				files: ['lib/**/*.ts', 'test/**/*.ts'],
				tasks: ['newer:tslint', 'typescript']
			},
			js: {
				files: ['lib/**/*.js', 'test/**/*.js'],
				tasks: ['mochaTest']
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['test']);
	grunt.registerTask('test', ['build', 'mochaTest', 'clean']);
	grunt.registerTask('build', ['clean', 'tslint', 'typescript']);

	// For the fastest possible workflow, enable compile-on-save
	// in your text editor and run `grunt cos`.
	grunt.registerTask('cos', ['build', 'mochaTest', 'watch:js']);

};
