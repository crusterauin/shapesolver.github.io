// Ambil elemen-elemen yang diperlukan dari HTML
const shapeSelect = document.getElementById('shapeSelect');
const inputFields = document.getElementById('inputFields');
const calculateButton = document.getElementById('calculateButton');
const volumeResult = document.getElementById('volumeResult');
const luasPermukaanResult = document.getElementById('luasPermukaanResult');
const satuan = document.getElementById('satuan');
const satuanResult1 = document.getElementById('satuanResult1');
const satuanResult2 = document.getElementById('satuanResult2');

// Tambahkan event listener ketika bentuk yang dipilih berubah
shapeSelect.addEventListener('change', () => {
    const selectedShape = shapeSelect.value;
    inputFields.innerHTML = ''; // Hapus semua input fields sebelumnya

    // Tambahkan input fields sesuai dengan bentuk yang dipilih
    if (selectedShape === 'kubus') {
        inputFields.innerHTML = `
            <label for="sisi">Sisi:</label>
            <input type="number" id="sisi">
            <img src="Ruang/kubus.png" style="width:200px">
        `;
    } else if (selectedShape === 'balok') {
        inputFields.innerHTML = `
            <label for="panjang">Panjang:</label>
            <input type="number" id="panjang">
            <label for="lebar">Lebar:</label>
            <input type="number" id="lebar">
            <label for="tinggi">Tinggi:</label>
            <input type="number" id="tinggi">
            <img src="Ruang/balok.png" style="width:200px">
        `;
    } else if (selectedShape === 'tabung') {
        inputFields.innerHTML = `
            <label for="jariJari">Jari-Jari:</label>
            <input type="number" id="jariJari">
            <label for="tinggi">Tinggi:</label>
            <input type="number" id="tinggi">
            <img src="Ruang/Tabung.png" style="width:200px">
        `;
    } else if (selectedShape === 'limasSegiempat') {
        inputFields.innerHTML = `
            <label for="panjangAlas">Panjang Alas:</label>
            <input type="number" id="panjangAlas">
            <label for="lebarAlas">Lebar Alas:</label>
            <input type="number" id="lebarAlas">
            <label for="tinggi">Tinggi Limas:</label>
            <input type="number" id="tinggi">
            <label for="tinggiSisi1">Tinggi Sisi 1:</label>
            <input type="number" id="tinggiSisi1">
            <label for="tinggiSisi2">Tinggi Sisi 2:</label>
            <input type="number" id="tinggiSisi2">
            <img src="Ruang/Limas Segiempat.png" style="width:200px">
        `;
    } else if (selectedShape === 'limasSegitiga') {
        inputFields.innerHTML = `
            <label for="alasSegitiga">Alas Segitiga:</label>
            <input type="number" id="alasSegitiga">
            <label for="tinggiSegitiga">Tinggi Segitiga:</label>
            <input type="number" id="tinggiSegitiga">
            <label for="tinggiLimas">Tinggi Limas:</label>
            <input type="number" id="tinggiLimas">
            <label for="tinggiSegitigaSamping">Tinggi Segitiga Samping:</label>
            <input type="number" id="tinggiSegitigaSamping">
            <img src="Ruang/Limas Segitiga.png" style="width:200px">
        `;
    } else if (selectedShape === 'prismaSegitiga') {
        inputFields.innerHTML = `
            <label for="alasSegitiga">Alas Segitiga:</label>
            <input type="number" id="alasSegitiga">
            <label for="tinggiSegitiga">Tinggi Segitiga:</label>
            <input type="number" id="tinggiSegitiga">
            <label for="tinggiPrisma">Tinggi Prisma:</label>
            <input type="number" id="tinggiPrisma">
            <label for="sisiKananSegitiga">Sisi Kanan Segitiga:</label>
            <input type="number" id="sisiKananSegitiga">
            <label for="sisiKiriSegitiga">Sisi Kiri Segitiga:</label>
            <input type="number" id="sisiKiriSegitiga">
            <img src="Ruang/prisma segitiga.png" style="width:200px">
        `;
    } else if (selectedShape === 'kerucut') {
        inputFields.innerHTML = `
            <label for="jariJari">Jari-jari:</label>
            <input type="number" id="jariJari">
            <label for="tinggi">Tinggi:</label>
            <input type="number" id="tinggi">
            <label for="sisiMiring">Sisi Miring Kerucut:</label>
            <input type="number" id="sisiMiring">
            <img src="Ruang/Kerucut.png" style="width:200px">
        `;
    } else if (selectedShape === 'bola') {
        inputFields.innerHTML = `
            <label for="jariJari">Jari-jari:</label>
            <input type="number" id="jariJari">
            <img src="Ruang/bola.png" style="width:200px">
        `;
    } else if (selectedShape === 'prismaSegienamBeraturan') {
        inputFields.innerHTML = `
            <label for="sisi">Sisi:</label>
            <input type="number" id="sisi">
            <label for="tinggiPrisma">Tinggi Prisma:</label>
            <input type="number" id="tinggiPrisma">
            <img src="Ruang/Prisma segienam beraturan.png" style="width:200px">
        `;
    }
});

