import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FestivalPage from "./pages/FestivalsPage";
import FestivalDetailsPage from "./pages/FestivalDetailsPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/festival/:festivalId" element={<FestivalDetailsPage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
