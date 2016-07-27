/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var longestCollatzSeq = function(){
  // starting at 1 going through 1 million
  // walk the collatz chain
     // start steps at 0
     // check if number is even
        // divide by two
    // if number is odd
       // multiple by three and add 1
    // if the number is one return the count
    // if the number is not one add one to number of steps and go to check if number is even
  // take the max of the number of steps and the max number of steps so far
  return 0;
}


module.exports = longestCollatzSeq;
