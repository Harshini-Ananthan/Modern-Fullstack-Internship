const express = require('express');
const apollo = require('@apollo/server');
const expressMiddleware = require('@as-integrations/express5');

const app = express();
const PORT = 4000;

// app.use(express.json())



app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})