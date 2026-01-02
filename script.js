let btn = document.querySelectorAll("button");
let input=document.querySelector(".input");
let str="";
btn.forEach(btn=>{
    btn.addEventListener("click",function(e){
        let value = e.target.innerText;
        if(value === "AC"){
            str="";
            input.value="";
        }
        else if(value ==="="){
            try {
                str = eval(str);
                input.value = str;
            } 
            catch {
                    input.value = "Error";
                    str = "";
            }
        }
        else if(value === "+/-"){
            str = str.startsWith("-")? str.slice(1):"-" + str;
            input.value=str;
        }
        else if(value === "%"){
            str=(parseFloat(str)/100).toString();
            input.value=str;
        }
        else if(value === "DEL"){
            input.value=input.value.slice(0,-1);
        }
        else{
            str+=value;
            input.value=str;
        }
    })
})