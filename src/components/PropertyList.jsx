//

import img1 from "../assets/images/Container.png";
import img2 from "../assets/images/Container.png";
import img3 from "../assets/images/Container.png";

const properties = [
  {
    id: 1,
    title: "Bright and airy 2-bedroom flat near the city center",
    price: "320 000€",
    location: "Barcelona IV.",
    image: img1,
  },
  {
    id: 2,
    title: "Exclusive 5-room residence with a rooftop terrace",
    price: "495 000€",
    location: "Barcelona I.",
    image: img2,
  },
  {
    id: 3,
    title: "Newly built 4-room apartment with premium finishes",
    price: "390 000€",
    location: "Madrid III.",
    image: img3,
  },
];

const PropertyList = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Search for an offer</h2>

      <div className="row g-2 mb-4">
        <div className="col-md">
          <input className="form-control" placeholder="Search of location" />
        </div>
        <div className="col-md">
          <select className="form-select">
            <option>Property type</option>
          </select>
        </div>
        <div className="col-md">
          <select className="form-select">
            <option>Bedrooms</option>
          </select>
        </div>
        <div className="col-md">
          <select className="form-select">
            <option>Select price</option>
          </select>
        </div>
        <div className="col-md-auto">
          <button className="btn btn-primary px-4">Search</button>
        </div>
      </div>

      <p className="text-muted mb-3">1452 results found</p>

      <div className="row g-4">
        {properties.map((item) => (
          <div className="col-lg-4 col-md-6" key={item.id}>
            <div className="card property-card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="price">{item.price}</p>
                <p className="location">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-outline-primary px-4">
          Show more
        </button>
      </div>
    </div>
  );
};

export default PropertyList;
