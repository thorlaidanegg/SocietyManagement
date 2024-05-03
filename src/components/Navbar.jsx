import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { useRouter } from 'next/navigation'

function Navbar({OpenSidebar}) {
  const router = useRouter()
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            
        </div>
        <button className='header-right' onClick={() => router.push('/')}>
            <BsPersonCircle className='icon'/>
        </button>
    </header>
  )
}

export default Navbar