import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// Global context
export const GlobalContext = createContext(initialState);

// Provider component

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    console.log(import.meta.env.VITE_API_URL) 
    async function getTransactions() {
        try{
           const res = await axios.get(`${import.meta.env.VITE_API_URL}/transactions`, {
               headers: {
                   'Access-Control-Allow-Origin': '*'
               }
           });
           dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data
           })
        }catch(error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })

        }
    }
    async function deleteTransaction(id) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/transactions/${id}`)  
          dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
        } catch (error) 
        {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })    
        }

    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/transactions`, transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })   
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
    {children}
    </GlobalContext.Provider>)

}
