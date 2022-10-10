import "./SearchForm.css";

const SearchForm = () => {
  return (
    <>
      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="search">
              <input type="text" class="form-control"></input>
              <button class="btn btn-sm btn-primary">Search</button>
            </div>
            
          </div>
        </div>
      </div>
    </>

  );
};

export default SearchForm;
