import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
  return (
    <div className="font-heebo">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="works" element={<Works />} />
        </Routes>
        <Footer />
      </Router>,
    </div>
  );
}

export default App;
