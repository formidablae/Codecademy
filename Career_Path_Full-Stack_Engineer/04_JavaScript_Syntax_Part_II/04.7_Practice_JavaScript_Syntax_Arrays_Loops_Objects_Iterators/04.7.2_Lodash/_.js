const _ = {
    clamp: (number, lower, upper) => {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange: (number, start, end) => {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }
        return number >= start && number < end;
    },
    words: string => {
        return string.split(' ');
    },
    pad: (string, length) => {
        if (string.length >= length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        return ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    },
    has: (object, key) => {
        return object.hasOwnProperty(key);
    },
    invert: object => {
        const invertedObject = {};
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                invertedObject[object[key]] = key;
            }
        }
        return invertedObject;
    },
    findKey: (object, predicate) => {
        for (const key in object) {
            if (object.hasOwnProperty(key) && predicate(object[key])) {
                return key;
            }
        }
        return undefined;
    },
    drop: (array, n) => {
        if (n === undefined) {
            n = 1;
        }
        return array.slice(n);
    },
    dropWhile: (array, predicate) => {
        const dropNumber = array.findIndex(function(element, index) {
            return !predicate(element, index, array);
        });
        const droppedArray = _.drop(array, dropNumber);
        return droppedArray;
    },
    chunk: (array, size) => {
        const chunkedArray = [];
        for (let index = 0; index < array.length; index += size) {
            chunkedArray.push(array.slice(index, index + size));
        }
        return chunkedArray;
    }
}

// Do not write or modify code below this line.
module.exports = _;
