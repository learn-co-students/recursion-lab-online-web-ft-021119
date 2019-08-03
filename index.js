// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);

    printString(mySubString);
  } else {
    return true;
  }

}

function reverseString(myString) {
  if (myString.length <= 1) {
    return myString;
  } else {

    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  let length = myString.length;

  if (length <= 1) {
    return true;
  } else if (myString[0] === myString[length - 1]) {
    let mySubString = myString.substring(1, length - 1);

    return isPalindrome(mySubString);

  } else {
    return false;
  }
}

function addUpTo(array, index) {
  let subArray = array.slice(1, index + 1);

  if (array.length <= 1) {
    return array[0];
  } else {
    return addUpTo(subArray, index) + array[0];
  }
}

function maxOf(array) {
  if (array.length <= 1) {
    return array[0]
  } else if (array[0] > array[1]) {
    array.splice(1, 1);

    return maxOf(array)
  } else {
    array.shift();

    return maxOf(array);
  }
}



function includesNumber(array, number) {
  if (array[0] === number) {
    return true;
  } else if (array.length > 1) {
    array.splice(0, 1)

    return includesNumber(array, number)
  } else {
    return false
  }
}
