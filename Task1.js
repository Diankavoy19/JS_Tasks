const name = prompt("Введіть ім'я:");
const birthYearString = prompt("Введіть рік народження:");
const student = prompt("Чи є ви студентом? (Так/Ні):");
const languageString = prompt("Улюблена мова програмування:");
const friendsString = prompt("Кількість друзів у соцмережі:");
const likesString = prompt("Кількість лайків:");

const birthdayYear = Number (birthYearString);
const currentYear = new Date().getFullYear();
const age = currentYear - birthdayYear;
const isStudent = student && student.toLowerCase() === "так";
const friends = parseInt(friendsString, 10);
const newFriendsCount = friends + 1;
const likes = Number(likesString);
const daysLived = age * 365;
const msLived = daysLived * 24 * 60 * 60 * 1000;

let language = '';
switch (languageString.toLowerCase()) {
	case 'javascript':
	  language = 'JavaScript — універсальний вибір для вебу';
	  break;
	case 'python':
	  language = 'Python — сильний у data science та автоматизації';
	  break;
	case 'c++':
	case 'java':
	  language = 'Мова системного рівня — ефективна та продуктивна';
	  break;
	default:
	  language = 'Спробуйте JavaScript — гнучкий і популярний';
	  break;
  }

  let newLikes = 0;
  if (age < 30 && isStudent) {
	newLikes = 2;
  } else if (age > 30 || !isStudent) {
	newLikes = -1;
  }
  const finalLikes = likes + newLikes;

alert(
	`Привіт, ${name}! Тобі ${age} років. Статус: студент - ${isStudent}.\n` +
	`Тип імені: ${typeof name}\n` +
	`Тип віку: ${typeof age}\n` +
	`Тип студентства: ${typeof isStudent}\n` +
	`Тип мови: ${typeof languageString}\n` +
	`Тип друзів: ${typeof friends}\n` +
	`Тип лайків: ${typeof likes}\n` +
	`У тебе тепер ${newFriendsCount} друзів\n` +
	`${language}\n` +
	`Ти прожив ${daysLived} днів — це ${msLived} мілісекунд\n` +
	`Кількість лайків: ${finalLikes}`
  );