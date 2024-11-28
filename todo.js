const text = document.getElementById(`text-input`);
const addButton = document.querySelector(`.add-button`);
const inputBox = document.querySelector(`.container2`);

let totalTask = document.createElement(`p`);
let button = document.createElement(`button`);

let taskNo = 0;
getData();
function saveData() {
  if (taskNo === 0) {
    inputBox.innerHTML = "";
    localStorage.setItem(`data`, inputBox.innerHTML);
    localStorage.setItem(`data1`, JSON.stringify(taskNo));
    console.log(`not`);
  } else {
    console.log(`yes`);
    updateNum();
    localStorage.setItem(`data`, inputBox.innerHTML);
    localStorage.setItem(`data1`, JSON.stringify(taskNo));
  }
}

function getData() {
  inputBox.innerHTML = localStorage.getItem(`data`);
  taskNo = JSON.parse(localStorage.getItem(`data1`));
}

function updateNum() {
  if (taskNo === 0) {
    inputBox.innerHTML = "";
  } else {
    totalTask.innerHTML = `you have ${taskNo} pendeing task`;
  }
}

addButton.addEventListener(`click`, () => {
  if (text.value.trim() === "") {
    alert(`you must write something`);
  } else {
    // well i couldnt figure out why i cant remove the totalTask and button. clearly they are the inputbox child but i cant remove them this is the only problem i cant solve
    // if (inputBox.childNodes) {
    //console.log(inputBox.children);
    //console.log(inputBox.innerHTML);
    //inputBox.removeChild(totalTask);
    //inputBox.removeChild(button);

    //}

    let list = document.createElement(`li`);
    let img = document.createElement(`img`);

    list.innerHTML = text.value;
    img.src = "image/icons8-bin-24.png";

    taskNo = taskNo + 1;

    inputBox.appendChild(list).append(img);

    totalTask.className = `total-task`;
    button.className = `clear-button`;
    button.innerHTML = `Clear all`;
    totalTask.innerHTML = `you have ${taskNo} pendeing task`;
    inputBox.appendChild(totalTask);
    inputBox.appendChild(button);
    text.value = "";
    saveData();

    //console.log(inputBox.innerHTML);
  }
});

inputBox.addEventListener(`click`, (e) => {
  if (e.target.tagName === `IMG`) {
    taskNo = taskNo - 1;
    if (taskNo <= 0) {
      taskNo = 0;
      updateNum();
      saveData();
    } else {
      e.target.parentElement.remove();
      taskNo = taskNo;
      updateNum();
      saveData();
    }
  } else if (e.target.tagName === `BUTTON`) {
    e.target.parentElement.innerHTML = "";
    taskNo = 0;

    updateNum();
    saveData();

    //console.log(inputBox.innerHTML);
  }
});

//console.log(inputBox.childNodes);
