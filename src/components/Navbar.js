import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LightGreenBtn } from "./Button";
import DropdownMenu from "./DropDown";
import {CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const optionMission = ["As an organisation", "As a person", "As a land manager" ];
  const optionsLanguage = ["EN", "SP"];
  const defaultVal = ["Join the mission","Contact", "EN"];

  const Nav = styled.nav`
    .navbar-list{
      gap: 100px;
    }

    .navbar-menu {
      gap: 32px;
      
      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.title_green};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
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
        display: inline-block;
        z-index: 999;
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
        position: absolute;
        top: 0;
        left: 0;
        gap: 0;
        background-color: #fff;
        justify-content: flex-start;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
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
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 2.2rem;
        position: absolute;
        top: 20px;
        right: 20px;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
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
              <DropdownMenu defaultVal={defaultVal[0]} options={optionMission}/>         
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/about">
                About Regenera
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/service">
                Blog
              </NavLink>
            </li>
            <li className="contact-nav">
              <DropdownMenu defaultVal={defaultVal[1]} options={optionsLanguage}/>         
            </li>
          </ul>
          <ul className="navbar-menu nav-right flex items-center">
            <li className="language-nav">
              <DropdownMenu defaultVal={defaultVal[2]} options={optionsLanguage}/>         
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/service">
                Blog
              </NavLink>
            </li>
            <li>
              <LightGreenBtn className="btn hireme-btn">Sign up</LightGreenBtn>
            </li>
          </ul>
        </div>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <img src="./images/icons/mobile-nav.svg" alt="mobile-nav"
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
