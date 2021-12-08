// Write your function here:
function finalGrade(exam, projects, assignments) {
    const average = (exam + projects + assignments) / 3;
    switch (true) {
        case (exam > 100 || projects > 100 || assignments > 100 || exam < 0 || projects < 0 || assignments < 0):
            return 'You have entered an invalid grade.';
        case (average >= 90 && average <= 100):
            return 'A';
        case (average >= 80):
            return 'B';
        case (average >= 70):
            return 'C';
        case (average >= 60):
            return 'D';
        default:
            return 'F';
    }

}

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
