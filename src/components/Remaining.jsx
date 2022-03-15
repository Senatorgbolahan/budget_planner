import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function Remaining() {
    const {expenses, budget} = useContext(AppContext);

    let initial =0;
    const totalExpenses = expenses.reduce((previous, current) => {
        return (previous = previous + current.cost);
    }, initial);
    

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success' 

    return (
        <div className= {`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining;
