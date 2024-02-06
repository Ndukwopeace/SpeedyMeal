const Meal = require("../models/meal.model")


module.exports = {
    // get all meals 
    getAll : (req,res) =>{
        Meal.find({})
        .then((meals) => res.json(meals))
        .catch(err => res.json(err))
    },

    // get one 
    getOne : (req,res) =>{
        Meal.findOne({_id : req.params.id})
        .then(meal => res.json(meal))
        .catch(err => res.json(err))
    },

    // create one 
    createOne : (req,res) =>{
        Meal.create(req.body)
        .then(meal => res.json(meal))
        .catch(err => res.status(400).json(err))
    },
    // update one 
    updateOne : (req,res) =>{
        Meal.findOneAndUpdate({_id:req.params.id},req.body,{new : true})
        .then(meal => res.json(meal))
        .catch(err => res.status(400).json(err))
    },

    // delete one 

    deleteOne : (req,res) =>{
        Meal.deleteOne({_id:req.params.id})
        .then(DeleteConfirmation => res.json(DeleteConfirmation))
        .catch(err => console.log(err))
    }
}