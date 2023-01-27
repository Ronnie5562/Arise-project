import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Business from "./components/Business";
import Leadership from "./components/Leadership"
import Finance from "./components/Finance"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Business" element={<Business />} />
          <Route exact path="/Leadership" element={<Leadership />} />
          <Route exact path="/Finance" element={<Finance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
