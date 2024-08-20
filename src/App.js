
import './App.css';
// import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './Home';
import About from './about';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home></Home>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/' element={<Home></Home>}/>
  <Route path='/singleProduct/:id' element={<Home></Home>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
