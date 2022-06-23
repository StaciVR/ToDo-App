const userInput = document.getElementById("submitButton");

userInput.addEventListener('click', function () {

    let myVar = document.getElementById("inputTask").value;
    listItem(myVar)
})

function listItem(param) {
    document.getElementById("itemList").innerHTML = param
}

let myArray = [];

let newTaskEntry = docuemnt.getElementById("testArray").value;

let taskList = myArray.push(newTaskEntry);

document.getElementById("submit").addEventListener("click", () => {
    let myArray = [];

    let newTaskEntry = docuemnt.getElementById("testArray").value;

    let taskList = myArray.push(newTaskEntry);
    Document.getElementById("testList").innerHTML = "taskList";
})