function convertTime() {
  const value = parseFloat(document.getElementById("value").value);
  const unit = document.getElementById("unit").value;
  const targetUnit = document.getElementById("target-unit").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(value)) {
    resultDisplay.textContent = "Masukkan nilai yang valid.";
    return;
  }

  // Faktor konversi ke detik (satuan pokok SI)
  const conversionFactors = {
    femtodetik: 1e-15,
    pikodetik: 1e-12,
    nanodetik: 1e-9,
    mikrodetik: 1e-6,
    millisekon: 1e-3,
    desisekon: 1e-1,
    sekon: 1,
    dekasekon: 10,
    hektosekon: 100,
    kilosekon: 1000,
    menit: 60,
    jam: 3600,
    hari: 86400,
    minggu: 7 * 86400,
    bulan: 30.44 * 86400, // Rata-rata jumlah hari per bulan (365.25 / 12)
    tahun: 365.25 * 86400, // Rata-rata jumlah hari per tahun (mempertimbangkan tahun kabisat)
    dekade: 10 * 365.25 * 86400,
    abad: 100 * 365.25 * 86400,
    milenium: 1000 * 365.25 * 86400,
  };

  let valueInSeconds = value * conversionFactors[unit];

  // Konversi dari detik ke satuan target
  let finalResult = valueInSeconds / conversionFactors[targetUnit];

  // Format hasil
  let formattedResult;
  if (unit === targetUnit) {
    formattedResult = value.toString(); // Tampilkan nilai asli jika satuan sama
  } else if (
    finalResult > 1e6 || // Jika hasil sangat besar
    (finalResult < 1e-6 && finalResult !== 0) // Jika hasil sangat kecil (dan bukan nol)
  ) {
    formattedResult = finalResult.toExponential(4); // Gunakan notasi ilmiah
  } else {
    // Bulatkan hingga 10 angka desimal dan hapus nol yang tidak perlu di belakang koma
    formattedResult = parseFloat(finalResult.toFixed(10)).toString();
  }

  resultDisplay.textContent = `${value} ${unit} = ${formattedResult} ${targetUnit}`;
}

// Panggil konversi saat halaman pertama kali dimuat
convertTime();
