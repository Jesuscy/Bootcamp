const passInput = document.querySelector('input[name=passInput]');

passInput.addEventListener('input',(e)=>{   
    console.log(passInput.value);
    if(!/^[a-zA-Z]+$/.test(passInput)){
        
    }

})