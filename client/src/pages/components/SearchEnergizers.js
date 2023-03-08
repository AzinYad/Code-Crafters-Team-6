import React, { useState } from "react";

function SearchEnergizers({ energizers }) {
  const [query, setQuery] = useState("");


  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const filteredEnergizers = energizers.filter(
    (energizer) => {
   const name = energizer.name.toLowerCase();//.includes(searchTerm.toLowerCase()) ||

     const description =  energizer.description.toLowerCase();
     const includesSearchTerm = name.includes(query.toLocaleLowerCase()) || description.includes(query.toLocaleLowerCase());


     return includesSearchTerm;

    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search energisers by name or description"
        value={query}
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