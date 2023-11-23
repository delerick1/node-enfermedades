//1. Import express
const express = require('express');
//2. Create a constant app that will have functionality from express

const app = express();
//2.1 middle ware for conversation of undefine
app.use(express.json());//for body
//for angular body
app.use(express.urlencoded({extended: true}));

// Definition of functions
const findAll = (req, res ) =>{ 
    return res.status(200).json({
    message: ' method get - finAll'
})
}

const create = (req, res ) =>{ 
    const disease = req.body;
    return res.status(201).json({
    message: ' method post - create',
    data: diseases
})
}

const foundOne = (req, res ) =>{ 
    const disease = req.params;
    return res.status(200).json({
    message:'method - get- foundone',
    id: req.params.id
})
}

const update = (req, res ) =>{ 
    const {id} = req.params;
    return res.status(200).json({
    message:'method - patch- update',
    id,
})
}
const delete = (req, res ) =>{ 
    const {id} = req.params;
    return res.status(200).json({
    message:'method - delete- delete',
    id,
})
}
//3. define endpoint
app.get('/api/v1/genetic-diseases'findAll)

//app.get('/api/v1/genetic-diseases', (req, res) =>{
  //  return res.status(200).json([
    //    {
      //      enfermedad:'method get'
        //}])
//})
app.post('/api/v1/genetic-diseases' create)

//app.post('/api/v1/genetic-diseases', (req, res) =>{
  //  console.log(req.body)
    //return res.status(201).json(
      //  {
        //    message:'method - post- create'
            //data: req.body
        //}
   // )
//})
app.post('/api/v1/genetic-diseases/:id' foundOne)

//app.get('/api/v1/genetic-diseases/:id', (req, res) =>{
  // console.log(req.params)
   // return res.status(200).json(
      //  {
        //    message:'method - get- foundOne',
         //   id: req.params.id

       // }
   // )
//})

app.patch('/api/v1/genetic-diseases/:id' update)
//app.patch('/api/v1/genetic-diseases/:id', (req, res) =>{
   // const {id} = req.params;
  //  return res.status(200).json(
      //  {
         //   message:'method - patch - update',
         //   id,

      //  }
   // )
//})
app.delete('/api/v1/genetic-diseases/:id' delete)
//app.delete('/api/v1/genetic-diseases/:id', (req, res) =>{
  //  const {id} = req.params;
   // return res.status(200).json(
    //    {
      //      message:'method - delete- delete',
      //      id,

   //     }
  //  )
//})










//4 4. poner a escuchar el servidor pot 
app.listen(3000, () => {
    console.log(" Server running on port: " + 3000)

} ) 
//servidor local -> direccion ip de loopback
//121.0.0.1 -> localhost
//http://localhost:3000/