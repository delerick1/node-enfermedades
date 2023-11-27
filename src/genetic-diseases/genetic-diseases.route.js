const express = require('express');
const router = express.Router();

const {findAll,update, foundOne,create,deleteGeneric} =require ('./genetic-diseases.controller')
//3. define endpoint
router.get('/genetic-diseases', findAll)

//app.get('/api/v1/genetic-diseases', (req, res) =>{
  //  return res.status(200).json([
    //    {
      //      enfermedad:'method get'
        //}])
//})
router.post('/genetic-diseases', create)

//app.post('/api/v1/genetic-diseases', (req, res) =>{
  //  console.log(req.body)
    //return res.status(201).json(
      //  {
        //    message:'method - post- create'
            //data: req.body
        //}
   // )
//})
router.post('/genetic-diseases/:id', foundOne)

//app.get('/api/v1/genetic-diseases/:id', (req, res) =>{
  // console.log(req.params)
   // return res.status(200).json(
      //  {
        //    message:'method - get- foundOne',
         //   id: req.params.id

       // }
   // )
//})

router.patch('/genetic-diseases/:id', update)
//app.patch('/api/v1/genetic-diseases/:id', (req, res) =>{
   // const {id} = req.params;
  //  return res.status(200).json(
      //  {
         //   message:'method - patch - update',
         //   id,

      //  }
   // )
//})
router.delete('/genetic-diseases/:id', deleteGeneric)
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

