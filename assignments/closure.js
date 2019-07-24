// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function Sekai() {
  console.log('This is the World we live in now');
  const monsters = "We're attacked all the time";
  const factions = 'We protect each other, that is how we survive!'

  function status() {
    const fighting = `working on a mission, but ${monsters}`;
    const living = `sitting inside the wall that was build to keep on ${factions}`;

    console.log(`this is a ruff existence ${fighting} for our lives`);

    function change() {
      const live = 'relax and live a peaceful wonderful life';
      console.log(`one day we will live in a world where ${living} changes and we can actually just ${live}`);
    };

    change()
  };

  status()
};

Sekai()



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
 let count = 0;
  return function (){  
   return ++count;
 }; 
};

// Example usage:
 const newCounter = counter();
console.log(newCounter());// 1

console.log(newCounter()); // 2




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
  let object = {};
  return object = {
    number: 0,
    increment: function(){
      return ++number;
    },
    decrement: function(){
      return --number;
    }
  };

};

console.log(counterFactory(object.decrement));

console.log(counterFactory(object.decrement));
