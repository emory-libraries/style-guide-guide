module.exports = (grunt) => {
  
  // Load dependencies.
  const path = require('path');
  
  // Configure tasks.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    secret: grunt.file.readJSON('secret.json'),
    sftp: {
      production: {
        files: {
          './': grunt.file.expand(['_site/**'])
        },
        options: {
          path: '<%= secret.production.path %>',
          host: '<%= secret.production.host %>',
          username: '<%= secret.production.username %>',
          password: '<%= secret.production.password %>',
          port: '<%= secret.production.port %>',
          showProgress: true,
          createDirectories: true,
          srcBasePath: '_site/'
        }
      }
    }
  });
  
  // Load tasks.
  require('load-grunt-tasks')(grunt);
  
  // Register tasks.
  grunt.registerTask('dev', 'Build and serve the Jekyll project', function () {

    // Make asynchronous.
    const done = this.async();
    
    // Run the `serve` Jekyll command.
    grunt.util.spawn({
      cmd: 'bundle',
      args: [
        'exec', 'jekyll', 'serve',
        '--config', '_config.development.yml'
      ],
      opts: {
        stdio: 'inherit',
        shell: true
      }
    }, () => done());
    
  });
  grunt.registerTask('dist', 'Build the Jekyll project', function () {
    
    // Make asynchronous.
    const done = this.async();
    
    // Run the `build` Jekyll command.
    grunt.util.spawn({
      cmd: '~/.rbenv/shims/bundle',
      args: [
        'exec', 'jekyll', 'build',
        '--config', '_config.production.yml'
      ],
      opts: {
        stdio: 'inherit',
        shell: true
      }
    }, () => done());
    
  });
  grunt.registerTask('deploy', [
    'dist', 
    'sftp:production'
  ]);
  grunt.registerTask('default', ['dev']);
  
};