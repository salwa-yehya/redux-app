import './App.css';
import NavBar from "./components/Nav/Navbar";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile'
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookData/BookData';
import Book from './components/BookList/Book';
import CreateBook from './components/BookList/CreateBook';
import EditBook from './components/BookList/EditBook';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      >
      </ToastContainer>
      
       <BrowserRouter>
       <Routes>
       <Route path='/'  element={< Home/>} />
       <Route path='/login'  element={< Login/>} />
       <Route path='/register'  element={< Register/>} />
       <Route path='/booklist'  element={< BookList/>} />
       <Route path = "createBook" element = {<CreateBook />} />
       <Route path='/profile'  element={< Profile/>} />
       <Route path='/profile/:id/edit' element={<EditProfile/>}/>
      
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
