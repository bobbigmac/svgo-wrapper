Package.describe({
  name: 'bobbigmac:svgo-wrapper',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Unofficial wrapper for svgo: Nodejs-based tool for optimizing SVG vector graphics files.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bobbigmac/svgo-wrapper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "svgo": "0.5.6"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.addFiles('svgo-wrapper.js', 'server');
  
  api.export("SVGO", 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bobbigmac:svgo-wrapper');

  api.addFiles('svgo-wrapper-tests.js', 'server');
});
