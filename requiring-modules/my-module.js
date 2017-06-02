//implement own module that exports an object with a function inside
//the function should invoke a private function that's defined in your module
//(not exported from it).

function sum (x, y) {
  return x + y;
} 

module.exports ={
  sum: sum
}
