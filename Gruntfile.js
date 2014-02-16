module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			all: [
				'lib/**/*.js',
				'!lib/api.js',
				'test/**/*.js'
			]
		},
		typescript: {
			options: {
				module: 'commonjs',
				target: 'es5'
			},
			test: {
				src: 'test/**/*.ts',
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
			js: {
				files: ['lib/**/*.ts', 'test/**/*.js'],
				tasks: ['tslint:lib', 'mochaTest']
			},
			ts: {
				files: 'test/**/*.ts',
				tasks: ['tslint:test', 'typescript']
			}
		},
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json')
			},
			lib: {
				src: 'lib/**/*.ts'
			},
			test: {
				src: 'test/**/*.ts'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-tslint');
	grunt.loadNpmTasks('grunt-typescript-compile');

	// Default task(s).
	grunt.registerTask('default', ['test']);
	grunt.registerTask('test', ['build', 'mochaTest', 'clean']);
	grunt.registerTask('build', ['clean', 'tslint', 'typescript']);

};
