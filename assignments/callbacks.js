// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
};

//invoke
getLength(items, function(length) {
  console.log(`The length of this array is ${length}`);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[(arr.length - 1)]);
}

//invoke
last(items, function(last){
  console.log(`Here is the last item ${last}`);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

//invoke
sumNums(7,8,function(sum){
  console.log(`Here is your output ${sum}`);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

//invoke
multiplyNums(8,9,function(multiply){
  console.log(`Your resultant ${multiply}`);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++){
    if (item === list[i]){
      answer = true;
      break
    }
    else {
      answer = false;
    }
  }
  return cb(answer)
}

//invoke
contains('yo-yo',items,function(answer){
  console.log(answer);
  //console.log(`Can the word ${item} be found in this list: ${answer}`);
});

/* STRETCH PROBLEM */

const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Pencil', 'Notebook', 'yo-yo', 'Gum', 'Snacks'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
let narray = [];

for (let i = 0;i < array.length; i++) {
  narray.push(array[i]);
  if (i != 0){
    for (let j = 0;j < (narray.length -1); j++){  
      if (array[i] === narray[j]){
        narray.pop();
        break;
      }
    }
  }
}  

return cb(narray);
}
removeDuplicates(items2, function(narray){
  console.log(narray);
});