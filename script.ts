const flexContainer: HTMLElement = document.querySelector(".flex-container");
const playButton: HTMLElement = document.querySelector(".play-button");
let brightnessLevel: number  = 100;
let brightnessDirection: number = 1;
const validateInput = () => {
	const input = prompt("Please enter a number between 4 and 100", "16");
	if (!Number(input) || Number(input) > 100 || Number(input) < 4) {
		if(confirm("Not a valid number. Please try again")){
			return validateInput()
		}
	}
	flexContainer.innerHTML = "";
	createGrid(Number(input));
}

playButton.addEventListener("click", validateInput)

const createRandomRGB = (): number  => {
	return Math.floor(Math.random() * 255);
}

const createGrid = (num: number): void => {
	for(let i = num * num; i > 0; i--){
		let flexEl = document.createElement("div");
		flexEl.classList.add("flex-element");
		flexEl.style.width = `${960 / num}px`;
		flexEl.style.height= `${960 / num}px`;
		flexEl.addEventListener("mouseover", function(e) {
			if(!flexEl.classList.contains("activated")){
			(e.target as HTMLElement).style.backgroundColor = `rgb(${createRandomRGB()}, ${createRandomRGB()}, ${createRandomRGB()})`;
			(e.target as HTMLElement).style.filter = `brightness(${brightnessLevel}%)`;
			if(brightnessDirection === 1) {
				brightnessLevel -= 10;
				if (brightnessLevel === 0) {
					brightnessDirection = 0;
				}
			} else {
				brightnessLevel += 10;
				if (brightnessLevel === 100) {
					brightnessDirection = 1;
				}
			}
			flexEl.classList.add("activated");
		}
				});
		flexContainer.appendChild(flexEl);
	}
};

createGrid(16);
