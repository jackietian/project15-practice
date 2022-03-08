import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import Home from "./components/Home";
import Notifications from "./components/Notifications";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<h1>Path not found</h1>} />
        </Routes>
      </Router>
      <Notifications />
    </>
  );
}

export default App;
