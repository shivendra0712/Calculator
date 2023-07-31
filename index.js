let string= " ";
let allbtn =document.querySelectorAll(".btn");

Array.from(allbtn).forEach((button)=>{
    button.addEventListener('click',(event)=>{
       let val = event.target.innerHTML;
       let inputscreen =document.querySelector('.input').value ;
        console.log(val);
        if(val =='=')
        {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else  if(val =='C')
        {
            string = " ";
            document.querySelector('.input').value = string;
        }
        else
        {
            string = string + val;
            console.log(string)
            document.querySelector('.input').value = string;
        }

    })
})
