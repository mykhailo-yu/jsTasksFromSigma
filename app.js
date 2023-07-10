// Задача 1
function arrDifference(arr) {
    return arr.length <= 1 ?  0 :  Math.max(...arr) - Math.min(...arr);
}
// console.log(arrDifference([1, 2, 3, -4]));
// console.log(arrDifference([1, 2, 3, -100, 456, 74, -754]));
// console.log(arrDifference([16]));

// Задача 2
function longWord(str, num) {
    const modifiedStr = str.replace(/[.,\/@#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
    // Видаляємо зі стрічки знаки пунктуації першим replace, 
    // Другим replace заміняємо більше двох пробілів одним, на випадок якщо такі утворяться
    const arr = modifiedStr.split(" ");
    // Методом split отримуємо стрічку розбиту за пробілами на слова у вигляді масиву
    let resultArr = [];
    arr.forEach(element => {
        if (element.length >= num) resultArr.push(element);
    });
    return resultArr;
}
// console.log(longWord("Hi world", 3));
// console.log(longWord("Lorem;;& ipsum$% #$ , dolor sit amet consectetur adipisicing elit. Cupiditate, ratione.", 6));

// Задача 3

function checkStrEnding(str1, str2) {
    if (str1.length < str2.length) {
        console.log("Перший рядок має бути довшим за другий");
        return false;
    }
    return str1.endsWith(str2);
}
// console.log(checkStrEnding('abc', 'bc'));
// console.log(checkStrEnding('abc', 'ac'));
// console.log(checkStrEnding('ac', 'abc'));

// Задача 4

function average(arr) {
    if (arr.length < 2) {
        console.log("Масив повинен мати хоча б 2 елементи");
        return false;
    }
    let averages = [];
    for (let i = 0; i < arr.length - 1; i++) {
        averages.push((arr[i] + arr[i+1]) / 2)
    }
    return averages;
}
// console.log(average([2, -2, 2, -2, 2]));
// console.log(average([1,-1,2,-2,4,5]));
// console.log(average([1]));

// Задача 5.1

function countVowels(str) {
    return str.match(/[aeiou]/ig).length;
}
// console.log(countVowels("Celebration"));
// console.log(countVowels("Palm"));


// Задача 5.2

function removeABC(str) {
    if (str.match(/[abc]/ig) === null) return null;
    return str.replace(/[abc]/ig, "");
}
// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));

// Задача 6
function difference(arr1, arr2) {
    arr2.forEach(element => {
        if (arr1.includes(element) === false) arr1.push(element);
    })
    return arr1;
}
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// Задача 7

function flipObject(obj) {
    let resultObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            resultObj[value] = key;
        }
    }
    return resultObj;
}
// console.log(flipObject({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

// Задача 8

function calculateDifference(obj, insurance) {
    if (Object.keys(obj).length < 1) {
        console.log("Об'єкт не може бути порожнім");
        return false;
    }
    let sum = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += obj[key];
        }
    }
    if (sum <= insurance) {
        console.log("Сума вартості предметів не може бути менша за страховку");
        return false;
    }
    else return sum - insurance;
}
// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
// console.log(calculateDifference({ skate: 10, painting: 200, shoes: 1 }, 400));
// console.log(calculateDifference({}, 400));

// Задача 9

function doesBrickFit(a, b, c, w, h) {
    if ((a <= w && b <= h) || (a <= w && c <= h) || (b <= w && c <= h) 
    || (a <= h && b <= w) || (a <= h && c <= w) || (b <= h && c <= w)) {
        return true;
    } else return false;
}
// console.log(doesBrickFit(1, 1, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 2, 1, 1));

// Задача 10

function cutFileName(path) {
    return path.split('\\').pop().split('.').shift();
}
// const path = "c:\\WebServers\\home\\testsite\\www\\myfile.txt";
// console.log(cutFileName(path));

// Задача 11

function cyclicShift(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    for (let i = 0; i < str2.length; i++) {
        if (str1 === str2.substring(i) + str2.substring(0, i)) {
            return true;
        }
    }
    return false;
}
// const str1 = "ABCDE";
// const str2 = "CDEAB";
// const str3 = "ADBCE";
// console.log(cyclicShift(str1, str2));
// console.log(cyclicShift(str1, str3));

