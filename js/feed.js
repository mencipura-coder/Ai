function getTime(){

let now = new Date()

let jam = now.getHours()
let menit = now.getMinutes()

if(menit < 10){
menit = "0" + menit
}

return jam + ":" + menit

}
