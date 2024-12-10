function satu() {
    var formtes = document.querySelector('.form_pemesanan');

    formtes.style.display = "block";
    document.getElementById('txt_nama').value = '';
    document.getElementById('txt_jumlah').value = '';
    document.getElementById('txt_produk').value = 'Corndog kentang kecil  (Rp. 10.000)';
}


function dua() {
    var formtes = document.querySelector('.form_pemesanan');

    formtes.style.display = "block";
    document.getElementById('txt_nama').value = '';
    document.getElementById('txt_jumlah').value = '';
    document.getElementById('txt_produk').value = 'Corndog keju pedas  (Rp. 20.000)';
}


function tiga() {
    var formtes = document.querySelector('.form_pemesanan');

    formtes.style.display = "block";    
    document.getElementById('txt_nama').value = '';
    document.getElementById('txt_jumlah').value = '';
    document.getElementById('txt_produk').value = 'Corndog keju original  (Rp. 18.000)';
}


function empat() {
    var formtes = document.querySelector('.form_pemesanan');

    formtes.style.display = "block";
    document.getElementById('txt_nama').value = '';
    document.getElementById('txt_jumlah').value = '';
    document.getElementById('txt_produk').value = 'Corndog original kecil  (Rp. 10.000)';
}


function lima() {
    var formtes = document.querySelector('.form_pemesanan');

    formtes.style.display = "block";
    document.getElementById('txt_nama').value = '';
    document.getElementById('txt_jumlah').value = '';
    document.getElementById('txt_produk').value = 'Corndog kentang besar  (Rp. 19.000)';
}


function tutup() {
    var formtes = document.querySelector('.form_pemesanan');
    formtes.style.display = "none";
}

function info() {
    tutup();
    alert("Pesan anda telah dikirim!");
}