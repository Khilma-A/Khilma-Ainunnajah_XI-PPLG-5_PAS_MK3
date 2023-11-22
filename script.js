// Membuat inisiasi variabel `inputBx' dan memberikannya nilai dari elemen HTML yang memiliki ID 'inputBx'. 
let inputBx = document.querySelector('#inputBx');
// Membuat inisiasi variabel `list' dan memberikannya nilai dari elemen HTML yang memiliki ID 'list'. 
let list = document.querySelector('#list');

// Membuat event listener pada elemen dengan ID atau kelas inputBx untuk menangkap peristiwa "keyup"
inputBx.addEventListener("keyup", function(event){
    // Memeriksa apakah tombol yang ditekan adalah tombol "Enter". Jika ya, maka blok kode di dalamnya akan dieksekusi.
    if (event.key === "Enter") {
            //  Jika tombol "Enter" ditekan, fungsi addItem dipanggil dengan parameter nilai dari elemen input (this.value). 
            addItem(this.value)
            // Setelah pemanggilan fungsi addItem, nilai elemen input dihapus (diberi nilai string kosong) sehingga input siap untuk menerima masukan baru.
            this.value = ""
        }
})

// Mendefinisikan fungsi bernama `addItem` yang menerima satu parameter yaitu `value`
let addItem = (value) => {
    // Membuat elemen baru dengan tag <li>, yang akan menjadi elemen daftar baru
    let listItem = document.createElement("li");
    // Menetapkan isi dari elemen <li> yang baru dibuat, yaitu nilai dari parameter value yang diterima oleh fungsi, bersama dengan elemen <i></i> kosong.
    listItem.innerHTML = `${value}<i></i>`;
    // Menambahkan event listener pada elemen <li> yang baru dibuat. 
    listItem.addEventListener("click", function(){
            // Jika elemen tersebut diklik, fungsi ini akan dipanggil lalu menggantikan atau menambahkan kelas CSS bernama 'done' pada elemen <li>
            this.classList.toggle('done');
            })
    // Menambahkan event listener pada elemen <i> yang ada di dalam elemen <li>
    listItem.querySelector("i").addEventListener("click", function(){
        // Jika elemen <i> tersebut diklik, fungsi ini akan memanggil listItem.remove(), yang menghapus elemen <li> dari daftar
        listItem.remove();
    })

    // Menambahkan elemen <li> yang baru dibuat ke dalam suatu daftar
    list.appendChild(listItem);
}