// Задача 12
let arrB = [], arrC = [];
function sortArrElements(arrA) {
    if (arrA.length < 2 || (arrA.length % 2) != 0) return false;
    arrA.sort((a, b) => {return a - b});
    let closestPair = [arrA[0], arrA[1]];
    let minDifference = Math.abs(arrA[1] - arrA[0]);
    let indexOfClosestPairFirstElement = 0;
    for (let i = 0; i < arrA.length; i++) {
        let difference = Math.abs(arr[i + 1] - arr[i]);
        if (difference < minDifference) {
            minDifference = difference;
            closestPair = [arrA[i], arrA[i+1]];
            indexOfClosestPairFirstElement = i;
        }
    }
    arrB.push(closestPair[0]);
    arrC.push(closestPair[1]);
    arrA.splice(indexOfClosestPairFirstElement, 2);
    sortArrElements(arrA);
    return [arrB, arrC];
}
// const arr = [15, 9, 22, 17, 38, 55, 6, 14];
// console.log(sortArrElements(arr));

// Задача 13

function customizeString(str) {
    let strModified;
    const regExpEmail = /[\w-\.]+@([\w-]+\.)+[\w-]{2,}/g;
    const regExpUrl = /(https?\:\/\/)?(www\.)?[^\s]+\.[^\s]+/g;
    const regExpDigits = / [\d]{3,} /g;
    strModified = str.toLowerCase();
    strModified = strModified.charAt(0).toUpperCase() + strModified.slice(1);
    strModified = strModified.replace(regExpEmail, "[Контакти заборонені!]");
    strModified = strModified.replace(regExpUrl, "[Посилання заборонено!]");
    strModified = strModified.replace(regExpDigits, " ");
    if (strModified.length > str.length) {
        setInterval(() => {alert("Чи потрібна вам допомога?")}, 5000);
    }
    return strModified;
}
//console.log(customizeString("heLLODFzxc https://youtube.com 54 54654 s565465dfpdsf@sadas.asa"));
//console.log(customizeString("heLLODFzxc https://you.com 54 54654 s565465dfpdsf@sadas.asa"));

// Задача 14

function checkParenthesesBalance (text) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === '(') {
            counter++;
        } else if (text.charAt(i) === ')') {
            if (counter === 0) {
                return false;
            }
            counter--;
        }
    }
    return counter === 0;
}
function outputText() {
    if (checkParenthesesBalance(text)) {
        document.body.innerHTML = text;
        document.addEventListener('copy', (event) => {
            event.preventDefault();
        });
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
        document.addEventListener('keydown', (event) => {
            if (event.code === 'F12' || (event.ctrlKey && event.code === 'KeyU') ||
                (event.ctrlKey && event.code === 'KeyP')) {
                event.preventDefault();
            }
        });
        return true;
    }
    else {
        console.log('Баланс дужок не виконується')
        return false;
    }
}
// let text = '(Hello(World))';
// outputText(text);

// Задача 15

function createPassword() {
    let password = '';
    const passLength = Math.floor(Math.random() * 15) + 6;
    const chars = '_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (true) {
        password = '';
        let counterDigits = 0;
        let counterUpperCaseChars = 0;
        let counterUnderscores = 0;
        for (let i = 0; i < passLength; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            password += char;
            // Рахуємо кількість елементів
            if (char.match(/[A-Z]/)) counterUpperCaseChars++;
            else if (char.match(/[0-9]/)) counterDigits++;
            else if (char === '_') counterUnderscores++;
            // Перевіряємо на співпадіння двох цифр підряд
            if (i > 0 && password.charAt(i).match(/[0-9]/) && password.charAt(i) === password.charAt(i-1)) {
                break;
            }
        }
        // Перевіряємо виконання умов
        if (password.includes('_') && counterUnderscores === 1 && 
            counterUpperCaseChars >= 2 && counterDigits <= 5) 
        {
            break;
        }
    }
    return password;
}
// console.log(createPassword());

// Задача 16

// function rearrangeElementsInArray(arr) {

//     return ;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(rearrangeElementsInArray(arr));

// Задача 17

function sortStringChars(str) {
    const strToArr = str.split('');
    let charFrequency = {};
    strToArr.forEach((element) => {
        charFrequency[element] = (charFrequency[element] || 0) + 1;
    });
    let sortWords = Object.keys(charFrequency).sort((a, b) => {
        return charFrequency[b] - charFrequency[a];
    })
    let resultString = '';
    sortWords.forEach((element) => {
        resultString += element.repeat(charFrequency[element]);
    });
    return resultString;
}
// let str = 'Hello Abracadabra'
// console.log(sortStringChars(str));

// Задача 18

