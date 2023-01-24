const hexCodeBlock = document.querySelector(".colors__hex-code");
const button = document.querySelector(".colors__btn");

const getColor = () => {
  let hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexCode = "";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexNumbers.length);

    hexCode += hexNumbers[index];
  }

  hexCodeBlock.innerHTML = 'The hex code of the color is: #' + hexCode
  document.body.style.background = '#' + hexCode
};

button.addEventListener("click", (event) => {
  getColor()
});
