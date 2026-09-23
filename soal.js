// file: soal.js
// Sumber: ASESMEN SUMATIF MATEMATIKA SMP KELAS 7

const bankSoal = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA TUNGGAL (10 SOAL)
  // ==========================================
  {
    id: 1,
    tipe: "pg_tunggal",
    pertanyaan: "Manakah di antara himpunan berikut yang menyatakan himpunan bilangan bulat negatif?",
    opsi: ["{-3, -2, -1, 0}", "{..., -3, -2, -1}", "{0, 1, 2, 3, ...}", "{1, 2, 3, 4, ...}"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 2,
    tipe: "pg_tunggal",
    // Gambar disisipkan di antara teks perintah dan teks pertanyaan
    pertanyaan: "Perhatikan data suhu udara kota dunia pada gambar berikut!<br><br> <img src='gambar_soal/suhu.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berdasarkan data pada gambar di atas, manakah urutan kota dari yang memiliki suhu paling dingin ke yang paling panas adalah...",
    opsi: ["Reykjavik, London, Paris, Tokyo", "Moscow, Reykjavik, Longyearbyen, Jakarta", "Sydney, Paris, Tokyo, Jakarta", "Beijing, New York, London, Longyearbyen"],
    jawabanBenar: 0 // Kunci: A
  },,
  {
    id: 3,
    tipe: "pg_tunggal",
    pertanyaan: "Hasil dari hitungan \\( (-15) + 28 - (-7) \\) adalah...",
    opsi: ["6", "20", "36", "50"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 4,
    tipe: "pg_tunggal",
    pertanyaan: "Hasil perhitungan dari \\( (-24) \\times 5 : (-6) \\) adalah...",
    opsi: ["-20", "20", "-120", "120"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 5,
    tipe: "pg_tunggal",
    pertanyaan: "Manakah dari bilangan-bilangan berikut yang BUKAN merupakan bilangan rasional?",
    opsi: ["0,75", "-5", "\\( \\frac{22}{7} \\)", "\\( \\sqrt{5} \\)"],
    jawabanBenar: 3 // Kunci: D
  },
  {
    id: 6,
    tipe: "pg_tunggal",
    pertanyaan: "Puncak Gunung Semeru berada di ketinggian 3.676 meter di atas permukaan laut (dinyatakan +3.676 m), sedangkan dasar Palung Jawa berada pada kedalaman 7.160 meter di bawah permukaan laut (dinyatakan -7.160 m). Beda ketinggian (selisih) antara puncak Gunung Semeru dan dasar Palung Jawa adalah...",
    opsi: ["3.484 meter", "7.160 meter", "10.836 meter", "12.500 meter"],
    jawabanBenar: 2 // Kunci: C
  },
  {
    id: 7,
    tipe: "pg_tunggal",
    pertanyaan: "Hasil dari operasi hitung \\( 24 : (-3) \\times 2 + (-5) \\times (-4) \\) adalah...",
    opsi: ["-36", "4", "16", "36"],
    jawabanBenar: 1 // Kunci: B
  },
  {
    id: 8,
    tipe: "pg_tunggal",
    pertanyaan: "Pak Edi membeli sebuah sepeda motor bekas seharga Rp5.000.000,00. Setelah diperbaiki dengan biaya tambahan sebesar Rp500.000,00, sepeda motor tersebut dijual kembali dengan harga Rp6.160.000,00. Keuntungan yang diperoleh Pak Edi dari total modal yang dikeluarkan adalah...",
    opsi: ["Rp500.000,00", "Rp560.000,00", "Rp600.000,00", "Rp660.000,00"],
    jawabanBenar: 3 // Kunci: D
  },
  {
    id: 9,
    tipe: "pg_tunggal",
    pertanyaan: "Dalam suatu kompetisi matematika terdapat 40 soal. Aturan penskoran: jawaban benar diberi nilai 4, jawaban salah diberi nilai -2, dan soal yang tidak dijawab diberi nilai -1. Budi menjawab 30 soal dengan benar, 6 soal salah, dan sisanya tidak dijawab. Total skor yang diperoleh Budi adalah...",
    opsi: ["104", "108", "112", "120"],
    jawabanBenar: 0 // Kunci: A
  },
  {
    id: 10,
    tipe: "pg_tunggal",
    pertanyaan: "Ani membeli sebuah jaket dengan label harga Rp200.000,00. Toko memberikan potongan harga (diskon) sebesar 20%. Setelah dipotong diskon, pembelian jaket tersebut dikenai Pajak Pertambahan Nilai (PPN) sebesar 10% dari harga setelah diskon. Jumlah uang yang harus dibayarkan Ani pada kasir adalah...",
    opsi: ["Rp144.000,00", "Rp160.000,00", "Rp176.000,00", "Rp180.000,00"],
    jawabanBenar: 2 // Kunci: C
  },
  
  // ==========================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 SOAL)
  // ==========================================
  {
    id: 11,
    tipe: "pg_kompleks",
    pertanyaan: "Berilah tanda centang pada kotak di depan setiap pernyataan yang BENAR mengenai konsep dan jenis bilangan bulat!",
    opsi: [
      { teks: "Bilangan nol (0) termasuk dalam kelompok bilangan bulat positif.", benar: false },
      { teks: "Gabungan antara bilangan nol dan bilangan bulat positif disebut himpunan bilangan cacah.", benar: true },
      { teks: "Bilangan bulat negatif selalu bernilai lebih kecil daripada bilangan bulat positif.", benar: true },
      { teks: "Pada garis bilangan, semakin ke kiri letak suatu bilangan, nilainya semakin besar.", benar: false }
    ]
  },
  {
    id: 12,
    tipe: "pg_kompleks",
    pertanyaan: "Sebuah mesin pendingin ruangan laboratorium diatur untuk menurunkan suhu sebesar 3°C setiap 5 menit. Suhu awal ruangan sebelum mesin dinyalakan adalah 20°C. Centanglah pada pernyataan-pernyataan yang BENAR!",
    opsi: [
      { teks: "Setelah 15 menit mesin dinyalakan, suhu ruangan turun sebesar 8°C.", benar: false },
      { teks: "Suhu ruangan setelah 20 menit beroperasi adalah 8°C.", benar: true },
      { teks: "Untuk mencapai suhu ruangan sebesar 2°C, mesin pendingin perlu beroperasi selama 30 menit.", benar: true },
      { teks: "Setelah beroperasi selama 45 menit, suhu ruangan mencapai nilai negatif, yaitu -7°C.", benar: true }
    ]
  },
  {
    id: 13,
    tipe: "pg_kompleks",
    pertanyaan: "Ibu mempunyai 36 kue bolu dan 48 kue lapis. Ibu ingin membagikan kedua jenis kue tersebut ke dalam beberapa piring dengan jumlah kue bolu dan kue lapis yang sama banyak di setiap piring tanpa ada sisa. Pilihlah semua pernyataan yang BENAR!",
    opsi: [
      { teks: "Jumlah piring terbanyak (maksimum) yang dapat disediakan Ibu adalah 12 piring.", benar: true },
      { teks: "Di setiap piring nantinya akan berisi 3 kue bolu dan 4 kue lapis.", benar: true },
      { teks: "Total seluruh kue di dalam setiap piring adalah 7 kue.", benar: true },
      { teks: "Jika Ibu membagikan kue ke dalam 6 piring, maka akan ada sisa kue yang tidak terbagi.", benar: false }
    ]
  },
{
    id: 14,
    tipe: "pg_kompleks",
    // Memasukkan gambar buku tabungan sebagai stimulus
    pertanyaan: "Perhatikan gambar riwayat transaksi buku tabungan bank Pak Andi berikut!<br><br> <img src='gambar_soal/buku_tabungan.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Berdasarkan catatan transaksi (mutasi) saldo pada gambar di atas, centanglah pada semua pernyataan yang BENAR!",
    opsi: [
      { teks: "Saldo rekening Pak Ahmad pada akhir Tanggal 2 adalah Rp7.000.000,00.", benar: false },
      { teks: "Total seluruh pengeluaran (debet) Pak Ahmad selama Tanggal 3 dan 4 adalah Rp5.000.000,00.", benar: true },
      { teks: "Saldo akhir rekening Pak Ahmad pada akhir Tanggal 4 adalah Rp2.500.000,00.", benar: true },
      { teks: "Saldo akhir Pak Ahmad berkurang sebesar Rp2.500.000,00 jika dibandingkan dengan saldo awal Tanggal 1.", benar: true }
    ]
  },  {
    id: 15,
    tipe: "pg_kompleks",
    pertanyaan: "Diberikan tiga titik pada garis bilangan antara 0 dan 1: \\( P = \\frac{3}{8} \\) ; \\( Q = 0,6 \\) ; \\( R = \\frac{5}{7} \\). Manakah pernyataan yang BENAR?",
    opsi: [
      { teks: "Posisi titik P berada paling kiri dibanding titik Q dan R.", benar: true },
      { teks: "Nilai Q lebih besar daripada nilai R.", benar: false },
      { teks: "Urutan letak titik dari kiri ke kanan adalah P, Q, lalu R.", benar: true },
      { teks: "Selisih nilai antara R dan Q adalah kurang dari 0,1.", benar: false }
    ]
  },

  // ==========================================
  // BAGIAN III: SOAL URAIAN (5 SOAL)
  // ==========================================
  {
    id: 16,
    tipe: "uraian",
    pertanyaan: "Hitunglah hasil dari operasi hitung campuran bilangan bulat berikut: <br><br> \\( (-18) + 45 : (-9) - (-12) \\times 3 \\)"
  },
  {
    id: 17,
    tipe: "uraian",
    pertanyaan: "Seekor katak mula-mula berada di titik 0 pada garis bilangan. Katak tersebut melompat ke kanan sebanyak 4 lompatan, di mana setiap lompatan sejauh 3 satuan. Kemudian, katak tersebut berbalik arah dan melompat ke kiri sebanyak 6 lompatan dengan jarak 2 satuan per lompatan.<br><br>a. Tuliskan kalimat matematika yang menggambarkan seluruh gerakan katak tersebut!<br>b. Tentukan posisi akhir katak pada garis bilangan setelah lompatan terakhir!"
  },
  {
    id: 18,
    tipe: "uraian",
    pertanyaan: "Seorang penyelam berada pada kedalaman 15 meter di bawah permukaan laut. Penyelam tersebut kemudian berenang naik sejauh 7 meter, lalu menyelam kembali turun sejauh 10 meter.<br><br>a. Nyatakan posisi awal, gerakan naik, dan gerakan turun dengan tanda positif atau negatif!<br>b. Berapakah kedalaman posisi penyelam tersebut dari permukaan laut sekarang?"
  },
  {
    id: 19,
    tipe: "uraian",
    pertanyaan: "Seorang pedagang soto mengeluarkan modal sebesar Rp400.000,00 untuk membeli bahan-bahan. Ia menjual soto dengan harga Rp12.000,00 per porsi. Jika pada hari itu ia berhasil menjual 50 porsi soto, Berapa perolehan keuntungan bersih pada hari tersebut? Tuliskan langkah penyelesaiannya!"
  },
  {
    id: 20,
    tipe: "uraian",
    pertanyaan: "Nyatakan bilangan-bilangan berikut ke dalam bentuk pecahan \\( \\frac{a}{b} \\) yang paling sederhana (a, b bilangan bulat dan b ≠ 0):<br><br>a) -0,85<br>b) \\( 2\\frac{3}{8} \\)<br>c) 12,5%"
  }
];