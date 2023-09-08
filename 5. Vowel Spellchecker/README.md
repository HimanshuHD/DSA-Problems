# Vowel Spellchecker

`Medium`
`Strings`
`Map`

----------

## Problem Statement

Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spell checker handles two categories of spelling mistakes:

1. **Capitalization**: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
    - Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
    - Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
    - Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"
2. **Vowel Errors**: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
    - Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
    - Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
    - Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)

In addition, the spell checker operates under the following precedence rules:

- When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
- When the query matches a word up to capitlization, you should return the first such match in the wordlist.
- When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
- If the query has no matches in the wordlist, you should return the empty string.

Given some queries, return a list of words answer, where answer[i] is the correct word for query = querylist[i].

### Problem Constraints

> `1 <= wordlist.length`, `querylist.length <= 5000`  
`1 <= wordlist[i].length`, `querylist[i].length <= 7`  
`wordlist[i]` and `querylist[i]` consist only of only English letters.

### Input Format

> The First argument given is an array of strings: `wordlist`  
The Second argument given is and array of search terms: `querylist`

### Output Format

> Return an array of strings where each index represents the correct word for each index in `querylist`

### Example Input

> wordlist = ["KiTe", "kite", "hare", "Hare"],  
queries = ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"]

### Example Output

> ["kite", "KiTe", "KiTe", "Hare", "hare", "", "", "KiTe", "", "KiTe"]

----------

## Solution

```javascript
// @param - an array of strings: wordlist (...)
// @param - an array of strings: querylist (...)
// @return - an array of strings: ...

let _spellChecker = function(wordlist, querylist) {
  let lowerCaseWords = new Map(), maskedWords = new Map();
  wordlist.forEach((word) => {
      !lowerCaseWords.has(word.toLowerCase()) &&
          lowerCaseWords.set(word.toLowerCase(), word);
      !maskedWords.has(word.toLowerCase().replace(/[aeiou]/g, '#')) &&
          maskedWords.set(word.toLowerCase().replace(/[aeiou]/g, '#'), word);
  });
  wordlist = new Set(wordlist);

  for (let i in querylist) {
      if (wordlist.has(querylist[i])) continue;
      else
        querylist[i] = lowerCaseWords.get(querylist[i].toLowerCase()) ||
            maskedWords.get(querylist[i].toLowerCase().replace(/[aeiou]/g, '#')) ||
            '';
  }

  return querylist;
};

let words = ["KiTe", "kite", "hare", "Hare"];
let queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"];
console.log('Words for queries > ', _spellChecker(words, queries));
```

- Time Complexity: O($m+n$)
- Space Complexity: O($m+n$)

> where `m` and `n` are the number of items in `wordlist` and `querylist`

----------
