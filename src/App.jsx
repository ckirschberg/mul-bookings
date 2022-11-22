import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import Routing from "./components/routing-example/Routing";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [bookings, setBookings] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

      <TheHeader setBookings={setBookings} />
      <MainContent bookings={bookings} setBookings={setBookings} />
    </div>
  );
}

export default App;
