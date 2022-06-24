const input = document.getElementById("userInput");
const taskList = document.getElementById("itemList");

document.getElementById("submitButton").addEventListener("click", () => {
    document.getElementById("itemList").innerHTML = input.value;
})