// Tambahkan event listener ketika tombol "Hitung" ditekan
calculateButton.addEventListener('click', () => {
    const selectedShape = shapeSelect.value;
    const selectedSatuan = satuan.value;
    
    // Ambil nilai dari input fields berdasarkan bentuk yang dipilih
    let volume, luasPermukaan, selectedString1, selectedString2;

    if (selectedShape === 'kubus') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        // Hitung volume dan luas permukaan kubus
        volume = sisi**3;
        luasPermukaan = 6*(sisi**2);
    } else if (selectedShape === 'balok') {
        const panjang = parseFloat(document.getElementById('panjang').value);
        const lebar = parseFloat(document.getElementById('lebar').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        // Hitung volume dan luas permukaan balok
        volume = panjang * lebar * tinggi;
        luasPermukaan = 2*((panjang*lebar)+(panjang*tinggi)+(lebar*tinggi));
    } else if (selectedShape === 'tabung') {
        const jariJari = parseFloat(document.getElementById('jariJari').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        // Hitung volume dan luas permukaan tabung
        volume = (Math.PI*(jariJari)**2)*tinggi;
        luasPermukaan = 2*Math.PI*(jariJari+tinggi);
    } else if (selectedShape === 'limasSegiempat') {
        const panjangAlas = parseFloat(document.getElementById('panjangAlas').value);
        const lebarAlas = parseFloat(document.getElementById('lebarAlas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const tinggiSisi1 = parseFloat(document.getElementById('tinggiSisi1').value);
        const tinggiSisi2 = parseFloat(document.getElementById('tinggiSisi2').value);
        // Hitung volume dan luas permukaan limas segiempat
        volume = ((panjangAlas*lebarAlas)*tinggi)/3;
        luasPermukaan = (panjangAlas*lebarAlas)+((2*panjangAlas*tinggiSisi1)/2)+((2*lebarAlas*tinggiSisi2)/2);
    } else if (selectedShape === 'limasSegitiga') {
        const alasSegitiga = parseFloat(document.getElementById('alasSegitiga').value);
        const tinggiSegitiga = parseFloat(document.getElementById('tinggiSegitiga').value);
        const tinggiLimas = parseFloat(document.getElementById('tinggiLimas').value);
        const tinggiSegitigaSamping = parseFloat(document.getElementById('tinggiSegitigaSamping').value);
        // Hitung volume dan luas permukaan limas segitiga
        volume = (((alasSegitiga*tinggiSegitiga)/2)*tinggiLimas)/3;
        luasPermukaan = ((alasSegitiga*tinggiSegitiga)/2)+(3*((alasSegitiga*tinggiSegitigaSamping)/2));
    } else if (selectedShape === 'prismaSegitiga') {
        const alasSegitiga = parseFloat(document.getElementById('alasSegitiga').value);
        const tinggiSegitiga = parseFloat(document.getElementById('tinggiSegitiga').value);
        const tinggiPrisma = parseFloat(document.getElementById('tinggiPrisma').value);
        const sisiKananSegitiga = parseFloat(document.getElementById('sisiKananSegitiga').value);
        const sisiKiriSegitiga = parseFloat(document.getElementById('sisiKiriSegitiga').value);
        // Hitung volume dan luas permukaan prisma segitiga
        volume = (alasSegitiga*tinggiSegitiga/2)*tinggiPrisma;
        luasPermukaan = (2*((alasSegitiga*tinggiSegitiga)/3))+(((alasSegitiga+sisiKananSegitiga+sisiKiriSegitiga))*tinggiPrisma);
    } else if (selectedShape === 'kerucut') {
        const jariJari = parseFloat(document.getElementById('jariJari').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        const sisiMiring = parseFloat(document.getElementById('sisiMiring').value);
        // Hitung volume dan luas permukaan segi enam
        volume = ((Math.PI)*(jariJari**2)*tinggi)/3;
        luasPermukaan = (Math.PI)*jariJari*(jariJari+sisiMiring);
    } else if (selectedShape === 'bola') {
        const jariJari = parseFloat(document.getElementById('jariJari').value);
        // Hitung volume dan luas permukaan segi lima
        volume = 4/3*(Math.PI)*jariJari**3;
        luasPermukaan = 4*(Math.PI)*jariJari**2;
    } else if (selectedShape === 'prismaSegienamBeraturan') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        const tinggiPrisma = parseFloat(document.getElementById('tinggiPrisma').value);
        // Hitung volume dan luas permukaan lingkaran
        volume = 3/2*sisi**3*Math.sqrt(3)*tinggiPrisma;
        luasPermukaan = (2*3/2*sisi**2*Math.sqrt(3))+(6*sisi*tinggiPrisma);
    }

    const satuanMap = {
        "kiloMeter": "km",
        "hektoMeter": "hm",
        "dekaMeter": "dam",
        "meter":"m",
        "desiMeter":"dm",
        "centiMeter":"cm",
        "miliMeter":"mm",
    };

    // Tampilkan hasil perhitungan
    if (selectedSatuan in satuanMap) {
        selectedString1 = satuanMap[selectedSatuan];
        selectedString2 = satuanMap[selectedSatuan];
    }
    
    satuanResult1.textContent= selectedString1 + '\xB3';
    satuanResult2.textContent= selectedString2 + '\xB2';
    volumeResult.textContent = volume.toFixed(2);
    luasPermukaanResult.textContent = luasPermukaan.toFixed(2);
});
