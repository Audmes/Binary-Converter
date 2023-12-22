// Convert to Binary
function convertToBinary() {
    let decimalInput = document.getElementById('decimalInput').value;
    let binaryResult = document.getElementById('binaryResult');

    // Vérifier si l'entrée est un nombre valide
    if (!isNaN(decimalInput) && decimalInput !== '') {
	    decimal = parseInt(decimalInput);
	    let binary = '';

        // Convertir le nombre décimal en binaire
	    while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }

        // Afficher le résultat
        binaryResult.textContent = binary;
	    // binaryResult.textContent = `La représentation binaire est : ${binary}`;
    }else {
        binaryResult.textContent = "Entrez un nombre décimal valide.";
    }
}

// Convert to Decimal
function convertToDecimal() {
    // Convert binary string to decimal number
    // let binaryNumber = document.getElementById('binaryInput').value;

    let binaryInput = document.getElementById('binaryInput').value;
    let decimalResult = document.getElementById('decimalResult');
    // let binaryNumber = "101010";

    // Vérifier si l'entrée est un nombre valide
    if (!isNaN(binaryInput) && binaryInput !== '') {

        let decimal = '';
	    
        // Convertir le nombre binaire en décimal
        decimal = parseInt(binaryInput, 2);

        if (!isNaN(decimal)) {
            // Afficher le résultat
            decimalResult.textContent = decimal;
        }else {
            decimalResult.textContent = "Entrez un nombre binaire valide.";
        }   
    }else {
        decimalResult.textContent = "Entrez un nombre binaire valide.";
    }
}

// Convert String to Binary number
// function convertTextToBinary() {
//     let txt = document.getElementById('txtInput').value;

//     function toBinary(l) {
//         let bytes = 32;
//         let num = [128,64,32,16,8,4,2,1];//8
//         let c = l.charCodeAt()-bytes;
//         let tab = "";
         
//         while (c != 0){
//         for(var i = 0; i < num.length; i++){
//             if((c-num[i]) >= 0){
//                 tab += "1";
//                 c = (c-num[i]);
//             } else {
//                 tab += "0";
//             }
//         }
//         }
//         return tab;
//     }

//     console.log(toBinary("Audrey"));
//     return textBinaryResult.innerHTML = toBinary(txt);
// }

// Convert Binary to Text