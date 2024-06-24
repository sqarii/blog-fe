import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <Header />
      {isAdmin && <CreatePost />}
      <Posts />
    </div>
  );
}

export default App;
