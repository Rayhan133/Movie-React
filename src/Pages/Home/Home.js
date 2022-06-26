import LatestMovies from "./LatestMovies";
import Slider from "./Slider";

export default function Home() {
  return (
    <div className="bg-black">
      <Slider />
      <LatestMovies />
    </div>
  );
}
