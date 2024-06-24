import React, { useState, useContext, useEffect } from "react";
import { Form } from "react-router-dom";
import HeaderForm from "./HeaderForm";

function Header() {
    return (
        <header className="nav-links">
            <ul>
                <li>
                    <a href="#">BLOG</a>
                </li>
                <li>
                    <a href="#">O MNIE</a>
                </li>
                <li>
                    <a href="#">KONTAKT</a>
                </li>
            </ul>
            <h2>Blog</h2>
            <HeaderForm />
        </header>
    );
}

export default Header;
