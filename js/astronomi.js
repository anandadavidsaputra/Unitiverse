function convertAstronomy() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke meter
  const conversionFactors = {
    meter: 1,
    kilometer: 1e3,
    au: 1.496e11,
    lightyear: 9.461e15,
    parsec: 3.086e16,
    kiloparsec: 3.086e19,
    megaparsec: 3.086e22,
    gigaparsec: 3.086e25,
  };

  let valueInMeters = value * conversionFactors[unit];

  // Konversi dari meter ke satuan target
  let finalResult = valueInMeters / conversionFactors[targetUnit];

  // Format hasil
  let formattedResult;
  if (unit === targetUnit) {
    formattedResult = value.toString(); // Tampilkan nilai asli jika satuan sama
  } else if (finalResult > 1e6 || (finalResult < 1e-6 && finalResult !== 0)) {
    formattedResult = finalResult.toExponential(4); // Gunakan notasi ilmiah untuk angka besar/kecil
  } else {
    formattedResult = parseFloat(finalResult.toFixed(10)).toString(); // Bulatkan dan hapus nol berlebihan
  }

  resultDisplay.textContent = `${value} ${unit} = ${formattedResult} ${targetUnit}`;
}

// Panggil konversi saat halaman pertama kali dimuat
convertAstronomy();
