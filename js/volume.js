function convertVolume() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke Liter sebagai basis
  const conversionFactors = {
    megaliter: 1e6,
    gigaliter: 1e9,
    teraliter: 1e12,
    kiloliter: 1e3,
    hektoliter: 1e2,
    dekaliter: 1e1,
    liter: 1,
    desiliter: 1e-1,
    sentiliter: 1e-2,
    milliliter: 1e-3,
    // Konversi satuan imperial ke Liter
    gallon: 3.78541, // US Gallon to Liter
    quart: 0.946353, // US Quart to Liter
    pint: 0.473176, // US Pint to Liter
    "ons-cair": 0.0295735, // US Fluid Ounce to Liter
    cangkir: 0.24, // US Cup to Liter
    barrel: 158.987, // US Oil Barrel to Liter
  };

  // Konversi nilai dari satuan asal ke Liter
  let valueInLiters;
  if (unit === "m3") {
    // Jika satuan asal adalah m³
    valueInLiters = value * 1000;
  } else {
    valueInLiters = value * conversionFactors[unit];
  }

  // Konversi dari Liter ke satuan target
  let finalResult;
  if (targetUnit === "m3") {
    // Jika satuan target adalah m³
    finalResult = valueInLiters / 1000;
  } else {
    finalResult = valueInLiters / conversionFactors[targetUnit];
  }

  // Format hasil
  let formattedResult;
  if (unit === targetUnit) {
    formattedResult = value.toString(); // Tampilkan nilai asli jika satuan sama
  } else if (finalResult > 1e6 || (finalResult < 1e-6 && finalResult !== 0)) {
    formattedResult = finalResult.toExponential(4); // Gunakan notasi ilmiah untuk angka besar/kecil
  } else {
    // Bulatkan dan hapus nol berlebihan
    formattedResult = parseFloat(finalResult.toFixed(10)).toString();
  }

  resultDisplay.textContent = `${value} ${unit} = ${formattedResult} ${targetUnit}`;
}

// Panggil konversi saat halaman pertama kali dimuat
convertVolume();
