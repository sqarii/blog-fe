import React, { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Form() {
    // zmienna odpowiadaja za wyswietlanie odpowiedniego formularza
    const [toggled, setToggled] = useState(false);

    return (
        <section className="forms">
            <section className="forms-wrap">
                <p className="forms-text">Login</p>
                {/* przycisk zmieniajacy stan toggled na przeciwny do aktualnego stanu */}
                <button
                    className={`toggle-btn ${toggled ? "toggled" : ""}`}
                    onClick={() => setToggled(!toggled)}
                >
                    <div className="thumb"></div>
                </button>
                <p className="forms-text">Sing up</p>
            </section>

            {/* renderowanie kondycyjne - jesli TRUE wystietla sie formularz REGISTER, jesli FALSE formularz LOGIN */}
            {toggled ? <Register /> : <Login />}
        </section>
    );
}

export default Form;
