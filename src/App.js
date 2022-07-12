import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headlines/header/header";
import Body from "./components/headlines/body/body";
import Footer from "./components/headlines/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
