let input=document.querySelector("#input");
let button=document.querySelectorAll("button");
let string='';

let arr=Array.from(button);
arr.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if(string!==''){
                string=string.replace('(','*(');
                string=eval(string);
                input.innerText=string;
                string='';
            }
        }else if(e.target.innerHTML=='C'){
            string='';
            input.innerText=string;
        }else if(e.target.innerHTML=='Backspace'){
            string.toString;
            string=string.substring(0,string.length-1);
            input.innerText=string;
        }else{
            string+=e.target.innerHTML;
            input.innerText=string;
        }
    })
})
