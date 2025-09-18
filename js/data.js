function convertData() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke Byte
  const conversionFactors = {
    // Bits
    bit: 1 / 8,
    kilobit: 1e3 / 8,
    megabit: 1e6 / 8,
    gigabit: 1e9 / 8,
    terabit: 1e12 / 8,
    petabit: 1e15 / 8,
    exabit: 1e18 / 8,
    zettabit: 1e21 / 8,
    yottabit: 1e24 / 8,

    // Bytes
    byte: 1,
    kilobyte: 1e3,
    megabyte: 1e6,
    gigabyte: 1e9,
    terabyte: 1e12,
    petabyte: 1e15,
    exabyte: 1e18,
    zettabyte: 1e21,
    yottabyte: 1e24,

    // Binary Prefixes (IEC)
    kibibyte: Math.pow(2, 10),
    mebibyte: Math.pow(2, 20),
    gibibyte: Math.pow(2, 30),
    tebibyte: Math.pow(2, 40),
    pebibyte: Math.pow(2, 50),
    exbibyte: Math.pow(2, 60),
  };

  let valueInBytes = value * conversionFactors[unit];

  // Konversi dari Byte ke satuan target
  let finalResult = valueInBytes / conversionFactors[targetUnit];

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
convertData();
