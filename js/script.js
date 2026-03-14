// ======================
// HAMBURGER MENU
// ======================

function toggleMenu(){

let menu = document.getElementById("hamburgerMenu")

menu.classList.toggle("show")

}



// ======================
// SCROLL KE ATAS
// ======================

function scrollToTop(){

window.scrollTo({
top:0,
behavior:"smooth"
})

}



// ======================
// TAMPILKAN FORM POST
// ======================

function showForm(type){

const box = document.getElementById("postBox")
const text = document.getElementById("postText")

box.style.display = "block"

if(type === "jual"){
text.placeholder = "Tulis barang yang ingin kamu jual..."
}

if(type === "cari"){
text.placeholder = "Tulis barang yang kamu butuhkan atau bantuan..."
}

window.scrollTo({
top: box.offsetTop - 80,
behavior:"smooth"
})

}



// ======================
// POSTING KE FEED
// ======================

function postingStatus(){

let text = document.getElementById("postText").value

if(text === ""){

alert("Tulis sesuatu dulu")

return

}

let feed = document.querySelector(".feed")

let post = document.createElement("div")

post.className = "product-card"

post.innerHTML = `

<div class="product-info">

<h3>${text}</h3>

<p class="location">📍 Sekitar kamu</p>

<div class="product-action">

<button class="chat">
💬 Chat
</button>

<button class="map">
📍 Map
</button>

<button class="love">
❤
</button>

</div>

</div>

`

feed.prepend(post)

document.getElementById("postText").value = ""

alert("Posting berhasil!")

}



// ======================
// POSTING JUALAN LIST
// ======================

function postingJualan(){

let nama = document.getElementById("namaBarang").value
let harga = document.getElementById("hargaBarang").value
let lokasi = document.getElementById("lokasiBarang").value
let wa = document.getElementById("waPenjual").value

if(nama === "" || harga === "" || lokasi === "" || wa === ""){

alert("Isi semua data dulu")

return

}

let container = document.querySelector(".market-list")

let produk = document.createElement("div")

produk.className = "item"

produk.innerHTML = `

<img src="gallery/contoh.jpg">

<h3>${nama}</h3>

<p>Rp ${harga}</p>

<p>📍 ${lokasi}</p>

<a href="https://wa.me/${wa}" target="_blank">Chat Penjual</a>

`

container.prepend(produk)

alert("Jualan berhasil diposting!")

document.getElementById("namaBarang").value = ""
document.getElementById("hargaBarang").value = ""
document.getElementById("lokasiBarang").value = ""
document.getElementById("waPenjual").value = ""

                                     }
