// Importowanie potrzebnych funkcji i komponentów z biblioteki React
import React, { useEffect, useState } from "react";

// Definiowanie komponentu CreatePost, który przyjmuje props jako argument
const CreatePost = (props) => {
    // Używanie hooka useState do zarządzania stanem nowego posta
    const [newPost, setNewPost] = useState({
        title: "", // Tytuł posta
        content: "", // Treść posta
        image: "", // URL obrazka
        author_id: sessionStorage.getItem("user_id") || "", // ID autora pobierane z sessionStorage lub pusty string
    });

    // Funkcja obsługująca zmiany w polach formularza
    const handleChange = (e) => {
        const { name, value } = e.target; // Pobieranie nazwy i wartości zmienianego pola
        setNewPost({
            ...newPost, // Kopiowanie istniejącego stanu
            [name]: value, // Aktualizowanie odpowiedniego pola
        });
    };

    // Funkcja obsługująca wysyłanie formularza
    const createPostData = (e) => {
        e.preventDefault(); // Zapobieganie domyślnej akcji formularza

        // Wysyłanie danych posta do API
        fetch("https://jasowiczblog.000webhostapp.com/api.php?resource=posts", {
            method: "POST", // Metoda HTTP POST
            headers: {
                "Content-Type": "application/json", // Nagłówek informujący o formacie JSON
                "Content-Type":
                    "application/x-www-form-urlencoded; charset=UTF-8", // Nagłówek informujący o formacie URL-encoded
            },
            body: JSON.stringify(newPost), // Konwertowanie danych posta do formatu JSON
        })
            .then((response) => response.json()) // Konwersja odpowiedzi do formatu JSON
            .then((data) => {
                alert(data.message); // Wyświetlanie komunikatu z odpowiedzi API
                window.location.reload(); // Przeładowanie strony
            })
            .catch((error) => console.error("Error:", error)); // Obsługa błędów
    };

    // Renderowanie komponentu
    return (
        <div className="create">
            <h2>Create Post</h2> {/* Nagłówek */}
            <form id="postForm" onSubmit={createPostData}>
                {" "}
                {/* Formularz */}
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    id="content"
                    name="content"
                    placeholder="Content"
                    value={newPost.content}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Image URL"
                    value={newPost.image}
                    onChange={handleChange}
                />
                <button className="submit-post" type="submit">
                    Create Post
                    {/* Przycisk do wysyłania formularza */}
                </button>
            </form>
        </div>
    );
};

// Eksportowanie komponentu CreatePost, aby mógł być używany w innych częściach aplikacji
export default CreatePost;
