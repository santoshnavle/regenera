import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSearchResult from "./pages/BlogSearchResult";
import BlogPost from "./pages/BlogPost";
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
    media: { mobile: "768px", tab: "1023px" },
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
          </Routes>
          <Footer/>
        </BrowserRouter>
    </ThemeProvider>
  </>
}

export default App;