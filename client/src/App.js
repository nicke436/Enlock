import React from "react";
import {Route, Routes} from "react-router-dom";
import './assets/App.css';
import { IndexPage } from "./pages/IndexPage/IndexPage";

function App() {
  return (
    <div className="App">
	 <Routes>
	  <Route exact path="/" element={<IndexPage />} />
	  </Routes>
    </div>
  );
}

export default App;
