function roi() {
    let p = Number(document.getElementById('p').value);
    let r = Number(document.getElementById('r').value) / 100;
    let n = Number(document.getElementById('n').value);
    let t = Number(document.getElementById('t').value);

    let result = p * (1 + r / n) ** (n * t);

    document.getElementById('amount').textContent = 
        "Total amount is: " + result;
}