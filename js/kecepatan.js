function convertSpeed() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke meter per detik (m/s)
  const conversionFactors = {
    mmps: 1e-3, // Millimeter per detik
    cmps: 1e-2, // Centimeter per detik
    dmps: 1e-1, // Desimeter per detik
    mps: 1, // Meter per detik (dasar)
    kmps: 1e3, // Kilometer per detik
    kmph: 1 / 3.6, // Kilometer per jam (1 km/h = 1000m / 3600s)
    mpm: 1 / 60, // Meter per menit (1 m/min = 1m / 60s)
    mph: 1609.34 / 3600, // Mil per jam (1 mile = 1609.34 m, 1 hour = 3600s)
    knots: 1852 / 3600, // Knot (1 nautical mile = 1852 m)
    mach: 343, // Mach 1 ≈ 343 m/s (nilai standar di udara kering 20°C)
    lightspeed: 299792458, // Kecepatan cahaya di ruang hampa
  };

  // Nilai input dalam m/s
  let valueInMPS;
  if (unit === "mach") {
    // Mach perlu dikonversi ke m/s terlebih dahulu
    valueInMPS = value * conversionFactors[unit];
  } else {
    valueInMPS = value * conversionFactors[unit];
  }

  // Konversi dari m/s ke satuan target
  let finalResult;
  if (targetUnit === "mach") {
    // Jika target adalah Mach, kita perlu membaginya dengan kecepatan suara standar
    finalResult = valueInMPS / conversionFactors["mach"];
  } else {
    finalResult = valueInMPS / conversionFactors[targetUnit];
  }

  // Format hasil
  let formattedResult;
  if (unit === targetUnit) {
    formattedResult = value.toString(); // Tampilkan nilai asli jika satuan sama
  } else if (
    (finalResult > 1e6 || (finalResult < 1e-6 && finalResult !== 0)) &&
    targetUnit !== "mach" &&
    targetUnit !== "lightspeed"
  ) {
    formattedResult = finalResult.toExponential(4); // Gunakan notasi ilmiah untuk angka besar/kecil
  } else {
    formattedResult = parseFloat(finalResult.toFixed(10)).toString(); // Bulatkan dan hapus nol berlebihan
  }

  resultDisplay.textContent = `${value} ${unit} = ${formattedResult} ${targetUnit}`;
}

// Panggil konversi saat halaman pertama kali dimuat
convertSpeed();