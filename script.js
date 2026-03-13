// MENU
function toggleMenu(){

let menu = document.querySelector(".menu-scroll")

menu.style.display = (menu.style.display === "flex") ? "none" : "flex"

}

// SEARCH
function toggleSearch(){

let search = document.getElementById("searchBox")

search.style.display = (search.style.display === "block") ? "none" : "block"

}

// SCROLL KE ATAS
function scrollToTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}

const pages={

tentang:{
title:"Tentang Kami",
content:`
<p>
Wakatobi Update adalah portal informasi digital
yang menyajikan berita, wisata, dan perkembangan daerah.
</p>

<h3>Visi</h3>
<p>Menjadi portal informasi terpercaya tentang Wakatobi.</p>

<h3>Misi</h3>
<p>Menyajikan informasi akurat dan bermanfaat.</p>
`
},

kontak:{
title:"Kontak Kami",
content:`
<p>Email : redaksi@wakatobiupdate.com</p>
<p>Instagram : @wakatobiupdate</p>
<p>Lokasi : Wakatobi, Indonesia</p>
`
},

disclaimer:{
title:"Disclaimer",
content:`
<p>
Semua informasi di website ini disediakan
untuk tujuan informasi umum.
</p>
`
},

privacy:{
title:"Privacy Policy",
content:`
<p>
Kami menghargai privasi pengunjung
dan berkomitmen melindungi data pengguna.
</p>
`
}

}

let url=new URLSearchParams(window.location.search)
let page=url.get("page")

if(pages[page]){

document.getElementById("page-title").innerHTML=pages[page].title
document.getElementById("page-content").innerHTML=pages[page].content

}
