const express=require("express");
const router=express.Router();
const userSchema = require("../models/user");

//create user
router.post('/users', (req,res) =>{
    const user = userSchema(req.body);
    //Guarda en mongodb
    user.save()
        .then( (data)  => res.json(data))
        .catch( (error) => res.json({ message:error }) );
})


//Get all users
router.get('/users', (req, res) =>{

   userSchema
   .find()
   .then( (data)  => res.json(data))
   .catch( (error) => res.json({ message:error }) );
})


//Get one user
router.get('/users/:id', (req, res) =>{
    const {id} = req.params;

    userSchema
    .findById(id)
    .then( (data)  => res.json(data))
    .catch( (error) => res.json({ message:error }) );
 })



//Update one user
router.put('/users/:id', (req, res) =>{
    const {id} = req.params;
    const {name,age,email} = req.body;

    userSchema
    .updateOne( {_id:id} , {$set: {name,age,email} } )
    .then( (data)  => res.json(data))
    .catch( (error) => res.json({ message:error }) );
 })


//Delete one user
router.delete('/users/:id', (req, res) =>{
    const {id} = req.params;
    userSchema
    .deleteOne({_id:id})
    .then( (data)  => res.json(data))
    .catch( (error) => res.json({ message:error }) );
 })



module.exports = router;

