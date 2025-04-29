const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


setInterval(()=>{
    let hour =document.querySelector(".hour")
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")

let day=document.querySelector(".day")

let today=new Date()

let getHour=new Date()
let getMin=new Date()
let getSec=new Date()

    day.innerHTML=` ${days[today.getDay()]}`
    hour.innerHTML=getHour.getHours()
    min.innerHTML=getMin.getMinutes()
    sec.innerHTML=getSec.getSeconds()
    console.log("repet")


},1000)





console.log(hour)
console.log(min)