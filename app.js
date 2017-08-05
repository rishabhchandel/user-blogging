let express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

require('./model')

pubRouter = express.Router();
securedRoter = express.Router();

require('./controller/blog.js').route(pubRouter, securedRoter);
require('./controller/user.js').route(pubRouter, securedRoter);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('',pubRouter);
app.listen(3000);
