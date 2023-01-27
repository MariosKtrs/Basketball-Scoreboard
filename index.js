let homeScore = document.getElementById("home-score")
homeScore.innerText=0
let guestScore = document.getElementById("guest-score")
guestScore.innerText=0
let leadingTeam = document.getElementById("leading");
let active=1
let gameOver = false
let draw =false

var countdownDate = new Date()
countdownDate.setTime(countdownDate.getTime() + (10000));

var timeout = false
var distance=0
var counter=2
// Update the count down every 1 second

var x = setInterval(function() {
    console.log("im here")
    // Get today's date and time
    var now = new Date().getTime()

    distance = Math.round((countdownDate - now)/1000)*1000 //In order to avoid skipping seconds or getting negative values, we need to round the distance to the nearest thousandth
    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if(seconds < 10)
        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = "0"+minutes + " : " + "0"+seconds;
    else
        document.getElementById("timer").innerHTML = "0"+minutes + " : "+seconds;
        // If the count down is finished, write some text
        console.log("distance is ",distance)
    if(minutes<=0 && seconds<=0){
        if(counter%2 == 0){ //we are at break
            if(counter==8){
                clearInterval(x)
                if(parseInt(homeScore.textContent)>parseInt(guestScore.textContent))
                    leadingTeam.textContent = "HOME wins!"    
                else if(parseInt(homeScore.textContent)<parseInt(guestScore.textContent))
                    leadingTeam.textContent = "GUEST wins!"
                else {
                    leadingTeam.textContent = "NEXT TEAM TO SCORE WINS"
                    draw=true
                }
                document.getElementById("timer").innerHTML = "00 : 00"
                active=0
                gameOver=true
            }
            if(gameOver==false){
                active=0
                document.getElementById("timer").innerHTML = "BREAK!"
                countdownDate = new Date()
                countdownDate.setTime(countdownDate.getTime() + (5000));
                distance = countdownDate - now
                counter++;
            }
        } 
        else{
            document.getElementById("timer").innerHTML = "BREAK OVER!"
            now = new Date().getTime()
            countdownDate = new Date()
            countdownDate.setTime(countdownDate.getTime() + (10000));
            distance = countdownDate - now
            counter++;
            console.log("second")
            active=1
        }
   }
   
}, 1000);

function homeAddOne(){
    draw ? (draw=false,leadingTeam.textContent="HOME wins!!",homeScore.textContent = Number(homeScore.textContent)+1):null
    active == 1 ? homeScore.textContent = Number(homeScore.textContent)+1 : null 
    check()
}
function homeAddTwo(){
    draw ? (draw=false,leadingTeam.textContent="HOME wins!!",homeScore.textContent = Number(homeScore.textContent)+2):null
    active == 1 ?  homeScore.textContent = Number(homeScore.textContent)+2 : null
    check()
}
function homeAddThree(){
    draw ? (draw=false,leadingTeam.textContent="HOME wins!!",homeScore.textContent = Number(homeScore.textContent)+3):null
    active == 1 ? homeScore.textContent = Number(homeScore.textContent)+3 : null
    check()
}
function guestAddOne(){
    draw ? (draw=false,leadingTeam.textContent="GUEST wins!!",guestScore.textContent = Number(guestScore.textContent)+1):null
    active == 1 ? guestScore.textContent = Number(guestScore.textContent)+1 : null
    check()
}
function guestAddTwo(){
    draw ? (draw=false,leadingTeam.textContent="GUEST wins!!",guestScore.textContent = Number(guestScore.textContent)+2):null
    active == 1 ?  guestScore.textContent = Number(guestScore.textContent)+2 : null
    check()
}
function guestAddThree(){
    draw ? (draw=false,leadingTeam.textContent="GUEST wins!!",guestScore.textContent = Number(guestScore.textContent)+3):null
    active == 1 ? guestScore.textContent = Number(guestScore.textContent)+3 : null
    check()
}

function check(){
    if(gameOver==false){
        if(parseInt(guestScore.textContent) > parseInt(homeScore.textContent))
            leadingTeam.textContent = "GUEST is leading !!"
        else if(parseInt(guestScore.textContent) < parseInt(homeScore.textContent))
            leadingTeam.textContent = "HOME is leading !!"  
        else
            leadingTeam.textContent = "Score is equal !!"  
             
    }
  
}