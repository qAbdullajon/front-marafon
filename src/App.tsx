import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tolov from "./pages/tolov";
import { useState } from "react";
import Yakunlash from "./pages/yakunlash";
import Download from "./pages/download";
import Users from "./pages/users";

const App = () => {
  const [user, setUser] = useState<any>(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/tolov" element={<Tolov user={user} />} />
        <Route path="/yakunlash" element={<Yakunlash user={user} />} />
        <Route path="/1236/users" element={<Download />} />
        <Route path="/1212/user" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
