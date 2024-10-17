import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./pages/home/Navbar";
import { HomePage } from "./pages/home/HomePage";
import { TrendingPage } from "./pages/home/TrendingPage";
import { FavoritePage } from "./pages/home/FavoritePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/home/all"} />} />

          <Route path="/home" element={<Navbar />}>
            <Route path="all" element={<HomePage />} />
            <Route path="trending" element={<TrendingPage />} />
            <Route path="favorites" element={<FavoritePage />} />
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
