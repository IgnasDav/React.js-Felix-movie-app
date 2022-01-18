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
  const [token, setToken] = useState("");
  const [favorites, setFavorites] = useState([]);
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Provider store={store}>
      <Router>
        <Header
          username={username}
          token={token}
          setToken={setToken}
          usernameInput={usernameInput}
          passwordInput={passwordInput}
        />
        <Routes>
          <Route
            path="/"
            element={<Home token={token} setToken={setToken} />}
          />
          <Route
            path="/signin"
            element={
              <SignIn
                token={token}
                setToken={setToken}
                passwordInput={passwordInput}
                usernameInput={usernameInput}
                username={username}
                password={password}
                setPassword={setPassword}
                setUsername={setUsername}
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
