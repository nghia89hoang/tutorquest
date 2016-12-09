// config/auth.js
module.exports = {
  'development': {
    'facebook': {
      'consumerKey': '146200182513229',
      'consumerSecret': '37f40611099a397d52080d7043844750',
      'callbackUrl': 'http://mytutor.io:3100/api/users/auth/facebook/callback'
    },
    'twitter': {
      'consumerKey': 'Rlvh5D7eY30E0wQlTrNuKQnZD',
      'consumerSecret': 'muesuVZkk9dldxfdpYEEZqFlSOnOfTCK0CaCHAZDSfDdFEn4rd',
      'callbackUrl': 'http://mytutor.io:3100/api/users/auth/twitter/callback'
    },
    'google': {
      'consumerKey': '446585441765-unda5mjs6307q1pqobvhiqj87m9m2kh1.apps.googleusercontent.com',
      'consumerSecret': '...',
      'callbackUrl': 'http://mytutor.io:3100/api/users/auth/google/callback'
    }
  }
}
