function convertLength() {
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
    yottameter: 1e24,
    zettameter: 1e21,
    exameter: 1e18,
    petameter: 1e15,
    terameter: 1e12,
    gigameter: 1e9,
    megameter: 1e6,
    kilometer: 1e3,
    hektometer: 1e2,
    dekameter: 1e1,
    meter: 1,
    desimeter: 1e-1,
    sentimeter: 1e-2,
    milimeter: 1e-3,
    mikrometer: 1e-6,
    nanometer: 1e-9,
    angstrom: 1e-10,
    mil: 1609.34,
    "mil-laut": 1852,
    yard: 0.9144,
    kaki: 0.3048,
    inci: 0.0254,
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
convertLength();    