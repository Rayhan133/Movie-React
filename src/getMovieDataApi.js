const getMovieData = async () => {
  const response = await fetch(
    "https://movie-server-a5b66-default-rtdb.firebaseio.com/movie-data.json"
  );
  const data = await response.json();
  return data;
};

export default getMovieData;
