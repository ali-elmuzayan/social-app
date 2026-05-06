import { Routes, Route } from "react-router";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main App */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
