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
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Help from "./Help";
import Contact from "./Contact";
import Pricing from "./Pricing";
import SingleBlog from "./SingleBlog";
import Blog from "./Blog";
import UploadBlog from "./UploadBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/blog" element={<Blog />} />
 <Route path="/single-blog/:slug" element={<SingleBlog />} />
<Route path="/upload-blog" element={<UploadBlog />} />

          <Route exact path="/project" element={<Project />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/pricing" element={<Pricing />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
