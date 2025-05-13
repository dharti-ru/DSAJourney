// Problem: Deep Search for a Value in Nested Structure
// You are given a deeply nested object/array combination. Write a function that searches for a value in the structure and returns true if found, false otherwise.

// Example:
const data = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: [3, { f: 9 }],
      g: null
    }
  },
  h: [5, 6, [7, 8]]
};

console.log(deepSearch(data, 9)); // true
console.log(deepSearch1(data, 9)); // true
console.log(deepSearch(data, 10)); // false
console.log(deepSearch1(data, 10)); // false

function deepSearch(inputObj, searchValue){
    for(let key in inputObj){
        let value = inputObj[key];
        if(typeof value === 'number' && value === searchValue) {
            return true;
        }
        else if(Array.isArray(value)){
            if(traverseArray(value, searchValue)) return true;
        }
        else if(typeof value === 'object' && value !== null) {
            if(deepSearch(value, searchValue)) return true;
        }
    }
    return false;
}
function traverseArray(arr,searchValue){
    for(let el of arr){
        if(el == searchValue) return true;
        else if(Array.isArray(el)) {
            if(traverseArray(el,searchValue)) return true;
        }
        else if(typeof el === 'object' && el !== null) {
            if(deepSearch(el, searchValue)) return true;
        }
    }
    return false;
}


// Better solution

function deepSearch1(data, target) {
    if (data === target) return true;
  
    if (Array.isArray(data)) {
      for (let item of data) {
        if (deepSearch(item, target)) return true;
      }
    }
  
    else if (typeof data === 'object' && data !== null) {
      for (let key in data) {
        if (deepSearch(data[key], target)) return true;
      }
    }
  
    return false;
  }