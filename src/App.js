import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Componentes/NavBar";

function App() {
  useEffect(() => {
    axios
      .get("https://localhost:7011/WeatherForecast")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>FOOTER</div>
    </Router>
  );
}

export default App;
