import React, { useState } from "react";

function SearchEnergizers({ energizers }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEnergizers = energizers.filter(
    (energizer) => {
   const name = energizer.name.toLowerCase();//.includes(searchTerm.toLowerCase()) ||

     const description =  energizer.description.toLowerCase();
     const includesSearchTerm = name.includes(searchTerm.toLocaleLowerCase()) || description.includes(searchTerm.toLocaleLowerCase());


     return includesSearchTerm;
     //.includes(searchTerm.toLowerCase())
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search energisers by name or description"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredEnergizers.map((energizer) => (
          <li key={energizer.id}>
              <h3>{energizer.name}</h3>
              <p>{energizer.description}</p>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchEnergizers;