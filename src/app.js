//1. Import express
const express = require('express');
//2. Create a constant app that will have functionality from express
const geneticDiseases = require('./genetic-diseases/genetic-diseases.route');

const app = express();

const calculateRequestTime = (req, res, next) =>{
  const requestTime = new Date().toISOString();
  req.requestTime = requestTime;
  next()
}
//2.1 middle ware for conversation of undefine
app.use(express.json());//for body
//for angular body
app.use(express.urlencoded({extended: true}));
app.use(calculateRequestTime);
app.use('/api/v1',geneticDiseases);

// Definition of functions

//4 4. poner a escuchar el servidor pot 
app.listen(3000, () => {
    console.log(" Server running on port: " + 3000)

} ) 
//servidor local -> direccion ip de loopback
//121.0.0.1 -> localhost
//http://localhost:3000/