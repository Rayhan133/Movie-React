import { Suspense } from "react";
import Loading from "../Loading/Loading";
import LatestMovies from "./LatestMovies";
import Slider from "./Slider";

export default function Home() {
  return (
    <div className="bg-black">
      <Suspense fallback={<Loading />}>
        <Slider />
        <LatestMovies />
        {/* <OldMovies /> */}
      </Suspense>
    </div>
  );
}
