import React from 'react'
import fav from '/Users/THE-HELL-LORD/Desktop/Dashboard/src/assets/fav.png'
import sidebar from  '../sidebar/sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { MdSpaceDashboard } from 'react-icons/md'
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
const Sidebar = () => {
  return (
    <div className={sidebar.container}>
        <img src={fav} alt="menulogo" className={sidebar.logo} />
      <div className={sidebar.menu}>
        <NavLink to='dashboard' className={sidebar.item} title={'dashboard'}>
            <MdSpaceDashboard size={30}/>
        </NavLink>
        <NavLink to='calendar' className={sidebar.item} title='Calendar'>
            <AiFillCalendar size={30}/>
        </NavLink>
        <NavLink to='board' className={sidebar.item} title='Board'>
            <FaTasks size={30}/>
        </NavLink>
        <NavLink to='user' className={sidebar.item} title='User'>
            <AiOutlineTable size={30}/>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar;
