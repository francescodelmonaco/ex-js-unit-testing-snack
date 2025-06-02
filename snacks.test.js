const { getInitials } = require("./snacks.js");



// 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Francesco Delmonaco")).toBe("F D");
})