import React from 'react'
import "./SidebarChannel.css"

function SidebarChannel({id,channel}) {
  return (
    <div className="sidebarChannel">
        <h4>
            <span className='sidebarChannel_hash'>#</span>
        {channel}
        </h4>
    </div>
  )
}

export default SidebarChannel