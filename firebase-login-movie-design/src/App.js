import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import Loading from './Components/Loading';
import ProcessingContext from './Context/ProcessingContext';
import { useState } from 'react';
import UserContext from './Context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const loading = useState(false);
  const user = useState(null);
  return (
    <UserContext.Provider value={user}>
    <ProcessingContext.Provider value={loading}>
    <Router>
      <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      <Loading />
      <ToastContainer />
    </ProcessingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
