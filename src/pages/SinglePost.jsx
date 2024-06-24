import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, Link, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const slug = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState([
    {
      author_id: 1,
      author_name: "sqari",
      content: "aiusiufgiu aigfiugaiufgiuag aisufaiufg",
      created_at: "2024-06-24 00:25:31",
      id: 3,
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--dbm8BrWp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5e8otrwlfo71smasf6pz.png",
      title: "title 3 title",
      updated_at: "2024-06-24 00:25:31",
    },
  ]);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1/blog-be/api.php?resource=posts&id=${slug.id}`)
  //     .then(response => response.json())
  //     .then(res => setPost([res]))
  //     .catch(error => console.error("Błąd:", error));
  // }, []);

  return (
    <>
      <Header />
      <section className="singlepost">
        <section className="singlepost-wrap">
          {post.length &&
            post.map(data => (
              <span key={data.id}>
                <h1 className="singlepost-title">{data.title}</h1>
                <small className="singlepost-info">
                  <span className="singlepost-author">
                    autor: {data.author_name}
                  </span>
                  <span className="dot"></span>
                  <span className="singlepost-date">{data.updated_at}</span>
                </small>
                <img
                  src={data.image}
                  alt="image"
                  className="singlepost-image"
                />
                <section className="singlepost-content">{data.content}</section>
              </span>
            ))}
        </section>
        <section className="singlepost-nav">
          <button
            onClick={() => {
              console.log(slug.id);
              let newSlug = parseInt(slug.id) - 1;
              navigate(`/post/${newSlug}`);
              window.location.reload();
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <button
            onClick={() => {
              console.log(slug.id);
              let newSlug = parseInt(slug.id) + 1;
              navigate(`/post/${newSlug}`);
              window.location.reload();
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </section>
      </section>
    </>
  );
};

export default SinglePost;
