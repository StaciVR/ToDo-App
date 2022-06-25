const input = document.getElementById("userInput");
const taskList = document.getElementById("itemList");

document.getElementById("submitButton").addEventListener("click", () => {
    if (input.value == "") {
        alert("Enter new task");
    } else {
        addNew();
    }

    input.value = "";

})

function addNew() {
    const newItem = document.createElement("div");
    newItem.className = "itemList";
    newItem.innerHTML = input.value;

    document.querySelector(".itemListBox").appendChild(newItem);

}
