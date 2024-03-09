var counter=document.querySelector(".counter");
var Increament=() =>{
    let value=parseInt(counter.innerText);
    value=value+1;
    counter.innerText=value;
};

var Decreament=() => {
    let value=parseInt(counter.innerText);
    if (value=='0'){
        return 0;
        
    }
        
    value=value-1;
    counter.innerText=value;
};