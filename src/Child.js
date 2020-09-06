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
        if (Number(newAmount ==0)){
            alert("PLease enter proper value");
            return;
        }
        //console.log(newDesc,newAmount);
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

   // console.log(transactions);
    return (
        <div className='container'>
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your Balance <br /> ${getIncome() + getExpense() }</h3>
            <div className="expense-container"> 
                <h3>INCOME <br />  ${getIncome()}</h3>
                <h3>EXPENSE <br /> ${getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {transactions.map((transObj,index)=>{
                    return(<li key={index}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
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
