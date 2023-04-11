/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // _ * _ = O(?)
  const unique = [];                // _ * _ = O(?)
  for (
    let i = 0;                      // _ * _ = O(?)
    i < words.length;               // _ * _ = O(?)
    i++                             // _ * _ = O(?)
  ) {
    const word = words[i];          // _ * _ = O(?)
    if (!seen[word]) {              // _ * _ = O(?)
      seen[word] = true;            // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // _ * _ = O(?)
  for (
    let i = 0;                      // _ * _ = O(?)
    i < words.length;               // _ * _ = O(?)
    i++                             // _ * _ = O(?)
  ) {
    const word = words[i];          // _ * _ = O(?)
    let isUnique = true;            // _ * _ = O(?)
    for (
      let c = 0;                    // _ * _ = O(?)
      c < i;                        // _ * _ = O(?)
      c++                           // _ * _ = O(?)
    ) {
      const comparing = words[c];   // _ * _ = O(?)
      if (comparing === word) {     // _ * _ = O(?)
        isUnique = false;           // _ * _ = O(?)
      }
    }
    if (isUnique) {                 // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueQuadratic: O(n^2)
