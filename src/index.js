import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/work" element={<Work />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
