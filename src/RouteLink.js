import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export default function RouteLink() {
  return (
    <Routes>
      <Route element={<Home />} />
    </Routes>
  );
}
