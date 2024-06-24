import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
        };

        const role = getCookie("role");
        const username = getCookie("username");

        if (role === "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }

        if (username) {
            setUsername(username);
        }

        console.log("Role:", role);
        console.log("Username:", username);
    }, []);

    return (
        <div className="App">
            <Header />
            {isAdmin && <CreatePost />}
            <Posts />
        </div>
    );
}

export default App;
