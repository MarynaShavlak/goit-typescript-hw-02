// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

type UserUpdateForm = Partial<User>;

const updateForm: UserUpdateForm = {
  email: 'ms@gamil.com',
  age: 29,
};

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

type Configs = {
  config1: string;
  config2: number;
  config3: boolean;
};

function mergeConfig(partialConfig: Partial<Configs>): Configs {
  const defaultConfigs: Configs = {
    config1: 'a',
    config2: 12,
    config3: true,
  };

  return { ...defaultConfigs, ...partialConfig };
}

const partialConfig = { config1: 'bbb' };
const fullConfig = mergeConfig(partialConfig);
console.log(fullConfig);

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

type ArrayOfNumbers = number[];

function getArray(arr: Readonly<ArrayOfNumbers>): Readonly<ArrayOfNumbers> {
  return arr;
}

console.log(getArray([2, 5, 6]));

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

type newConfigs = {
  config1: string;
  config2: number;
  config3: boolean;
};

const objConfig: Readonly<newConfigs> = {
  config1: 'fd',
  config2: 334,
  config3: false,
};

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
type newUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

type newUserSummary = Pick<newUser, 'name' | 'email'>;

function getNameAndEmailUser(initialobj: newUser): newUserSummary {
  return {
    name: initialobj.name,
    email: initialobj.email,
  };
}

getNameAndEmailUser({
  name: 'gjgg',
  surname: 'gjg',
  email: 'user@mail.com',
  password: 'password123',
});

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.
interface APIResponse {
  id: number;
  name: string;
  email: string;
  age: number;
}

function extractUIFields(
  response: APIResponse,
): Pick<APIResponse, 'id' | 'name'> {
  const { id, name } = response;
  return { id, name };
}

const apiResponse: APIResponse = {
  id: 1,
  name: 'MARY',
  email: 'mary@gamail.com',
  age: 29,
};

const uiFields = extractUIFields(apiResponse);
console.log(uiFields);

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
type UserAges = Record<string, number>;
const users: UserAges = {
  Mary: 29,
  Max: 27,
  Alex: 24,
};

// Задача 2: Мапа з іменами місяців до кількості днів у них.
type MonthDays = Record<string, number>;

const daysInMonth: MonthDays = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
type newUser2 = {
  name: string;
  email: string;
  password: string;
};

type newUserSummary2 = Omit<newUser2, 'password'>;

function getNewUser(user: newUser2): newUserSummary2 {
  return {
    name: user.name,
    email: user.email,
  };
}

getNewUser({
  name: 'gjgg',
  email: 'user@mail.com',
  password: 'password123',
});

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.
interface APIResponse2 {
  id: number;
  name: string;
  date: Date;
}

function extractUIFields2(response: APIResponse2): Omit<APIResponse2, 'date'> {
  const { id, name } = response;
  return { id, name };
}

const apiResponse2: APIResponse2 = {
  id: 1,
  name: 'MARY',
  date: new Date(),
};

const uiFields2 = extractUIFields2(apiResponse2);
console.log(uiFields2);
// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

type DishCategory = 'закуска' | 'основна страва' | 'десерт';
interface MenuDish {
  name: string;
  price: number;
  category: DishCategory;
}

type Menu = MenuDish[];

function filterMenuByCategory(menu: Menu, category: DishCategory): Menu {
  return menu.filter(item => item.category === category);
}

const menu: Menu = [
  { name: 'Цезар з куркою', price: 150, category: 'закуска' },
  { name: 'Стейк зі свинини', price: 200, category: 'основна страва' },
  { name: 'Тірамісу', price: 70, category: 'десерт' },
  { name: 'Брускетта', price: 90, category: 'закуска' },
  { name: 'Паста карбонара', price: 160, category: 'основна страва' },
  { name: 'Чізкейк', price: 60, category: 'десерт' },
];

const mainCourses = filterMenuByCategory(menu, 'основна страва');
console.log(mainCourses);
const starters = filterMenuByCategory(menu, 'закуска');
console.log(starters);

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

interface IUser {
  name: string;
  email: string;
  birthDate: Date;
}

function isAdult(user: IUser): boolean {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 18);
  return user.birthDate <= currentDate;
}

const user: IUser = {
  name: 'Maryna',
  email: 'ms@gamil.com',
  birthDate: new Date(1994, 8, 28),
};

console.log(isAdult(user));

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

interface CarProperties {
  brand: string;
  year: number;
  fuelType: 'petrol' | 'diesel' | 'electric';
}

class Car implements CarProperties {
  constructor(
    public brand: string,
    public year: number,
    public fuelType: 'petrol' | 'diesel' | 'electric',
  ) {}

  getDetails() {
    console.log(
      `This is a ${this.year} ${this.brand} that runs on ${this.fuelType}.`,
    );
  }
}

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.
interface StudentData {
  name: string;
  studentID: number;
  major: string;
}

class Student implements StudentData {
  constructor(
    public name: string,
    public studentID: number,
    public major: string,
  ) {}

  introduce() {
    console.log(
      `Hello, my name is ${this.name}. My student ID is ${this.studentID} and I study ${this.major}.`,
    );
  }
}
