/**
 * Created by patrickgrosslicht on 02/11/16.
 */

var restify = require('restify');
var math = require('mathjs');

function respond(req, res, next) {
    res.send(200, {"result": math.format(math.eval(req.body.expr))});
    next();
}

var server = restify.createServer({});
server.use(restify.plugins.bodyParser());
server.post('/eval', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
