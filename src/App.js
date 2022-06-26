import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Header from "./Pages/Home/Header";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
