import logo from './logo.svg';
import './App.css';
import './style/style.css'
import {Fragment} from "react";
import {Route,Routes} from "react-router-dom";

import HomePage from './pages/HomePage'
import Catalog from "./pages/Catalog";
import Header from "./components/HomePageComp/Header";
import ContactPage from "./pages/ContactPage";
import {BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import SideBar from "./components/UI/SideBar";
import Design from "./pages/Design";

function App() {
  return (
    <Fragment>
        <SideBar />
        <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='contact_us' element={<ContactPage/>} />
          <Route path='design' element={<Design />} />

      </Routes>
        <footer className='container footer'>
            <a>Contact Us</a>
            <a>Our Catalog</a>
            <a>Navigate</a>
        </footer>
    </Fragment>
  );
}

export default App;
