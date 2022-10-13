import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {

  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="search">
              <input 
                type="text" 
                className="form-control" 
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <Link state={{
                searchKey: searchInput
              }} to={'/detail/itemsbycategory'} class="btn btn-sm btn-primary">Search</Link>
            </div>
            
          </div>
        </div>
      </div>
    </>

  );
};

export default SearchForm;
