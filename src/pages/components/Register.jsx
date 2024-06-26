// Importowanie funkcji useState z biblioteki React
import { useState } from "react";

// Definiowanie komponentu Register
function Register() {
    // Definiowanie stanu dla aktywności rejestracji, początkowo ustawionego na false
    const [activeRegister, setIsActiveRegister] = useState(false);

    // Funkcja obsługująca rejestrację użytkownika
    const register = (event) => {
        console.log("register"); // Wypisywanie do konsoli, że funkcja rejestracji została wywołana
        event.preventDefault(); // Zapobieganie domyślnej akcji formularza, czyli przeładowaniu strony
        const data = {
            username: document.getElementById("username").value, // Pobieranie wartości z pola username
            password: document.getElementById("password").value, // Pobieranie wartości z pola password
            email: document.getElementById("email").value, // Pobieranie wartości z pola email
        };
        // Wysłanie żądania do API w celu zarejestrowania użytkownika
        fetch(
            "https://jasowiczblog.000webhostapp.com/api.php?resource=users&action=register",
            {
                method: "POST", // Metoda HTTP POST
                headers: {
                    "Content-Type": "application/json", // Nagłówek informujący o typie danych
                    "Content-Type":
                        "application/x-www-form-urlencoded; charset=UTF-8", // Nagłówek z typem treści
                },
                body: JSON.stringify(data), // Konwersja danych do formatu JSON
            }
        )
            .then((response) => response.json()) // Konwersja odpowiedzi z serwera do formatu JSON
            .then((data) => alert(data.message)) // Wyświetlenie wiadomości z odpowiedzi serwera
            .catch((error) => console.error("Error:", error)); // Obsługa błędów
    };

    // Funkcja do przełączania stanu aktywności rejestracji
    const handleRegister = () => {
        setIsActiveRegister(!activeRegister); // Przełączanie wartości stanu
    };

    // Renderowanie komponentu
    return (
        <div className="form">
            <div className="login form-cont">
                <form id="form" onSubmit={register}>
                    <section className="form-wrap">
                        <input
                            type="text" // Typ pola input to tekst
                            id="username" // Unikalny identyfikator pola
                            placeholder="Username" // Tekst widoczny, gdy pole jest puste
                            required // Pole jest wymagane
                        />
                        <input
                            type="password" // Typ pola input to hasło
                            id="password" // Unikalny identyfikator pola
                            placeholder="Password" // Tekst widoczny, gdy pole jest puste
                            required // Pole jest wymagane
                        />
                    </section>
                    <input
                        type="email" // Typ pola input to email
                        id="email" // Unikalny identyfikator pola
                        placeholder="Email" // Tekst widoczny, gdy pole jest puste
                        required // Pole jest wymagane
                    />
                    <button className="login-btn" type="submit">
                        Register {/* Tekst na przycisku */}
                    </button>
                </form>
            </div>
        </div>
    );
}

// Eksportowanie komponentu Register, aby mógł być używany w innych częściach aplikacji
export default Register;
