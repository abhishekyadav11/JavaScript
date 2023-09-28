const button = document.querySelectorAll('button');
const body = document.querySelector('body');

button.forEach(function(item){
   item.addEventListener('click',function(e){
      if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id;
      }else if(e.target.id === 'orange'){
        body.style.backgroundColor = e.target.id;
     }else if(e.target.id === 'lightpink'){
        body.style.backgroundColor = e.target.id;
     }else if(e.target.id === 'lightgreen'){
        body.style.backgroundColor = e.target.id;
     }
   });
});