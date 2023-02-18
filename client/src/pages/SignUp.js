import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import G from "./logo/google.svg";
import F from "./logo/facebook.svg";
import A from "./logo/apple.svg";
import { Link } from "react-router-dom";

import "./Login.css";

function CreateEnergiser() {
    return (
        <main className="main-page">
            <Navbar />
            <form className="login-form">
                <h1>Sign Up</h1>
                <h3>Already have an account?<span><Link to="/login">Log in</Link></span></h3>
                <section className="columns-wrapper">
                    <section className="column1">
                        <div className="divider d1">
                            <input
                                className="login-input"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                className="login-input"
                                type="email"
                                placeholder="Confirm your email"
                                name="confirm email"
                            />
                        </div>
                        <p className="or">or</p>
                        <div className="divider d2">
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Confirm password"
                                name="confirm password"
                            />
                        </div>
                    </section>
                    <section className="column2">
                        <button className="btn signin-btn">
                            <img className="icon" src={G} alt="google icon" />
                            <p>Continue With Google</p>
                        </button>
                        <button className="btn signin-btn">
                            <img className="icon" src={F} alt="google icon" />
                            <p>Continue With Facebook</p>
                        </button>
                        <button className="btn signin-btn">
                            <img className="icon" src={A} alt="google icon" />
                            <p>Continue With Apple</p>
                        </button>
                    </section>
                </section>
                <div className="btn-wrapper"><button className="sign-in-btn">Sign up</button></div>
            </form>
            <Footer />
        </main>
    );
}

export default CreateEnergiser;