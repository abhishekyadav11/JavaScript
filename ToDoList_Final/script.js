const taskTitle = document.querySelector('input');
const notCompletedTask = document.querySelector('.not-completed > ol');
const completedTask= document.querySelector('.completed > ol');

const completedHeading = document.getElementById('notCompleted');
const addHeading = document.getElementById('notAdded');


function addTask(e) {
    const newLi = document.createElement('li');
    const inputBox = document.createElement('input');
    const btnCheck = document.createElement('button');
    const btnEdit = document.createElement('button');
    const btnDelete = document.createElement('button');

    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';

    if (taskTitle.value !== '') {
        inputBox.value = taskTitle.value;
       // console.log(taskTitle.value);
        taskTitle.value = '';

        inputBox.readOnly = true;
        notCompletedTask.appendChild(newLi);
        newLi.appendChild(inputBox);
        newLi.appendChild(btnDelete);
        newLi.appendChild(btnEdit);
        newLi.appendChild(btnCheck);
        checkChildNodes();
    }

    btnCheck.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();

        completedTask.appendChild(parent);
        btnCheck.style.display = 'none';
        btnEdit.style.display = 'none';

        checkChildNodes();
    })

    btnEdit.addEventListener('click',function(){
        if(btnEdit.innerHTML === '<i class="fa-solid fa-pen-to-square"></i>'){
            inputBox.readOnly = false;
            inputBox.style.background = '#fff';
            btnEdit.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
            btnCheck.style.visibility = 'hidden';
        }else{
            inputBox.value = inputBox.value;

            inputBox.readOnly = true;
            inputBox.style.background = 'none';
            btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            btnCheck.style.visibility = 'visible';
        }      
    });

    btnDelete.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();

        checkChildNodes();
    })
}

function checkChildNodes(){
    if(completedTask.children.length > 2){
        completedHeading.style.visibility = 'hidden';
    }else{
        completedHeading.style.visibility = 'visible';
    }

    if(notCompletedTask.children.length > 2){
        addHeading.style.visibility = 'hidden';
    }else{
        addHeading.style.visibility = 'visible';
    }
    console.log(notCompletedTask.children.length);
}

