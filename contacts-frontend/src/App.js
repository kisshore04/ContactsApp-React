import Register from './Components/Register';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import CurrentPage from './Components/CurrentPage';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' index element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/currentPage" element={<CurrentPage />} />
      </Routes >
    </>
  )
}

export default App;
