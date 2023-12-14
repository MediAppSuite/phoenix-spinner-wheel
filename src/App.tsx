import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import MyWinnings from "./components/MyWinnings";
import MyDetails from "./components/MyDetails";
import AddMyDetails from "./components/AddMyDetails";
import LandingPage from "./components/LandingPage";
import EmailVerification from "./components/EmailVerification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-winnings" element={<MyWinnings />} />
            <Route path="/my-details" element={<MyDetails />} />
            <Route path="/add-details" element={<AddMyDetails />} />
            <Route path="/verify-email" element={<EmailVerification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
