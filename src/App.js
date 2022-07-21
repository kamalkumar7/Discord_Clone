import React from 'react'
import {Counter} from './features/Counter';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'

function App() 
{
  return (
    <div className='App'>
        
        {/* <h2> Discord Clone</h2> */}
        <Sidebar className='sidebar_main'/>       
        <Chat className='chat_main'/>      
    
    </div>
  )
}

export default App