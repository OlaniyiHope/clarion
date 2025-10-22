import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home/Home";

import Details from "./Home/Details";

import Booking from "./Home/Booking";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
