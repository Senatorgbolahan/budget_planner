import { useReducer } from "react";
import { createContext } from "react"

const initialState = {
    budget: 5900,
    expenses: [
        {id: 120, name: "Shopping", cost: 30},
        {id: 121, name: "Holiday", cost: 400},
        {id: 122, name: "Transportation", cost: 60},
    ]
}
console.log(initialState.expenses);

export const AppContext = createContext();

const AppReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => (
                    expense.id !== action.payload ))
            };
            
            default:
                return state;
            }
        }

export const AppProvider = (props) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )

}