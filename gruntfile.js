module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['*.{png,jpg,gif,jpeg}'],
					dest: 'img/dist/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/dist/output.css':'css/input.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false,
				},
			},
			images: {
				files:['img/*.{png,jpg,gif,jpeg}'],
				tasks:['imagemin'],
				options: {
					spawn: false,
				}
			}		
		},
		concat: {
			dist: {
				src: [
					'js/*.js'
				],
				dest:'js/dist/output.js',
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['imagemin', 'sass']);
}
