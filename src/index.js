
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home/Home';
// import List from './pages/List/List';
// import Hotel from './pages/Hotel/Hotel';
// import { SearchContextProvider } from './context/SearchContext';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <SearchContextProvider>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/hotel' element={<List />} />
//         <Route path='hotel/:id' element={<Hotel />} />
//       </Routes>
//     </Router>
//   </SearchContextProvider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <AuthContextProvider>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </AuthContextProvider>

);