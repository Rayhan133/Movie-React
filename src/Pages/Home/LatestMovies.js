import "./LatestMovies.css";
export default function LatestMovies() {
  const previousSlider = () => {
    const prev = document.querySelector(".owl-prev");
    prev.click();
  };
  const nextSlider = () => {
    const next = document.querySelector(".owl-next");
    next.click();
  };

  return (
    <div className="LatestMovies container text-white ">
      <div className="d-flex justify-content-between LatestMoviesTitleSection">
        <h1 className="LatestMoviesTitle">Latest Movies</h1>
        <div className="mt-2 d-flex">
          <div className="box" onClick={previousSlider}>
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div className="box" onClick={nextSlider}>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <hr />

      <div className="">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <h4>1</h4>
          </div>
          <div class="item">
            <h4>2</h4>
          </div>
          <div class="item">
            <h4>3</h4>
          </div>
          <div class="item">
            <h4>4</h4>
          </div>
          <div class="item">
            <h4>5</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
