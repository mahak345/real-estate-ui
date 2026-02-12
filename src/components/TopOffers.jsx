import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import offer1 from "../assets/images/container1.png";
import offer2 from "../assets/images/container2.png";
import container3 from "../assets/images/container3.png"; 
import offer4 from "../assets/images/container1.png";
import offer5 from "../assets/images/container2.png";
import offer6 from "../assets/images/container3.png";
import offer7 from "../assets/images/container1.png";
import offer8 from "../assets/images/container2.png";
function TopOffers() {
  const swiperRef = useRef(null);
  const [error, setError] = useState("");

  const offers = [
    { img: offer1, title: "Large 4-room apartment with a beautiful terrace", price: "320 000€", city: "Barcelona IV." },
    { img: offer2, title: "Magnificent duplex in a private villa", price: "315 000€", city: "Barcelona II." },
    { img: container3, title: "5i large design apartment with terrace", price: "280 000€", city: "Madrid VI." },
    { img: offer4, title: "Elegant apartment with private terrace", price: "320 000€", city: "Madrid V." },
    { img: offer5, title: "Large 4-room apartment with a beautiful terrace", price: "320 000€", city: "Barcelona IV." },
    { img: offer6, title: "Magnificent duplex in a private villa", price: "315 000€", city: "Barcelona II." },
    { img: offer7, title: "5i large design apartment with terrace", price: "280 000€", city: "Madrid VI." },
    { img: offer8, title: "Elegant apartment with private terrace", price: "320 000€", city: "Madrid V." },
  ];

  
  const handleShowAll = () => {
    if (offers.length === 0) {
      setError("No offers available right now");
      return;
    }

    setError("");
    alert(`Showing all ${offers.length} offers`);
  };

  return (
    <section className="top-offers-section">
      <div className="container">

        {/* HEADER */}
        <div className="offers-header d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2>Top offers</h2>
            <p>
              Fulfill your career dreams, enjoy all the achievements of the city
              <br />
              center and luxury housing to the fullest.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="offers-actions d-flex align-items-center gap-2">
            <div className="circle-arrow" onClick={() => swiperRef.current?.slidePrev()}>‹</div>
            <div className="circle-arrow" onClick={() => swiperRef.current?.slideNext()}>›</div>

            <button className="show-all-btn" onClick={handleShowAll}>
              Show all offers
            </button>
          </div>
        </div>

        {/* ERROR */}
        {error && <small className="text-danger mb-3 d-block">{error}</small>}

        {/* SLIDER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            576: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="offer-card">
                <img src={item.img} alt="offer" />

                <div className="offer-body">
                  <h6>
                    <span className="title-line-1">
                      {item.title.split(" with ")[0]}
                    </span>
                    {item.title.includes(" with ") && (
                      <span className="title-line-2">
                        with {item.title.split(" with ")[1]}
                      </span>
                    )}
                  </h6>

                  <span className="price">{item.price}</span>
                  <p className="city">{item.city}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TopOffers;
