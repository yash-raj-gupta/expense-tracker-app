import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
    transactions: []
}

// Global context
export const GlobalContext = createContext(initialState);

// Provider component

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
    {children}
    </GlobalContext.Provider>)

}
