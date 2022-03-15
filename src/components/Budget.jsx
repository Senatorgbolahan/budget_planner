import React, {useContext}from 'react'
import { AppContext } from '../context/AppContext'


function Budget() {
    const {budget} = useContext(AppContext);
    return (
       <section className='alert alert-secondary'>
           <span>Budget: ${budget}</span>
       </section>
    )
}

export default Budget
