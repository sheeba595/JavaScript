// 1. Check whether a number is positive, negative, or zero
let num1 = Number(prompt("Enter a number:"));
if (num1 > 0) {
    console.log(`${num1} is positive`);
} else if (num1 < 0) {
    console.log(`${num1} is negative`);
} else {
    console.log("The number is zero");
}

// 2. Find if a given number is even or odd
let num2 = Number(prompt("Enter a number:"));
if (num2 % 2 === 0) {
    console.log(`${num2} is even`);
} else {
    console.log(`${num2} is odd`);
}

// 3. Check if a person is eligible to vote based on age
let age = Number(prompt("Enter your age:"));
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// 4. Compare two numbers and print the greater one
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
if (a > b) {
    console.log(`${a} is greater`);
} else if (b > a) {
    console.log(`${b} is greater`);
} else {
    console.log("Both numbers are equal");
}

// 5. Check whether a year is a leap year
let year = Number(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

// 6. Validate username length (minimum 5 characters)
let username = prompt("Enter your username:");
if (username.length >= 5) {
    console.log("Username is valid");
} else {
    console.log("Username must be at least 5 characters long");
}

// 7. Check if a given character is a vowel or consonant
let char = prompt("Enter a single character:").toLowerCase();
if (["a", "e", "i", "o", "u"].includes(char)) {
    console.log(`${char} is a vowel`);
} else {
    console.log(`${char} is a consonant`);
}

// 8. Print grade based on marks using conditions
let marks = Number(prompt("Enter your marks (0-100):"));
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 9. Check if a number is divisible by both 3 and 5
let num3 = Number(prompt("Enter a number:"));
if (num3 % 3 === 0 && num3 % 5 === 0) {
    console.log(`${num3} is divisible by both 3 and 5`);
} else {
    console.log(`${num3} is not divisible by both 3 and 5`);
}

// 10. Display “AM” or “PM” based on hour value
let hour = Number(prompt("Enter hour (0-23):"));
if (hour >= 0 && hour < 12) {
    console.log("AM");
} else if (hour >= 12 && hour <= 23) {
    console.log("PM");
} else {
    console.log("Invalid hour!");
}

// 11. Print numbers from 1 to 10 using a loop
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 12. Print all even numbers between 1 and 50
console.log("Even numbers from 1 to 50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 13. Calculate the sum of numbers from 1 to n
let n = Number(prompt("Enter a number n to find sum from 1 to n:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to ${n} is ${sum}`);

// 14. Print multiplication table of a given number
let num = Number(prompt("Enter a number to print its multiplication table:"));
console.log(`Multiplication table of ${num}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 15. Reverse a number using a loop
let numberToReverse = Number(prompt("Enter a number to reverse:"));
let reversed = 0;
let temp = numberToReverse;
while (temp > 0) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
}
console.log(`Reversed number of ${numberToReverse} is ${reversed}`);

// 16. Count digits in a given number
let numberToCount = Number(prompt("Enter a number to count digits:"));
let count = 0;
let tempNum = numberToCount;
if (tempNum === 0) count = 1;
while (tempNum > 0) {
    count++;
    tempNum = Math.floor(tempNum / 10);
}
console.log(`Number of digits in ${numberToCount} is ${count}`);

// 17. Print all elements of an array using a loop
let arr = [10, 20, 30, 40, 50];
console.log("Array elements:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 18. Find factorial of a number using a loop
let factNum = Number(prompt("Enter a number to find factorial:"));
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log(`Factorial of ${factNum} is ${factorial}`);

// 19. Print Fibonacci series up to n terms
let fibTerms = Number(prompt("Enter number of Fibonacci terms:"));
let a1 = 0, b1 = 1;
console.log("Fibonacci series:");
for (let i = 1; i <= fibTerms; i++) {
    console.log(a1);
    let next = a1 + b1;
    a1 = b1;
    b1 = next;
}

// 20. Find the largest number in an array using a loop
let numbersArray = [12, 45, 7, 89, 34];
let largest = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largest) {
        largest = numbersArray[i];
    }
}
console.log(`Largest number in array [${numbersArray}] is ${largest}`);

// 21. Find the length of a given string
let str1 = prompt("Enter a string to find its length:");
console.log(`Length of "${str1}" is ${str1.length}`);

// 22. Convert a string to uppercase
let str2 = prompt("Enter a string to convert to uppercase:");
console.log(`Uppercase: ${str2.toUpperCase()}`);

// 23. Check whether a string contains the word “JavaScript”
let str3 = prompt("Enter a string to check for 'JavaScript':");
if (str3.includes("JavaScript")) {
    console.log("The string contains 'JavaScript'");
} else {
    console.log("The string does not contain 'JavaScript'");
}

// 24. Reverse a given string
let str4 = prompt("Enter a string to reverse:");
let reversedStr = str4.split("").reverse().join("");
console.log(`Reversed string: ${reversedStr}`);

// 25. Count number of vowels in a string
let str5 = prompt("Enter a string to count vowels:");
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
let vowelCount = 0;
for (let char of str5) {
    if (vowels.includes(char)) vowelCount++;
}
console.log(`Number of vowels in "${str5}" is ${vowelCount}`);

// 26. Replace all spaces in a string with hyphens
let str6 = prompt("Enter a string to replace spaces with hyphens:");
let hyphenStr = str6.replace(/ /g, "-");
console.log(`Modified string: ${hyphenStr}`);

// 27. Check if a string is a palindrome
let str7 = prompt("Enter a string to check palindrome:").toLowerCase();
let reversedStr7 = str7.split("").reverse().join("");
if (str7 === reversedStr7) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}

// 28. Extract first 5 characters from a string
let str8 = prompt("Enter a string to extract first 5 characters:");
console.log(`First 5 characters: ${str8.substring(0,5)}`);

// 29. Remove extra spaces from a string
let str9 = prompt("Enter a string to remove extra spaces:");
let trimmedStr = str9.trim().replace(/\s+/g, " ");
console.log(`String after removing extra spaces: "${trimmedStr}"`);

// 30. Find the index of a specific character in a string
let str10 = prompt("Enter a string:");
let charToFind = prompt("Enter a character to find its index:");
let index = str10.indexOf(charToFind);
if (index !== -1) {
    console.log(`The character "${charToFind}" is at index ${index}`);
} else {
    console.log(`The character "${charToFind}" was not found`);
}

// 31. Add a new element to the end of an array
let arr1 = [1, 2, 3];
let newElement = Number(prompt("Enter a number to add to the array:"));
arr1.push(newElement);
console.log(`Array after adding element: [${arr1}]`);

// 32. Remove the first element from an array
let arr2 = [10, 20, 30, 40];
arr2.shift();
console.log(`Array after removing first element: [${arr2}]`);

// 33. Find the length of an array
let arr3 = [5, 10, 15, 20];
console.log(`Length of array: ${arr3.length}`);

// 34. Check if an element exists in an array
let arr4 = [2, 4, 6, 8];
let elemToCheck = Number(prompt("Enter a number to check in the array:"));
if (arr4.includes(elemToCheck)) {
    console.log(`${elemToCheck} exists in the array`);
} else {
    console.log(`${elemToCheck} does not exist in the array`);
}

// 35. Sort an array of numbers in ascending order
let arr5 = [50, 10, 30, 20, 40];
arr5.sort((a, b) => a - b);
console.log(`Array sorted ascending: [${arr5}]`);

// 36. Reverse an array
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(`Reversed array: [${arr6}]`);

// 37. Find the sum of all elements in an array
let arr7 = [10, 20, 30, 40];
let sumArr = 0;
for (let num of arr7) {
    sumArr += num;
}
console.log(`Sum of array elements: ${sumArr}`);

// 38. Find the smallest number in an array
let arr8 = [45, 12, 78, 3, 56];
let smallest = arr8[0];
for (let num of arr8) {
    if (num < smallest) smallest = num;
}
console.log(`Smallest number in array: ${smallest}`);

// 39. Merge two arrays into one
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let mergedArr = arr9.concat(arr10);
console.log(`Merged array: [${mergedArr}]`);

// 40. Remove duplicate values from an array
let arr11 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr11)];
console.log(`Array with duplicates removed: [${uniqueArr}]`);

// 41. Store a username in localStorage
let username1 = prompt("Enter a username to store in localStorage:");
localStorage.setItem("username", username1);
console.log("Username stored in localStorage");

// 42. Retrieve and display data from localStorage
let storedUsername = localStorage.getItem("username");
console.log(`Retrieved username from localStorage: ${storedUsername}`);

// 43. Remove a specific item from localStorage
localStorage.removeItem("username");
console.log("Username removed from localStorage");

// 44. Clear all data from sessionStorage
sessionStorage.setItem("tempData", "example"); // example data
sessionStorage.clear();
console.log("All sessionStorage data cleared");

// 45. Store an array in localStorage using JSON
let fruits = ["apple", "banana", "mango"];
localStorage.setItem("fruits", JSON.stringify(fruits));
console.log("Array stored in localStorage as JSON");

// 46. Convert a JavaScript object into JSON string
let person = { name: "John", age: 25, city: "Delhi" };
let jsonString = JSON.stringify(person);
console.log(`JSON string: ${jsonString}`);

// 47. Convert a JSON string back to JavaScript object
let jsonStr = '{"name":"Alice","age":30,"city":"Mumbai"}';
let obj = JSON.parse(jsonStr);
console.log("Converted JSON to object:", obj);

// 48. Access a specific value from a JSON object
console.log(`Person's name from object: ${obj.name}`);

// 49. Handle a division by zero error using try-catch
let numerator = Number(prompt("Enter numerator:"));
let denominator = Number(prompt("Enter denominator:"));
try {
    if (denominator === 0) throw new Error("Division by zero is not allowed");
    let result = numerator / denominator;
    console.log(`Result: ${result}`);
} catch (error) {
    console.log("Error:", error.message);
}

// 50. Display a custom error message when input is empty
let userInput = prompt("Enter something:");
try {
    if (userInput.trim() === "") throw new Error("Input cannot be empty!");
    console.log(`You entered: ${userInput}`);
} catch (error) {
    console.log("Error:", error.message);
}
