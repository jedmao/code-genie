module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			files: ['<%= mochaTest.test.src %>']
		},
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json')
			},
			lib: {
				src: '<%= watch.libTs.files %>'
			},
			test: {
				src: '<%= watch.testTs.files %>'
			}
		},
		typescript: {
			options: {
				module: 'commonjs',
				target: 'es5'
			},
			test: {
				src: '<%= watch.testTs.files %>',
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
			libTs: {
				files: ['lib/**/*.ts'],
				tasks: ['tslint:lib', 'mochaTest']
			},
			testTs: {
				files: ['test/**/*.ts'],
				tasks: ['tslint:test', 'typescript']
			},
			js: {
				files: ['lib/api.js', 'test/**/*.js'],
				tasks: ['mochaTest']
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
