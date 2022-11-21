import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import Routing from "./components/routing-example/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

      <TheHeader />
      <MainContent />
    </div>
  );
}

export default App;
