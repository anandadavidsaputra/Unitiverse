function convertEnergy() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke Joule (satuan dasar SI)
  const conversionFactors = {
    attojoule: 1e-18,
    femtojoule: 1e-15,
    picojoule: 1e-12,
    nanojoule: 1e-9,
    mikrojoule: 1e-6,
    millijoule: 1e-3,
    joule: 1,
    kilojoule: 1e3,
    megajoule: 1e6,
    gigajoule: 1e9,
    terajoule: 1e12,
    petajoule: 1e15,
    exajoule: 1e18,
    zettajoule: 1e21,
    yottajoule: 1e24,
    kalori: 4.184,
    kilokalori: 4184,
    elektronvolt: 1.602e-19,
    btu: 1055,
    "hp-h": 2.684e6,
  };

  let valueInJoules = value * conversionFactors[unit];

  // Konversi dari Joule ke satuan target
  let finalResult = valueInJoules / conversionFactors[targetUnit];

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
convertEnergy();
