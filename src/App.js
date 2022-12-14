import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FestivalPage from "./pages/FestivalsPage";
import FestivalDetailsPage from "./pages/FestivalDetailsPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import AddFestivalPage from "./pages/AddFestivalPage";
import EditFestivalPage from "./pages/EditFestivalPage";
import Join from "./pages/VideoCall/Join";
import Meeting from "./pages/VideoCall/Meeting";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festival/add" element={<AddFestivalPage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/festival/:festivalId" element={<FestivalDetailsPage />} />
        <Route
          path="/festival/edit/:festivalId"
          element={<EditFestivalPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:profileId" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/meeting/:id" element={<Meeting />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
//app
