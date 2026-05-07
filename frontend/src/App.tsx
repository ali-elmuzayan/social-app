import { Routes, Route } from "react-router";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import ForgotPassword from "@/pages/auth/ForgetPassword";

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import "./app.css";

function App() {
  return (
    <Routes>
      {/*Landing */}
      <Route path="/" element={<Landing />} />
      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Main App */}
      <Route path="/app " element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
