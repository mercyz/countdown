'use strict'
const setCountDownTo = () => {
    let  now = new Date()
    let setEightHours =  now.getHours() + 5
    localStorage.setItem("currentTime", setEightHours);
    let formatDate = now.setHours(setEightHours)
    let setTimeToNumber = new Date(formatDate).getTime();
    localStorage.setItem("countDown", setTimeToNumber);
    return 
  }
//   Future time to count down to stored in local storage
let futureDateTime = localStorage.getItem("countDown")

const countDown = () => {
   let deadline =  localStorage.getItem("currentTime");
   let now = new Date().getHours();
    let t = deadline - now;
    let currentTime =  new Date().getTime();
    let distance = futureDateTime - currentTime;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 )); 
    let seconds = Math.floor((distance % (1000 * 60 ) / (1000))); 
    document.getElementById("demo").innerHTML = hours + "H " + minutes + "M " + seconds + "S ";
    
    if (t <= 0) { 
        clearInterval(countDown); 
        setCountDownTo()
            let message = document.querySelector(".message");
            message.innerHTML = "It's Time Go Take Your medication!" + new Date();
        } 
}
setInterval(countDown, 1000);
