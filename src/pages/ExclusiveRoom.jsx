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
