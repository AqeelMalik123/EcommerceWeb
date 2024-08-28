
import './App.css';
// import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
// import Home from './Home/Home';
import About from './about';
import SingleProduct from './singleProduct/singleProduct';
import Contact from './contact/contact';
import Card from './card/card';
import Error from './error/error';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Product from './product/product';
// import { FiShoppingCart } from "react-icons/fi";
import Home from './Home/Home';

function App() {
  const theme={
    colors:{
      bg:"#000"
    },
  }
  return (
    <ThemeProvider theme={theme}>
 <BrowserRouter>
 <GlobalStyle/>
 <Header/>
 <Routes>
  <Route path='/' element={<Home></Home>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/product' element={<Product/>}/>

  <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
  <Route path='/card' element={<Card/>}/>
  <Route path='/error' element={<Error/>}/>
 </Routes>
 </BrowserRouter>
 </ThemeProvider>
  );
}

export default App;
