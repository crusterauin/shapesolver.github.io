// Ambil elemen-elemen yang diperlukan dari HTML
const shapeSelect = document.getElementById('shapeSelect');
const inputFields = document.getElementById('inputFields');
const calculateButton = document.getElementById('calculateButton');
const luasResult = document.getElementById('luasResult');
const kelilingResult = document.getElementById('kelilingResult');
const satuan = document.getElementById('satuan');
const satuanResult1 = document.getElementById('satuanResult1');
const satuanResult2 = document.getElementById('satuanResult2');

// Tambahkan event listener ketika bentuk yang dipilih berubah
shapeSelect.addEventListener('change', () => {
    const selectedShape = shapeSelect.value;
    inputFields.innerHTML = ''; // Hapus semua input fields sebelumnya

    // Tambahkan input fields sesuai dengan bentuk yang dipilih
    if (selectedShape === 'segitiga') {
        inputFields.innerHTML = `
            <label for="alas">Alas:</label>
            <input type="number" id="alas">
            <label for="tinggi">Tinggi:</label>
            <input type="number" id="tinggi">
        `;
    } else if (selectedShape === 'persegipanjang') {
        inputFields.innerHTML = `
            <label for="panjang">Panjang:</label>
            <input type="number" id="panjang">
            <label for="lebar">Lebar:</label>
            <input type="number" id="lebar">
        `;
    } else if (selectedShape === 'persegi') {
        inputFields.innerHTML = `
            <label for="sisi">Sisi:</label>
            <input type="number" id="sisi">
        `;
    } else if (selectedShape === 'trapesium') {
        inputFields.innerHTML = `
            <label for="alasAtas">Alas Atas:</label>
            <input type="number" id="alasAtas">
            <label for="alasBawah">Alas Bawah:</label>
            <input type="number" id="alasBawah">
            <label for="tinggiTrapesium">Tinggi:</label>
            <input type="number" id="tinggiTrapesium">
        `;
    } else if (selectedShape === 'belahketupat') {
        inputFields.innerHTML = `
            <label for="d1">Diagonal 1:</label>
            <input type="number" id="d1">
            <label for="d2">Diagonal 2:</label>
            <input type="number" id="d2">
        `;
    } else if (selectedShape === 'layanglayang') {
        inputFields.innerHTML = `
            <label for="d1">Diagonal 1:</label>
            <input type="number" id="d1">
            <label for="d2">Diagonal 2:</label>
            <input type="number" id="d2">
        `;
    } else if (selectedShape === 'segienam') {
        inputFields.innerHTML = `
            <label for="sisi">Sisi:</label>
            <input type="number" id="sisi">
        `;
    } else if (selectedShape === 'segilima') {
        inputFields.innerHTML = `
            <label for="sisi">Sisi:</label>
            <input type="number" id="sisi">
        `;
    } else if (selectedShape === 'lingkaran') {
        inputFields.innerHTML = `
            <label for="jariJari">Jari-Jari:</label>
            <input type="number" id="jariJari">
        `;
    } else if (selectedShape === 'jajargenjang') {
        inputFields.innerHTML = `
            <label for="sisiA">Sisi A:</label>
            <input type="number" id="sisiA">
            <label for="sisiB">Sisi B:</label>
            <input type="number" id="sisiB">
            <label for="tinggiJajargenjang">Tinggi:</label>
            <input type="number" id="tinggiJajargenjang">
        `;
    }
});


// Tambahkan event listener ketika tombol "Hitung" ditekan
calculateButton.addEventListener('click', () => {
    const selectedShape = shapeSelect.value;
    const selectedSatuan = satuan.value;
    
    // Ambil nilai dari input fields berdasarkan bentuk yang dipilih
    let luas, keliling, selectedString1, selectedString2;

    if (selectedShape === 'segitiga') {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);
        // Hitung luas dan keliling segitiga
        luas = (alas * tinggi) / 2;
        keliling = alas + tinggi + Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
    } else if (selectedShape === 'persegipanjang') {
        const panjang = parseFloat(document.getElementById('panjang').value);
        const lebar = parseFloat(document.getElementById('lebar').value);
        // Hitung luas dan keliling segiempat
        luas = panjang * lebar;
        keliling = 2 * (panjang + lebar);
    } else if (selectedShape === 'persegi') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        // Hitung luas dan keliling persegi
        luas = sisi * sisi;
        keliling = 4 * sisi;
    } else if (selectedShape === 'trapesium') {
        const alasAtas = parseFloat(document.getElementById('alasAtas').value);
        const alasBawah = parseFloat(document.getElementById('alasBawah').value);
        const tinggiTrapesium = parseFloat(document.getElementById('tinggiTrapesium').value);
        // Hitung luas dan keliling trapesium
        luas = ((alasAtas + alasBawah) * tinggiTrapesium) / 2;
        keliling = alasAtas + alasBawah + 2 * tinggiTrapesium + Math.sqrt(Math.pow(alasAtas - alasBawah, 2) + Math.pow(tinggiTrapesium, 2));
    } else if (selectedShape === 'belahketupat') {
        const diagonal1 = parseFloat(document.getElementById('d1').value);
        const diagonal2 = parseFloat(document.getElementById('d2').value);
        // Hitung luas dan keliling belah ketupat
        luas = (diagonal1 * diagonal2) / 2;
        keliling = 4 * Math.sqrt(Math.pow(diagonal1 / 2, 2) + Math.pow(diagonal2 / 2, 2));
    } else if (selectedShape === 'layanglayang') {
        const diagonal1 = parseFloat(document.getElementById('d1').value);
        const diagonal2 = parseFloat(document.getElementById('d2').value);
        // Hitung luas dan keliling layang-layang
        luas = (diagonal1 * diagonal2) / 2;
        keliling = 2 * (Math.sqrt(Math.pow(diagonal1 / 2, 2) + Math.pow(diagonal2 / 2, 2)));
    } else if (selectedShape === 'segienam') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        // Hitung luas dan keliling segi enam
        luas = (3 * Math.sqrt(3) * Math.pow(sisi, 2)) / 2;
        keliling = 6 * sisi;
    } else if (selectedShape === 'segilima') {
        const sisi = parseFloat(document.getElementById('sisi').value);
        // Hitung luas dan keliling segi lima
        luas = (5 / 4) * Math.pow(sisi, 2) * (1 / Math.tan(Math.PI / 5));
        keliling = 5 * sisi;
    } else if (selectedShape === 'lingkaran') {
        const jariJari = parseFloat(document.getElementById('jariJari').value);
        // Hitung luas dan keliling lingkaran
        luas = Math.PI * Math.pow(jariJari, 2);
        keliling = 2 * Math.PI * jariJari;
    } else if (selectedShape === 'jajargenjang') {
        const sisiA = parseFloat(document.getElementById('sisiA').value);
        const sisiB = parseFloat(document.getElementById('sisiB').value);
        const tinggiJajargenjang = parseFloat(document.getElementById('tinggiJajargenjang').value);
        // Hitung luas dan keliling jajar genjang
        luas = sisiA * tinggiJajargenjang;
        keliling = 2 * (sisiA + sisiB);
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
    
    satuanResult1.textContent= selectedString1 + '\xB2';
    satuanResult2.textContent= selectedString2;
    luasResult.textContent = luas.toFixed(2);
    kelilingResult.textContent = keliling.toFixed(2);

});
