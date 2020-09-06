import React from 'react';
import './App.css';
import Child from './Child';
// import {TransactionContext} from './transContext';
import {TransactionProvider} from './transContext';


function App (){
  return (
    <div>
      <TransactionProvider>
          <Child/>
      </TransactionProvider>
    </div>
  )
}

export default App;
