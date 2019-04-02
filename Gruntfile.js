module.exports = (grunt) => {
  
  // Load dependencies.
  const path = require('path');
  
  // Configure tasks.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    secret: grunt.file.readJSON('secret.json'),
    environments: {
      production: {
        options: {
          current_symlink: 'index',
          release_root: 'versions',
          local_path: '_site',
          tag: '<%= pkg.version %>',
          deploy_path: '<%= secret.production.path %>',
          host: '<%= secret.production.host %>',
          username: '<%= secret.production.username %>',
          password: '<%= secret.production.password %>',
          port: '<%= secret.production.port %>'
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
      cmd: '~/.rbenv/shims/bundle',
      args: ['exec', 'jekyll', 'serve'],
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
      args: ['exec', 'jekyll', 'build'],
      opts: {
        stdio: 'inherit',
        shell: true
      }
    }, () => done());
    
  });
  grunt.registerTask('deploy', [
    'dist', 
    'ssh_deploy:production'
  ]);
  grunt.registerTask('default', ['dev']);
  
};