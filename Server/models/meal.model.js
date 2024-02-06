const mongoose = require("mongoose")

const MealSchema = new mongoose.Schema({
    name : { 
        type : String ,
        required : [true ,"Name is required"],
        minLength : [3 , "Should be atleast 3 characters long"],
        maxLength : [20 , "Should be atleast 20 characters long"]
    },

    minutes : {
        type : Number,
        required : [true , "Please provide total time of preparation"],
        min : [2 , "Should take atleast 2 mins to prepare"],
        max : [240 , "Should not take more than 240 mins to prepare , are you cooking for africa??"] 
    },

    directions : {
        type : String,
        required : [true ,"Please give us directions, do you want us to only imagine it ??"],
        minLength : [10 , "Should be atleast 10 characters "]

    },

    ingredients : {
        type : Array,
        require: false
    }

},{timestamps:true})

module.exports = mongoose.model("Meal" , MealSchema)