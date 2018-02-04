//My answer for the Looping a Triangle exercise
for (var i = "#"; i.length <= 7; i += "#")
console.log(i);

//My answer for part 1 of FizzBuzz
for (var x = 0; x <= 100; x++) {
    var fizz = x % 3 == 0;
    var buzz = x % 5 == 0;
    if (fizz) {
     console.log("Fizz"); 
    } else if (buzz) {
      console.log("Buzz");
    } else {
      console.log(x); 
    }
   }

//I wasn't able to figure our part 2 of FizzBuzz but I do understand the code
//I will keep the code as a point of reference for me
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }
/*
What I would like to know is what is the difference between using the following
terms: Output, console.log and return.  Are they all different?  Or does it mean the same thing?
I would appreciate some feedback here please.
*/

/*
I ran out of time to complete exercise three but can I say wow.  I understand how
to get to the conclusion but I don't have my head around the loop inside a loop yet.
I'll assign an hour to review this code to ensure I fully understand it.
*/