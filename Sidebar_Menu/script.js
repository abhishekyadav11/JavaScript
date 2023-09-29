const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');
const h3Element = document.querySelectorAll('h3');
const boxes = document.querySelectorAll('.box');

let isToggle = false;

rightBox.addEventListener('click', function () {
    if (isToggle) {
        rightBox.style.transform = 'scaleX(1)';
        leftBox.style.width = '20%';
        leftBox.style.transition = 'all ease 0.5s';
        rightBox.style.transition = 'all ease 0.5s';
        h3Element.forEach((element)=>{
            element.style.display = 'block';
        });
    }else{
        rightBox.style.transform = 'scaleX(-1)';
        leftBox.style.width = '6%';
        leftBox.style.transition = 'all ease 0.5s';
        rightBox.style.transition = 'all ease 0.5s';
        h3Element.forEach((element)=>{
            element.style.display = 'none';
        });
    }

    isToggle = !isToggle;
});

boxes.forEach((box) => {
    box.addEventListener('click', () => {
 
      boxes.forEach((otherBox) => {
        otherBox.classList.remove('selected');
      });

      box.classList.add('selected');
    });
  });