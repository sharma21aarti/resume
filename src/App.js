import { render } from "@testing-library/react";
import "./App.css";
import Editor from "./compnents/Editor";
import FirstPage from "./compnents/FirstPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      <Router>
        <Routes>
          <Route path="/editor" element={<Editor />} />
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </Router>
      {/* <Navbar2 /> */}
    </div>
  );
}

export default App;
