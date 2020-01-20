    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
          return "TEST SUCCEEDED";
        } else {
          return "TEST FAILED.  Expected " + expected + " found " + found;
        }
      }

      /*Define a function sum() and a function multiply() that sums and multiplies
         (respectively) all the numbers in an array of numbers. For example, 
        sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24./
      
     */
      function sum(array) {
        return array.reduce(
          (init, num ) => init + num
        );
      }
      console.log("Expected output of sum([1,2,3,7]) is 13 " + myFunctionTest(13, sum([1, 2, 3, 7])));
      function multiply(array) {
        return array.reduce(
          (init, num) => init * num
        );
      }
      console.log("Expected output of multiply([2,3]) is 6 " + myFunctionTest(6, multiply([2, 3])));
  
      /*Define a function reverse() that computes the reversal of a string. 
      For example, reverse("jag testar") should return the string "ratset gaj".*/
      function reverse(string) {
        return string.split("").reverse().reduce(
          function(accumulator,currentValue){
            return accumulator + currentValue;
          },''
          );
      }
      console.log("Expected output of reverse('jim is a boy') is 'yob a si mij' " + myFunctionTest('yob a si mij', reverse("jim is a boy")));
  
      /*Write a function filterLongWords() that takes an array of words and 
      an integer i and returns the array of words that are longer than i.*/
      function filterLongWords(words, i) {
        return words.filter(w => w.length > i);
      }
      const output = new Array('come', 'stay', 'going');
      const input = new Array('go', 'come', 'stay', 'going');
      console.log("Expected output of filterLongWords(['go', 'come', 'stay', 'going'])[0] is 'come'" + 
      myFunctionTest(output[0], (filterLongWords(input, 3))[0]));
  
      /*Using console.assert */
      console.log("/*--using console.assert--*/");

      /* runs test to see if expected argument is === to value returned by function2test argument */
     function myFunctionTest2(expected, found) {
      if (expected === found) {
        return true;
      } else {
        return false;
      }
    }
    console.assert(myFunctionTest2(13, sum([1, 2, 3, 7])), 'Expected output of sum([1, 2, 3, 7]) is 13');
    console.assert(myFunctionTest2(6, multiply([2, 3])), 'Expected output of multiply([2, 3]) is 6');
    console.assert(myFunctionTest2('yob a si mij', reverse('jim is a boy')), "Expected output of reverse('jim is a boy') is 'yob a si mij'");
    console.assert(myFunctionTest2(output[0], filterLongWords(input, 3)[0]), "Expected output of filterLongWords(['go', 'come', 'stay', 'going'])[0] is 'come'");