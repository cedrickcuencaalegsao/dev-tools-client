import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { Navbar } from "./pages/home/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />

          <Route path="/home" element={<Navbar />}>
            <Route path="" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
