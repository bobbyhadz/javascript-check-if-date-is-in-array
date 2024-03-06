// EXAMPLE 1 - Check if a Date is contained in an Array using JavaScript

const arr = [
  new Date('2022-03-11'),
  new Date('2022-04-24'),
  new Date('2022-09-24'),
];

const date = arr.find(
  date => date.getTime() === new Date('2022-04-24').getTime(),
);

console.log(date); // 👉️ Sun Apr 24 2022

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a date is in an array, ignoring the time

// const arr = [
//   new Date('2022-03-11'),
//   new Date('2022-04-24'),
//   new Date('2022-09-24'),
// ];

// const date = arr.find(
//   date =>
//     date.toDateString() ===
//     new Date('2022-04-24T09:35:31.820Z').toDateString(),
// );

// console.log(date); // 👉️ Sun Apr 24 2022
