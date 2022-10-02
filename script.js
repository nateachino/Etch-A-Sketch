const container = document.getElementById("container");
let value = 16;
let formula = value * value;

function createDivs(num) {
  for (i = 0; i < num; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("sketch");
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover", function () {
      colorBrick(this);
    });
  }
}

function deleteDivs() {
  container.textContent = "";
}

function colorBrick(e) {
  e.style.backgroundColor = "black";
}

function changeValue(e) {
  value = e.target.value;
  formula = value * value;
  console.log(value);
  inputValue.textContent = e.target.value + "x" + e.target.value;
  deleteDivs();
  console.log(formula);
  createDivs(formula);
  container.style.gridTemplateColumns = "repeat(" + value + ",auto)";
  container.style.gridTemplateRows = "repeat(" + value + ",auto)";
}

createDivs(formula);

const slider = document.querySelector("input");
const inputValue = document.getElementById("rangeValue");

container.style.gridTemplateColumns = "repeat(" + value + ",auto)";
container.style.gridTemplateRows = "repeat(" + value + ",auto)";

slider.addEventListener("change", changeValue);

const reset = document.querySelector("button");
const sketch = document.querySelectorAll(".sketch");

reset.addEventListener("mousedown", function (e) {
  deleteDivs();
  console.log(formula);
  createDivs(formula);
});
