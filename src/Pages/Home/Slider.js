import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import getMovieData from "../../getMovieDataApi";

export default function Slider() {
  const [sliders, setSliders] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);
  const { data } = useQuery("data", () => getMovieData());
  useEffect(() => {
    setActiveSlider(data.slider[0]);
    let array = [];
    for (let index = 1; index < data.slider.length; index++) {
      const element = data.slider[index];
      array.push(element);
    }
    setSliders(array);
  }, [data]);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Watch Now"
        >
          <a href={activeSlider.url} target="_blank" rel="noreferrer">
            <img
              src={activeSlider.imageUrl}
              className="d-block w-100"
              alt={activeSlider.title}
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>{activeSlider.title}</h5>
          </div>
        </div>

        {sliders.map((item) => {
          return (
            <div
              key={item.id}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Watch Now"
              className="carousel-item {item.id == 1? 'active': ''}"
              style={{ height: "500px!important", width: "100%" }}
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <img
                  src={item.imageUrl}
                  className="d-block w-100"
                  alt={item.title}
                  width="1500"
                  border="0"
                />
              </a>
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
