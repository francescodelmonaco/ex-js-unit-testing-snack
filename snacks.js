// 1
function getInitials(fullName) {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0).toUpperCase()} ${surname.charAt(0).toUpperCase()}`;
};

// 2 // 4 // 6
function createSlug(string) {
    if (!string) {
        throw new Error("Titolo non valido");
    };

    return string.toLowerCase().replaceAll(" ", "-");
};

// 3
function average(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};

// 5
function isPalindrome(string) {
    const lowercaseString = string.trim().toLowerCase();
    const revString = lowercaseString.split("").reverse().join("");

    return lowercaseString === revString;
};

// 7
function findPostById(array, id) {
    if (isNaN(id)) {
        throw new Error(`${id} non è un id`);
    };

    array.forEach(element => {
        if (
            element.id === undefined ||
            element.title === undefined ||
            element.slug === undefined
        ) {
            throw new Error("L'array non è nel formato corretto");
        };
    });

    return array.find(a => a.id === id) || null;
};

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
};