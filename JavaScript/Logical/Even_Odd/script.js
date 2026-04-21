function even_odd(){
    let num = (document.getElementById('num').value);
    if(num % 2 === 0){
        document.getElementById('res').textContent = "Number is Even"
    }else{
        document.getElementById('res').textContent = "Number is Odd"
    }
}