const prog = document.getElementById("programming");
const mouse = document.getElementById("mouse");

document.onmousemove = function (event) {
  const x = event.clientX;
  const y = event.clientY;

  mouse.style.left = x + "px";
  mouse.style.top = y + "px";

  let distX = x - prog.offsetLeft - prog.offsetWidth / 2;
  let distY = y - prog.offsetTop - prog.offsetHeight / 2;

  let newShadow = "";
  for (let i = 0; i < 200; i++) {
    let shX = -distX * (i / 200);
    let shY = -distY * (i / 200);
    let opacity = 1 - i / 100;
    newShadow += `${
      newShadow ? "," : ""
    }${shX}px ${shY}px 0 rgba(44, 51, 58, ${opacity})`;
  }

  prog.style.textShadow = newShadow;
};
