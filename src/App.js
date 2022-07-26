import React from 'react'
// import {Counter} from './features/Counter';
import './App.css';
import Sidebar from './Sidebar';

import Chat from './Chat'
import {useSelector} from "react-redux"
import Login from './Login';
import Loginn from './Loginn';
import {selectUser} from "./features/userSlice"

function App() 
{
  const user = useSelector(selectUser)
  return (
    <div className='App'>
        {user?(
          <>
                 <Sidebar className='sidebar_main'/>       
                 <Chat className='chat_main'/>      
          </>
        ):
        <>
        <h1>
          <Loginn/>
        </h1>
      </>
        }

       
 
    
    </div>
  )
}

export default App