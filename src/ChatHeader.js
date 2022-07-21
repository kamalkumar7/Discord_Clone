import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import './ChatHeader.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

function ChatHeader() {
  return (
    <div className='chatHeader'>
        

        <div className="chatHeader_left">

            <h3>
                <span className='chatheaderHash'>
                    #
                </span>
                Test Channel Name
            </h3>


        </div>
        <div className="chatHeader_right">
            

            <NotificationsIcon style={{padding:"5px"}}/>
            <PeopleAltRoundedIcon style={{padding:"5px"}}/>
            <EditLocationAltRoundedIcon style={{padding:"5px"}}/>

            <div className="chatHeadersearch" >
                <input placeholder='Search'  />
               <SearchRoundedIcon style={{color:"grey"}}/>
            </div>

            <SendRoundedIcon/>
            <HelpRoundedIcon/>

         

        </div>
    </div>
  )
}

export default ChatHeader