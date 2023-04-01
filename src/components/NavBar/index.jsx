import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  MenuHandler
} from '@material-tailwind/react'

import './style.css'
import { HashLink as Link } from 'react-router-hash-link'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [active, setActive] = React.useState(0)

  const MenuLinks = ['About', 'Services', 'Skills', 'Contact']

  const navRef = React.useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  const responsiveClick = () => {
    if (navRef.current.classList.contains('responsive-nav')) {
      navRef.current.classList.toggle('responsive-nav')
    }
  }
  // navbar list
  const navList = (
    <ul className='nav-links mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-[1.25rem] leading-[2.28rem] flex items-center h-[2.56rem]'>
      {MenuLinks.map((item, i) => {
        return (
          <Typography
            key={i}
            as='li'
            variant='small'
            color='blue-gray'
            className={`p-1 font-normal ${active === i ? 'text-primary' : ''}`}
          >
            <Link
              smooth
              to={`#${item}`}
              className='flex items-center'
              onClick={() => {
                setActive(i)
                responsiveClick()
              }}
            >
              {item}
            </Link>
          </Typography>
        )
      })}
    </ul>
  )

  return (
    <div className='sticky top-0 z-50 bg-black pt-4 justify-around flex flex-cols w-[100%] text-blue-gray-900 navbar '>
      <div
        variant='small'
        className='text-[2rem] leading-[2.28rem] font-bold flex items-center w-[19.38rem] h-[3.94rem]'
      >
        <Link to={'#'} smooth className='text-inherit no-underline'>
          <span className='[line-break:anywhere] w-full'>SAID AIT OUAKOUR</span>
        </Link>
        <span className='text-primary'>.</span>
      </div>
      <nav ref={navRef} className='w-full md:block md:w-auto'>
        {navList}
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </div>
  )
}

export default NavBar
