import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {

  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 77px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  .logo {
    height: auto;
    max-width: 158px;
  }
  `

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <MainHeader className={`flex justify-space-between items-center ${isSticky ? 'sticky' : ''}`}>
      <NavLink to="/">
        <img src="./images/logo-regenera.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
