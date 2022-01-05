import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import { GlobalStyle } from "./GlobalStyles";
//Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import SignIn from "./components/SIgnIn";
function App() {
  const [token, setToken] = useState("");
  console.log(token);
  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route
          path="/signin"
          element={<SignIn token={token} setToken={setToken} />}
        />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
