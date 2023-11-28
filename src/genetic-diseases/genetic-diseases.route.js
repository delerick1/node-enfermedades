const express = require('express');


//const {findAll,update, foundOne,create,deleteGeneric} =require ('./genetic-diseases.controller')
//3. define endpoint
const geneticController = require('./genetic-diseases.controller')

const router = express.Router();



router.get('/genetic-diseases', geneticController.findAll)

router.post('/genetic-diseases', geneticController.create)

router.get('/genetic-diseases/:id', geneticController.findOne)

router.patch('/genetic-diseases/:id', geneticController.update)

router.delete('/genetic-diseases/:id', geneticController.deleteGeneticDiseases)

//app.get('/api/v1/genetic-diseases', (req, res) =>{
  //  return res.status(200).json([
    //    {
      //      enfermedad:'method get'
        //}])
//})

//app.post('/api/v1/genetic-diseases', (req, res) =>{
  //  console.log(req.body)
    //return res.status(201).json(
      //  {
        //    message:'method - post- create'
            //data: req.body
        //}
   // )
//})

//app.get('/api/v1/genetic-diseases/:id', (req, res) =>{
  // console.log(req.params)
   // return res.status(200).json(
      //  {
        //    message:'method - get- foundOne',
         //   id: req.params.id

       // }
   // )
//})

//app.patch('/api/v1/genetic-diseases/:id', (req, res) =>{
   // const {id} = req.params;
  //  return res.status(200).json(
      //  {
         //   message:'method - patch - update',
         //   id,

      //  }
   // )
//})
//app.delete('/api/v1/genetic-diseases/:id', (req, res) =>{
  //  const {id} = req.params;
   // return res.status(200).json(
    //    {
      //      message:'method - delete- delete',
      //      id,

   //     }
  //  )
//})





module.exports = router;

