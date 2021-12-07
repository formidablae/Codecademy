const Calculate = {
    factorial(inputNum) {

        // If inputNum = 0 OR inputNum = 1, the factorial will return 1
        if (inputNum === 0) {
            return 1;
        }

        for (var i = inputNum - 1; i >= 1; i--) {
            // We store the value of inputNum at each iteration
            inputNum *= i;
        }
        return inputNum;

    }
}

module.exports = Calculate;
