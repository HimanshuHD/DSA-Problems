// **Vowel Spellchecker

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
    
    // return querylist.map((word) => (
    //     wordlist.has(word) && word ||
    //     lowerCaseWords.get(word.toLowerCase()) ||
    //     maskedWords.get(word.toLowerCase().replace(/[aeiou]/g, '#')) ||
    //     ''
    // ));
};

let words = ["KiTe", "kite", "hare", "Hare"];
let queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"];
// let words = ['heLLo', 'hello', 'Hello', 'HELLO'];
// let queries = ['hello', 'HeLLo', 'hsllo', 'Halli'];
console.log('Words for queries > ', _spellChecker(words, queries));