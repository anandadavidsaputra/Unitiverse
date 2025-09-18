function convertTemperature() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  let kelvinValue;

  // Konversi ke Kelvin terlebih dahulu
  switch (unit) {
    case "K":
      kelvinValue = value;
      break;
    case "mK":
      kelvinValue = value * 1e-3;
      break;
    case "µK":
      kelvinValue = value * 1e-6;
      break;
    case "daK":
      kelvinValue = value * 1e1;
      break;
    case "hK":
      kelvinValue = value * 1e2;
      break;
    case "kK":
      kelvinValue = value * 1e3;
      break;
    case "C":
      kelvinValue = value + 273.15;
      break;
    case "F":
      kelvinValue = ((value - 32) * 5) / 9 + 273.15;
      break;
    case "R":
      kelvinValue = (value * 5) / 9;
      break;
    case "Re":
      kelvinValue = (value * 5) / 4 + 273.15;
      break;
  }

  let finalResult;

  // Konversi dari Kelvin ke satuan target
  switch (targetUnit) {
    case "K":
      finalResult = kelvinValue;
      break;
    case "mK":
      finalResult = kelvinValue * 1e3;
      break;
    case "µK":
      finalResult = kelvinValue * 1e6;
      break;
    case "daK":
      finalResult = kelvinValue * 1e-1;
      break;
    case "hK":
      finalResult = kelvinValue * 1e-2;
      break;
    case "kK":
      finalResult = kelvinValue * 1e-3;
      break;
    case "C":
      finalResult = kelvinValue - 273.15;
      break;
    case "F":
      finalResult = ((kelvinValue - 273.15) * 9) / 5 + 32;
      break;
    case "R":
      finalResult = (kelvinValue * 9) / 5;
      break;
    case "Re":
      finalResult = ((kelvinValue - 273.15) * 4) / 5;
      break;
  }

  // Format hasil
  let formattedResult;
  if (unit === targetUnit) {
    formattedResult = value.toString();
  } else if (finalResult > 1e6 || (finalResult < 1e-6 && finalResult !== 0)) {
    formattedResult = finalResult.toExponential(4);
  } else {
    formattedResult = parseFloat(finalResult.toFixed(10)).toString();
  }

  resultDisplay.textContent = `${value} ${unit} = ${formattedResult} ${targetUnit}`;
}

// Panggil konversi saat halaman pertama kali dimuat
convertTemperature();
