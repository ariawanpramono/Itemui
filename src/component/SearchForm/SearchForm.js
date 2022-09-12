import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="container_s">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              >
              </input>
              <button type="submit" className="button_s">Cari</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
