import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NewUserPage} from './components/page/NewUserPage';
import {IndexPage} from './components/pages/IndexPage';

function App() {
  // const [user, setUser]= React.useState([])
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<IndexPage />} />
      <Route path='/user/new' element={<NewUserPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
