function SearchBar({
  keyword,
  setKeyword,
  location,
  setLocation
}) {

  return (

    <div className="search-bar">

      <input
        type="text"
        className="search-input"
        placeholder="Search job title, company or location..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
      />


      <select
        className="location-input"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      >

        <option value="">
          All Locations
        </option>

        <option value="Coimbatore">
          Coimbatore
        </option>

        <option value="Chennai">
          Chennai
        </option>

        <option value="Bangalore">
          Bangalore
        </option>

      </select>


      <button
        className="search-button"
        type="button"
      >
        Search
      </button>

    </div>
  );
}


export default SearchBar;