function longestSubstr(str1, str2) {
    let arr = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
    let maxValue = 0;
    let maxIndex = 0;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                arr[i][j] = (i === 0 || j === 0) ? 1 : arr[i - 1][j - 1] + 1;
                if (arr[i][j] > maxValue) {
                    maxValue = arr[i][j];
                    maxIndex = i;
                }
            }
        }
    }
    return str1.substring(maxIndex + 1 - maxValue, maxIndex + 1)
}
let str1 = 'abcdeasdadabcdsf';
let str2 = 'defghiabcdsj';
console.log(longestSubstr(str1, str2));

// Задача 19

// Функція виконує як шифрування так і дешифрування, 
// реалізована підтриимка латинського та українського алфавіту
// можна було реалізувати через кодування UTF, 
// проте там би були нюанси з українським алфавітом

function caesarsСipher(str, num) {
    const capitalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const capitalCyrChars = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
    const lowerCaseCyrChars = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';
    let strToArray = str.split('');
    let resultStr = '';
    for (let i = 0; i < strToArray.length; i++) {
        let index;
        let indexShifted;
        if (capitalChars.includes(strToArray[i])) {
            index = capitalChars.indexOf(strToArray[i]);
            indexShifted = (index + num) % capitalChars.length;
            if (indexShifted < 0) indexShifted += capitalChars.length;
            strToArray[i] = capitalChars.charAt(indexShifted);
        } else if (lowerCaseChars.includes(strToArray[i])) {
            index = lowerCaseChars.indexOf(strToArray[i]);
            indexShifted = (index + num) % lowerCaseChars.length;
            if (indexShifted < 0) indexShifted += lowerCaseChars.length;
            strToArray[i] = lowerCaseChars.charAt(indexShifted);
        } else if (capitalCyrChars.includes(strToArray[i])) {
            index = capitalCyrChars.indexOf(strToArray[i]);
            indexShifted = (index + num) % capitalCyrChars.length;
            if (indexShifted < 0) indexShifted += capitalCyrChars.length;
            strToArray[i] = capitalCyrChars.charAt(indexShifted);
        } else if (lowerCaseCyrChars.includes(strToArray[i])) {
            index = lowerCaseCyrChars.indexOf(strToArray[i]);
            indexShifted = (index + num) % lowerCaseCyrChars.length;
            if (indexShifted < 0) indexShifted += lowerCaseCyrChars.length;
            strToArray[i] = lowerCaseCyrChars.charAt(indexShifted);
        }
        resultStr += strToArray[i];
    }
    return resultStr;
} 
// let text = 'Hello, my dear friend, Hanz; Привіт, Яна';
// console.log(caesarsСipher(text, 5));
// console.log(caesarsСipher(caesarsСipher(text, 5), -5));

// Задача 20

function isAnagram(str1, str2) {
    if (str1.length != str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let length = str1.length;
    for (let i = 0; i < length; i++) {
        if (str2.includes(str1.charAt(i))) {
            str2 = str2.replace(str2.charAt(str2.indexOf(str1.charAt(i))), ' ');
            str1 = str1.replace(str1.charAt(i), ' ');
        }
        else {
            return false
        }
    }
    return true;
}
// const str1 = 'Mama';
// const str2 = 'amma';
// console.log(isAnagram(str1, str2));

// Задача 21

let university = {
    
}

// Задача 22

function textStatistics (text) {
    const charQuantity = text.length;
    const charQuantityWithoutSpaces = text.replaceAll(' ', '').length;
    const modifiedText = text.replace(/[.,\/@#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
    const words = modifiedText.split(' ');
    const sentences = text.split(/[.!?]\s/g);
    let wordFrequency = {};
    words.forEach((element) => {
        wordFrequency[element] = (wordFrequency[element] || 0) + 1;
    });
    let sortWords = Object.keys(wordFrequency).sort((a, b) => {
        return wordFrequency[b] - wordFrequency[a];
    })
    let mostFrequentWords = sortWords.slice(0, 3)
    document.body.innerHTML = `
        <h1>Статистика</h1>
        <p>Кількість слів у тексті: ${words.length}</p>
        <p>Кількість речень у тексті: ${sentences.length}</p>
        <p>Кількість символів у тексті: ${charQuantity}</p>
        <p>Кількість символів у тексті (без пробілів): ${charQuantityWithoutSpaces}</p>
        <p>Найчастіше зустрічаються у тексті слова:</p>
        <ol>
            ${
                mostFrequentWords.map((element) => {
                    return `<li>${element}</li>`;
                }).join('')
            }
        </ol>
    `
}
// let text = 'Hello world, my dear friend. It\'s my time. Here my site is google.com';
// textStatistics(text);