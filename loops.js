// Write a program that requests a number from a user and finds the summation of every number from 1 to num.
// For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
// let number = prompt("Give a number: ") * 1;
// let sum = 0;
// for (let i = 0; i <= number; i++) {
//   sum += i;
// }
// console.log(sum);

// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.
// function checker(a) {
//   if (a > 0) {
//     console.log("Number provided is positive");
//   } else if (a < 0) {
//     console.log("Number provided is negative");
//   } else {
//     console.log("Number provided is 0");
//   }
// }

// checker(1);

// function isPerfect(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// function perfectNumbersInRange(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (isPerfect(i)) {
//       console.log(i);
//     }
//   }
// }
// Request 10 numbers from a user and count, how many are positive, negative, or zero.
//Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= 10; i++) {
//   let number = prompt("Enter number ") * 1;
//   if (number > 0) {
//     positive++;
//   } else if (number < 0) {
//     negative++;
//   } else {
//     zero++;
//   }

//   if (number % 2 == 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }
// console.log("Within provided numbers" + positive + "are positive.");
// console.log("Within provided numbers" + negative + "are negative.");
// console.log("Within provided numbers" + zero + "are zero.");
// console.log("Within provided numbers" + even + "are even.");
// console.log("Within provided numbers" + odd + "are odd.");
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds.
// For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// function displayHours(hour, minutes, seconds) {
//   if (hour > 0 && minutes > 0 && seconds > 0) {
//     let hourInSeconds = hour * 3600;
//     let minutesInSeconds = minutes * 60;
//     let all = hourInSeconds + minutesInSeconds + seconds;
//     console.log(all);
//   }
// }
// console.log(displayHours(1, 25, 45));
// let h = 0;
// let m = 0;
// let s = 0;
// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
// function display(seconds) {
//   h = seconds / 3600;
//   seconds = seconds % 3600;
//   m = seconds / 60;
//   seconds = seconds % 60;
//   console.log(Math.floor(h) + ":" + Math.floor(m) + ":" + seconds);
// }
// display(5145);

// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
// function divisor(number) {
//   for (let i = 2; i <= number; i++) {
//     if (number % i == 0) {
//       console.log(i);
//     }
//   }
// }
// console.log(divisor(8));

// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

// function countDigit() {
//   let count = 0;
//   let n = prompt("Enter number: ") * 1;
//   if (n / 100000000 > 1) {
//     count++;
//   }
//   if (n / 100000 > 1) {
//     count++;
//   }
//   if (n / 10000 > 1) {
//     count++;
//   }
//   if (n / 1000 > 1) {
//     count++;
//   }
//   if (n / 100 > 1) {
//     count++;
//   }
//   if (n / 10 > 1) {
//     count++;
//   }
//   if (n / 1 > 1) {
//     count++;
//   }
//   return count;
// }
// console.log(countDigit());
// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`Multiply table of ${i} is ${i} * ${j} = ${i * j}`);
//   }
// }
