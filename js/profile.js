function saveProfile(){

let nameEl = document.getElementById("profileName")
let locationEl = document.getElementById("profileLocation")
let bioEl = document.getElementById("profileBio")

// tambahan pengecekan
if(!nameEl || !locationEl || !bioEl){
console.log("Elemen profil tidak ditemukan")
return
}

let name = nameEl.value
let location = locationEl.value
let bio = bioEl.value

localStorage.setItem("ikita_name", name)
localStorage.setItem("ikita_location", location)
localStorage.setItem("ikita_bio", bio)

alert("Profil disimpan")

}

window.onload = function(){

let name = localStorage.getItem("ikita_name")
let location = localStorage.getItem("ikita_location")
let bio = localStorage.getItem("ikita_bio")

let nameEl = document.getElementById("profileName")
let locationEl = document.getElementById("profileLocation")
let bioEl = document.getElementById("profileBio")

// tambahan pengecekan agar tidak error
if(name && nameEl){
nameEl.value = name
}

if(location && locationEl){
locationEl.value = location
}

if(bio && bioEl){
bioEl.value = bio
}

}
