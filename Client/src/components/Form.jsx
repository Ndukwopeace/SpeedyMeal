import React, { useReducer, useState } from 'react'
import {Paper , FormControl , Button , OutlinedInput,InputLabel, TextField} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Styles } from './Meals'

const FormStyle = {
    inputDiv :{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    input: {
        width: "20rem",
        marginBottom: "2rem"

    },
    paper :{
        padding: "2rem"
    },
    speedy: {
        width: "55rem",
        // border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        fontStyle: "italic",
        alignItems : "center"
    },
    quote:{
        width: "55rem",
        marginBottom: "1rem",
        display: "flex",
        // border: "1px solid black",
        justifyContent: "flex-start",
        fontStyle: "italic",
        // fontSize : "1.5rem"
    }
}
// my action object to avoid hardcoding my actions.type
const ACTIONS = {
    SET_NAME:"setName",
    SET_MINUTES:"setMinutes",
    SET_DIRECTIONS: "setDirections",
    SET_INGREDIENTS: "setIngredients"
}
// reducer function

const reducer = (state , action) =>{
    switch(action.type){
        case ACTIONS.SET_NAME:
            return{
                    ...state,
                    name:action.payload
                 }
            

        case ACTIONS.SET_MINUTES:
            return{
                    ...state,
                    minutes:action.payload
                    }
            

        case ACTIONS.SET_DIRECTIONS:
            return{
                    ...state,
                    directions:action.payload
                    }
            

        case ACTIONS.SET_INGREDIENTS:
            return{
                    ...state,
                    ingredients:[...state.ingredients , action.payload]
                    }
            

        default :
            return state
    }
}
const Form = (props) => {

    const {initialState , onSubmitProps} = props;
    console.log(initialState)
    const [state , dispatch] = useReducer(reducer , initialState);
    const [inputField , setInputField] =  useState([]);
    const [count , setCount] = useState(0);
    const navigate = useNavigate();

    // const [name , setName] = useState(initialState.initialName)
    // const [minutes , setMinutes] = useState(initialState.initialMinutes);
    // const [directions , setDirections] = useState(initialState.initialDirections);
    // const [ingredients , setIngredients] = useState(initialState.initialIngredients)
   
     //render input
    const renderInput = () =>{
        setCount(count + 1)
        
        setInputField([
            ...inputField,'']
        )

    }

    // functions to handle setting the values ===============================+>

   

    // handle set name 

    const handleSetName = (e) =>{
        dispatch(
            {
                type:ACTIONS.SET_NAME,
                payload:e.target.value
            }
        )
    }

    // handle set minutes

    const handleSetMinutes = (e) =>{
        dispatch(
            {
                type:ACTIONS.SET_MINUTES,
                payload:e.target.value
            }
        )
    }

    // handle set directions
    const handleSetDirections = (e) =>{
        dispatch(
            {
                type:ACTIONS.SET_DIRECTIONS,
                payload:e.target.value
            }
        )
    }

    

    // handle set ingredients

    const handleIngredients = (e) =>{
        dispatch(
            {
                type:ACTIONS.SET_INGREDIENTS,
                payload:e.target.value
            }
        )

    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        onSubmitProps(state)
        navigate("/meals")
    }
    // ==========================================================================================>



    
  return (
    <div style={Styles.main}>
        <div style={FormStyle.speedy}>
            <h1 >Speedy Meals</h1>
            <Link to ={"/meals"} >back to home</Link>
        </div>

        <div style={FormStyle.quote}>
            <p>Add the next culinary masterpiece : </p>
        </div>

        <Paper elevation={3} style={FormStyle.paper}>
            <form onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <div style={FormStyle.inputDiv}>
                    <FormControl>
                        <InputLabel>Dish name</InputLabel>
                        <OutlinedInput type="text"  name="name" value ={state.name} onChange={(e) => handleSetName(e)} style={FormStyle.input}/>
                    </FormControl>

                    {/* minutes */}
                    <FormControl>
                        <InputLabel>Total Minutes</InputLabel>
                        <OutlinedInput type="number" name="minutes" value ={state.minutes} onChange={(e) => handleSetMinutes(e)} style={FormStyle.input}/>
                    </FormControl>

                    {/* Directions */}

                    <FormControl>
                        <InputLabel>Directions </InputLabel>
                        <OutlinedInput type="text" name="directions" value ={state.directions} onChange={(e) => handleSetDirections(e)} style={FormStyle.input}/>
                    </FormControl>
                    </div>
                </div>
                

                {/* ingredient */}
                <div>
                  
                    { (state.ingredients.length < 1) ? 
                         <div>
                            <FormControl>

                            <InputLabel>Ingredient {count}</InputLabel>
                            <OutlinedInput  value ={state.ingredients} onChange={(e) =>handleIngredients(e)}/>
                            </FormControl>
                         </div>

                         :
                        state.ingredients.map((input,index) =>{
                            return(
                                <div>
                                    <FormControl>

                                    <InputLabel>Ingredient {count}</InputLabel>
                                    <TextField key={index}  value ={state.ingredients} onChange={(e) =>handleIngredients(e)}/>
                                     </FormControl>
                                </div>
                            )
                        })
                    }
                    <Button variant ="contained" onClick={renderInput}> + Add ingredient</Button>
                </div>

                <Button type="submit" variant = "contained">Create</Button>
                
            </form>

        </Paper>

    </div>
  )
}

export default Form