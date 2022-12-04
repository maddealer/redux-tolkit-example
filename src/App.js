import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
