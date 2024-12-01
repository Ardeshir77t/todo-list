const text = document.getElementById(`text-input`);
const addButton = document.querySelector(`.add-button`);
const inputBox = document.querySelector(`.container2`);

let totalTask = document.createElement(`p`);
let button = document.createElement(`button`);

let taskNo = 0;

let isDeleted = false;
function resetData() {
  if (isDeleted !== true) {
    localStorage.removeItem(`data`, inputBox.innerHTML);
    localStorage.removeItem(`data1`, JSON.stringify(taskNo));
    isDeleted = true;
    console.log(isDeleted);
    console.log(`working`);
  }
}

function saveData() {
  if (taskNo === 0) {
    inputBox.innerHTML = "";
    localStorage.setItem(`data`, inputBox.innerHTML);
    localStorage.setItem(`data1`, JSON.stringify(taskNo));
    //console.log(`not`);
  } else {
    // console.log(`yes`);
    updateNum();
    localStorage.setItem(`data`, inputBox.innerHTML);
    localStorage.setItem(`data1`, JSON.stringify(taskNo));
  }
}

function getData() {
  inputBox.innerHTML = localStorage.getItem(`data`);
  taskNo = Number(localStorage.getItem(`data1`));
}

function updateNum() {
  if (taskNo === 0) {
    inputBox.innerHTML = "";
  } else {
    totalTask.innerHTML = `you have ${taskNo} pendeing task`;
  }
}

getData();

addButton.addEventListener(`click`, () => {
  if (text.value.trim() === "") {
    alert(`you must write something`);
  } else {
    taskNo = taskNo + 1;

    let list = document.createElement(`li`);
    let img = document.createElement(`img`);

    list.innerHTML = text.value;
    img.src = "image/icons8-bin-24.png";

    inputBox.appendChild(list).append(img);

    totalTask.className = `total-task`;
    button.className = `clear-button`;
    button.innerHTML = `Clear all`;
    totalTask.innerHTML = `you have ${taskNo} pendeing task`;
    inputBox.appendChild(totalTask);
    inputBox.appendChild(button);
    text.value = "";

    let x = document.querySelectorAll(`.total-task`);
    let y = document.querySelectorAll(`.clear-button`);
    for (let i = 0; i < x.length; i = i + 1) {
      if (x.length > 1) {
        console.log(x[i]);
        console.log(y[i]);
        x[0].remove();
        y[0].remove();
      }
    }

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
//console.log(localStorage);

//console.log(inputBox.childNodes);
