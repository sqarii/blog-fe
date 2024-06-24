import React, { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Form() {
    return (
        <div className="forms">
            <Register />

            <Login />
        </div>
    );
}

export default Form;
