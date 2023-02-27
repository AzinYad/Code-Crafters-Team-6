import React, { useState } from "react";

const SearchEnergizers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [energizers, setSearchEnergizers] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };




  const filteredEnergizers = energizers.filter((energizer) => {
    const name = energizer.name.toLowerCase();
    const description = energizer.description.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return name.includes(searchTermLower) || description.includes(searchTermLower);
  });

  return (
    <div>
      <input type="text" placeholder="Search energizers" onChange={handleSearch} />
      {filteredEnergizers.map((energizer) => (
        <div key={energizer.name}>
          <h3>{energizer.name}</h3>
          <p>{energizer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchEnergizers;