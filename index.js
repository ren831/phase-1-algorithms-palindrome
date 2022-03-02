function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

/* Add your pseudocode here
  receives string 
  
  if string is  palindrome return true
  if not return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
