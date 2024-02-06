import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../components/Form'
import Meals from '../components/Meals'
import axios from 'axios'

// crete object for your initial state values 
const initialState = {
    name : "",
    minutes : "",
    directions : "",
    ingredients : [] 
}
const Main = (props) => {
    
    console.log(initialState)
    const [meals , setMeals] = useState([])
    const [ errors , setErrors] = useState([]) // get errors from the backend and store in state
    // get all meals 

    useEffect(() =>{
        axios.get("http://localhost:8000/api/meals")
        .then(res => {
            console.log(res.data),
            setMeals(res.data),
            console.log(meals)
        })
        .catch(err => console.log(err))
    },[])


    // create a meal

    const createMeal = (mealObject) =>{
        axios.post("http://localhost:8000/api/meals" , mealObject)
        .then(res => {
            console.log(res.data)
            // add it to the array of existing meals , if not it will wipe the meals that where first in the state
            setMeals([...meals , res.data]) 
        })
        .catch(error => {
            setErrors(error.response.data.errors)
        })
    }
  return (
    <>
        <Routes>
            <Route path = "/meals/new" element={<Form onSubmitProps = {createMeal} errors = {errors} initialState = {initialState}/>}/>
            <Route path = "/meals"  element = {<Meals meals = {meals} />}/>
        </Routes>
    
    </>
  )
}

export default Main