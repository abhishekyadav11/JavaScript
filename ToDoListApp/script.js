const taskTitle = document.querySelector('input');
const btnAdd = document.querySelector('.addTask > button');

// taskTitle.addEventListener('keyup',(e)=>{
//   (e.keyCode === 13 ? addTask(e) : null);
// });

function addTask(e){
    const notCompleted = document.querySelector('.notCompleted');
    const completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const btnCheck = document.createElement('button');
    const btnDelete = document.createElement('button');

    btnCheck.innerHTML = '<i class="fa-solid fa-check">';
    //btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square">';
    btnDelete.innerHTML = '<i class="fa-solid fa-trash">';

    if(taskTitle.value !== ''){
        newLi.textContent = taskTitle.value;
        taskTitle.value = '';

        notCompleted.appendChild(newLi);
        newLi.append(btnDelete);
        newLi.append(btnCheck);
    }

    btnCheck.addEventListener("click",function(){
         const parent = this.parentNode;
         parent.remove();
         completed.appendChild(parent);
         btnCheck.style.display = 'none';
    });

    btnDelete.addEventListener("click",function(){
        const parent = this.parentNode;
        parent.remove();
    });
}