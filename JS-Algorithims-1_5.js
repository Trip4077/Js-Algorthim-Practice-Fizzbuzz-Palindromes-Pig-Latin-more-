/* This is a document to hold a section of algorithm and critical thinking practice
I have completed. Exercises pull from online sources such as freecodecamp.org.
Each exercises will be labeled above the function and a comprehensive list is below

1.) Find and Replace: Given a string, find a given word in the string (before), and replace it
    with another given word (after) keeping Capitalization a match.

2.) Sum Odd Fibonacci Digits: Given a number, sum all of the odd digits in the Fibonacci Sequence that are
    less than that number.

3.) Palindrome checker: Given a string, return a boolean value to tell user if string is the same forwards
    and backwards.

4.) Pig-Latin Translator: Given a word, return it's pig-latin counterpart. (Dog => Ogday)

5.) FizzBuzz: For numbers 1 - 100, return fizzbuzz if the number is divisible by 3 and 5, return fizz if
    the number is divisible by 3 only, return buzz if the word is divisible by 5 only
*/



/*1.) Find and Replace: Given a string, find a given word in the string (before), and replace it
    with another given word (after) keeping Capilization a match.*/

function myReplace(str, before, after) {
  //Split string into array of words
  let wordsArray = str.split(' ');

  //Cycle throguh words looking for 'before' word
  for(let i = 0; i < wordsArray.length; i++) {

    if(wordsArray[i].toLowerCase() === before.toLowerCase()) {
      //When found, get first character of array word, break after word into first letter and rest of word
      let firstChar = wordsArray[i][0];
      let newChar = after.substring(0, 1);
      let restWord = after.substring(1, after.length);

      //Determien if word in array was capitalized or not, adjust new word accordingly
      if(firstChar === firstChar.toUpperCase()) {

        wordsArray[i] = newChar.toUpperCase() + restWord;

      } else {

        wordsArray[i] = newChar.toLowerCase() + restWord;
      }
    }
  }

  //Join array into new string to return
  str = wordsArray.join(' ');

  return str;
}

myReplace("Let us go to the store", "store", "mall");


/*2.) Sum Odd Fibonacci Digits: Given a number, sum all of the odd digits in the Fibonacci Sequence that are
less than that number.
Fibonacci start: 1, 1, 2, 3, 5, 8, 13*/


function sumFibs(num) {
  let total = 2;
  let curNum = 1;
  let prevNum = 1;

  for(let i = 0; i < num; i++) {

   //Determine next fibonacci digit
   let temp = curNum;
   curNum += prevNum;
   prevNum = temp;

  //If next digit is greater than num, break loop
   if(curNum > num) {
     break;
   }

    //Determine if digit is odd
    if(curNum % 2 === 0) {
      continue;
    } else {
      total += curNum;
    }
  }
  return total;
}

sumFibs(10);


/* 3.)  Palindrome checker: Given a string, return a boolean value to tell user if string is the same forwards
     and backwards. */

function palindrome(str) {
  //Create regex to search for whitespace
  let letters = [];
  let regEx = RegExp('[^a-zA-Z0-9]', 'g');

  //remove special characters, white space, and capitalization
  str = str.replace(regEx, '');
  str = str.toLowerCase();

  //create array of letters
  for(let i = 0; i < str.length; i++) {
    letters.push(str[i]);
  }

  //reverse letters and join to make new string
  letters.reverse();
  let newStr = letters.join('');


   //check if string and new string are palindrome
   if(str === newStr) {
      return true;
   } else {
      return false;
   }
}

palindrome("A man, a plan, a canal. Panama");

// 4.) Pig-Latin Translator: Given a word, return it's pig-latin counterpart. (Dog => Ogday)

function translatePigLatin(str) {
  let letters = [];
  let pigArr = [];
  let vowelRegEx = RegExp('[aeiou]','i');

  //console.log(vowelRegEx.test(str));
  //check if string contains vowel
  if(vowelRegEx.test(str) === false) {
    //If vowel not found push -ay
    str = str + 'ay';
    //console.log(str)
    return str
  }

  for(let i = 0; i < str.length; i++) {
    letters.push(str[i])
  }

  for(let i = 0; i < letters.length; i++) {
    //Test if letter is vowel
    if(vowelRegEx.test(letters[i]) === true) {
      //Test if vowel starts the array
      if(pigArr[0] == undefined){
        //Test if vowel starts the word
        if(letters[i] === letters[0]) {

          letters.push('w', 'a', 'y');
          str = letters.join('');
          //console.log(str)
          break;
        //Constonant starts word
        } else {
          //Splice all constonants prior to first vowel
          let tempArr = letters.splice(0, i,)
          //For each letter, push to end of word
          for(let i = 0; i < tempArr.length; i++) {
            letters.push(tempArr[i]);
          }
          //Push piglatin -ay
          letters.push('a', 'y');
          str = letters.join('');
          //console.log(str);
          break;
        }
      }
    }
  }
  return str;
}

translatePigLatin("california")
//california aliforniacay
//algorithm algorithmway
//glove oveglay
//paragraphs aragraphspay

/* 5.) FizzBuzz: For numbers 1 - 100, return fizzbuzz if the number is divisible by 3 and 5, return fizz if
    the number is divisible by 3 only, return buzz if the word is divisible by 5 only */

function fizzBuzz() {
  for (let count = 1; count <= 100; count+=1) {

    switch (true) {
      case (count % 3 == 0) && (count % 5 ==0):
        console.log("FizzBuzz");
        break;
      case (count % 3 !== 0) && (count % 5 == 0):
        console.log("Buzz");
        break;
      case (count % 3 === 0):
        console.log("Fizz");
        break;
      default:
        console.log(count);
        break;
    }
  }
}

fizzBuzz();
