module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//Define paths
		js_dist_path:'public/assets/js',
		css_dist_path:'public/assets/css',
		app_build_path:'public/app/',
    components_build_path:'public/app/components/',
    shared_build_path:'public/app/shared/',
		
    html2js: {
      options: {
        base: 'public',
        module: 'served.templates',
        singleModule: true
      },
      main: {
        src: ['<%=app_build_path%>/**/*.html'],
        dest: '<%=js_dist_path%>/populate_template_cache.js'
      }
    },

    ngAnnotate: {
	    derp: {
	      files: [
	        {
	          expand: true,
            src: ['<%=app_build_path%>/**/*.js'],
            dest:'<%=js_dist_path%>',
            ext: '.annotated.js', // Dest filepaths will have this extension.
            extDot: 'last',       // Extensions in filenames begin after the last dot
            flatten: true
          }
        ]
      }
    },


		less: {
      build: {
	      files:[{
				  expand: true,
				  cwd: '<%=app_build_path%>',
				  src: ['**/*.less'],
				  dest: '<%=css_dist_path%>',
				  ext: '.css',
				  flatten: true
				}]
      }
    },


    concat:{
    	js:{
    		files:[{
			  src: [
          '<%=js_dist_path%>/*.module.annotated.js',
          '<%=js_dist_path%>/*.module.config.js',
          '<%=js_dist_path%>/*.js',
          '!<%=js_dist_path%>/*.concat.js',
          '!<%=js_dist_path%>/*.concat.min.js'],
			  dest: '<%=js_dist_path%>/portfolioBuilt.concat.js'
			}]
    	},
    	css:{
    		files:[{
    			src:['<%=css_dist_path%>/*.css','!<%=css_dist_path%>/*.concat.css','!<%=css_dist_path%>/*.concat.min.css'],
    			dest:'<%=css_dist_path%>/portfolioStyle.concat.css'
    		}]
    	}
    },

     uglify:{
    	all:{
    		files:[{
			  expand: true,
			  cwd: '<%=js_dist_path%>',
			  src: ['*.concat.js'],
			  dest: '<%=js_dist_path%>',
			  ext: '.min.js',
			  extDot: 'last',
			  flatten: true
			}]
    	}
    },

    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
          '<%=css_dist_path%>/portfolioStyle.concat.css': '<%=css_dist_path%>/portfolioStyle.concat.css'
        }
      }
    },

    cssmin:{
    	all:{
    		files:[{
	    		expand: true,
				  cwd: '<%=css_dist_path%>',
				  src: ['*.concat.css'],
				  dest: '<%=css_dist_path%>',
				  ext: '.min.css',
				  extDot: 'last',
				  flatten: true
    		}]
    	}
    },

    watch: {
    	options: { livereload: true },
      css: {
        files: ['<%=app_build_path%>/**/*.less','<%=shared_build_path%>/**/*.less'],
        tasks: ['less','concat:css','autoprefixer','cssmin']
      },
      js: {
      	files: ['<%=app_build_path%>/**/*.js'],
      	tasks: ['ngAnnotate','concat:js','uglify']
      },
      html: {
        files: ['<%=app_build_path%>/**/*.html'],
        tasks: ['html2js:main','concat:js','uglify']
      },
    },

    nodemon:{
      dev:{
        script:'init.js'
      }
    },

    concurrent: {
      tasks: ['nodemon', 'watch']
    } 

	});
	
  grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
	
	grunt.registerTask('default', ['less', 'html2js:main', 'ngAnnotate', 'concat', 'uglify', 'autoprefixer', 'cssmin']);
  grunt.registerTask('run', ['concurrent']);
};