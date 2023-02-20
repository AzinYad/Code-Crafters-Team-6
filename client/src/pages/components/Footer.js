import React from "react";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
    return (
        <footer className="footer">
            <section className="sec1-footer">
                <p>Contact Us</p>
                <p>email:</p>
            </section>
            <section className="sec2-footer">Join Us On Social Media
                <div className="social-media">
                    <SiYoutubemusic className="youtube social-media-logo" />
                    <FaInstagramSquare className="instagram social-media-logo" />
                    <FaFacebook className="facebook social-media-logo" />
                    <AiFillTwitterCircle className="twitter social-media-logo" />
                </div>
            </section>
            <section className="sec3-footer"> Our location
                <p>Birmingham</p>
            </section>
        </footer>
    );
}

export default Footer;