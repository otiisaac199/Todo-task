// Hamburger

const closeBtn = document.querySelector(".icon-nav");
const mainMenu = document.querySelector(".menu-container");
const todo = document.querySelector(".todo-container");
const bar = document.querySelector(".list");

bar.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
  todo.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  todo.classList.remove("active");
});

// task

const addTaskbtn = document.querySelectorAll(".cur");
const modalCont = document.querySelector(".modal-cont");
const addtaskModal = document.querySelector(".addtask-modal");
let addTaskInput = document.querySelector(".add-task-inp");
const createTask = document.querySelector(".cursor");

const cc = addTaskbtn.forEach((el) => {
  el.addEventListener("click", () => {
    addTaskInput.value = "";
    modalCont.classList.add("active");
    addtaskModal.classList.add("active");
  });
});

const todoTaskContent = document.querySelector(".todo-task-content");

const preTaskMessage = document.querySelector(".pre-task-message");

addTaskInput.setAttribute("required", true);

let mainerID;

createTask.addEventListener("click", createTaskFunc);
function createTaskFunc() {
  addTaskInputValue = addTaskInput.value;

  addTaskInputValue.trim();
  if (!addTaskInputValue) alert("Please, Create a Task");
  else {
    // assignments of variables needed
    preTaskMessage.style.display = "none";

    const mainTodoTask = document.createElement("div");
    const checkBoxDiv = document.createElement("div");
    const checkBox = document.createElement("input");
    const taskTxt = document.createElement("p");
    const deleteIcon = document.createElement("i");

    // set the attributes of the element created
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkbox");
    mainTodoTask.setAttribute("class", "main-todo-task");
    taskTxt.setAttribute("class", "task-txt");
    taskTxt.setAttribute("contenteditable", true);
    checkBoxDiv.setAttribute("class", "check-box-div");
    deleteIcon.setAttribute("class", "bi");
    deleteIcon.setAttribute("class", "bi-trash3");

    // divs Appended
    taskTxt.textContent = addTaskInputValue;
    todoTaskContent.append(mainTodoTask);
    mainTodoTask.append(checkBoxDiv, deleteIcon);
    checkBoxDiv.append(checkBox, taskTxt);

    addtaskModal.classList.remove("active");
    modalCont.classList.remove("active");

    // delete button
    deleteIcon.addEventListener("click", () => {
      mainTodoTask.style.display = "none";
    });
    const mainer = [...document.querySelectorAll(".main-todo-task")];
    console.log(mainer);
    mainerID = mainer;
  }
}

const search = document.querySelector(".search");
const searchInput = document.querySelector(".searchinput");

search.addEventListener("click", () => {
  searchInput;
  searchInput.classList.toggle("active");
  console.log(mainerID);

  searchInput.addEventListener("keyup", (e) => {
    searchInputValue = searchInput.value;
    const fd = mainerID.filter((each_el) => {
      let each = each_el.childNodes[0].childNodes[1].textContent;
      if (each.toLowerCase().trim().includes(searchInputValue)) {
        return each_el;
      }
    });
    let fdd = fd.map((each) => {
      return `<div class="main-todo-task">
        <div class="check-box-div">
         <input type="checkbox" class="checkbox" />
         <p class="task-txt">${each.textContent}</p>
        </div>
        <i class="bi bi-trash3"></i>
     </div>`;
    });
    todoTaskContent.innerHTML = fdd;
  });
});

// The Enter key button click to run the createTaskFunc()
addTaskInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    createTaskFunc();
  }
});

// entry BTN
const entryButton = document.querySelector(".entryBtn");
let entryMainInp = document.querySelector(".entry-main-inp");
const entryModalCont = document.querySelector(".entrymodal-cont");
const firstName = document.querySelector(".first-name");
const mainName = document.querySelector(".main-name");

entryButton.addEventListener("click", entryButtonFunc);
entryMainInp.value = " ";

function entryButtonFunc() {
  entryMainInp.setAttribute("required", true);
  entryMainInpValue = entryMainInp.value;
  // entryMainInpValue.trim();
  if (!entryMainInpValue) alert("Please, Enter your First name");
  else {
    firstName.textContent = entryMainInpValue + "!";
    mainName.textContent = entryMainInpValue;
    entryModalCont.classList.add("active");
  }
}

entryModalCont.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    entryButtonFunc();
  }
});
