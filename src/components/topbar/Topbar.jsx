import React from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
export default function Topbar() {
  return (
    <div className='topbar'>
    <div className='topbarWrapper'>
    <div className='topLeft'>
            <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>
            <div className='topbarIconContainer'>
                <NotificationsNoneIcon />
                <span className='topIconBadge'>2</span>
            </div>

            <div className='topbarIconContainer'>
                <MessageRoundedIcon />
                <span className='topIconBadge'>2</span>
            </div>

            <div className='topbarIconContainer'>
                <NotificationsNoneIcon />
                <span className='topIconBadge'>2</span>
            </div>
    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='topAvatar'></img>
        </div>

    </div>
    </div>
      
  )
}
