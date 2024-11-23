import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { LightGreenBtn } from "./Button";
import MissionSubmenu from "./submenu/MissionSubmenu";
import ContactSubmenu from "./submenu/ContactSubmenu";
import LangSubmenu from "./submenu/LangSubmenu";
import LoginSubmenu from "./submenu/LoginSubmenu";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
const [openMenu, setOpenMenu] = useState(false);

const [navMobile, setnavMobile] = useState(false);
  
const toggleMobileNav = () => {
  setnavMobile(!navMobile);
}
  
  const Nav = styled.nav`
    .navbar-list{
      gap: 100px;
    }

    .navbar-menu {
      gap: 32px;
      
      li {
        list-style: none;
        position: relative;
        .submenu{
          display: none;
          width: auto;
          background: white;
          position: absolute;
          top: 34px;
          padding: 10px 0;
          box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
          right: -10px;
          border: 1px solid #fefefe;
          z-index: 101;
          border-radius: 8px;
          li{
            a{
              padding: 10px 20px;
              display: block;
              white-space: nowrap;
              color: ${({ theme }) => theme.colors.title_green};
              &:hover  {
                  background-color: ${({ theme }) => theme.colors.bgnavlink_hover};
                  ${({ theme }) => theme.colors.title_green};
              }
            }
          }
        }
        .navbar-link {
          &:link,
          &:visited {
            text-decoration: none;
            font-size: 16px;
            padding: 8px 0;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.title_green};
            transition: color 0.3s linear;
            display: block;
            gap: 3px;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
            .submenu{
              display: block;
            }
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
      .mobile-navbar-btn {
        position: relative;
        display: inline-block;
        z-index: 9999;
        width: 35px;
        text-align: right;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        gap: 0;
        background-color: #fff;
        justify-content: flex-start;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        padding-top: 65px;
        overflow-y: auto;

        .navbar-menu{
          flex-direction: column;
          width: 100%;
          gap: 0px;
          overflow-y: auto;
          padding-bottom: 210px;
          li {
            width: 100%;
            padding: 20px 0;
            .navbar-link{
              display: block;
            }
            .submenu{
              position: relative;
              box-shadow: none;
              top: 0;
              left: 0;
              font-size: 16px;
              line-height: 1.3;
              ul {
                li{
                  padding: 0;
                }
              }
            }
          }
        }
      }
      .mobile-menu{
        .logo-section {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 9999;
          background-color: white;
          padding: 10px 20px;
          box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
        }
        .navbar-list-mobile{
          transform: translateX(0);
          .navbar-menu{
            padding-top: 20px;
            .navbar-link{
              .drop-icon{
                position: relative;
                top: 3px;
              }
              font-size: 25px;
              &:hover, &:active{
                color:#6EA44C;
                .drop-icon{
                  transform: rotate(-180deg);
                  color: #6EA44C;
                }
              }
            }
          }
          .signup-lang{
            background-color: white;
            z-index: 2;
            position: absolute;
            bottom: 0;
            padding: 33px 20px;
            width: 100%;
            border-top: 2px solid #F6F6F6;
            .signinbox{
             gap: 10px 0;
             max-width: 145px;
             margin: 0 auto;
            }
            .language-select{
              padding-top: 25px;
              gap: 8px;
              .lang-link{
                font-size: 14px;
                color: #424A46;
              }
              .active{
                font-weight: bold;
              }
            }
            .login-link-box{
              font-size: 16px;
              line-height: 29px;
              .login-link{
                font-weight: bold;
                color: #004D37;
              }
            }
          }
        }
      }
      
      .active .mobile-nav-icon {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }
      .active .navbar-list {
        z-index: 999;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuGroup active" : "menuGroup"}>
        <div className="navbar-list flex justify-space-between items-center">
          <ul className="navbar-menu nav-left flex items-center">
            <li className="mission-nav">
              <NavLink
                className="navbar-link" to="#">
                  Join <IoIosArrowDown/>
                  <MissionSubmenu/>  
              </NavLink>     
            </li>
            <li>
              <NavLink
                className="navbar-link" 
                onClick={() => setOpenMenu(false)} 
                to="/about"> 
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="contact-nav">
              <NavLink
                className="navbar-link" to="">
                  Contact <IoIosArrowDown/>
                  <ContactSubmenu/>    
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-menu nav-right flex items-center">
            <li className="language-nav">
              <NavLink
                className="navbar-link" to="">
                  EN <IoIosArrowDown/>
                  <LangSubmenu/>   
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link" to="/service">
                Log in
                <LoginSubmenu/>
              </NavLink>
            </li>
            <li>
              <LightGreenBtn className="btn hireme-btn">Sign up</LightGreenBtn>
            </li>
          </ul>
        </div>
        {/* mobile nav */}
        {navMobile && (
        <div className="mobile-menu">
          <div className="logo-section w-full bg-white">
            <Link to="/">
              <img src="./images/logo-regenera.png" alt="logo" className="logo" />
            </Link>
          </div>
          <div className="navbar-list navbar-list-mobile flex justify-space-between items-center">
            <ul className="navbar-menu nav-left flex items-center">
              <li className="mission-nav">
                <NavLink
                  className="navbar-link" to="#">
                    Join the mission <IoIosArrowDown className="drop-icon"/>
                    <MissionSubmenu/>  
                </NavLink>     
              </li>
              <li>
                <NavLink
                  className="navbar-link" 
                  onClick={() => setOpenMenu(false)} 
                  to="/about"> 
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="contact-nav">
                <NavLink
                  className="navbar-link" to="">
                    Contact <IoIosArrowDown className="drop-icon"/>
                    <ContactSubmenu/>    
                </NavLink>
              </li>
            </ul>
            <div className="signup-lang">
              <div className="signinbox flex flex-col">
                <LightGreenBtn className="signup-btn"><Link to="#">Sign up</Link></LightGreenBtn>
                <span className="login-link-box">
                  Or <Link to="#"  onClick={() => setnavMobile(false)} className="login-link">log in</Link>
                </span>
              </div>
              <div className="language-select flex items-center justify-center">
                <Link to="#"  onClick={() => setnavMobile(false)} className="english-lang lang-link active">English</Link> / 
                <Link to="#" onClick={() => setnavMobile(false)} className="spanish-lang lang-link">Spanish</Link>

              </div>
            </div>
          </div>
        </div>
        )}

        {/* //nav icon */}
        <div onClick={toggleMobileNav} className="mobile-navbar-btn">
          {!navMobile && (
            <img src="./images/icons/mobile-nav.svg" alt="mobile-nav"
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
          )}
          
          {navMobile && (
            <FaXmark
              name="close-outline"
              className="close-outline mobile-nav-icon"
              onClick={() => setnavMobile(false)}
            />
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
