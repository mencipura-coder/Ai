function getTime(){

let now = new Date()

let jam = now.getHours()
let menit = now.getMinutes()

if(menit < 10){
menit = "0" + menit
}

return jam + ":" + menit

}

document.addEventListener("click", function(e){

if(e.target.classList.contains("love")){

e.target.classList.toggle("liked")

}

})
