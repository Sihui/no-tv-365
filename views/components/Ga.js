var ga = require('react-google-analytics');
ga('create', 'UA-76618743-1', 'auto');
ga('send', 'pageview');
console.log('in ga');
module.exports = ga;