import { useEffect, useState } from "react";

export default function Slider() {
  const [sliders, setSliders] = useState([]);
  const [activeSlider, setActiveSlider] = useState([]);

  const getData = () => {
    fetch(
      "https://movie-server-a5b66-default-rtdb.firebaseio.com/slider.json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (sliderData) {
        setActiveSlider(sliderData[0]);
        let array = [];
        for (let index = 1; index < sliderData.length; index++) {
          const element = sliderData[index];
          array.push(element);
        }
        setSliders(array);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item active"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Watch Now"
          >
            <a href={activeSlider.url} target="_blank" rel="noreferrer">
              <img
                src={activeSlider.imageUrl}
                class="d-block w-100"
                alt={activeSlider.title}
              />
            </a>
            <div class="carousel-caption d-none d-md-block">
              <h5>{activeSlider.title}</h5>
            </div>
          </div>
          {sliders.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Watch Now"
                  class="carousel-item"
                  style={{ height: "500px!important", width: "100%" }}
                >
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img
                      src={item.imageUrl}
                      class="d-block w-100"
                      alt={item.title}
                      width="1500"
                      border="0"
                    />
                  </a>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
