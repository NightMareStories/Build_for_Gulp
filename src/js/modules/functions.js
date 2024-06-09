// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image(); // Аналогично createElement
        webP.onload = webP.onerror = function () { // При успешной загрузке или при ошибке
            callback(webP.height == 2); // В параметры callback передаем условие 
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"; // Указываем путь изображения
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp'; // Проверяем верно ли условие, и записываем получившийся класс
        document.documentElement.classList.add(className); // Присваеваем класс в html
    });
}