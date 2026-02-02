let menu = document.querySelector("#context-menu");
 document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    menu.style.display = "block";
    menu.style.top = e.clientY + "px";
    menu.style.left = e.clientX + "px";
 });
 document.addEventListener("click", () => {
    menu.style.display = "none";
});

const startBtn = document.getElementById("box");
const startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    startMenu.style.display =
        startMenu.style.display === "block" ? "none" : "block";
});

startMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    startMenu.style.display = "none";
});

const appMap = {
  "explorer-icon": "explorer-window",
  "vscode-icon": "vscode-window",
  "chrome-icon": "chrome-window",
  "brave-icon": "brave-window"
};

let z = 20;

Object.keys(appMap).forEach(iconId => {
  const icon = document.getElementById(iconId);
  const winId = appMap[iconId];
  const win = document.getElementById(winId);

  icon.addEventListener("click", () => {
    win.style.display = "block";
    win.style.zIndex = ++z;
  });
});

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

document.querySelectorAll(".app-window").forEach(win => {
  win.addEventListener("mousedown", () => {
    win.style.zIndex = ++z;
  });
});


