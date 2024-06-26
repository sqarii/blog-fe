import React, { useState, useContext, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import HeaderForm from "./HeaderForm";

const Header = (props) => {
    // zmienna przechowujaca informacje czy uztkownik jest zalogowany
    const [isLogged, setIsLogged] = useState(false);

    // zmiana wartosci zmiennej isLogged zaleznie od wartosci przechowywanej w sessionStorage (user_id)
    useEffect(() => {
        sessionStorage.getItem("user_id")
            ? setIsLogged(true)
            : setIsLogged(false);
    }, [sessionStorage.getItem("user_id")]);

    // funkcja wylogowujaca uzytkownika usuwa wszyskie cookies oraz informacje w sessionStorage
    const signOut = () => {
        // usuniecie cookies
        document.cookie.split(";").forEach((cookie) => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

            // usuniecie sessionStorage
            sessionStorage.removeItem("user_id");

            setIsLogged(false);

            // przekazanie funkcji logout do backend
            fetch(
                "https://jasowiczblog.000webhostapp.com/api.php?resource=users&action=logout",
                {
                    method: "POST", // Metoda POST, aby wywołać akcję wylogowania
                    headers: {
                        "Content-Type": "application/json",
                        "Content-Type":
                            "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error("Error:", error));

            // przekazanie aktualnego statusu o logowaniu do pliku APP.js
            props.getLoginStatus(false);
        });
    };

    return (
        <header className="nav-links">
            <Link to="/">
                <h2>Blog</h2>
            </Link>
            {/* renderowanie kondycyjne - jesli TRUE wystietla sie przycisk z przypisana funkcja SIGNOUT, jesli FALSE to wyswietla komponent HEADERFORM zawierajacy Login i Register */}
            {isLogged ? (
                <button className="login-btn singout-btn" onClick={signOut}>
                    Sign out
                </button>
            ) : (
                <HeaderForm />
            )}
        </header>
    );
};

export default Header;
