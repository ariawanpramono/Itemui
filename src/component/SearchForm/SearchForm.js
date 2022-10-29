import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {

  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <input 
                type="text" 
                className="form-control" 
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <button className="btn btn-sm btn-primary">
              <Link state={{
                searchKey: searchInput
              }} to={'/detail/itemsbycategory'}>Search</Link>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>

  );
};

export default SearchForm;
