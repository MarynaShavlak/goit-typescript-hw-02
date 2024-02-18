/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
// тут доцільно вказати тип стрінг, припускаючи , що  message  - це якесь текстове повідомлення
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

export {};
