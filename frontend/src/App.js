import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Form from "./components/Form/Form";
import Step1 from "./components/Form/Step1";
import Step2 from "./components/Form/Step2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="form" element={<Form />}>
              <Route index element={<Step1 />} />
              <Route path="step2" element={<Step2 />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Path not found</h1>} />
        </Routes>
      </Router>
      <Notifications />
    </>
  );
}

export default App;
