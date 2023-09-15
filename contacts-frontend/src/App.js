import Register from './Components/Register';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' index element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path="/current" element={ } /> */}
      </Routes>
    </>
  )
}

export default App;
