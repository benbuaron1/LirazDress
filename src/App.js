import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import {Route,Routes, Router} from "react-router-dom";

import HomePage from './pages/HomePage'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />

      </Routes>
    </Fragment>
  );
}

export default App;
