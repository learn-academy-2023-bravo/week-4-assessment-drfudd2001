// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('removesFirstShufflesRest', () => {
  it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
    expect(removesFirstShufflesRest(colors1)).toEqual(
      expect.arrayContaining(['yellow', 'blue', 'pink', 'green'])
    )
    expect(removesFirstShufflesRest(colors2)).toEqual(
      expect.arrayContaining([
        'saffron',
        'aquamarine',
        'periwinkle',
        'indigo',
        'ochre',
      ])
    )
  })
})

// Test output:

  // FAIL  ./code-challenges.test.js
  // removesFirstShufflesRest
  // ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
  // ● removesFirstShufflesRest › takes in an array, removes the first item from the array and shuffles the remaining content
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // Snapshots:   0 total
  // Time:        0.168 s, estimated 1 s
  // Ran all test suites.

// b) Create the function that makes the test pass.

  // Pseudo code:
    // Write a function that takes in an array
    // Remove the first element of array using shift()
    // Shuffle the remaining elements of array using sort() and comparison function
    // Return the shuffled array

const removesFirstShufflesRest = (array) => {
  array.shift()
  return array.sort(() => (Math.random() < 0.5 ? -1 : 1))
}

// Test output:

  // PASS  ./code-challenges.test.js
  // removesFirstShufflesRest
  //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.158 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 0.84s.

// Refactored code:

/*
const removesFirstShufflesRest = (array) => {
  // Make a copy of the input array and remove the first element
  const shuffledArray = array.slice(1)
  // Shuffle the remaining elements using the Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray
}
*/

  /* The Fisher-Yates algorithm is a simple and efficient way to shuffle the elements of an array. It works by iterating through the array in reverse order, swapping each element with a randomly selected element that comes before it. By the end of the iteration, all elements have been shuffled with equal probability. */


// Test output:

  // PASS  ./code-challenges.test.js
  // removesFirstShufflesRest
  //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.164 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.06s.



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe('endTally', () => {
  it('return end tally', () => {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})

// Test Output:

  // FAIL  ./code-challenges.test.js
  // endTally
  //   ✕ return end tally (1 ms)
  // ● endTally › return end tally
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // Snapshots:   0 total
  // Time:        0.172 s, estimated 1 s
  // Ran all test suites.

// b) Create the function that makes the test pass.

// Pseudo code:
  // Calculates the difference between the number of up votes and down votes in a vote object.
  // Input: - votes: an object with `upVotes` and `downVotes` properties representing the number of up votes and down votes, respectively.
  // Output: the difference between the number of up votes and down votes.

const endTally = (votes) => {
  // Extract the `upVotes` and `downVotes` properties from the votes object
  const { upVotes, downVotes } = votes
  // Calculate the vote difference by subtracting the number of down votes from
  // the number of up votes

  return upVotes - downVotes
}

// Test output:

  // PASS  ./code-challenges.test.js
  // endTally
  //   ✓ return end tally (1 ms)
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.158 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 0.99s.

// Refactored code:

  // Take advantage of object destructuring in the function parameter to extract the upVotes and downVotes
  
// const endTally = ({ upVotes, downVotes }) => upVotes - downVotes

// Test output:

  // PASS  ./code-challenges.test.js
  // endTally
  // ✓ return end tally
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total
  // Snapshots:   0 total
  // Time:        0.17 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.17s.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe('removeDuplicates', () => {
  it('removes duplicates from two arrays and returns one array with no duplicate values', () => {
    expect(removeDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Test output:
  // FAIL  ./code-challenges.test.js
  // removeDuplicates
  //   ✕ removes duplicates from two arrays and returns one array with no duplicate values (1 ms)
  // ● removeDuplicates › removes duplicates from two arrays and returns one array with no duplicate values
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // Snapshots:   0 total
  // Time:        0.171 s
  // Ran all test suites.


// b) Create the function that makes the test pass.

// Pseudo code:
  // Remove duplicate values from an array by using flat() to flatten any number of arrays into a single array, converting it into a Set to remove duplicates, and then converting the Set back into an array.
  // Input: one or more arrays
  // Output: a new array with no duplicate values

const removeDuplicates = (...arrays) => {
  // Flatten the input arrays into a single array
  const flattenedArray = arrays.flat()
  // Convert the flattened array into a Set to remove duplicates
  const uniqueArray = [...new Set(flattenedArray)]
  // Return the unique array
  return uniqueArray
}

// Test output:

  // PASS  ./code-challenges.test.js
  // removeDuplicates
  //   ✓ removes duplicates from two arrays and returns one array with no duplicate values (1 ms)
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.162 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.57s.

  // Refactored code:

/*
const removeDuplicates = (...arrays) => {
  // Use the spread operator and the Set constructor to create a new Set with all the values from the input arrays. The Set constructor will automatically remove any duplicate values.
  const uniqueSet = new Set([].concat(...arrays))
  // Convert the Set back into an array using the spread operator and return it.
  return [...uniqueSet]
}
*/

// Test output:
  // PASS  ./code-challenges.test.js
  // removeDuplicates
  //   ✓ removes duplicates from two arrays and returns one array with no duplicate values (1 ms)
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.161 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.01s.