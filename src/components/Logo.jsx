import React from 'react'
import './Logo.css'

const Logo = () => {
const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
}


  return (
    <div className='d-flex align-items-center justify-content-between'>
      <a href='index.html' className='logo d-flex align-items-center'>
        {/* <img src='assets/img/logo.png' alt='' /> */}
        <span className='d-none d-lg-block'>AdminDashboard</span >
        </a>
        <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSidebar}>

        </i>
    </div>
  )
}

export default Logo