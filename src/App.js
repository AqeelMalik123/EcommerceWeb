import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
 <BrowserRouter>
 <Router>
  <Route path='/' element={<Home></Home>}/>
 </Router>
 </BrowserRouter>
  );
}

export default App;
