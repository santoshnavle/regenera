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

.small-title{
  color:${({ theme }) => theme.colors.title_green};
  font-size: 19px;
  line-height: 27px;
  font-weight: 600;
  @media (max-width:${({ theme }) => theme.media.tab}) {
    font-size: 17px;
    line-height: 25px;
  }
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

.text-left{
  text-align: left;
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

.green-link{
  color: #6EA44C;
  font-weight: 600;
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

.uppercase{
  text-transform: uppercase;
}

.small, small{
  font-size: 14px;
}

.form-group .form-control{
  color: ${({ theme }) => theme.colors.title_green};
  font-weight: 400;
  line-height: 29px;
  padding: 2px 12px;
  border-radius: 6px;
  border: 1px solid #DDEDD0;
}

.form-control:focus{
  border-color: #6EA44C;
}

.form-group .form-control::placeholder, .form-group .input-blank::placeholder{
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

.smooth{
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


/* stepform  starts*/
.input-box-section label{
  line-height: 180%;
  font-weight: 600;
  margin-bottom: 4px;
}
.form-control{
  font-size: 16px;
  height: 37px;
  width: 100%;
  padding: 4px 12px;
  border: 1px solid #CECECE;
  border-radius: 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.title_green};
  &:focus{
    outline: 0;
  }
  &::placeholder{
    color: ${({ theme }) => theme.colors.title_green};
  }
}
.input-group{
  .input-group-prepend{
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 12px;
    line-height: 1;
    z-index: 2;
    height: 16px;
    cursor: pointer;
  }
  .form-control{
    padding-right: 35px;
  }
}
.radio-box{
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid #DDEDD0;
    border-radius: 50%;
  }

  button{
    border: 0 none;
    background-color: none;
  }

  /* When the radio button is checked, add a blue background */
  input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ .checkmark {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cellipse cx='9.94924' cy='10' rx='9.94924' ry='10' fill='%236EA44C'/%3E%3Cpath d='M4.97461 9.28561L8.02285 12.6558C8.29738 12.9593 8.7703 12.9706 9.05895 12.6804L15.2792 6.42847' stroke='%23F8FBF6' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 100% auto;
    }
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

}
.login-w-google{
  background-color: white;
  cursor: pointer;
  border-radius: 25px;
  line-height: 28px;
  font-weight: 600;
  gap: 10px;
  height: 45px;
  max-width: 305px;
  padding: 8px 30px;
  border: 1px solid #F6F6F6;
  margin-top: 8px;
  img{
    width: 27px;
  }
  &:hover{
    border: 1px solid #ccc;
  }
}
.form-section .two-col {
  gap: 8px;
  @media (max-width:${({ theme }) => theme.media.tab}) {
    flex-direction: column;
    gap: 24px;
  }
}
.input-error{
  border-color: #DD6B17;
  color: #DD6B17;
}
.error-text{
  color: #DD6B17;
  line-height: 180%;
  margin-top: 5px;
  font-weight: 600;
}
.text-white{
  color: white;
}
.disabled{
  border-color: #BABABA;
  color: #BABABA;
  background-color: white;
  &::placeholder{
    color: #BABABA;
  }
}
button{
  border: 0 none;
  background: none;
  cursor: pointer;
}
button.disabled{
  color: white;
  background-color: #CECECE;
  cursor: default;
  &:hover{
    background-color: #CECECE;
  }
}
.contsent-box label a {
  font-weight: 600;
  color:${({ theme }) => theme.colors.title_green};
}
.step-nav{
  margin-top: 50px;
  width: 100%;
  max-width: 440px;
  gap: 13px;
  .bullet{
    background: #DDEDD0;
    width: 100%;
    height: 4px;
  }
  .current{
    background: #6EA44C;
  }
}
.formnextprev {
  top: -50px;
  button{
    line-height: 180%;
    font-weight: 600;
    padding: 5px;
    gap: 4px;
    border: 0;
    background: none;
    cursor: pointer;
    color:${({ theme }) => theme.colors.title_green};
  }
  .prev-btn{
    align-self: flex-start;
    left: -10px;
    @media (max-width:${({ theme }) => theme.media.tab}) {
      left: 0;
    }
  }
  .next-btn{
    position: absolute;
    right: 0;
    top: 0;
  }
  .disable{
    color: #BABABA;
    cursor: default;
  }
  @media (max-width:${({ theme }) => theme.media.tab}) {
    top: 13px;
  }
}
.hidden{
  display: none;
}
.fee-n-box{
  max-width: 195px;
  right: 4.8rem;
  gap: 8px;
  border-radius: 8px;
  top: 70px;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
  padding: 8px 12px;
  .big-txt{
    font-weight: 600;
    gap: 4px;
  }
  .tooltip-box{
    display: none;
    padding: 20px;
    box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
    background: white;
    border-radius: 8px;
    position: absolute;
    font-weight: 400;
    width: 190px;
  }
  .tooltip-ic{
    font-size: 18px;
    width: 20px;
    height: 20px;
    display: inline-block;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.title_green};
    &:hover + .tooltip-box{
      display: block;
    }
  }
  @media (max-width:${({ theme }) => theme.media.tab}) {
    top: 0;
    right: 0;
    .tooltip-box{
      display: none;
      padding: 20px;
      box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
      background: white;
      border-radius: 8px;
      position: absolute;
      font-weight: 400;
      width: 190px;
    }
  }
}
.show-mobile{
  display: none;
}
.show-tab, .show-flex-tab{
  display: none;
}
/* stepform ends */

/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//1023px
@media (max-width:${({ theme }) => theme.media.tab}) {
  .hide-tab{
    display: none;
  }
  .show-tab{
    display: block;
  }
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
  .show-tab{
    display: block;
  }
  .show-flex-tab{
    display: flex;
  }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
  .hide-mobile{
    display: none;
  }
  .show-mobile{
    display: block;
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
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  height: 28px;
  width: 28px;
  background-color: #6EA44C;
  border-radius: 50%;
  margin-top: -2px;
}
`;
