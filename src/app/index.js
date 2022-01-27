import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
//Styles
import { GlobalStyle } from "./GlobalStyles";
//Store
import store from "../store";
//Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SingleMovie from "./Pages/SingleMovie";

function App() {
  const usernameInput = useRef();
  const passwordInput = useRef();

  return (
    <Provider store={store}>
      <Router>
        <Header usernameInput={usernameInput} passwordInput={passwordInput} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                passwordInput={passwordInput}
                usernameInput={usernameInput}
              />
            }
          />
          <Route path="/content/:id" element={<SingleMovie />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
