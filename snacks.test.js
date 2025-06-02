const {
    getInitials,
    createSlug,
    average,
    createNewSlug
} = require("./snacks.js");

const numbers = [1, 3, 7, 9, 5];

// 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Francesco Delmonaco")).toBe("F D");
})

// 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("RESTITUISCO UNA STRINGA IN LOWERCASE")).toBe("restituisco una stringa in lowercase");
});

// 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average(numbers)).toBe(5);
});

// 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createNewSlug("Frase dove verranno sostituiti gli spazi con i trattini")).toBe("Frase-dove-verranno-sostituiti-gli-spazi-con-i-trattini")
})