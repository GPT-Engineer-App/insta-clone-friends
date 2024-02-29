import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Reels from "./pages/Reels.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/reels" element={<Reels />} />
      </Routes>
    </Router>
  );
}

export default App;
