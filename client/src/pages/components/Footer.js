import React from "react";
// import { useEffect, useState } from "react";
import Utube from "../logo/youtube.png";
import Instagram from "../logo/instagram.png";
import Facebook from "../logo/facebook.png";
import Twitter from "../logo/twitter.png";
// import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <section className="sec1-footer">
            <p>email:</p>
            <p>phone:</p>
            </section>
            <section className="sec2-footer">Join Us On Social Media
                <div className="social-media">
                    <img className="youtube social-media-logo" src={Utube} alt="Youtube logo" />
                    <img className="instagram social-media-logo" src={Instagram} alt="Instagram logo" />
                    <img className="facebook social-media-logo" src={Facebook} alt="Facebook logo" />
                    <img className="twitter social-media-logo" src={Twitter} alt="Twitter logo" />
                </div>
            </section>
            <section className="sec3-footer"> Our location
            <p>Birmingham</p>
            </section>
        </footer>
    );
}

export default Footer;