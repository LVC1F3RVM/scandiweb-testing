import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Routes>
        <Route path="/" element={<Navigate replace to="/new/1" />} />
      </Routes>
    </div>
  </div>
);

export default App;
