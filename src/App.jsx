// import './App.css'
import Home from './Home'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'bootstrap-css-only/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    <Router>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark">
          </ToastContainer>
      <Routes>
        <Route path='/balancing-market-app-web' element={<Home></Home>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
