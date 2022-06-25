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

// to create new task item

function addNew() {
    const newItem = document.createElement("div");
    newItem.className = "itemList";
    newItem.innerHTML = input.value;

    document.querySelector(".itemListBox").appendChild(newItem);

    const editBtn = document.createElement("button");

    editBtn.className = "editBtnStyle";
    editBtn.innerHTML = "edit";

    document.querySelector(".itemListBox").appendChild(editBtn);

    const removeBtn = document.createElement("button");

    removeBtn.className = "buttonStyle";
    removeBtn.innerHTML = "delete";

    document.querySelector(".itemListBox").appendChild(removeBtn);

    const completeBtn = document.createElement("button");

    completeBtn.className = "completeBtnStyle";
    completeBtn.innerHTML = "complete";

    document.querySelector(".itemListBox").appendChild(completeBtn);


}



