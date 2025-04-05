import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section-one" element={<SectionOne />} />
        <Route path="/section-two" element={<SectionTwo />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
