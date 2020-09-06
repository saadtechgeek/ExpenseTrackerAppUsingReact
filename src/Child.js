import React, {useContext,useState} from 'react';
import './App.css';
import {TransactionContext} from './transContext';


function Child() {
    // bringing this value from transaction context
    // let transactions = [
    //     {amount: +500, desc: "Cash"},
    //     {amount: -40, desc: "Book"},
    //     {amount: -200, desc: "Camera"},
    // ]
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [newDesc,setDesc] = useState("");
    let [newAmount,setAmount] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
        //console.log(newDesc,newAmount);
        addTransaction({
            amount: newAmount,
            desc: newDesc
        })
    }

    console.log(transactions);
    return (
        <div className='container'>
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your Balance <br /> $260</h3>

            <div className="expense-container"> 
                <h3>INCOME <br /> $500 </h3>
                <h3>EXPENSE <br /> $240</h3>
            </div>

            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {transactions.map((transObj,index)=>{
                    return(<li key={index}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>)
                })}

            </ul>
            <h3>Add new transaction</h3>
            <hr/>
            <form class="transactional-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br/>
                    <input type="text" onChange={(event)=>setDesc(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Enter Amount <br/>
                    <input type="number" required onChange={(event)=>setAmount(event.target.value)} />
                </label>
                <br/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
  }

export default Child;
