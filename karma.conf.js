module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      './src/js/**/*.js': ['browserify'],
      './test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    basePath: '',
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './test/**/*.js'
    ],
    exclude: [
      'node_modules'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-verbose-reporter',
      'karma-jasmine-html-reporter'
    ],
    reporters: ['verbose', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
