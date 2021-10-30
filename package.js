Package.describe({
  name: 'daymeter:accounts-todoist',
  version: '1.0.0',
  summary: 'A login service for Todoist accounts.',
  git: 'https://github.com/daymeter/meteor-accounts-todoist',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.2.1', '2.3']);

  api.use('underscore');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('daymeter:todoist@1.0.0', ['client', 'server']);

  api.addFiles(['client/login.js', 'client/login_button.css'], 'client');
  api.addFiles('lib/register.js');
  api.addFiles('server/autopublish.js', 'server');

  api.addAssets(['client/todoist.png'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('daymeter:accounts-todoist');

  // Tests will follow soon!
  api.addFiles([]);
});

