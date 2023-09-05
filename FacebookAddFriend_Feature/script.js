let istatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");

let check = 0;

addFriend.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = 'Friends';
        istatus.style.color = 'green';
        addFriend.innerHTML = 'Remove';
        addFriend.style.backgroundColor = 'lightgray';
        addFriend.style.color = 'black';
        
        check = 1;
    }else{
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'red';
        addFriend.innerHTML = 'Add Friend';
        addFriend.style.backgroundColor = 'cadetblue';
        addFriend.style.color = 'white';

        check = 0;
    }
   
});
