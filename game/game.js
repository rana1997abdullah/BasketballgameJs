let HomeElNumber = document.getElementById('number_home')
let GuestElNumber = document.getElementById('number_guest')

let home_text_el = document.getElementById('home_text')
let guest_text_el = document.getElementById('guest_text')

let homeCount = 0
let guestCount = 0
function addnumber(text,number){
    if(text == 'home'){
     homeCount+=number
     HomeElNumber.innerText = homeCount
   
    }
    else{
        guestCount+=number
        GuestElNumber.innerText = guestCount
    }
    if(homeCount > guestCount){
    
        home_text_el.style.setProperty('color','red')
        guest_text_el.style.setProperty('color','#EEEEEE')
    }
    else if(homeCount < guestCount){
    guest_text_el.style.setProperty('color','red')
    home_text_el.style.setProperty('color','#EEEEEE')
    }
}
function addNewGame(){
    homeCount=0
    guestCount=0
    HomeElNumber.innerText = homeCount
    GuestElNumber.innerText = guestCount
    home_text_el.style.setProperty('color','#EEEEEE')
    guest_text_el.style.setProperty('color','#EEEEEE')
}
