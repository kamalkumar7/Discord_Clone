import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import GifRoundedIcon from '@mui/icons-material/GifRounded';
import Message from './Message';

function Chat() {
  return (
    <div className='chat'>
    {/* <h2>I am chat screen</h2> */}
    <ChatHeader/>

    <div className="chatMessage_box">

        <Message className='message_content'/>
        <Message className='message_content'/>
        <Message className='message_content' />
        <Message className='message_content'/>
        <Message className='message_content'/>
        <Message className='message_content' />
        <Message className='message_content'/>
        <Message className='message_content'/>
        <Message className='message_content' />
    </div>


    <div className="chatInput" >

      <div className='addiconChat' style={{display:"flex"}}>
      <AddCircleOutlineRoundedIcon/>
      </div>
    
      <form style={{display:"flex"}} >
        <input  placeholder={'Message #TestChannel0'} className="chatinputHolder"/>
        <button type='submit' className='chat_btn'>Send Message</button>


      </form>


      <div className="chaticons" style={{display: "flex"}}>
    <CardGiftcardIcon />
    <GifRoundedIcon/>
    <EmojiEmotionsRoundedIcon/>
    </div>

    </div>


    </div>
  )
}

export default Chat