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
import { ArraySearch } from "./articles/ArraySearch";
import { ArrayInsert } from "./articles/ArrayInsert";
import { ArrayDelete } from "./articles/ArrayDelete";
import Training from "./pages/training/Training";
import {
  SLLAccess,
  SLLSearch,
  SLLInsert,
  SLLDelete,
  StackInsert,
  StackDelete,
  StackSearch,
  StackAccess,
  QueueAccess,
  QueueDelete,
  QueueSearch,
  QueueInsert,
} from "./articles/";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="algo" element={<Algo />}>
        <Route path=":id" element={<Algo />} />
      </Route>
      <Route path="array_access" element={<ArrayAccess />} />
      <Route path="array_search" element={<ArraySearch />} />
      <Route path="array_insert" element={<ArrayInsert />} />
      <Route path="array_delete" element={<ArrayDelete />} />
      <Route path="stack_insert" element={<StackInsert />} />
      <Route path="stack_delete" element={<StackDelete />} />
      <Route path="stack_search" element={<StackSearch />} />
      <Route path="stack_access" element={<StackAccess />} />
      <Route path="queue_insert" element={<QueueInsert />} />
      <Route path="queue_access" element={<QueueAccess />} />
      <Route path="queue_delete" element={<QueueDelete />} />
      <Route path="queue_search" element={<QueueSearch />} />
      <Route path="sll_access" element={<SLLAccess />} />
      <Route path="sll_search" element={<SLLSearch />} />
      <Route path="sll_insert" element={<SLLInsert />} />
      <Route path="sll_delete" element={<SLLDelete />} />
      <Route path="training" element={<Training />} />
      <Route path="images" element={<Images />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
