'use client'
import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { useRouter } from 'next/navigation'

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const router = useRouter()
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                Hassle Free
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <button onClick={() => router.push('/dashboard')}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={() => router.push('/residents')}>
                    <BsFillArchiveFill className='icon'/> Residents
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={() => router.push('/workers')}>
                    <BsFillGrid3X3GapFill className='icon'/> Workers
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={() => router.push('/complaints')}>
                    <BsPeopleFill className='icon'/> Complaints
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={() => router.push('/map')}>
                    <BsPeopleFill className='icon'/> Map
                </button>
            </li>
           
           
        </ul>
    </aside>
  )
}

export default Sidebar