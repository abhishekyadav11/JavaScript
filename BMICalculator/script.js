const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const output = document.getElementById('output');

document.querySelector('button').addEventListener('click',function(){
    if(weight.value !== '' && height.value !== ''){
        let result = ((weight.value)/(Math.pow((height.value/100),2))).toFixed(2);
        console.log(result);
        if(result < 18.5){
            output.style.display = 'block';
            output.style.color = 'yellow';
            output.innerText = `BMI(${result}) Under Weight`;
        }else if(result >= 18.5 && result <= 25){
            output.style.display = 'block';
            output.style.color = 'lightgreen';
            output.innerText = `BMI(${result}) Normal Range`;
        }else{
            output.style.display = 'block';
            output.style.color = 'red';
            output.innerText = `BMI (${result}) Over Weight`;
        }
    }
});

document.querySelector('.clear').addEventListener('click',function(){
    height.value = '';
    weight.value = '';
    output.style.display = 'none';
})