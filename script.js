const input = document.getElementById("userInput");
const taskList = document.getElementById("itemList");

document.getElementById("submitButton").addEventListener("click", () => {
    const newItem = document.createElement("div");
    newItem.className = "itemList";
    newItem.innerHTML = input.value;

    document.querySelector(".itemListBox").appendChild(newItem);

    input.value = "";

})

