// function SearchBar() {
//   return (
//     <div className="bg-light py-4">
//       <div className="container">
//         <h4 className="mb-3">Search for an offer</h4>

//         <div className="row g-2 align-items-center">
//           <div className="col-md">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search of location"
//             />
//           </div>

//           <div className="col-md">
//             <select className="form-select">
//               <option>Property type</option>
//               <option>Apartment</option>
//               <option>House</option>
//               <option>Villa</option>
//             </select>
//           </div>

//           <div className="col-md">
//             <select className="form-select">
//               <option>Bedrooms</option>
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4+</option>
//             </select>
//           </div>
       
//           <div className="col-md">
//             <select className="form-select">
//               <option>Select price</option>
//               <option>Below 300k</option>
//               <option>300k – 500k</option>
//               <option>500k+</option>
//             </select>
//           </div>
          

//           <div className="col-md-auto">
//             <button className="btn btn-success px-4">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;


import React from 'react';

function SearchBar() {
  return (
    <div className="bg-light py-4">
      <div className="container">
        <h4 className="mb-3">Search for an offer</h4>
        <div className="row g-2 align-items-end">
          <div className="col-md">
            <input
              type="text"
              className="form-control"
              placeholder="Search by location"
            />
          </div>
          <div className="col-md">
            <select className="form-select">
              <option>Property type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
          </div>
          <div className="col-md">
            <select className="form-select">
              <option>Bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          <div className="col-md">
            <select className="form-select">
              <option>Select price</option>
              <option>Below 300k</option>
              <option>300k – 500k</option>
              <option>500k+</option>
            </select>
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success px-4">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

