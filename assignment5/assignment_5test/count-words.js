/**
 * This function should count all the words in the input sentence and return a object
 * with the word as the key and count as the value.
 *
 * @param {String} the sentence
 * @return {Object} the kay value pair of word and its count
 */
// export const countWords = (sentence) => {
//     // This is just a sample output
//     return { 'hello': 5, 'world': 2 };
// }


const countWords = (sentence) => {
  // Split the sentence into words by space
  const words = sentence.split(' ');

  // Create an object to store word counts
  const wordCount = {};

  // Iterate through the words and count them
  for (const word of words) {
    // Remove leading/trailing punctuation and convert to lowercase
    // g: This is a flag that stands for "global." It ensures that the 
    // replacement is applied to all matching characters in the string
    // , not just the first one.
    const cleanedWord = word.replace(/[^a-zA-Z0-9']/g, '').toLowerCase();

    // Check if the word is not an empty string
    if (cleanedWord !== '') {
      if (wordCount[cleanedWord]) {
        // If the word exists in the object, increment the count
        wordCount[cleanedWord]++;
      } else {
        // If the word doesn't exist in the object, initialize the count to 1
        wordCount[cleanedWord] = 1;
      }
    }
  }

  return wordCount;
}

const sentence = "This is a sample sentence. It is a simple sample sentence.";
const wordCounts = countWords(sentence);
console.log(wordCounts);

