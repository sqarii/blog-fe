import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

const App = () => {
  // stan ktory zarządza tym czy uzytkownik jest administratorem
  const [isAdmin, setIsAdmin] = useState(false);
  //   stan przechowywujacy nazwe uzytkownika
  const [username, setUsername] = useState("");
  //   stan zarzadzajcy postem z id ktory ma byc edytowany
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // funkcja pobierająca wartości cookies po jego nazwie
    const getCookie = name => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };
    // pobieranie roli uzytkownika z cookies
    const role = getCookie("role");
    // pobieranie nazwy uzytkownika z cookies
    const username = getCookie("username");

    // ustawienie stanu isAdmin na podstawie roli uzytkwonika
    if (role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    // ustawienie nazwy uzytkownika na podtawie cookies
    if (username) {
      setUsername(username);
    }

    console.log("Role:", role);
    console.log("Username:", username);
  }, []);

  const getLoginStatus = status => {
    if (!status) setIsAdmin(false);
  };

  //   Funkcja do ustawiania ID posta do edycji
  const getPostId = id => {
    // console.log(id);
    setEditId(id);
  };

  return (
    <div className="App">
      {/* {Komponent naglowka, przkazujacy funkcje getLoginStatus} */}
      <Header getLoginStatus={getLoginStatus} />
      {/* Komponent tworzenia posta, widoczny tylko dla administratora */}
      {isAdmin && <CreatePost editId={editId} />}
      {/* Komponenet wyświetlający posty przekazuje funkcje getPostId */}
      <Posts getPostId={getPostId} />
    </div>
  );
};

export default App;
