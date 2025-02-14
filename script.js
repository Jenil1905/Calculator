const display = document.querySelector('.display');
const initialDisplayValue = '00';
let displayValue='';
display.textContent = initialDisplayValue;
const btns = document.querySelectorAll('.btn');
let count =0;
let storage1 = '0'
let operatorClicked = false
let storage2='0'
let tempResult =0
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        if(count>=15) return
        if(operatorClicked){
            displayValue+=btns[i].textContent
            display.textContent=displayValue
            count++;
            storage2=displayValue
        } else{
        displayValue+=btns[i].textContent
        display.textContent=displayValue
        count++;
        storage1=displayValue
    }
    })
   
}

const clearBtn = document.querySelector('.btn-clear')
clearBtn.addEventListener('click', function(){
   display.textContent=initialDisplayValue
   displayValue=''
   count=0
   storage1='0'
   storage2='0'
   operatorClicked=false
   operatorStorage=''
})

let operatorStorage = ''
const operator = document.querySelectorAll('.operator')
for(let j=0; j<operator.length; j++){
    operator[j].addEventListener('click',function(){
        if(operatorClicked===false){
        display.textContent=operator[j].textContent
        operatorStorage=operator[j].textContent
        displayValue=''
        count=0
        operatorClicked=true
          }
    })
}

const equalBtn = document.querySelector('.equal')
 let result=0
equalBtn.addEventListener('click', function(){
    if(storage2==='0') result= storage1
    if(operatorStorage==='+'){
        result=parseInt(storage1)+parseInt(storage2)
    } else if(operatorStorage==='-'){
        result=parseInt(storage1)-parseInt(storage2)
    } else if(operatorStorage==='x'){
        result=parseInt(storage1)*parseInt(storage2)
    } else if(operatorStorage==='÷'){
        result=parseFloat(storage1)/parseFloat(storage2)
    } else if(operatorStorage==='√'){
        result = Math.sqrt(parseInt(storage1))
    }else if(operatorStorage==='x²'){
        result=storage1*storage1
    }
    let resultString = result.toString();
     
    display.textContent=resultString.slice(0,16)
    storage1=result
    storage2='0'
    operatorClicked=false
})

const underRootBtn = document.querySelector('.underRoot')
underRootBtn.addEventListener('click', function(){
   if(operatorClicked===false){ operatorStorage='√'
    display.textContent='√'+storage1
    operatorClicked=true
}    
})

const percentBtn = document.querySelector('.percentage')
percentBtn.addEventListener('click', function(){
    storage2=storage2/100
    display.textContent=storage2
})

const squareBtn = document.querySelector('.square')
squareBtn.addEventListener('click',function(){
    operatorStorage='x²'
    operatorClicked=true
display.textContent=`(${storage1})²`
})

const signBtn = document.querySelector('.changeSign')
signBtn.addEventListener('click', function(){
    if(operatorClicked){
        storage2=-(storage2)
        display.textContent=storage2
    } else{
        storage1=-(storage1)
        display.textContent=storage1
    }
})