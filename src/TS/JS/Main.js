// Получаем массив всех элиментов radio-button
const $arrayInputGroupContainerForVopros = document.querySelectorAll(".input-container-for-vopros");
const $arrayInputGroupContainerForVopros2 = document.querySelectorAll(".input-container-for-vopros-2");
const $arrayInputGroupContainerForVopros3 = document.querySelectorAll(".input-container-for-vopros-3");
const $arrayInputGroupContainerForVopros4 = document.querySelectorAll(".input-container-for-vopros-4");
const $arrayInputGroupContainerForVopros5 = document.querySelectorAll(".input-container-for-vopros-5");
const $button = document.querySelector(".button");
// Кнопка начать тест заново 
const $buttonReplay = document.querySelector(".button-replay");
// Сообщение о количестве правильных ответов
const $alertMessageResult = document.querySelector(".alert-message-result");
// Массив правильных ответов
const arrayTrueResponse = [
    "JavaScript",
    "Язык гипертекстовой разметки для создания каркасса сайта",
    "Движок для создания игр",
    "Swift",
    "Таблицы стилей используемые для стилизации веб-страниц"
];
// Количество правильных ответов
let countTrueResponse = 0;
$button.addEventListener("click", () => {
    $arrayInputGroupContainerForVopros.forEach((item) => {
        // Получаем родительский элемент и меняем задний фон правильного ответа 
        $arrayInputGroupContainerForVopros[1].parentElement.style.background = "green";
        /*
            Если перебераемый элимент выбран и при этом внутринее содержимое рядом находящегося элимента <i>
            будет равно элименту массива это говорит о том что был сделан верный ответ
        */
        if (item.checked && item.nextElementSibling.innerHTML === arrayTrueResponse[0]) {
            countTrueResponse++;
        }
    });
    $arrayInputGroupContainerForVopros2.forEach((item) => {
        $arrayInputGroupContainerForVopros2[0].parentElement.style.background = "green";
        if (item.checked && item.nextElementSibling.innerHTML === arrayTrueResponse[1]) {
            countTrueResponse++;
        }
    });
    $arrayInputGroupContainerForVopros3.forEach((item) => {
        $arrayInputGroupContainerForVopros3[2].parentElement.style.background = "green";
        if (item.checked && item.nextElementSibling.innerHTML === arrayTrueResponse[2]) {
            countTrueResponse++;
        }
    });
    $arrayInputGroupContainerForVopros4.forEach((item) => {
        $arrayInputGroupContainerForVopros4[1].parentElement.style.background = "green";
        if (item.checked && item.nextElementSibling.innerHTML === arrayTrueResponse[3]) {
            countTrueResponse++;
        }
    });
    $arrayInputGroupContainerForVopros5.forEach((item) => {
        $arrayInputGroupContainerForVopros5[0].parentElement.style.background = "green";
        if (item.checked && item.nextElementSibling.innerHTML === arrayTrueResponse[4]) {
            countTrueResponse++;
        }
    });
    // Вывод количества правильных ответов 
    $alertMessageResult.style.display = "block";
    $alertMessageResult.innerHTML = `Вы ответили правильно на ${countTrueResponse} из 5 вопросов!`;
    $button.style.display = "none";
    $buttonReplay.style.display = "block";
    // Функция для перезагрузки страницы
    $buttonReplay.addEventListener("click", () => {
        window.location.reload();
        $arrayInputGroupContainerForVopros.forEach((item) => {
            item.checked = false;
        });
        $arrayInputGroupContainerForVopros2.forEach((item) => {
            item.checked = false;
        });
        $arrayInputGroupContainerForVopros3.forEach((item) => {
            item.checked = false;
        });
        $arrayInputGroupContainerForVopros4.forEach((item) => {
            item.checked = false;
        });
        $arrayInputGroupContainerForVopros5.forEach((item) => {
            item.checked = false;
        });
    });
});
