// 1
function getInitials(fullName) {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0).toUpperCase()} ${surname.charAt(0).toUpperCase()}`;
};

// 2
function createSlug(string) {
    return string.toLowerCase();
};

module.exports = {
    getInitials,
    createSlug
};