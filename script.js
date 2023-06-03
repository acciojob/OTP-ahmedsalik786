//your JS code here. If required.
let inputElement=document.getElementsByClassName("code");
        for(let i=0;i<inputElement.length;i++){
            inputElement[i].addEventListener("keyup",(event)=>{
                let currElement=event.target;
                let code=event.key.charCodeAt(0);
                if(event.key==="Backspace"){
                    let prevElement=currElement.prevElementSibling;
                    if(prevElement){
                        prevElement.focus();
                    }
                    return;
                }
                if(48<=code && code <=57){
                    let nextElement=currElement.nextElementSibling;
                    if(nextElement){
                        nextElement.focus();
                    }
                }else{
                    event.target.value="";
                }
            })
        }