//Styles
import { GlobalStyle } from "./GlobalStyles";
//Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
