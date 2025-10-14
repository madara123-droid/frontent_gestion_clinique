module.exports = function (config) {
  config.set({
    basePath: '',//. ici c'est le chemin de base pour les fichiers
    frameworks: ['jasmine', '@angular-devkit/build-angular'],//ici tu as les outils qui vont servit au test 
    plugins: [
      require('karma-jasmine'),
      require('karma-firefox-launcher'), // <-- ajouter ici
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/frontend'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Firefox'],
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};

