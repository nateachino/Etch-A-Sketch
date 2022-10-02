const container = document.getElementById("container");

function createDivs(num) {
  for (i = 0; i < num; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("sketch");
    container.appendChild(newDiv);
  }
}

function colorBrick(e) {
  e.style.backgroundColor = "red";
}

createDivs(256);

let divs = document.querySelectorAll(".sketch");

divs.forEach((element) => {
  element.addEventListener("mouseover", function () {
    colorBrick(element);
  });
});

container.style.gridTemplateColumns = "repeat(" + 16 + ",auto)";
container.style.gridTemplateRows = "repeat(" + 16 + ",auto)";
