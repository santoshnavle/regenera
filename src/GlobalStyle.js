import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
 }
html {
  font-size: 16px;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  color:${({ theme }) => theme.colors.title_green};
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1, h2, h3, .card-title{
  color:${({ theme }) => theme.colors.title_green};
  font-size: 32px;
  line-height: 42px;
  font-weight: 600;
}

.fw-normal{
  font-weight: 600;
}

.fw-bold{
  font-weight: bold;
}

.flex{
  display: flex;
}

.flex-row{
  flex-direction: row;
}

.flex-col{
  flex-direction: column;
}

.items-center{
  align-items: center;
}

.items-start{
  align-items: flex-start;
}

.items-end{
  align-items: flex-end;
}

.justify-center{
  justify-content: center;
}

.justify-space-between{
  justify-content: space-between;
}

.justify-start{
  justify-content: flex-start;
}

.justify-end{
  justify-content: flex-end;
}

.flex-wrap{
  flex-wrap: wrap;
}

.mx-auto{
  margin-left: auto;
  margin-right: auto;
}

.max-full{
  max-width: 100%;
}

.w-full{
  width: 100%;
}

.text-center{
  text-align: center;
}

p {
  font-size: 16px;
  margin-top: 12px;
  font-weight:400;
  line-height: 180%;
}

a {
  text-decoration: none;
}
a:active {
  color: darkgreen;
}

li {
  list-style: none;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.absolute{
  position: absolute;
}

.relative{
  position: relative;
}

.small, small{
  font-size: 14px;
}

.form-group .form-control{
  line-height: 29px;
  padding: 2px 12px;
  border-radius: 6px;
  border: 1px solid #DDEDD0;
}

.form-group .form-control::placeholder{
  color: #004D37;
  font-weight: 400;
}

.category-list{
  gap: 8px;
}
.category-list li{
    color: white;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.title_green};
    border-radius: 25px;
    line-height: 28px;
    padding: 0px 10px;
}
            

.sticky{
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  animation: headermove 0.4s;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
}

.company-logo-container .slick-track{
  display: flex;
  align-items: center;
}

.center-text-btn{
  gap: 20px;
}

/* tabs */
.react-tabs__tab-list{
  text-align: center;
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid #DDEDD0;
  border-radius: 40px;
  padding: 8px;
}
.react-tabs__tab:focus:after{
  content: none;
}
.react-tabs__tab{
  text-decoration: none;
  max-width: auto;
  background-color: white;
  color: ${({ theme }) => theme.colors.light_green};
  padding: 0 39px;
  border-radius: 25px;
  font-weight: bold;
  border: none;
  line-height: 45px;
  height:45px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  margin-left: 10px;
}
.react-tabs__tab-list .react-tabs__tab:first-child{
  margin-left: 0;
}
.react-tabs__tab:hover{
  background-color: ${({ theme }) => theme.colors.light_green};
  color: white;
}
.react-tabs__tab--selected{
  background-color: ${({ theme }) => theme.colors.light_green};
  color: white;
}
.react-tabs__tab--selected:hover{
  background: #497d28;
}

@keyframes headermove {
  from {top: -80px;}
  to {top: 0px;}
}

/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//1023px
@media (max-width:${({ theme }) => theme.media.tab}) {

  .grid-two-column, .grid-three-column, .grid-four-column{
    grid-template-columns: 1fr;
  }
  h1, h2, h3, .card-title{
    font-size: 28px;
    line-height: 38px;
  }
  html, p{
    font-size: 14px;
  }
  .center-text-btn{
    gap: 12px;
  }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
  .hide-mobile{
    display: none;
  }
  .grid{
    gap: 3.2rem;
  }
  .grid-two-column, .grid-three-column, .grid-four-column{
    grid-template-columns: 1fr;
  }
  .react-tabs__tab{
    width: 48%;
    padding: 0;
    text-align: center;
  }
}


`;
