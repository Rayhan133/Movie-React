import { Suspense } from "react";
import { useQuery } from "react-query";
import getMovieData from "../../getMovieDataApi";
import Loading from "./../Loading/Loading";
import MovieSliderCard from "./MovieSliderCard/Index";
export default function OldMovies() {
  const { data } = useQuery("data", () => getMovieData());

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <MovieSliderCard title={"Old Movies"} data={data?.latest_movies} />
      </Suspense>
    </div>
  );
}
