// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function Testimonials() {
//   const testimonials = [
//     {
//       text: "We had a wonderful experience working with this real estate team.",
//       name: "George Aminoff",
//       info: "3 bedroom apartment in Madrid",
//       img: "https://i.pravatar.cc/80?img=1",
//     },
//     {
//       text: "From start to finish, the service was exceptional.",
//       name: "Jocelyn Stanton",
//       info: "2 bedroom apartment in Barcelona",
//       img: "https://i.pravatar.cc/80?img=2",
//     },
//     {
//       text: "The entire experience was fantastic and smooth.",
//       name: "Alice Schneider",
//       info: "4 bedroom apartment in Berlin",
//       img: "https://i.pravatar.cc/80?img=3",
//     },
//     {
//       text: "Highly professional and friendly team.",
//       name: "Mark Wilson",
//       info: "5 bedroom apartment in Barcelona",
//       img: "https://i.pravatar.cc/80?img=4",
//     },
//   ];

//   return (
//     <section className="testimonials-section">
//       <div className="container">

//         {/* HEADER */}
//         <div className="row mb-5 align-items-center">
//           <div className="col-md-8">
//             <h2 className="section-title">Testimonials</h2>
//             <p className="section-subtitle">
//               Explore our satisfied clients' testimonials and see how we’ve helped
//               them find their perfect property.
//             </p>
//           </div>

//           {/* CUSTOM NAV BUTTONS */}
//           <div className="col-md-4 text-md-end mt-3 mt-md-0">
//             <button className="nav-btn me-2 testimonial-prev">
//               &#10094;
//             </button>
//             <button className="nav-btn testimonial-next">
//               &#10095;
//             </button>
//           </div>
//         </div>

//         {/* SWIPER */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation={{
//             nextEl: ".testimonial-next",
//             prevEl: ".testimonial-prev",
//           }}
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             992: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-card">
//                 <span className="quote">“</span>

//                 <p className="testimonial-text">{item.text}</p>

//                 <div className="client d-flex align-items-center">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="client-img"
//                   />
//                   <div>
//                     <h6>{item.name}</h6>
//                     <small>{item.info}</small>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      text: "We had a wonderful experience working with this real estate team.",
      name: "George Aminoff",
      info: "3 bedroom apartment in Madrid",
      img: "https://i.pravatar.cc/80?img=1",
    },
    {
      text: "From start to finish, the service was exceptional.",
      name: "Jocelyn Stanton",
      info: "2 bedroom apartment in Barcelona",
      img: "https://i.pravatar.cc/80?img=2",
    },
    {
      text: "The entire experience was fantastic and smooth.",
      name: "Alice Schneider",
      info: "4 bedroom apartment in Berlin",
      img: "https://i.pravatar.cc/80?img=3",
    },
    {
      text: "Highly professional and friendly team.",
      name: "Mark Wilson",
      info: "5 bedroom apartment in Barcelona",
      img: "https://i.pravatar.cc/80?img=4",
    },
    {
      text: "Very transparent process and helpful guidance.",
      name: "Daniel Cooper",
      info: "Studio apartment in Paris",
      img: "https://i.pravatar.cc/80?img=5",
    },
    {
      text: "Excellent communication throughout the deal.",
      name: "Sophia Turner",
      info: "Luxury villa in Rome",
      img: "https://i.pravatar.cc/80?img=6",
    },
    {
      text: "They understood exactly what we were looking for.",
      name: "Lucas Martin",
      info: "2 bedroom apartment in Lisbon",
      img: "https://i.pravatar.cc/80?img=7",
    },
    {
      text: "Smooth paperwork and timely updates.",
      name: "Emma Johnson",
      info: "Penthouse in Amsterdam",
      img: "https://i.pravatar.cc/80?img=8",
    },
  ];

  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // <-- swiperRef define karo

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* HEADER */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">
              Explore our satisfied clients' testimonials and see how we’ve helped
              them find their perfect property.
            </p>
          </div>

          {/* NAV BUTTONS */}
          <div className="col-md-4 d-flex justify-content-end align-items-center gap-2">
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

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
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

                {/* CLIENT INFO WITH IMAGE */}
                <div className="client d-flex align-items-center gap-3 mt-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="client-img"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/80?text=User")
                    }
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
