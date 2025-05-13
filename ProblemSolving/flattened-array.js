// Problem 2 Recap: Flatten a Nested Array
// Write a function that takes a nested array and returns a single, flattened array.

// Example:
// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]


function getFlattenedArray(inputArr){
    let flattenedArray = [];
    for(let el of inputArr)
    {
        if (el !== null && el !== undefined) {
        if(Array.isArray(el)){
            flattenedArray.push(...getFlattenedArray(el));
        }
        else flattenedArray.push(el);
        }
    }
    return flattenedArray;
}
console.log(getFlattenedArray([1, [2, [null, 4], 5], 6]));



// Problem: Sum All Numbers in a Nested Object
// Write a function that takes a nested object and returns the sum of all the numbers inside it, no matter how deeply nested.

// Example:
// const data = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   },
//   f: 4
// };

// sumNestedObject(data); // Output: 10
const data = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          x: 0,
          y: undefined,
          z: 1
        }
      },
      f: 4
    };
    const data1 = { a: 0, b: false, c: '', d: 2 };
function getSumOfNestedObj(inputObj){
    let nestedObjSum = 0;
    for(key in inputObj){
        if (inputObj[key]) {
            if( typeof inputObj[key] == 'object'){
                nestedObjSum += getSumOfNestedObj(inputObj[key]);
            }
            else nestedObjSum += inputObj[key];
        }
    }

    return nestedObjSum;
}
console.log(getSumOfNestedObj(data));