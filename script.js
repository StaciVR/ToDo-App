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
    })

    // add event listener to strike through completed tasks when done
    completeBtn.addEventListener("click", () => {
        newItem.style.textDecoration = "line-through";
    })


}





