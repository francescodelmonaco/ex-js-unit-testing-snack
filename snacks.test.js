const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require("./snacks.js");

const numbers = [1, 3, 7, 9, 5];

const posts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        slug: "introduzione-a-javascript"
    },
    {
        id: 2,
        title: "Guida a React",
        slug: "guida-a-react"
    },
    {
        id: 3,
        title: "Come funziona il DOM",
        slug: "come-funziona-il-dom"
    },
    {
        id: 4,
        title: "Async/Await in JavaScript",
        slug: "async-await-in-javascript"
    },
    {
        id: 5,
        title: "CSS Grid vs Flexbox",
        slug: "css-grid-vs-flexbox"
    }
];

// 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Francesco Delmonaco")).toBe("F D");
})

// 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("RESTITUISCO UNA STRINGA IN LOWERCASE")).toBe("restituisco-una-stringa-in-lowercase");
});

// 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average(numbers)).toBe(5);
});

// 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Frase dove verranno sostituiti gli spazi con i trattini")).toBe("frase-dove-verranno-sostituiti-gli-spazi-con-i-trattini")
});

// 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Tenet")).toBeTruthy();
    expect(isPalindrome("Stringa")).toBeFalsy();
});

// 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido");
    expect(() => createSlug(null)).toThrow("Titolo non valido");
});

// 7
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Guida a React", slug: "guida-a-react" });
    expect(findPostById(posts, 6)).toBe(null);
    expect(() => findPostById(posts, "text")).toThrow("text non è un id");
    expect(() => findPostById([10, 20], 2)).toThrow("L'array non è nel formato corretto");
});