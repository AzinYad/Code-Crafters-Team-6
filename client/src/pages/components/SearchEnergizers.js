import React, { useState } from "react";


function SearchEnergizers({ energizers }) {
  const [ setSearchTerm ] = useState("");
  const [filteredEnergizers, setFilteredEnergizers] = useState(energizers);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    const filtered = energizers.filter((energizer) =>
      energizer.name.toLowerCase().includes(term) ||
      energizer.description.toLowerCase().includes(term)
    );
    setFilteredEnergizers(filtered);
    setSearchTerm(term);
  };

  return (
    <div>
      <input type="text" placeholder="Search energizers" onChange={handleSearch} />
      {filteredEnergizers.map((energizer) => (
        <div key={energizer.name}>
          <h2>{energizer.name}</h2>
          <p>{energizer.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchEnergizers;