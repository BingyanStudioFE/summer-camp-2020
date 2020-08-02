const mkdirp = require('mkdirp')
 
// return value is a Promise resolving to the first directory created
mkdirp('./tmp/foo/bar/baz').then(made =>
  console.log(`made directories, starting with ${made}`))