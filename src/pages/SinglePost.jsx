import React from "react";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

const SinglePost = () => {
  return (
    <>
      <Header />
      <section className="singlepost">
        <section className="singlepost-wrap">
          <h1 className="singlepost-title">Example title</h1>
          <small className="singlepost-info">
            <span className="singlepost-author">Szymon Rutyna</span>
            <span className="dot"></span>
            <span className="singlepost-date">23-06-2024</span>
          </small>
          <img
            src="https://m.media-amazon.com/images/I/51z0O2QCHzL._AC_UF894,1000_QL80_.jpg"
            alt="pug"
            className="singlepost-image"
          />
          <section className="singlepost-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            iure ab nobis libero reprehenderit labore aliquid cum, dicta
            laudantium minima nesciunt earum repellendus et magnam hic amet fuga
            consequuntur quisquam.
          </section>
        </section>
        <section className="singlepost-nav">
          <button>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </section>
      </section>
    </>
  );
};

export default SinglePost;
