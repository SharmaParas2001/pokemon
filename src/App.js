import "./styles/App.css";
import Home from "./components/Home";
import ApiPage from "./components/ApiPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokimon" element={<ApiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
