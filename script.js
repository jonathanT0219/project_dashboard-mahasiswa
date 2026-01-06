const tombolSimpan = document.querySelector('#btnSimpan');
const inputFeedback = document.getElementById('Feedback');

tombolSimpan.addEventListener('click', function(event) {
    event.preventDefault();
    let hasilFeedback = inputFeedback.value;
    if(hasilFeedback === ""){
        alert("tidak boleh kosong");
    } else {
        alert("terima kasih atas feedbacknya: " + hasilFeedback);
    }
});
