import React , {useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

function ExpenseList() {

    
    const {expenses} = useContext(AppContext)

    // const expenses = [
    //     {id: 123, name: "Shopping", cost: 390},
    //     {id: 123, name: "Holiday", cost: 4500},
    //     {id: 123, name: "Transportation", cost: 5600},
    //     {id: 123, name: "Fuel", cost: 3000},
    //     {id: 123, name: "Child Care", cost: 9800},
    // ];

    return (
       <section>
           <ul className='list-group'>
               {expenses.map((expense) => (
                   <ExpenseItem  
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                   />
               ))}
           </ul>
       </section>
    )
}

export default ExpenseList
