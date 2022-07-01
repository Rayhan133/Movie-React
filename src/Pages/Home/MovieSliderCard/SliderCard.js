import "./style.css";

export default function SliderCard({ item }) {
  return (
    <>
      <div
        style={{ Width: "auto", Height: "50px!important", marginRight: "30px" }}
        className="mt-4"
      >
        <div
          className="product-wrap relative overflow-hidden rounded-[10px] mb-30 group block"
          data-v-d11294c2=""
        >
          <div
            className="product-img relative overflow-hidden block rounded-[10px] before:content-[''] before:bottom-0 before:left-0 before:opacity-0 before:absolute before:right-0 before:z-20 before:pointer-events-none before:rounded-[10px] before:transition-all before:duration-500 group-hover:before:opacity-100 before:w-full before:h-1/2 group-hover:before:h-full"
            data-v-d11294c2=""
          >
            <a
              href={item.url}
              className="w-full block group-hover:scale-[1.2] transition-all duration-300"
              data-v-d11294c2=""
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="default-img transition-all duration-500 w-full"
                data-v-d11294c2=""
              />
            </a>
          </div>
          <div
            className="product-content flex flex-col my-4 text-center justify-center opacity-0 group-hover:opacity-100 absolute -bottom-[50px] group-hover:bottom-0 transition-all duration-500 z-999 w-full"
            data-v-d11294c2=""
          >
            <h3 data-v-d11294c2="">
              <a
                href={item.url}
                target="_blank"
                className="text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white"
                data-v-d11294c2=""
                rel="noreferrer"
              >
                {item.title}
              </a>
            </h3>
            <div className="flex justify-center mt-[5px]" data-v-d11294c2="">
              <div className="quality flex items-center" data-v-d11294c2="">
                <span
                  className="mr-1 font-medium text-white text-[15px]"
                  data-v-d11294c2=""
                >
                  Quality :{" "}
                </span>
                <label className="text-white" data-v-d11294c2="">
                  HD
                </label>
              </div>
              <div data-v-d11294c2="">
                <span className="text-white hidden" data-v-d11294c2="">
                  Date:2022-02-02
                </span>
              </div>
            </div>
            <div
              className="flex items-center justify-center mt-3"
              data-v-d11294c2=""
            >
              <a
                href={item.url}
                target="_blank"
                className="watchNowBtn text-[14px] inline-block rounded-[3px] transition-all duration-300 
                py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white leading-[1]"
                data-v-d11294c2=""
                rel="noreferrer"
              >
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
