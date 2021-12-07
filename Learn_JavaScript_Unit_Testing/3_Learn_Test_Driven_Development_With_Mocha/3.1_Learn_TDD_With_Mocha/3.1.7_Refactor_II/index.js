const Calculate = {
    sum(inputArray) {
        return inputArray.reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = Calculate;
