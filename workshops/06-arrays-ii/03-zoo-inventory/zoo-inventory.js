// ### Zoo Inventory

// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// ```javascript
// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
// */
// ```

// YOUR CODE BELOW
const zooInventory = (arr)=> {
    let completeArr = []
    for(let i=0;i<arr.length;i++){
        let animal = arr[i];

        let nameOfAnimal = animal[0];
        let speciesOfAnimal = animal [1][0]
        let age = animal [1][1]

        completeArr.push(`${nameOfAnimal} the ${speciesOfAnimal} is ${age}.`)
    }
    
    return completeArr;
}

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];
console.log(zooInventory(myZoo));

