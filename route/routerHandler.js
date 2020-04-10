const upload = require('./route');

function routerHandler(app){

app.use('/' , upload)





}

module.exports = routerHandler