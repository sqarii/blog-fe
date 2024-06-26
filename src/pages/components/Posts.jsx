// Importowanie potrzebnych funkcji z biblioteki React oraz innych modułów
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importowanie komponentu Link do nawigacji
import { faPen } from "@fortawesome/free-solid-svg-icons"; // Importowanie ikony pióra
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importowanie komponentu FontAwesomeIcon

// Definiowanie komponentu Posts
const Posts = (props) => {
    const [posts, setPosts] = useState([]); // Definiowanie stanu dla postów, początkowo pusta tablica
    const [isAdmin, setIsAdmin] = useState(false); // Definiowanie stanu dla sprawdzenia, czy użytkownik jest administratorem

    // Efekt boczny do sprawdzania roli użytkownika
    useEffect(() => {
        // Funkcja do pobierania wartości cookie
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
        };

        const role = getCookie("role"); // Pobieranie roli użytkownika z cookie

        console.log(role);
        if (role === "admin") {
            setIsAdmin(true); // Ustawianie stanu na true, jeśli użytkownik jest administratorem
        } else {
            setIsAdmin(false); // Ustawianie stanu na false, jeśli użytkownik nie jest administratorem
        }
    }, [sessionStorage.getItem("role")]); // Efekt boczny jest wykonywany, gdy zmieni się rola w sessionStorage

    // Efekt boczny do pobierania wszystkich postów
    useEffect(() => {
        console.log("get all posts");
        fetch("https://jasowiczblog.000webhostapp.com/api.php?resource=posts") // Wysyłanie żądania do API
            .then((response) => response.json()) // Konwersja odpowiedzi z serwera do formatu JSON
            .then((res) => {
                console.log(res);
                setPosts(res); // Ustawienie stanu postów
                console.log(posts);
            })
            .catch((error) => console.error("Błąd:", error)); // Obsługa błędów
    }, []); // Efekt boczny jest wykonywany tylko raz, po załadowaniu komponentu

    // Funkcja do edytowania posta (obecnie nie używana)
    const editPost = (id) => {
        props.getPostId(id); // Wywołanie funkcji przekazanej w propsach
    };

    // Renderowanie komponentu
    return (
        <div className="post-wrap">
            <div className="posts">
                {posts.length > 0 && // Sprawdzanie, czy są jakieś posty
                    posts.map(
                        (
                            post,
                            i // Iterowanie przez tablicę postów
                        ) => (
                            <div key={post.id} className={`post`}>
                                <img src={post.image} alt={post.title} />{" "}
                                {/* Wyświetlanie obrazu posta */}
                                <section className="post-cont">
                                    <h2>{post.title}</h2>{" "}
                                    {/* Wyświetlanie tytułu posta */}
                                    <p>{post.content}</p>{" "}
                                    {/* Wyświetlanie treści posta */}
                                    <span>
                                        <Link to={`/post/${post.id}`}>
                                            Czytaj dalej{" "}
                                            {/* Link do pełnej treści posta */}
                                        </Link>
                                        {isAdmin && ( // Sprawdzanie, czy użytkownik jest administratorem
                                            <button
                                                className="edit-btn"
                                                onClick={() => {
                                                    editPost(post.id); // Wywołanie funkcji edytowania posta
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPen} />{" "}
                                                {/* Ikona edytowania */}
                                            </button>
                                        )}
                                    </span>
                                </section>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

// Eksportowanie komponentu Posts, aby mógł być używany w innych częściach aplikacji
export default Posts;

// funkcja odpowiadaja za usuwanie postow
// const deletePost = (id, event) => {
//     console.log(id);
//     fetch(
//         `https://jasowiczblog.000webhostapp.com/api.php?resource=posts&id=${id}`,
//         {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }
//     )
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data.message);
//         })
//         .catch((error) =>
//             console.error("Błąd podczas usuwania posta:", error)
//         );
//     // window.location.reload();
// };
