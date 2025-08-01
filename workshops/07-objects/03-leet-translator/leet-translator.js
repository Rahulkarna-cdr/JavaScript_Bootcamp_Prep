// ### Leet Translator

// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

// Define a function called `leetTranslator` that take a string of normal
// characters.

// `leetTranslator` should return a new string that is the translation of the
// original string into leet.

// The leet codex is below, along with an array of english letters and an array of
// the corresponding leet characters. Use the two arrays to create a leetCodex
// object to use in making the translations.

// ```javascript
// /*
// Leet Codex:
//         A -> @
//         B -> 8
//         C -> (
//         D -> |)
//         E -> 3
//         F -> ph
//         G -> g
//         H -> #
//         I -> l
//         J -> _|
//         K -> |<
//         L -> 1
//         M -> |'|'|
//         N -> /\/
//         O -> 0
//         P -> |D
//         Q -> (,)
//         R -> |2
//         S -> 5
//         T -> +
//         U -> |_|
//         V -> |/
//         W -> |/|/'
//         X -> ><
//         Y -> j
//         Z -> 2
// */

// let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// translate('Fullstack')    // => 'ph|_|115+@(|<'
// ```


let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
const leetTranslator = (str) => {
    let result = ''
    if(letters.length === leetChars.length){
        debugger;
        for(let i=0;i<str.length;i++){
            let charIdx = letters.indexOf(str[i].toLowerCase())
            let convVal=leetChars[charIdx]
            result += convVal;
        }
    }
    return result;
}
// translate('Fullstack')
console.log(leetTranslator('Fullstack'))