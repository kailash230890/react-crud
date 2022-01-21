import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
// import Swal from 'sweetalert2/src/sweetalert2.js'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />

        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
