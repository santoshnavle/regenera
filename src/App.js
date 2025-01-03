import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSearchResult from "./pages/BlogSearchResult";
import BlogPost from "./pages/BlogPost";
import Partner from "./pages/Partner";
import Friends from "./pages/Friends";
import StepForm from "./pages/StepForm";
import FinalStep from "./pages/finalStep";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Guardians from "./pages/Guardians";
import GuardiansForms from "./pages/GuardiansFormRole";
import GuardiansSignup from "./pages/GuardianSignup";
import OutsidePeru from "./pages/OutsidePeru";
import ThankyouOutside from "./pages/ThankyouOutsidePeru";
import CreatingDoc from "./pages/CreatingDoc";
import SignDocuments from "./pages/SignDocuments";
import CreatingSign from "./pages/CreatingSign";
import ThankYouGuardian from "./pages/ThankYouGuardian";
import LandscapeList from "./pages/LandscapeListing";
import LandscapeDetail from "./pages/LandscapeDetail";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import KnowledgeCenterSearch from "./pages/KnowledgeCenterSearch";
import TeamUp from "./pages/TeamUp";
import Sitemap from "./pages/Sitemap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () =>{
  const theme = {
    colors: {
      white: "#fff",
      black: "#212529",
      title_green:  "#004D37",
      text_color: "#424A46", 
      grey: "#545C56",
      light_green:  "#6EA44C",
      orange: "#DD6B17",
      light_orange: "#ef8539",
      border: "rgba(98, 84, 243, 0.5)",
      bgnavlink_hover: "#eee",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "1024px" },
  };

  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blogsearch" element={<BlogSearchResult/>}/>
            <Route path="/blog-post" element={<BlogPost/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/step-form" element={<StepForm/>}/>
            <Route path="/final-step" element={<FinalStep/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/guardians" element={<Guardians/>}/>
            <Route path="/signup-guardians" element={<GuardiansSignup/>}/>
            <Route path="/choose-role" element={<GuardiansForms/>}/>
            <Route path="/outside-peru" element={<OutsidePeru/>}/>
            <Route path="/outside-thankyou" element={<ThankyouOutside/>}/>
            <Route path="/creating-doc" element={<CreatingDoc/>}/>
            <Route path="/sign-document" element={<SignDocuments/>}/>
            <Route path="/creating-sign" element={<CreatingSign/>}/>
            <Route path="/thankyou-guardian"element={<ThankYouGuardian/>}/>
            <Route path="/landscape-list" element={<LandscapeList/>}/>
            <Route path="/landscape-detail" element={<LandscapeDetail/>}/>
            <Route path="/team-up" element={<TeamUp/>}/>
            <Route path="/knowledge-center" element={<KnowledgeCenter/>}/>
            <Route path="/knowledge-center-search-result" element={<KnowledgeCenterSearch/>}/>
            <Route path="/sitemap" element={<Sitemap/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </ThemeProvider>
  </>
}

export default App;