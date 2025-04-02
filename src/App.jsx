// import './App.css'
import Home from './Home'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap-css-only/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/balancing-market-app-web' element={<Home></Home>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
