const judul = document.querySelector('h1');
const btnSimpan = document.getElementById('btnSimpan');
const inputFeedback = document.getElementById('Feedback');

const dapatkanWarnaAcak = () => {
    const huruf = '0123456789ABCDEF';
    let warna = '#'; 
    for (let i = 0; i < 6; i++) {
        warna += huruf[Math.floor(Math.random() * 16)];
    }
    return warna;
};

judul.addEventListener('click', () => {
    const warnaBaru = dapatkanWarnaAcak();
    judul.style.color = warnaBaru;
    console.log("Warna judul diubah ke:", warnaBaru);
});

btnSimpan.addEventListener('click', (event) => {
    event.preventDefault();
    const hasil = inputFeedback.value.trim();
    if (hasil === "") {
        alert("Feedback kosong!");
    } else {
        alert("Terkirim: " + hasil);
        inputFeedback.value = "";
    }
});