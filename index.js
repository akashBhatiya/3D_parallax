const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

function update(){
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let rotateSpeed = el.dataset.rotation;

        // let speedz = el.dataset.speedz;

        // let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;

        // let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1;

        el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue*speedx}px)) translateY(calc(-50% + ${yValue*speedy}px))`;
    })
}

function start(){
    parallax_el.forEach(el => {
        el.style.transform = `translateX(-50%) translateY(-50%)`;
    })
}

start();




window.addEventListener('mousemove', (e)=>{
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;

    rotateDegree = (xValue / (window.innerWidth/2)) * 20;

    update();
    
})



//gsap animation

// let timeline = gsap.timeline();

// parallax_el.forEach( el =>{
        
//     timeline.from(el, {
//         top:  `${+el.offsetHeight / 2 - el.dataset.distance}px`,
//         duration: 1 

//     },"1")

// })