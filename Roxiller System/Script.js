// js for Ac 
let count = 25;
document.getElementById("h1").innerHTML = 0;
function increment() {
    count++;
    document.getElementById("h1").innerHTML = count;
    document.getElementById("h1").style.color="#009900";
    document.getElementById("degree").style.color="#009900";
}
function decrement() {
    count--;
    document.getElementById("h1").innerHTML = count;
    document.getElementById("h1").style.color="red";
    document.getElementById("degree").style.color="red";

}

// js code for fan 
const fan=document.querySelector('.fanImg')
const btn= document.querySelectorAll('.fanBtn')

btn.forEach(btn=>{
    btn.addEventListener('click' ,()=>{
        let nav=btn.getAttribute('data-nav');
        // console.log(nav)
        if(nav==0){
            active(btn);
            speed(1);
        }
        if(nav==1){
            active(btn);
            speed(0);
        }
        if(nav==2){
            active(btn);
            speed(0.8);
        }
        else if(nav==3){
            active(btn);
            speed(0.5)
        }
        else if(nav==4){
            active(btn);
            speed(0.2);
        } 
        else if(nav==5){
            active(btn);
        }
        else{
            active(btn);
        }
    })
})
function active(element) {
    btn.forEach(btn=>{
        btn.classList.remove('active');
        // document.getElementById('p').innerHTML=count;

    });
    element.classList.add('active');
}
function speed (value){
    fan.style.animationDuration=`${value}s`
}

// js for bulb 
let bulb = document.getElementById('bulb');
let onOffBtn = document.getElementById('on-off-btn');
let brightnessSlider = document.getElementById('brightness-slider');
let brightnessLevel = document.getElementById('brightness-level');

let isOn = false;
let brightness = 50;

 function FanOn(){
onOffBtn.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        bulb.classList.add('on');
    } else {
        bulb.classList.remove('on');
        onOffBtn.textContent = 'On';
    }
});
brightnessSlider.addEventListener('input', (e) => {
    brightness = e.target.value;
    brightnessLevel.textContent = `${brightness}%`;
    if (isOn) {
        bulb.style.boxShadow = `0 0 ${brightness}px rgba(255, 255, 0, 0.5)`;
    }
});
 }