import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./CreateEnergiser.css";


 const CreateEnergiser = () =>{
const [addingEnergiser, setAddingEnergiser] = useState(false);
//const [energiserData, setEneriserData] = useState(null);

const [energisername, setEnergiserName] = useState("");
const [enrgiserdescription, setEnergiserDescription] = useState("");


const handleEnergiserAdder = (e) => {
    e.preventDefault();


        let energizer = {
      name: energisername,
      description: enrgiserdescription,
    };

     fetch("/api/energizers",{
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(energizer),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          }).
          catch((error)=> {
        console.log(error.message);
    });
    //setEneriserData([...energiserData, energiser ]);
    setEnergiserName("");
    setEnergiserDescription("");
};


return (
  <main className="main-page">
    <Navbar />
      <form className="create-form">
          <section className="flex-sec fullname">
              <label htmlFor="fullname">Creator’s Name :</label>
              <input
              onChange={(e) => setEnergiserName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  name="energisername"
              />
          </section>
          <section className="flex-sec url-input">
              <label htmlFor="url-input">Insert a URL:</label>
              <input
                  type="text"
                  placeholder="Insert a URL"
                  name="urlInput"
              />
          </section>
          <section className="flex-sec description">
              <label htmlFor="description">Energiser Description:</label>
              <textarea
              onChange={(e) => setEnergiserDescription(e.target.value)}
                  placeholder="Add some description about this energiser..."
                  name="enrgiserdescription"
              />
          </section>
          <button onClick={handleEnergiserAdder}
            type="submit">
            Submit
          </button>
          <button
            onClick={() => setAddingEnergiser(!addingEnergiser)}
            type="cancel">
            Cancel
          </button>
      </form>
      <Footer />
  </main>
);
};




 export default CreateEnergiser;







