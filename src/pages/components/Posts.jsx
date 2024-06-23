import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("get all posts");
    fetch("http://127.0.0.1/blog-be/api.php?resource=posts")
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setPosts(res);
        console.log(posts);
      })
      .catch(error => console.error("Błąd:", error));
  }, []);

  return (
    <div className="posts">
      {posts.length > 0 &&
        posts.map((post, i) => (
          <div key={post.id} className={`post`}>
            <img src={post.image} alt={post.title} />

            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/post/${post.id}`}>Czytaj dalej</Link>
          </div>
        ))}
    </div>
  );
}

export default Posts;
