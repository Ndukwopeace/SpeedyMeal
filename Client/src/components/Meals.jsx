import React from 'react'
import {Paper , Table , TableContainer , TableHead , TableBody,TableRow , TableCell} from '@mui/material'
import { Link } from 'react-router-dom'


export const Styles = {
    main:{
        display: "flex",
        alignItems: "center",
        justifyContent : "center",
        flexDirection : "column"
    },
    paper:{
        width: "50rem"
        
    },

    speedy: {
        width: "55rem",
        // border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        fontStyle: "italic"
    },

    quote:{
        width: "55rem",
        marginBottom: "1rem",
        display: "flex",
        // border: "1px solid black",
        justifyContent: "flex-start",
        fontStyle: "italic",
        fontSize : "1.5rem"
    }
}
const Meals = (props) => {
    const {meals} = props
    console.log(meals)
    return (
    <div style={Styles.main}>
         <div style={Styles.speedy}>
            <h1>Speedy Meals</h1>
            <Link to ={"/meals/new"} >Add a meal</Link>
        </div>

        <div style={Styles.quote}>
            <p>Find Inspiration with these delicious meals</p>
        </div>

        <Paper style={Styles.paper}>
            <TableContainer>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>
                                S/N
                            </TableCell>
                            <TableCell>
                                Meal
                            </TableCell>
                            <TableCell>
                                Preparation Time(in mins)
                            </TableCell>
                            <TableCell>
                                Options
                            </TableCell>
                        </TableRow>

                    </TableHead>

            {       meals.map((meal, index) => {

                    return (
                        <TableRow key={index}>
                                <TableCell>
                                    {index}
                                </TableCell>
                                <TableCell>
                                    {meal.name}
                                </TableCell>
                                <TableCell>
                                    {meal.minutes}
                                </TableCell>
                                <TableCell>
                                    <Link to={`/meals/${meal.id}/edit`}>Edit</Link>
                                    <Link to={`/meals/${meal.id}/detail`}>Details</Link>
                                </TableCell>
                        </TableRow>
                    )
                        })
            }

                    <TableBody>
                        
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    </div>
  )
}

export default Meals