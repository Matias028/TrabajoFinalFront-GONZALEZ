import React from 'react'
import '../styles/header.css'
import { Bell, Hand, User } from 'lucide-react';
import { UserCog } from 'lucide-react';
import { UserSearch } from 'lucide-react';
import { LogOut } from 'lucide-react';
import showCloseSessionAlert from '../components/CloseSesionAlert';
import MenuUser from '../components/MenuUser';





const Header = () => {
  return (
    <header className="header">
      <div className="user">
        <img src="https://i.pinimg.com/236x/82/cf/34/82cf3458ba4d810c2b75b5f46f0d1d9b.jpg" alt="" className='avatar' />
        <div className="user-info">
          <span className='username'>Matias Gonzalez </span>
          <MenuUser />
        </div>
      </div>
      <form className="search">
        <input type="search" className='search-input' placeholder='Buscar (Por DNI o Nombre) ' id='search' name='search' />
        <button className='search-btn'><UserSearch /></button>
      </form>
      <div className="notifications-logout">
        <button className='notification-btn'><Bell /></button>
        <button className='logout-btn' onClick={showCloseSessionAlert}>Logout
          <LogOut />
        </button>
        <button className='logout-btn-mobile' onClick={showCloseSessionAlert}>
          <LogOut />
        </button>
      </div>
    </header>
  )
}

export default Header