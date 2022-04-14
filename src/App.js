/*import packages */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Button1 from './components/Button1.js';
/*import containers */
import Index from './container/product_detail/productDetail.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route  path="/login" element={<Button1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
