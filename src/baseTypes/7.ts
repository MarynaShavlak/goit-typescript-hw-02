/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday = 'MONDAY',
  Tuesday = '',
  Wednesday = 'Wednesday',
  Thursaday = 'Thursaday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}

console.log(isWeekend(Days.Monday));
