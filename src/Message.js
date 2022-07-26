import React from 'react'
import "./Message.css"
import { Avatar } from '@mui/material'

function Message() {
  return (
    <div className='message'> 
    <Avatar/>
    <div className="message_info">
        <h4 className='sender_name'>Code With Harry

        <span className='message_time'>
                Yesterday at 12:05 a.m.
        </span>
        
        </h4>
       <p className='actual_message'>Hello how are you 😃 </p>
        </div>
      </div>  
  )
}

export default Message