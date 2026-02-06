/**
 * Configuración de Karma
 * Autor: Veronica Thalia Campoverde Maza
 */

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['tests/*.spec.js'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
