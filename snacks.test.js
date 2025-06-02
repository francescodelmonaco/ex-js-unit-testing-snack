const {
    getInitials,
    createSlug
} = require("./snacks.js");

// 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Francesco Delmonaco")).toBe("F D");
})

// 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("RESTITUISCO UNA STRINGA IN LOWERCASE")).toBe("restituisco una stringa in lowercase")
});