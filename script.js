const input = document.getElementById("userInput");
const taskList = document.getElementById("itemList");

// event listener to add the new task to the list once submit button is clicked

document.getElementById("submitButton").addEventListener("click", () => {

    if (input.value == "") {
        alert("Enter new task");
    } else {
        addNew();
    }
    input.value = "";
})

// function to create new task item

function addNew() {

    //create element for task box
    const newItem = document.createElement("div");
    newItem.className = "itemList";
    newItem.innerHTML = input.value;

    document.querySelector(".itemListBox").appendChild(newItem);

    // create element for edit button
    const editBtn = document.createElement("button");

    editBtn.className = "editBtnStyle";
    editBtn.innerHTML = "edit";

    document.querySelector(".itemListBox").appendChild(editBtn);

    //create save button for after a task has been edited

    const saveBtn = document.createElement("button");
    saveBtn.className = "saveBtnStyle";
    saveBtn.innerHTML = "save";

    document.querySelector(".itemListBox").appendChild(saveBtn);


    //create element for delete button
    const removeBtn = document.createElement("button");

    removeBtn.className = "buttonStyle";
    removeBtn.innerHTML = "delete";

    document.querySelector(".itemListBox").appendChild(removeBtn);

    // create element for complete button
    const completeBtn = document.createElement("button");

    completeBtn.className = "completeBtnStyle";
    completeBtn.innerHTML = "complete";

    document.querySelector(".itemListBox").appendChild(completeBtn);

    // add event listener to remove task item when clicked
    removeBtn.addEventListener("click", () => {
        newItem.remove();
        removeBtn.remove();
        completeBtn.remove();
        editBtn.remove();
        saveBtn.remove();
    })

    // add event listener to strike through completed tasks when done
    completeBtn.addEventListener("click", () => {
        newItem.style.textDecoration = "line-through";
    })


    // add event listener to make input editable when edit button is clicked

    editBtn.addEventListener("click", () => {
        newItem.contentEditable = true;
        newItem.style.backgroundColor = "rgba(250, 250, 250, 0.2)";

    })

    // add event listener to make input not editable when save button is clicked

    saveBtn.addEventListener("click", () => {
        newItem.contentEditable = false;
        newItem.style.backgroundColor = "rgba(250, 250, 250, 0.8)";

    })
}





