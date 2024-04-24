// Hallo
// This is my logic

// Based on these two lines:
// "Write a function that finds missing number in array"
// "Given array of sequent numbers 0,1,2,3...N with missing member"
// or rather the words "number" and "member", I concluded that only one element can be missing in the original array.

// Based on "Given array of sequent numbers 0,1,2,3...N" I concluded that there cannot be negative numbers in a given array.

// The logic that I implemented in my solution will not work correctly with an array of negative numbers. But based on what was said above, this was not the case in the assignment.

// Now regarding the corner cases. Based on the task, or more precisely “Function finds a first missing”, I concluded that if the original array does not contain gaps, then the missing member will be the number preceding the array.

// Thank You.
// Best regards,
// Bogdan Mark


const findMissingMember = (arr) => {
    const n = arr.length; // Array length
    const max = Math.max(...arr); // Maximum array value
    const Sum = arr.reduce((acc, curr) => acc + curr, 0); // Sum of original array
    const newArr = []; // Initialize expected array
    for (let i = max - n; i <= max; i++) {    // Filling expected array
        newArr.push(i);
        } 
    const newSum = newArr.reduce((acc, curr) => acc + curr, 0); // Sum of expected array
    return newSum - Sum; // Return the difference
}

const testFindMissingNumber = () => {
    const testCases = [
        { input: [5, 0, 1, 3, 2], expected: 4 }, // Original example 1
        { input: [7, 9, 10, 11, 12], expected: 8 }, // Original example 2
        { input: [10, 9, 11, 14, 13, 15], expected: 12}, // My example
        { input: [10, 9, 11, 14, 13, 12], expected: 8}, // My example
        { input: [12], expected: 11 }, // Corner case (maximum number)
        { input: [0], expected: -1 }, // Corner case (minimum number)
        // Add more test cases here please
    ];

    console.log("Testing started.");

    testCases.forEach((testCase, index) => {
        const { input, expected } = testCase;
        const result = findMissingMember(input);
        if (result === expected) {
            console.log(`Test case ${index + 1}: Passed`);
        } else {
            console.log(`Test case ${index + 1}: Failed`);
            console.log(`  Input: ${input}`);
            console.log(`  Expected: ${expected}`);
            console.log(`  Got: ${result}`);
        }
    });

    console.log("Testing complete.");
};

// Running tests
testFindMissingNumber();