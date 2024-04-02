function convertNumber() {
            const base = document.getElementById("base").value;
            const inputNumber = document.getElementById("input-number").value;
            let convertedNumber = 0;
            let resultText = "";
            let decimalOutput = "";
            let binaryOutput = "";
            let octalOutput = "";
            let hexadecimalOutput = "";

            if (base === "binary") {
                convertedNumber = parseInt(inputNumber, 2);
            } else if (base === "octal") {
                convertedNumber = parseInt(inputNumber, 8);
            } else if (base === "decimal") {
                convertedNumber = parseInt(inputNumber, 10);
            } else if (base === "hexadecimal") {
                convertedNumber = parseInt(inputNumber, 16);
            }

            decimalOutput = "Decimal: " + convertedNumber.toString();
            binaryOutput = "Binary: " + convertedNumber.toString(2);
            octalOutput = "Octal: " + convertedNumber.toString(8);
            hexadecimalOutput = "Hexadecimal: " + convertedNumber.toString(16);

            document.getElementById("decimalOutput").innerText = decimalOutput;
            document.getElementById("binaryOutput").innerText = binaryOutput;
            document.getElementById("octalOutput").innerText = octalOutput;
            document.getElementById("hexadecimalOutput").innerText = hexadecimalOutput;

            resultText = "Converted number: " + convertedNumber.toString();
            document.getElementById("result-text").innerText = resultText;
        }

function resetForm() {
    document.getElementById("input-number").value = "";
    convertNumber().value=0;
        }