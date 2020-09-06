import React, {createContext , useReducer} from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    {amount: +400, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"},
]

export const TransactionContext = createContext(initialTransactions);



export const TransactionProvider =({children})=>{
    let [state,dispatch] = useReducer(TransactionReducer,initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
        }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaciton: addTransaction
        }}>
        {children}
        </TransactionContext.Provider>
    )
} 
    