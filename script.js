document.addEventListener("DOMContentLoaded", function () {
    const snake = document.getElementById("snake");
    const food = document.getElementById("food");

    let snakeX = 10;
    let snakeY = 10;
    let foodX = 5;
    let foodY = 5;
    let gridSize = 20;

    function update() {
        snake.style.left = snakeX * gridSize + "px";
        snake.style.top = snakeY * gridSize + "px";
        food.style.left = foodX * gridSize + "px";
        food.style.top = foodY * gridSize + "px";
    }

    function moveSnake() {
        // قم بتحديث موقع الثعبان هنا
        // ...

        // اتصالات لتحديث موقع الثعبان والطعام
        // ...

        // استدعاء التحديث
        update();
    }

    function gameLoop() {
        // استدعاء حركة الثعبان بشكل دوري
        // ...

        // استدعاء التحديث
        // ...
    }

    // استدعاء دورة اللعبة
    gameLoop();
});
