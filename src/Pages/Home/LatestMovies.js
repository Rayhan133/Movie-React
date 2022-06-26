import "./LatestMovies.css";
export default function LatestMovies() {
  return (
    <div className="LatestMovies container text-white ">
      <div className="d-flex justify-content-between LatestMoviesTitleSection">
        <h1 className="LatestMoviesTitle">Latest Movies</h1>
        <div className="mt-2 d-flex">
          <div className="box">
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div className="box">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <hr />
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
        <div class="item">
          <h4>6</h4>
        </div>
        <div class="item">
          <h4>7</h4>
        </div>
        <div class="item">
          <h4>8</h4>
        </div>
        <div class="item">
          <h4>9</h4>
        </div>
        <div class="item">
          <h4>10</h4>
        </div>
        <div class="item">
          <h4>11</h4>
        </div>
        <div class="item">
          <h4>12</h4>
        </div>
      </div>
    </div>
  );
}
