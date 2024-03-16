//access input field

const input = document.querySelector('#todo-input');

//listening to click event from "Add" button

document.querySelector("#submit").addEventListener('click', () => {
    //value of the input field
    const inputData = input.value;   // input value

    input.value = "";    //after entering this input field gets empty so that another input can be entered

    //creating todo item element
    const todo_el = document.createElement('div');  //creating a div1
    todo_el.classList.add('todo-item');  //todo-item class is created in that div

    const todo_content_el = document.createElement('div');  //div inside another div
    todo_el.appendChild(todo_content_el);   //this method is used so that the created div is made as child to the above created div1

    const todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text'); //text class created
    todo_input_el.type = 'text';    //attribute - type of the input is text
    todo_input_el.value = inputData;   //text class contains the input value(input.value)
    todo_input_el.readOnly = true;  //making it read only as we don't want user to edit text in input box

    todo_content_el.appendChild(todo_input_el)  //appending the value of input in the created div


    const todo_actions_el = document.createElement('div'); //div is created
    todo_actions_el.classList.add('action-items');  //action-items - class is added


    //done
    const todo_done_el = document.createElement('i');
    todo_done_el.classList.add('fa-solid');
    todo_done_el.classList.add('fa-check');

    //edit
    const todo_edit_el = document.createElement('i');
    todo_edit_el.classList.add('fa-solid');
    todo_edit_el.classList.add('fa-pen-to-square');
    todo_edit_el.classList.add('edit');

    //delete
    const todo_delete_el = document.createElement('i');
    todo_delete_el.classList.add('fa-solid');
    todo_delete_el.classList.add('fa-trash');

    //appending done,edit,delete to actions
    todo_actions_el.appendChild(todo_done_el); //adding all elements inside div
    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);


    todo_el.appendChild(todo_actions_el); // div1 is parent to all divs created

    console.log(todo_el); // to print the input value entered 

    //add the todo list item to lists 
    document.querySelector('.todo-list').appendChild(todo_el); //todo_el is added to the todo-list div

    //done functionality

    todo_done_el.addEventListener('click', () => {
        todo_input_el.classList.add('done');  //adding a class 'done' to the input so that after done...the input will be readonly
        todo_el.removeChild(todo_actions_el);  //after clicking done...it cant be edited ,deleted 
    });

    //edit functionality

    todo_edit_el.addEventListener('click', (e) => {
        if (todo_edit_el.classList.contains('edit')) {  //if edit class is contained in todo_edit_el
            todo_edit_el.classList.remove("edit");
            todo_edit_el.classList.remove("fa-pen-to-square");
            todo_edit_el.classList.add('fa-x');
            todo_edit_el.classList.add("save");
            todo_input_el.removeAttribute("readonly");
            todo_input_el.focus();

        } else {
            todo_edit_el.classList.remove("save");
            todo_edit_el.classList.remove('fa-x');
            todo_edit_el.classList.add("fa-pen-to-square");
            todo_edit_el.classList.add("edit");
            todo_input_el.setAttribute("readonly", "readonly");
        }
    });

    // delete functionality
    todo_delete_el.addEventListener('click', (e) => {
        console.log(todo_el);
        document.querySelector('.todo-list').removeChild(todo_el);
    });


});