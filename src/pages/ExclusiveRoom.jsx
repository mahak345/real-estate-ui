// import React from "react";
// import Navbar from "../components/Navbar";
// import Exclusives from "../components/Exclusives";
// import Newsletter from "../components/Newsletter";
// import Footer from "../components/Footer";

// function ExclusiveRoom() {
//   return (
//     <div>
//       <Navbar />
//       <Exclusives />
//       <Newsletter />
//       <Footer />
//     </div>
//   );
// }

// export default ExclusiveRoom;


// // //contract
// // import { ContactInfo, Form, Map } from "../components/contact";

// // const Contact = () => {
// //   return (
// //     <div className="pt-20 max-w-7xl mx-auto px-4">
// //       <Map />
// //       <ContactInfo />
// //       <Form />
// //     </div>
// //   );
// // };

// // export default Contact;








import PropertyList from "../components/PropertyList";
import "../styles/ExclusiveRoom.scss";
import "../styles/Newsletter.scss";
import "../styles/Navbar.scss";
import"../styles/Footer.scss";
import "../styles/Responsive.scss"

const ExclusiveRoom = () => {
  return (
    <div className="exclusive-room py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Exclusive Properties</h2>
        <PropertyList />
      </div>
    </div>
  );
};

export default ExclusiveRoom;
