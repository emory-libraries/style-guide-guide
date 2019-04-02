# Emory Libraries Style Guide

> A style guide for Emory Libraries' websites

This style guide expresses the Emory Libraries' design system and includes patterns from Emory Libraries' [Pattern Library](https://github.com/emory-libraries/Pattern-Library).


## Prerequisites

This style guide was built using Brad Frost's [Style Guide Guide](https://github.com/bradfrost/style-guide-guide), which requires [Jekyll](https://jekyllrb.com/), a static site generator. Jekyll is built on top of [Ruby](https://www.ruby-lang.org/en/) and requires that Ruby 2.2.5 or greater be installed on your system and has been preloaded for use with [RubyGems](https://rubygems.org/). Additionally, this project requires [Bundler](https://bundler.io/) version 1.17.1 or greater for managing RubyGem dependencies. It has also been setup to utilize a [Grunt](https://gruntjs.com) wrapper for improved task automation.


## Installation

Prior to installation, ensure that all prerequisites have been met. Then, to install this project on your system:

1. Download and unzip the compressed package, or clone the repo using:

  ```
  git clone https://github.com/emory-libraries/style-guide-guide
  ```

2. Then `cd` to your project's folder in a terminal, and install all depdencies:

  ```
  bundle install && npm install
  ```

3. Initialize the dependencies and start the Jekyll server:

  ```
  bundle exec jekyll serve
  ```
  or
  ```
  grunt dev
  ```

> The Jekyll server will build the static site and watch for changes. To view the style guide and see live changes, visit `http://127.0.0.1:4000/` in your browser.


## Getting Started

You can either use Bundler and Jekyll's CLI or Grunt to generate the static site and make changes to the style guide:

### Using Bundler and Jekyll

- `bundle exec jekyll serve --config _config.development.yml` - Builds the style guide and starts a live server at `http://127.0.0.1:4000/`, then watches for changes made to the source files.

- `bundle exec jekyll build --config _config.production.yml` - Builds the style guide and outputs it to a `_site` directory

### Using Grunt

- `grunt dev` - Builds the style guide and starts a live server at `http://127.0.0.1:4000/`, then watches for changes made to the source files.

- `grunt dist` - Builds the style guide and outputs it to a `_site` directory

- `grunt deploy` - Builds the style guide (like `grunt dist`) and additionally deploys it to a host server


## Using Jekyll

Jekyll is a versatile static site generator built with scalability and extensibility in mind. For more information on how to use it, refer to the [Jekyll Documentation](https://jekyllrb.com/docs/) or review the [Jekyll Resources](https://jekyllrb.com/resources/) for additional tutorials, guides, and other helpful tools.

## Using Style Guide Guide

Brad Frost created Style Guide Guide as a quick and dirty way to build documentation for design systems based on his arguments about [workshops vs. storefronts](http://bradfrost.com/blog/post/the-workshop-and-the-storefront/). It's intended to be used as a *storefront* for showcasing patterns from [Pattern Lab](http://patternlab.io/), where Pattern Lab is the *workshop*. For additional information about Style Guide Guide, visit to the original [Style Guide Guide repo](https://github.com/bradfrost/style-guide-guide) by Brad Frost on Github.