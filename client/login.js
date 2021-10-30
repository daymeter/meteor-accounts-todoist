/**
 * Meteor.loginWithTodoist(options, callback)
 *
 * This method is used on the client side to summon the Todoist login page
 * just like you would with any other accounts package. It utilizes the
 * Accounts Base package.
 *
 * @param options
 * @param callback
 */
Meteor.loginWithTodoist = function (options, callback) {
  // Support a callback without options.
  if (!callback && typeof options === "function") {
    callback = options;
    options = null;
  }

  if (typeof Accounts._options.restrictCreationByEmailDomain === 'string') {
    options = _.extend({}, options || {});
    options.loginUrlParameters = _.extend({}, options.loginUrlParameters || {});
    options.loginUrlParameters.hd = Accounts._options.restrictCreationByEmailDomain;
  }

  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Todoist.requestCredential(options, credentialRequestCompleteCallback);
};

Meteor.linkWithTodoist = function (options, callback) {
  if (!Meteor.userId()) {
    throw new Meteor.Error(402, 'Please log in to an existing account before linking.');
  }

  if (!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  const credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback)
  Todoist.requestCredential(options, credentialRequestCompleteCallback);
}
