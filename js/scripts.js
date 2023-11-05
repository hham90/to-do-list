function newItem() {

//step 1. adding new line item to the list of items:
    let li = $('<li></li>')
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }

//step 2. crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
}

    li.on('dblclick', crossOut);

//step 3.1 adding the delete button "x":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

//step 3.2 adding class delete (display:none) from the css:
    function deleteListItem() {
        li.addClass('delete');
    } crossOutButton.on('click', deleteListItem);

// 4. Reording the items:
    $('#list').sortable();
}


