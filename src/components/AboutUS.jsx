import Container from "../assets/Images/about.png";

function AboutUs() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={Container}
            alt="Our Team"
            className="img-fluid rounded"
          />
        </div>


        {/* TEXT */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">About us</h1>

          <p className="text-muted">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase, or rental of real estate.
            Our advantage is more than 15 years of experience and strong foundations
            in attractive locations in Slovakia, with branches in Bratislava and Košice.
          </p>

          <p className="text-muted">
            We have connections with all banks on the Slovak market, allowing us to
            handle everything under one roof. By constantly innovating our business
            activities, we move forward and are able to offer truly above-standard
            services that set us apart from the competition.
          </p>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;
