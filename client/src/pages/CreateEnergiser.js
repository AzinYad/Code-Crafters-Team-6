import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import CreateEnergiserForm from "./components/CreateEnergiserForm.js";
import "./CreateEnergiser.css";

function CreateEnergiser(){
    return(
        <main className="main-page">
            <Navbar />
            <CreateEnergiserForm />
            <Footer />
        </main>
    );
}

export default CreateEnergiser;