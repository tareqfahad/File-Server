const express = require('express');
const app = express();
const routerHandler = require('./route/routerHandler')



app.use(express.json());
app.use(express.urlencoded({extended:true}));


routerHandler(app)


app.listen(3002 , ()=> {
    console.log("server is connected");

})