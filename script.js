const loadText=document.querySelector('.loading-text')
const bg=document.querySelector('.bg')
const btn=document.getElementById('blurry')
const btn2=document.getElementById('unblurry')


btn.addEventListener('click',()=>{
    blurring()
})

btn2.addEventListener('click',()=>{
bg.style.filter=`blur(${0}px)`
loadText.innerText= ``
btn.disabled=false
btn2.disabled=true
})

function blurring() {
    
    let load=0
    let int = setInterval(blurring,30)

    function blurring() {
        load++
        if (load>99) {
            clearInterval(int)
        }
    
        loadText.innerText= `${load}%`
    
        loadText.style.opacity = scale(load, 0, 1, 0, 1)
    
        bg.style.filter=`blur(${scale(load, 0, 100, 0, 30)}px)`
    
        console.log(load)

        if (load===100) {
            btn.disabled=true
        } else if(load===99){
            btn2.disabled=false
        } else{
            btn.disabled=false
        }
    }
}   

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}