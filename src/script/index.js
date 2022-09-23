
document.getElementById("burger__menu").addEventListener("click",()=>{
    const menudesplegable=document.getElementById("slide__menu")
    const menu=document.getElementById("burger__menu")
    const close=document.getElementById("close__menu")
    menudesplegable.style.left="0"
    menu.style.display="none"
    close.style.display="block"
})
document.getElementById("close__menu").addEventListener("click",()=>{
    const menudesplegable=document.getElementById("slide__menu")
    const menu=document.getElementById("burger__menu")
    const close=document.getElementById("close__menu")
    menudesplegable.style.left="-100%"
    menu.style.display="block"
    close.style.display="none"
})