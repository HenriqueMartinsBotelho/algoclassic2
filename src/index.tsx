import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Algo from "./pages/Algo/Algo";
import Images from "./pages/Images/Images";
import About from "./pages/About/About";
import reportWebVitals from "./reportWebVitals";
import { ArrayAccess } from "./articles/ArrayAccess";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="algo" element={<Algo />}>
          <Route path=":id" element={<Algo />} />
        </Route>
        <Route path="array_access" element={<ArrayAccess />} />
        <Route path="images" element={<Images />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
