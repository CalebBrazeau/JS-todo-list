const todoItems = {
    items: {},
    count: 0
}; 
function deleteToDoItem(todoItem) {
    var itemContainer = todoItem.parentNode.parentNode;
    console.log(itemContainer);
    console.log(itemContainer.id + " Removed!");
    itemContainer.remove();
    if($("[id=todo-container]")[0].children.length <= 0) {
        var h1 = document.createElement("h1");
        h1.id = "no-items-left";
        h1.innerHTML = "No todo Items!";
        $("[id=todo-container]").prepend(h1);
    }
}
function createToDoItem() {
    var chillen = $("#todo-container").children();
    
    // Container div
    var mainContainer = document.createElement("div");
    mainContainer.id = "todo-" + (chillen.length + 1);
    mainContainer.className = "d-flex todo-item-container shadow rounded";
    $("#todo-container").append(mainContainer);

    // Checkbox Container div
    var checkboxContainer = document.createElement("div");
    checkboxContainer.id = "todo-complete-container";
    checkboxContainer.className = "todo-complete-container";
    // TODO Checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Append Checkbox to Container
    checkboxContainer.appendChild(checkbox);

    // Content Container div
    var contentContainer = document.createElement("div");
    contentContainer.id = "todo-content-container";
    contentContainer.className = "todo-content-container";
    // Input Box
    var content = document.createElement("textarea");
    content.cols = mainContainer.clientWidth / 10;
    // Append Checkbox to Container
    contentContainer.appendChild(content);

    // Remove Container div
    var removeContainer = document.createElement("div");
    removeContainer.id = "todo-remove-container";
    removeContainer.className = "todo-remove-container";
    // Delete Button
    var removeButton = document.createElement("button");
    removeButton.item = "remove-item";
    removeButton.className = "del-btn shadow";
    // Delete todo item function
    removeButton.addEventListener("click", function() { 
        var itemContainer = this.parentNode.parentNode;
        console.log(itemContainer);
        console.log(itemContainer.id + " Removed!");
        itemContainer.remove();
        if($("[id=todo-container]")[0].children.length <= 0) {
            var h1 = document.createElement("h1");
            h1.id = "no-items-left";
            h1.innerHTML = "No todo Items!";
            $("[id=todo-container]").prepend(h1);
            todoItems.count--;
        }
    });
    // Delete Icon
    var removeIcon = document.createElement("img");
    removeIcon.src = "img/icons/icons8-delete.svg";
    removeIcon.alt = "Delete Icon";
    removeIcon.className = "del-icon";
    removeButton.appendChild(removeIcon);
    removeContainer.appendChild(removeButton);

    // Temp Submit Button
    var submitButton = document.createElement("button");
    submitButton.classList = "btn btn-primary";
    submitButton.innerHTML = "Add";
    submitButton.addEventListener("click", function() {
        var textarea = this.parentNode.childNodes[0];
        var text = textarea.value;
        this.parentNode.innerHTML = text;
        console.log(textarea);
        console.log(text);
        
    });
    contentContainer.appendChild(submitButton);

    mainContainer.appendChild(checkboxContainer);
    mainContainer.appendChild(contentContainer);
    mainContainer.appendChild(removeContainer);
    $("#todo-container").append(mainContainer);

    todoItems.count++;
    // Delete 'no items left' message if it exists
    if($("#no-items-left"))
        $("#no-items-left").remove();
}
function storeTODOItem() {
    for (let i = 0; i < $("#todo-container").children().length; i++) {
        var daBaby = $("#todo-container").children()[i];
        todoItems.items["todo-" + i] = {checked: daBaby.children[0].children[0].checked, text: daBaby.children[1].innerHTML};
    }
    for(let x in todoItems.items) {
        console.log(todoItems.items[x].text);
    }
    console.table(todoItems.items);
}
function test() {
    var test = "Test function for linux install.";
}