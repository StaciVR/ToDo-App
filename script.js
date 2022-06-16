const userInput = document.getElementById("submitButton");

userInput.addEventListener('click', function () {

    let myVar = document.getElementById("inputTask").value;
    listItem(myVar)
})

function listItem(param) {
    document.getElementById("itemList").innerHTML = param
}