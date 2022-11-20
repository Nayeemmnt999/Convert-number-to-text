
document.getElementById('convert-btn').addEventListener('click', function(){
    const one = 'one';
    const two = 'two'
    const terget = document.getElementById('child')
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    // console.log(inputValue);
    if(inputValue === '1'){
        terget.innerText = one ;
    }

})