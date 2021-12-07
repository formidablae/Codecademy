const Calculate = {
    factorial: function(n) {
        if (n === 0) {
            return 1;
        }
        return n * Calculate.factorial(n - 1);
    }
};

module.exports = Calculate;
