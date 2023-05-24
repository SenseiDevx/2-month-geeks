// var lang = prompt('Выбор языка и дня')
// switch (lang) {
//     case 'ru':
//         console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
//         break
//     case 'en':
//         console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'])
//         break
//     default :
//         alert('ERROR')
//         break
// }

// var lang = prompt('Выбор языка и дня');
// if (lang === 'ru') {
//     console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
// } else if (lang === 'en') {
//     console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
// } else {
//     alert('ERROR');
// }


// Запрос оценки от пользователя
var rating = parseInt(prompt("Пожалуйста, оцените наш сервис от 1 до 10:"));

// Проверка оценки и вывод соответствующего сообщения
if (rating >= 5) {
    alert("Спасибо за высокую оценку!");
} else if (rating < 5){
    alert("Мы работаем над улучшением сервиса!");
}else {
    alert("Введите только чилса!!!")
}
