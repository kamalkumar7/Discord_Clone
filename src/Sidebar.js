// import { AccessAlarm } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Avatar } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() 
{
  return (
    <div className='sidebar'>
      {/* <h2>I am the sidebar</h2> */}

      <div className='sidebar_top'>
        <h3>
          Kamal Server
        </h3>
        <ExpandMoreIcon/>

      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          
          <div className="sidebar_header">
          <ExpandMoreIcon/>
          <h4>Text Cannel</h4>
          </div>
          <AddIcon className='sidebar_addChannel'/>
        
           </div>
           <div className="sidebar_channelList">
             <SidebarChannel id={52} channel={"Study 📚"}/>
             <SidebarChannel channel={"Games 🏓 "} />
             <SidebarChannel channel={"Finance 💰"}/>
             <SidebarChannel channel={"Coding Club 👩‍💻"}/>
          </div>

          




      </div>
  
      <div className='bottom'>

      <div className="sidebar_voice">
         
         <SignalCellularAltIcon
         className='sidebar_voiceIcon' />
        
        
        
         <div className="sidebar_voiceInfo" >
           <h4>Connected</h4>
           <p>Stream</p>
         </div>

         <div className="sidebar_voiceIcons"  >
            <InfoOutlinedIcon className='voiceicon' style={{fontSize:"20px"}}/>
            <CallIcon className='voiceicon' style={{fontSize:"20px"}}/>
         </div>


   
         </div>

      <div className="sidebar_profile">
      <Avatar src='https://www.koimoi.com/bollywood-news/when-hrithik-roshan-was-trolled-for-calling-india-youngest-democracy-amid-controversial-caa-protests/'/>
      
      <div className='sidebar-profileInfo'>
        <h3>
          Name
        </h3>
        <p>
          #656f6
        </p>
      </div>

      <div className='profileIcon'>
        <MicIcon style={{fontSize:"20px" , padding: "2px"}}/>
        <HeadsetIcon style={{fontSize:"20px" ,padding: "2px"}}/>
        <SettingsIcon style={{fontSize:"20px" ,padding: "2px" }}/>
      </div>


     </div>


     </div>
  </div> 
  )
}

export default Sidebar