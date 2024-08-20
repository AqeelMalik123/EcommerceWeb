
import './App.css';
// import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './Home';
import About from './about';
import SingleProduct from './singleProduct/singleProduct';
import Contact from './contact/contact';
import Card from './card/card';
import Error from './error/error';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home></Home>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/' element={<Contact/>}/>
  <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
  <Route path='/card' element={<Card/>}/>
  <Route path='/error' element={<Error/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
