import React, { useState, useEffect } from "react";

const SingleEnergiser = (props) => {
  const [energiser, setEnergiser] = useState(null);
useEffect(() => {
    fetch(`/energizers/${props.id}`)
      .then((response) => response.json())
      .then((data) => setEnergiser(data));
  }, [props.id]);

  return (
    <div>
{energiser ? (
  <energiser
  imageUrl={energiser.imageUrl}
  name={energiser.name}
  description={energiser.description}
  howToRun={energiser.howToRun}
  onClick={() => console.log("Energised!")}
  />
) : (
<p>Loading... </p>
)}

    </div>
);
};

export default SingleEnergiser;
