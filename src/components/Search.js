import React from "react";

function Search({searchInput, setSearchInput}) {
  
  function handleChange(e){
    setSearchInput(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchInput} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
