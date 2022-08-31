// select 
let binInput = document.getElementById("bin");
const error = document.getElementById("error");

binInput.addEventListener("keyup", function(e){
    let binSplit = binInput.value.split('')

    binSplit.forEach((item) => {
        if(item < 0 || item > 1 || item == null || item === NaN){
            error.style.cssText += 'color:red;font-size:15px;display:block;padding-top:10px;'
        } else{
            error.style.cssText += 'color:red;font-size:12px;display:none;'
        }
        
    });
});

let convert = document.getElementById("convert");

convert.addEventListener("click", function() { 

    //array

    let binSplit = ( binInput.value.split('').reverse()); 
    let count = 0;
    
    
    for (let index = 0; index < binSplit.length ; index++) {
        count += ((2 ** index) * binSplit[index]);


    
    }
document.getElementById("conv").value = count;


});

 
