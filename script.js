var flexContainer = document.querySelector(".flex-container");
var playButton = document.querySelector(".play-button");
var brightnessLevel = 100;
var brightnessDirection = 1;
var validateInput = function () {
    var input = prompt("Please enter a number between 4 and 100", "16");
    if (!Number(input) || Number(input) > 100 || Number(input) < 4) {
        if (confirm("Not a valid number. Please try again")) {
            return validateInput();
        }
    }
    flexContainer.innerHTML = "";
    createGrid(Number(input));
};
playButton.addEventListener("click", validateInput);
var createRandomRGB = function () {
    return Math.floor(Math.random() * 255);
};
var createGrid = function (num) {
    var _loop_1 = function (i) {
        var flexEl = document.createElement("div");
        flexEl.classList.add("flex-element");
        flexEl.style.width = "".concat(960 / num, "px");
        flexEl.style.height = "".concat(960 / num, "px");
        flexEl.addEventListener("mouseover", function (e) {
            if (!flexEl.classList.contains("activated")) {
                e.target.style.backgroundColor = "rgb(".concat(createRandomRGB(), ", ").concat(createRandomRGB(), ", ").concat(createRandomRGB(), ")");
                e.target.style.filter = "brightness(".concat(brightnessLevel, "%)");
                if (brightnessDirection === 1) {
                    brightnessLevel -= 10;
                    if (brightnessLevel === 0) {
                        brightnessDirection = 0;
                    }
                }
                else {
                    brightnessLevel += 10;
                    if (brightnessLevel === 100) {
                        brightnessDirection = 1;
                    }
                }
                flexEl.classList.add("activated");
            }
        });
        flexContainer.appendChild(flexEl);
    };
    for (var i = num * num; i > 0; i--) {
        _loop_1(i);
    }
};
createGrid(16);
