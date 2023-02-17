
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import EnergisersCard from "./components/EnergisersCard.js";
import "./Energisers.css";
import NumberOfPages from "./components/NumberOfPages";

function Energisers() {
    return (
        <main className="main-page">
            <Navbar />
            <section className="card-sec">
                <EnergisersCard /><EnergisersCard /><EnergisersCard /><EnergisersCard />
                <EnergisersCard /><EnergisersCard /><EnergisersCard /><EnergisersCard />
                <EnergisersCard /><EnergisersCard /><EnergisersCard /><EnergisersCard />
                <EnergisersCard /><EnergisersCard /><EnergisersCard /><EnergisersCard />
            </section>
            <NumberOfPages />
            <Footer />
        </main>
    );
}

export default Energisers;