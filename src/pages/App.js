import Header from "./components/Header";
import Main from "./components/Main";
import "../index";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default App;
