import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Review from "./pages/Review/Review";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:slug" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}
