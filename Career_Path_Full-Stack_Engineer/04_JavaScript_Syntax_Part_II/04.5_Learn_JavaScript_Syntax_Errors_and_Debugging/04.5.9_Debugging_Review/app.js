function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;

    if (stringLength < minLength) {
        return false;
    } else if (stringLength > maxLength) {
        return false;
    } else {
        return true;
    }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
