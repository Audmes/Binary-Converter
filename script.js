// Convert to Binary
function convertToBinary() {
    let decimalNumber = document.getElementById('decimalInput').value;
    let binaryResult = document.getElementById('binaryResult');
    binaryResult.innerHTML = (+decimalNumber).toString(2);

    // Or
    // Convert decimal number to binary string
    // let num = 42;
    // let sbin = num.toString(2); // Specify radix 2 for binary
    // console.log(sbin); // "101010"
}

// Convert to Decimal
function convertToDecimal() {
    // Convert binary string to decimal number
    let binaryNumber = document.getElementById('binaryInput').value;
    // let binaryNumber = "101010";
    test = binaryNumber.indexOf('0');
    console.log(test);

    // if (browserType.indexOf("mozilla") !== -1) {
    if ( ( binaryNumber.indexOf('1') == -1 ) || ( binaryNumber.indexOf('0') == 0 ) ) {
        return decimalResult.innerHTML = 'Veuillez entrer un nombre binaire !';
    }
    
    let decimal = parseInt(binaryNumber, 2); // Specify radix 2 for binary

    return decimalResult.innerHTML = decimal;
    //console.log(decimal); // 42 
}