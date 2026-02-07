// import newsletterImg from "../assets/images/Paper plane.png"; 

// function Newsletter() {
//   return (
//     <section className="newsletter-section">
//       <div className="container">
//         <div className="row align-items-center">

//           <div className="col-md-6 text-center mb-4 mb-md-0">
//             <img
//               src={newsletterImg}
//               alt="Newsletter"
//               className="newsletter-image"
//             />
//           </div>

//           <div className="col-md-6">
//             <h2 className="newsletter-title">Subscribe to newsletter</h2>
//             <p className="newsletter-text">
//               Get the latest news and interesting offers and real <br/>
//               estate
//             </p>

//             <div className="newsletter-form d-flex">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Your e-mail address"
//               />
//               <button className="btn subscribe-btn">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Newsletter;




import { useState } from "react";
import newsletterImg from "../assets/images/Paper plane.png";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter email");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter valid email");
      return;
    }

    alert("Subscribed successfully");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={newsletterImg}
              alt="Newsletter"
              className="newsletter-image"
            />
          </div>

          <div className="col-md-6">
            <h2 className="newsletter-title">Subscribe to newsletter</h2>
            <p className="newsletter-text">
              Get the latest news and interesting offers and real <br />
              estate
            </p>

            <div className="newsletter-form d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Your e-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="btn subscribe-btn"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
