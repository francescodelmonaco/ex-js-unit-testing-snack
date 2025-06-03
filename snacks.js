// 1
function getInitials(fullName) {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0).toUpperCase()} ${surname.charAt(0).toUpperCase()}`;
};

// 2 // 4
function createSlug(string) {
    return string.toLowerCase().replaceAll(" ", "-");
};

// 3
function average(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};

// 5
function isPalindrome(string) {
    const lowercaseString = string.toLowerCase();
    const revString = lowercaseString.split("").reverse().join("");

    return lowercaseString === revString;
};

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
};