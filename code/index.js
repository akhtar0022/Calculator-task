let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue="";

for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('this is ', buttonText);

 if(buttonText== 'X'){
    buttonText ='*';
    screenValue +=buttonText;
    screen.value=screenValue;
   
 }
 else if(buttonText== 'C'){
    screenValue ="";
    screen.value=screenValue;
}
 else if(buttonText== '='){
    screen.value=eval(screenValue);

 }
else
{
    screenValue +=buttonText;
    screen.value=screenValue;
}
        // if(buttonText=='*'){
        // // buttonText= " * ";
        // screen.value += buttonText;
        // screen.value = screenvalue  ;
        // } 
        // else if(buttonText=='C'){
        //     screenvalue ="";
        //     screen.value = screenvalue;
             
        // }
        // else if(buttonText=='='){
        //     screen.value = eval(screenvalue);
        // }
        // else{
        //     screenvalue += buttonText;
        //     screen.value = screenvalue;
            
        // }


    }   
    )


}
