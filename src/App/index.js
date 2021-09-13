import React from 'react';
import { AppUI } from './AppUI'
import './App.css';
import { TodoProvider } from '../TodoContext';

function App({props}) {
  


  return (
     <TodoProvider>
       <AppUI />
     </TodoProvider>
    );
}

export default App;
