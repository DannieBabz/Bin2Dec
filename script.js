// select 
let binInput = document.getElementById("bin");

binInput.addEventListener("keyup", function(e){
    let binSplit = binInput.value.split('')

    binSplit.forEach((item) => {
        if(item < 0 || item > 1 || item == null || item === NaN){
            alert('Input only Zeros and Ones!');
        }
        
    });
});

let convert = document.getElementById("convert");

convert.addEventListener("click", function() { 

    //array
    const binInt = parseInt(binInput.value, 2)
    let binSplit = ( binInt.split('')); 
    let count = 0;
    
    
    for (let index = 0; index < binSplit.length ; index++) {
        count += Math.pow(binSplit[index] * 2, index);
        console.log(count);
    }


});

 
