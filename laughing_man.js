const SQUARE_COUNT = 100;
const TIMER_SPEED = 16.6;
const SPEED = 5;

document.addEventListener("DOMContentLoaded", () => {

    let squareBox = document.querySelector("#square");

    squareBox.addEventListener("click", () => {
        alert("OMG YOU CLICKED ME!");
    });

    // change background color when mouseover #square
    squareBox.addEventListener("mouseover", () => {
        squareBox.style.backgroundColor = "blue";
    });

    squareBox.addEventListener("mouseout", () => {
        squareBox.style.backgroundColor = "red";
    });

    let box = document.querySelector("#box");

    // create squares
    for (let i = 0; i < SQUARE_COUNT; i++) {

        let square = document.createElement("img");

        // laughing man image
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";

        // change image on mouseover
        square.addEventListener("mouseover", () => {
            square.src = "orochimaru_50x50.jpg";
        });

        // change image back on mouseout
        square.addEventListener("mouseout", () => {
            square.src = "laughing_man.jpg";
        });

        box.appendChild(square);
    }

    Array.from(box.children).forEach((element) => {

        const parent = element.parentElement;

        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED * (Math.random() * 2 - 1);
        let dy = SPEED * (Math.random() * 2 - 1);

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;

        setInterval(() => {

            // hit left/right wall
            if (x <= 0 || x >= maxX) {

                dx *= -1;

                // change border color
                element.style.borderColor =
                    "rgb(" +
                    Math.floor(Math.random() * 256) + "," +
                    Math.floor(Math.random() * 256) + "," +
                    Math.floor(Math.random() * 256) + ")";
            }

            // hit top/bottom wall
            if (y <= 0 || y >= maxY) {

                dy *= -1;

                // change border color
                element.style.borderColor =
                    "rgb(" +
                    Math.floor(Math.random() * 256) + "," +
                    Math.floor(Math.random() * 256) + "," +
                    Math.floor(Math.random() * 256) + ")";
            }

            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";

        }, TIMER_SPEED);

    });

});