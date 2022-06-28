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
    modalCont.classList.add("active");
    addtaskModal.classList.add("active");
  });
});

const todoTaskContent = document.querySelector(".todo-task-content");

const preTaskMessage = document.querySelector(".pre-task-message");

createTask.addEventListener("click", createTaskFunc);
function createTaskFunc() {
  addTaskInputValue = addTaskInput.value;
  if (addTaskInputValue === " ") alert("Please, Create a Task");
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
    checkBoxDiv.setAttribute("class", "check-box-div");
    deleteIcon.setAttribute("class", "bi");
    deleteIcon.setAttribute("class", "bi-trash3");

    deleteIcon.addEventListener("click", () => {
      mainTodoTask.style.display = "none";
    });

    // divs Appended
    taskTxt.textContent = addTaskInputValue;
    todoTaskContent.append(mainTodoTask);
    mainTodoTask.append(checkBoxDiv, deleteIcon);
    checkBoxDiv.append(checkBox, taskTxt);

    addtaskModal.classList.remove("active");
    modalCont.classList.remove("active");
  }

  const search = document.querySelector(".search");
  const searchInput = document.querySelector(".searchinput");

  search.addEventListener("click", () => {
    searchInput.classList.toggle("active");
    const mainer = [...document.querySelectorAll(".main-todo-task")];
    console.log(mainer);

    const todos = mainer.filter((el) => {
      return search.value == taskTxt.textContent;
    });
  });
}
// search filter

//

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

entryMainInp.setAttribute("Required", true);

entryButton.addEventListener("click", entryButtonFunc);

function entryButtonFunc() {
  entryMainInpValue = entryMainInp.value;
  if (entryMainInpValue === " ") alert("Please, Enter your First name");
  else {
    firstName.textContent = entryMainInpValue + "!";
    mainName.textContent = entryMainInpValue;
    entryMainInp.value = " ";
    entryModalCont.classList.add("active");
  }
}

entryModalCont.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    entryButtonFunc();
  }
});
