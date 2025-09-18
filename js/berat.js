function convertWeight() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke gram (satuan dasar SI untuk massa)
  const conversionFactors = {
    yottagram: 1e24,
    zettagram: 1e21,
    exagram: 1e18,
    petagram: 1e15,
    teragram: 1e12,
    gigagram: 1e9,
    megagram: 1e6,
    kilogram: 1e3,
    hektogram: 1e2,
    dekagram: 1e1,
    gram: 1,
    desigram: 1e-1,
    sentigram: 1e-2,
    milligram: 1e-3,
    mikrogram: 1e-6,
    nanogram: 1e-9,
    pikogram: 1e-12,
    ons: 28.3495,
    pound: 453.592,
    stone: 6350, // 1 stone = 14 lb * 453.592 g/lb = 6350.288 g
    "ton-pendek": 907185,
    "ton-panjang": 1016047, // 1016 kg * 1000 g/kg = 1016000 g, dibulatkan
  };

  let valueInGrams = value * conversionFactors[unit];

  // Konversi dari gram ke satuan target
  let finalResult = valueInGrams / conversionFactors[targetUnit];

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
convertWeight();
