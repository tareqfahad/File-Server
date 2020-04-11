const express = require('express');
const app = express();
const routerHandler = require('./route/routerHandler')
const process = require('process');



app.use(express.json());
app.use(express.urlencoded({extended:true}));


routerHandler(app)

const port = process.argv[2] || 3001

app.listen(port , ()=> {
    console.log(`server is running on port ${port}`);

})