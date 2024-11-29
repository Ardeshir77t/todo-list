// well i really tried to remove the last section and i almost manage to do it check the line 81..when we refresh the site , the number of element that have the classname total-task is increased by one and it is in a object so idk why i cant delete it

const text = document.getElementById(`text-input`);
const addButton = document.querySelector(`.add-button`);
const inputBox = document.querySelector(`.container2`);

let totalTask = document.createElement(`p`);
let button = document.createElement(`button`);

let x;
let y;

//console.log(totalTask);

//console.log(button);

let taskNo = 0;
getData();
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

    x = document.getElementsByClassName(`total-task`);
    y = document.getElementsByClassName(`clear-button`);

    if (x.length > 1) {
      delete x["0"];
      delete y["0"];
      console.log(y["0"]);
      console.log(x["0"]);
      //console.log(y)
      //console.log(x);
      //console.log(x.length);
      //console.log(typeof x);
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

//console.log(inputBox.childNodes);
let b = { 12: 90, d: 89 };
delete b[`d`];
delete b["12"];
console.log(b);
