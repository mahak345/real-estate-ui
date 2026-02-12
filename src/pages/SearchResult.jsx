import { useState } from "react";
import SearchBar from "../components/Search";
import OffersGrid from "../components/OffersGrid";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";
import "../styles/Search.scss";


function SearchResult() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOfferClick = (offer) => {
    navigate(`/property/${offer.id}`);
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <OffersGrid
        searchTerm={searchTerm}
        onOfferClick={handleOfferClick}
      />

      <Newsletter />
    </>
  );
}

export default SearchResult;
