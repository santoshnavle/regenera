import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

const [navMobile, setnavMobile] = useState(true);
  
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
          z-index: 2;
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
            display: inline-block;
            text-decoration: none;
            font-size: 16px;
            padding: 8px 0;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.title_green};
            transition: color 0.3s linear;
            display: flex;
            align-items: center;
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
          li {
            width: 100%;
            padding: 20px 0;
            &:hover,
            &:active {
              background-color: ${({ theme }) => theme.colors.bgnavlink_hover};
              padding: 20px 0;
            }
            a{
              display: block !important;
            }
            .submenu{
              position: relative;
              top: 20px;
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
        }
      }
      .navbar-list-mobile{
        transform: translateX(0);
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
        {!navMobile && (
        <div className="mobile-menu">
          <div className="logo-section w-full bg-white">
            <img src="./images/logo-regenera.png" alt="logo" className="logo" />
          </div>
          <div className="navbar-list navbar-list-mobile flex justify-space-between items-center">
            <ul className="navbar-menu nav-left flex items-center">
              <li className="mission-nav">
                <NavLink
                  className="navbar-link h3" to="#">
                    Join the mission <IoIosArrowDown/>
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
          </div>
        </div>
        )}

        {/* //nav icon */}
        <div onClick={toggleMobileNav} className="mobile-navbar-btn">
          {navMobile && (
            <img src="./images/icons/mobile-nav.svg" alt="mobile-nav"
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
          )}
          
          {!navMobile && (
            <FaXmark
              name="close-outline"
              className="close-outline mobile-nav-icon"
              onClick={() => setOpenMenu(false)}
            />
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
