// corrected script.js

// selectors
let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']"
);
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']"
);
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']"
);
const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']"
);

const categoryRadios = form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-btn");

// helper: save tasks
function saveToLocalStorage(obj) {
  const raw = localStorage.getItem("tasks");
  const oldTasks = raw ? JSON.parse(raw) : [];
  oldTasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

// show / hide form
addNote.addEventListener("click", function () {
  formContainer.style.display = "block"; // clearer than "initial"
});

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});

// form submit handler
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = null;
  categoryRadios.forEach(function (dets) {
    if (dets.checked) {
      selected = dets.value;
    }
  });

  if (!imageUrl) {
    alert("Please enter an Image URL.");
    return;
  }

  if (!fullName) {
    alert("Please enter your Full Name.");
    return;
  }

  if (!homeTown) {
    alert("Please enter your Home Town.");
    return;
  }
  if (!purpose) {
    alert("Please enter your Purpose.");
    return;
  }

  if (!selected) {
    alert("Please select a Category");
    return;
  }

  saveToLocalStorage({
    imageUrl,
    fullName,
    purpose,
    homeTown,
    selected,
  });

  form.reset();
  formContainer.style.display = "none";
  showCards();
});

function createCard(task) {
    const card = document.createElement("div");
    card.classList.add("card");

    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);

    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");
    hometownInfo.innerHTML = `<span>Home town</span><span>${task.homeTown}</span>`;
    card.appendChild(hometownInfo);

    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");
    bookingsInfo.innerHTML = `<span>Purpose</span><span>${task.purpose}</span>`;
    card.appendChild(bookingsInfo);
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    const editBtn = document.createElement("button");
    editBtn.classList.add("call");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("msg");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      allTasks = allTasks.filter((t) => t.fullName !== task.fullName);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      showCards();
    });

    editBtn.addEventListener("click", () => {
      formContainer.style.display = "block";

      imageUrlInput.value = task.imageUrl;
      fullNameInput.value = task.fullName;
      homeTownInput.value = task.homeTown;
      purposeInput.value = task.purpose;

      categoryRadios.forEach((r) => {
        r.checked = r.value === task.selected;
      });

      let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      allTasks = allTasks.filter((t) => t.fullName !== task.fullName);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
    });

    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    card.appendChild(buttonsDiv);
    stack.appendChild(card);
  }

// render cards to DOM
function showCards() {
  stack.innerHTML = "";

  const raw = localStorage.getItem("tasks");
  const allTasks = raw ? JSON.parse(raw) : [];

  allTasks.forEach(task => createCard(task));
  updateStack();
}

// update visible stack appearance
function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  cards.forEach((card, i) => {
    if (i < 3) {
      card.style.zIndex = 3 - i;
      card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
      card.style.opacity = `${1 - i * 0.02}`;
      card.style.display = "block";
    } else {
      card.style.display = "none";
      // reset transform/opacity if you want:
      card.style.transform = "";
      card.style.opacity = "";
      card.style.zIndex = "";
    }
  });
}

// card cycling
upBtn.addEventListener("click", function () {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);
    updateStack();
  }
});

downBtn.addEventListener("click", function () {
  const firstChild = stack.firstElementChild;
  if (firstChild) {
    stack.appendChild(firstChild);
    updateStack();
  }
});

// initial render
showCards();

document
  .querySelector(".black")
  .addEventListener("click", () => filterCards("emergency"));
document
  .querySelector(".purple")
  .addEventListener("click", () => filterCards("important"));
document
  .querySelector(".orange")
  .addEventListener("click", () => filterCards("urgent"));
document
  .querySelector(".teal")
  .addEventListener("click", () => filterCards("no-rush"));

function filterCards(category) {
  const raw = localStorage.getItem("tasks");
  const allTasks = raw ? JSON.parse(raw) : [];

  const filtered = allTasks.filter((t) => t.selected === category);

  stack.innerHTML = "";

  filtered.forEach((task) => createCard(task));
  updateStack();
}
