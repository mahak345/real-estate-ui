import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import userImg from "../assets/images/man.png";
import userImg1 from "../assets/images/Switch.png";
import userImg2 from "../assets/images/woman.png";

function Testimonials() {

  const testimonials = [
  {
    text: "We had a wonderful experience working with this real estate team. From the initial consultation to closing the deal, their professionalism and expertise made the entire process smooth and stress-free. They truly understood our needs and found us the perfect home.",
    name: "George Aminoff",
    info: "3 bedroom apartment in Madrid",
    img: userImg,
  },
  {
    text: "From start to finish, the service was exceptional. The team provided expert advice, prompt communication, and guided us through every step of buying our first home. Their dedication to customer satisfaction made all the difference!",
    name: "Jocelyn Stanton",
    info: "2 bedroom apartment in Barcelona",
    img: userImg1,
  },
  {
    text: "The entire experience was fantastic from beginning to end. Their guidance, quick responses, and attention to detail made buying our new house effortless. Their commitment truly set them apart from others.",
    name: "Alice Schneider",
    info: "4 bedroom apartment in Berlin",
    img: userImg2,
  },
  {
    text: "Highly professional and friendly team who made the whole process easy to understand. They were always available to answer our questions and ensured everything went smoothly.",
    name: "Mark Wilson",
    info: "5 bedroom apartment in Barcelona",
    img: userImg,
  },
  {
    text: "Very transparent process with clear communication at every stage. We always felt confident and informed, thanks to their honest guidance and support.",
    name: "Daniel Cooper",
    info: "Studio apartment in Paris",
    img: userImg1,
  },
  {
    text: "Excellent communication throughout the deal. The team kept us updated regularly and handled everything efficiently, making the entire experience stress-free.",
    name: "Sophia Turner",
    info: "Luxury villa in Rome",
    img: userImg2,
  },
  {
    text: "They understood exactly what we were looking for and presented options that perfectly matched our preferences. We couldn’t be happier with the result.",
    name: "Lucas Martin",
    info: "2 bedroom apartment in Lisbon",
    img: userImg,
  },
  {
    text: "Smooth paperwork, timely updates, and great attention to detail. The whole process was well-organized, and we felt supported from day one.",
    name: "Emma Johnson",
    info: "Penthouse in Amsterdam",
    img: userImg2,
  },
];


  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">
              Explore our satisfied clients' testimonials and see how we’ve helped
              them find their perfect property.
            </p>
          </div>

          {/* Arrows */}
          <div className="col-md-4 d-flex justify-content-end gap-2">
            <div
              className="circle-arrow"
              ref={prevRef}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ‹
            </div>
            <div
              className="circle-arrow"
              ref={nextRef}
              onClick={() => swiperRef.current?.slideNext()}
            >
              ›
            </div>
          </div>
        </div>


        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            720: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <span className="quote">“</span>
                <p className="testimonial-text">{item.text}</p>

                <div className="client d-flex align-items-center gap-3 mt-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="client-img"
                  />
                  <div>
                    <h6 className="mb-0">{item.name}</h6>
                    <small>{item.info}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
