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

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1/blog-be/api.php?resource=posts&id=${slug.id}`)
      .then(response => response.json())
      .then(res => setPost([res]))
      .catch(error => console.error("Błąd:", error));
  }, []);

  return (
    <>
                  
      <Header />
                  
      <section className="singlepost">
                        
        <section className="singlepost-wrap">
                              
          {post.length &&
            post.map(data => (
              <span key={data.id}>
                                                
                <h1 className="singlepost-title">
                                                      {data.title}
                                                  
                </h1>
                                                
                <small className="singlepost-info">
                                                      
                  <span className="singlepost-author">
                                                            {data.author_name}
                                                        
                  </span>
                                                      
                  <span className="dot"></span>
                                                      
                  <span className="singlepost-date">
                                                            {data.updated_at}
                                                        
                  </span>
                                                  
                </small>
                                                
                <img
                  src={data.image}
                  alt="image"
                  className="singlepost-image"
                />
                                                
                <section className="singlepost-content">
                                                      {data.content}
                                                  
                </section>
                                            
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
