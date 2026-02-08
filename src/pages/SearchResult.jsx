import React from "react";
import SearchBar from "../components/Search";
import OffersGrid from "../components/OffersGrid";
import Newsletter from "../components/Newsletter";
import "../styles/responsive.scss";

function SearchResult() {
  return (
    <>
      <SearchBar />
      <OffersGrid />
      <Newsletter />
    </>
  );
}

export default SearchResult;
