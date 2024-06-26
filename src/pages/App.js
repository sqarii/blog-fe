import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [username, setUsername] = useState("");
    const [editId, setEditId] = useState(null);

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

    const getLoginStatus = (status) => {
        if (!status) setIsAdmin(false);
    };

    const getPostId = (id) => {
        // console.log(id);
        setEditId(id);
    };

    return (
        <div className="App">
            <Header getLoginStatus={getLoginStatus} />
            {isAdmin && <CreatePost editId={editId} />}
            <Posts getPostId={getPostId} />
        </div>
    );
};

export default App;
