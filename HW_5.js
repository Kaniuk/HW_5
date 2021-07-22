/*
- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
-- отримує текст з параграфа з id "content"
-- отримує текст з блоку з id "rules"
-- замініть текст параграфа з id 'content' на будь-який інший
-- замініть текст параграфа з id 'rules' на будь-який інший
-- змініть кожному елементу колір фону на червоний
-- змініть кожному елементу колір тексту на синій
-- отримати весь список класів елемента з id=rules і вивести їх в console.log
-- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
-- поміняти колір тексту у всіх елементів fc_rules на червоний*/

const contentElement = document.getElementById('content');
const contentText = contentElement.innerText;
console.log(contentText);
contentElement.innerText = `замініть текст параграфа з id 'content' на будь-який інший`;
contentElement.style.background = 'red';
contentElement.style.color = 'blue';


const rulesElement = document.getElementById('rules');
const rulesText = rulesElement.innerText;
console.log('rulesText', rulesText);
rulesElement.innerText = `замініть текст параграфа з id 'rules' на будь-який інший`;
rulesElement.style.background = 'red';
rulesElement.style.color = 'blue';
const rulesClassList = rulesElement.classList;
console.log('rulesClassList', rulesClassList);

const fcRulesElements = document.getElementsByClassName('fc_rules');
for (const fcRulesElement of fcRulesElements) {
    fcRulesElement.addEventListener('click', function (e) {
        console.log('---- fcRulesElement click 1 ----', fcRulesElement.innerText);
    });
    fcRulesElement.addEventListener('click', function (e) {
        console.log('---- fcRulesElement click 2 ----', 'random text');
    });

    fcRulesElement.style.color = 'red';
}

fcRulesElements.style.color = 'blur'