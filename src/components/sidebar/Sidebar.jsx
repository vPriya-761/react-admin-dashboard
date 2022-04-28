import React from 'react'
import "./sidebar.css"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
export default function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Dashboard</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                <AdminPanelSettingsIcon className='sidebarIcon' />
                Admin Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon  className='sidebarIcon'/>
                Employee Dashboard
                </li>
            </ul>
        </div>


        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Apps</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                <AdminPanelSettingsIcon className='sidebarIcon' />
              Chat
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon  className='sidebarIcon'/>
               Calls
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                Calender
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                contacts
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                Email
                </li>
                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                File Manager
                </li>
            </ul>
        </div>


        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Employees</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                <AdminPanelSettingsIcon className='sidebarIcon' />
                Admin Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon  className='sidebarIcon'/>
                Employee Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                Home
                </li>
            </ul>
        </div>

        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Clients</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                <AdminPanelSettingsIcon className='sidebarIcon' />
                Admin Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon  className='sidebarIcon'/>
                Employee Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                Home
                </li>
            </ul>
        </div>


        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Projects</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                <AdminPanelSettingsIcon className='sidebarIcon' />
                Admin Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon  className='sidebarIcon'/>
                Employee Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                Home
                </li>
            </ul>
        </div>

        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Leads</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                <AdminPanelSettingsIcon className='sidebarIcon' />
                Admin Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon  className='sidebarIcon'/>
                Employee Dashboard
                </li>

                <li className='sidebarListItem'>
                <AdminPanelSettingsIcon className='sidebaricon'/>
                Home
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}



