// Importowanie potrzebnych funkcji z biblioteki React
import React, { useEffect, useState } from "react";

// Definiowanie komponentu CreatePost, który przyjmuje właściwości (props)
const CreatePost = (props) => {
    // Definiowanie stanu komponentu, który będzie przechowywał dane nowego posta
    const [newPost, setNewPost] = useState({
        title: "", // Tytuł posta
        content: "", // Treść posta
        image: "", // URL obrazu do posta
        author_id: sessionStorage.getItem("user_id") || "", // ID autora pobrane z sessionStorage
    });

    // Funkcja obsługująca zmianę wartości w polach formularza
    const handleChange = (e) => {
        const { name, value } = e.target; // Pobranie nazwy i wartości zmienianego pola
        setNewPost({
            ...newPost, // Rozpakowanie obecnego stanu (skopiowanie wszystkich właściwości)
            [name]: value, // Zaktualizowanie konkretnej właściwości nową wartością
        });
    };

    // Funkcja do tworzenia lub aktualizowania posta po wysłaniu formularza
    const createPostData = (e) => {
        e.preventDefault(); // Zapobiega domyślnej akcji przeglądarki, czyli przeładowaniu strony

        // Ustalanie URL na podstawie tego, czy edytujemy post
        const url = props.editId
            ? `https://jasowiczblog.000webhostapp.com/api.php?resource=posts&id=${props.editId}`
            : `https://jasowiczblog.000webhostapp.com/api.php?resource=posts`;

        // Ustalanie metody HTTP (PUT dla aktualizacji, POST dla tworzenia)
        const method = props.editId ? "PUT" : "POST";

        // Wysłanie żądania do API z odpowiednimi danymi
        fetch(url, {
            method: method, // Używana metoda HTTP
            headers: {
                "Content-Type": "application/json", // Nagłówek informujący o typie danych
            },
            body: JSON.stringify(newPost), // Konwersja danych nowego posta do formatu JSON
        })
            .then((response) => response.json()) // Konwersja odpowiedzi z serwera do formatu JSON
            .then((res) => {
                console.log("Post successfully saved:", res); // Logowanie wyniku
                // Tutaj możemy dodać dodatkową logikę po zapisaniu posta, np. przekierowanie
            })
            .catch((error) => console.error("Error:", error)); // Obsługa błędów
    };

    // Efekt boczny, który pobiera dane posta do edycji, jeśli jest dostępne editId
    useEffect(() => {
        if (props.editId) {
            fetch(
                `https://jasowiczblog.000webhostapp.com/api.php?resource=posts&id=${props.editId}`
            )
                .then((response) => response.json()) // Konwersja odpowiedzi z serwera do formatu JSON
                .then((res) => {
                    setNewPost({
                        title: res.title, // Ustawienie tytułu pobranego posta
                        content: res.content, // Ustawienie treści pobranego posta
                        image: res.image, // Ustawienie URL obrazu pobranego posta
                        author_id: res.author_id, // Ustawienie ID autora pobranego posta
                    });
                })
                .catch((error) => console.error("Błąd:", error)); // Obsługa błędów
        }
    }, [props.editId]); // Efekt boczy czyli troche bradziej zaawansowana petla wykona sie tylko gdy props.editId ulegnie zmianie

    // Renderowanie formularza do tworzenia lub edycji posta
    return (
        <div className="create">
            <h2>Create Post</h2> {/* Nagłówek formularza */}
            <form id="postForm" onSubmit={createPostData}>
                <input
                    type="text" // Typ pola input to tekst
                    id="title" // Unikalny identyfikator pola
                    name="title" // Nazwa pola, używana w handleChange
                    placeholder="Title" // Tekst widoczny, gdy pole jest puste
                    value={newPost.title} // Aktualna wartość pola, pobierana ze stanu
                    onChange={handleChange} // Funkcja wywoływana przy zmianie wartości pola
                    required // Pole jest wymagane
                />
                <textarea
                    id="content" // Unikalny identyfikator pola
                    name="content" // Nazwa pola, używana w handleChange
                    placeholder="Content" // Tekst widoczny, gdy pole jest puste
                    value={newPost.content} // Aktualna wartość pola, pobierana ze stanu
                    onChange={handleChange} // Funkcja wywoływana przy zmianie wartości pola
                    required // Pole jest wymagane
                ></textarea>
                <input
                    type="text" // Typ pola input to tekst
                    id="image" // Unikalny identyfikator pola
                    name="image" // Nazwa pola, używana w handleChange
                    placeholder="Image URL" // Tekst widoczny, gdy pole jest puste
                    value={newPost.image} // Aktualna wartość pola, pobierana ze stanu
                    onChange={handleChange} // Funkcja wywoływana przy zmianie wartości pola
                />
                <button className="submit-post" type="submit">
                    {props.editId ? "Update Post" : "Create Post"}{" "}
                    {/* Tekst przycisku zależny od trybu */}
                </button>
            </form>
        </div>
    );
};

// Eksportowanie komponentu CreatePost, aby mógł być używany w innych częściach aplikacji
export default CreatePost;
