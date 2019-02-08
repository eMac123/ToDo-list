// Collect UI variable
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

// Load all event listener
addEvent();


// Function to load all event listeners
function addEvent() {
    // Add task
    form.addEventListener('submit', addTask);
    
    // Remove task
    taskList.addEventListener('click', removeTask);

    // Filter task
    filter.addEventListener('keyup', filterTask);
    
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks)
}



// add Task function
function addTask(e) {
    // if taskInput is empty, then show a alert message
    if (taskInput.value === '') {
        alert('Write something')
    } 

    let li, linkElement, iconHTML;
    // create li elemnt
    li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    
    // create a elememt
    linkElement = document.createElement('a');
    // add class name
    linkElement.className = 'delete-item secondary-content';
    // add icon html
    linkElement.innerHTML = '<i class="fa fa-remove"></i>'
    
    // append linkElement to the li
    li.appendChild(linkElement);


    // append li to the ul
    taskList.appendChild(li);

    // clear taskInput.value
    taskInput.value = '';
    
    e.preventDefault();
}



// Function for removing task
function removeTask(e) {
    
 if (e.target.parentElement.classList.contains('delete-item')) {
     e.target.parentElement.parentElement.remove();
 } 
}

// Function for filtering task
function filterTask(e) {
    let filterInput;
     
    // text from filter input
    filterInput = e.target.value.toLowerCase();
    
    // loop over all collection-item and check if it contains filterInput
    document.querySelectorAll('.collection-item').forEach(function(task) {
      let item = task.firstChild.textContent;
       if(item.toLowerCase().indexOf(filterInput) != -1) {
         task.style.display = 'block';
       } else {
           task.style.display = 'none';
       }
    })
}

// Function to clear all tasks

function clearTasks() {
    document.querySelectorAll('.collection-item').forEach(task => {
        task.remove();
    })
}