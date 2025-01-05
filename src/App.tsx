import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tolov from "./pages/tolov";
import { useState } from "react";
import Yakunlash from "./pages/yakunlash";

const App = () => {
  const [user, setUser] = useState<any>(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/tolov" element={<Tolov user={user} />} />
        <Route path="/yakunlash" element={<Yakunlash user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
