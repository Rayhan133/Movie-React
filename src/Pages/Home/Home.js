import { Suspense } from "react";
import LatestMovies from "./LatestMovies";
import Slider from "./Slider";

export default function Home() {
  return (
    <div className="bg-black">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Slider />
      </Suspense>
      <LatestMovies />
    </div>
  );
}
