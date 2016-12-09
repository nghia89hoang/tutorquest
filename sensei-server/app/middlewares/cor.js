
module.exports = function(req, res, next) {
  // Website you wish to allow to connect
    // const allowOrigins = ['http://mytutor.io:3000', 'https://www.facebook.com']
    // var origin = req.headers.origin
    // if(allowOrigins.indexOf(origin) > -1) {
    //   res.setHeader('Access-Control-Allow-Origin', origin);
    // }   
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    return next()
}