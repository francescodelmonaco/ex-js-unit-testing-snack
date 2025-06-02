// 1
function getInitials(fullName) {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0).toUpperCase()} ${surname.charAt(0).toUpperCase()}`;
};

// 2
function createSlug(string) {
    return string.toLowerCase();
};

// 3
function average(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};

module.exports = {
    getInitials,
    createSlug,
    average
};