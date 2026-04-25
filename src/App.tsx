import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Review from "./pages/Review";

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
