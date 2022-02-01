import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import { GlobalStyle } from "./GlobalStyles";
//Store
//Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SingleMovie from "./Pages/SingleMovie";
import { MoviesProvider } from "./context/MoviesContext";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SingleMovieProvider } from "./context/SingleMovieContext";

function App() {
  const usernameInput = useRef();
  const passwordInput = useRef();

  return (
    <AuthProvider>
      <MoviesProvider>
        <FavoritesProvider>
          <SingleMovieProvider>
            <Router>
              <Header
                usernameInput={usernameInput}
                passwordInput={passwordInput}
              />
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
          </SingleMovieProvider>
        </FavoritesProvider>
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;
