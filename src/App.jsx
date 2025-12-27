import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PolaroidGallery from "./pages/PolaroidGallery";
import About from "./components/About";
import Terms from "./components/Terms"
import Privacy from "./components/Privacy";
import CreatePolaroid from "./pages/CreatePolaroid";
import PolaroidView from "./pages/PolaroidView";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<PolaroidGallery />} />
          <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/create" element={<CreatePolaroid />} />
            <Route path="/polaroid/:id" element={<PolaroidView />} />

        </Routes>
      </Router>
  );
}

export default App;
