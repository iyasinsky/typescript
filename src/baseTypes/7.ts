/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const isWeekend = (day: WeekDays): boolean =>
  day === WeekDays.Saturday || day === WeekDays.Sunday;

// console.log('Friday:', isWeekend(WeekDays.Friday));
// console.log('Saturday:', isWeekend(WeekDays.Saturday));
