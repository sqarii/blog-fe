// Importowanie potrzebnych funkcji i komponentów z bibliotek React i React Router
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importowanie komponentu FontAwesomeIcon
import {
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleLeft,
} from "@fortawesome/free-solid-svg-icons"; // Importowanie ikon z Font Awesome
import { useParams, Link, useNavigate } from "react-router-dom"; // Importowanie funkcji i komponentów z React Router

// Definiowanie komponentu SinglePost
const SinglePost = () => {
    const slug = useParams(); // Pobieranie parametrów z URL, np. ID posta
    const navigate = useNavigate(); // Funkcja do nawigacji w aplikacji

    const [post, setPost] = useState([]); // Definiowanie stanu dla posta, początkowo pusta tablica

    // Efekt boczny do pobierania danych posta z API
    useEffect(() => {
        fetch(
            `https://jasowiczblog.000webhostapp.com/api.php?resource=posts&id=${slug.id}`
        )
            .then((response) => response.json()) // Konwersja odpowiedzi z serwera do formatu JSON
            .then((res) => setPost([res])) // Ustawienie stanu posta
            .catch((error) => console.error("Błąd:", error)); // Obsługa błędów
    }, []);

    // Renderowanie komponentu
    return (
        <>
            <section className="singlepost">
                <section className="singlepost-wrap">
                    <button
                        className="
                    login-btn prev-btn"
                        onClick={() => navigate("/")}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />{" "}
                        {/* Ikona strzałki w lewo */}
                    </button>
                    {post.length &&
                        post.map((data) => (
                            <span key={data.id}>
                                <h1 className="singlepost-title">
                                    {data.title}{" "}
                                    {/* Wyświetlanie tytułu posta */}
                                </h1>
                                <small className="singlepost-info">
                                    <span className="singlepost-author">
                                        autor: {data.author_name}{" "}
                                        {/* Wyświetlanie autora posta */}
                                    </span>
                                    <span className="dot"></span>
                                    <span className="singlepost-date">
                                        {data.updated_at}{" "}
                                        {/* Wyświetlanie daty aktualizacji posta */}
                                    </span>
                                </small>
                                <img
                                    src={data.image}
                                    alt="image"
                                    className="singlepost-image"
                                />{" "}
                                {/* Wyświetlanie obrazu posta */}
                                <section className="singlepost-content">
                                    {data.content}{" "}
                                    {/* Wyświetlanie treści posta */}
                                </section>
                            </span>
                        ))}
                </section>
                <section className="singlepost-nav">
                    <button
                        onClick={() => {
                            console.log(slug.id); // Wyświetlanie ID posta w konsoli
                            let newSlug = parseInt(slug.id) - 1; // Przejście do poprzedniego posta
                            navigate(`/post/${newSlug}`);
                            window.location.reload(); // Przeładowanie strony
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />{" "}
                        {/* Ikona podwójnej strzałki w lewo */}
                    </button>
                    <button
                        onClick={() => {
                            console.log(slug.id); // Wyświetlanie ID posta w konsoli
                            let newSlug = parseInt(slug.id) + 1; // Przejście do następnego posta
                            navigate(`/post/${newSlug}`);
                            window.location.reload(); // Przeładowanie strony
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                        {/* Ikona podwójnej strzałki w prawo */}
                    </button>
                </section>
            </section>
        </>
    );
};

// Eksportowanie komponentu SinglePost, aby mógł być używany w innych częściach aplikacji
export default SinglePost;
