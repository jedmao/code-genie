module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			files: [
				'lib/**/*.js',
				'!lib/api.js',
				'test/**/*.js'
			]
		},
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json')
			},
			tscompile: {
				src: '<%= typescript.files %>'
			},
			tsrequire: {
				src: ['lib/**/*.ts', '!<%= typescript.files %>']
			}
		},
		typescript: {
			options: {
				module: 'commonjs',
				target: 'es5'
			},
			files: {
				src: ['lib/rules/*.ts', 'test/**/*.ts'],
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
			tscompile: {
				files: '<%= tslint.tscompile %>',
				tasks: ['tslint:tscompile', 'typescript']
			},
			tsrequire: {
				files: '<%= tslint.tsrequire %>',
				tasks: ['tslint:tsrequire']
			},
			js: {
				files: ['lib/rules/*.js', 'test/**/*.js'],
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
