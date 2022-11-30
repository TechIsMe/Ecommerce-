import React,{useRef, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {motion} from 'framer-motion'
import Logo from "../../assets/images/Logo.png"
// import user from "../../assets/images/user-icon.png"
import logogo from '../../assets/images/logogo.png'
import { Container, Row } from 'react-bootstrap';

const nav_links  =[
  {
    path:"home",
    display:"Home"
  },
  {
    path:"shop",
    display:"Shop"
  }, {
    path:"cart",
    display:"Cart"
  },
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeader = ()=>{

    window.addEventListener('scroll', ()=>{

      if(document.body.scrollTop > 80 || 

        document.documentElement.scrollTop > 80){

      headerRef.current.classList.add('sticky-header')

      } else{

      headerRef.current.classList.remove('sticky-header')

      }
   });
  };

  useEffect(()=>{

    stickyHeader()

    return()=> window.removeEventListener('scroll', stickyHeader)
  });

  return (
    <header className='header' ref={headerRef}>
      <Container >
        <Row>
          <div className='nav-wrapper'>
              <div className='logo'>
                <img src={Logo} alt=""/>
                <div>
                  <h1 >Pursuit of bag  </h1>
                  {/* <p> since 2020 </p> */}
                </div>
              </div>

            <div className="navigation">
              <ul className="menu">
                {
                  nav_links.map((item,index ) =>(
                    <li className="nav-item" key={index}>
                    <NavLink to={item.path} className={(navClass)=>navClass.isActive? 'nav-active': ''}>{item.display}</NavLink>
                  </li>

                  ))
                }

              </ul>
            </div>

            <div className="nav-icons">
              <span className='fav-icon'>
                <i class="ri-heart-3-line"></i>
                <span className='badge'></span>
                </span>
                <span className='cart-icon'>
                <i class="ri-shopping-cart-line"></i>
                <span className='badge'></span>

                </span>
                <span className='text-center mb-4 text-black'>
                  {/* <motion.img whileTap={{scale:1.2}} src={user} alt="" /> */}
                  <motion.img whileTap={{scale:1.2}} src={logogo} alt="" />

                  {/* <motion.p whileTap={{scale:1.2}}>Login </motion.p> */}
                  </span>
            
         </div>
         <div className='mobile-menu'>
          <span><i class="ri-menu-line"></i></span>

         </div>
          </div>
        </Row>
      </Container>
      </header>
  )
}

export default Header;