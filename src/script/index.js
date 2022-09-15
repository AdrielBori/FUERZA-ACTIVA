let pixel=0
document.getElementById("der").addEventListener("click", ()=>{
    const card=document.getElementById("content__cards");
    card.style.left=`${pixel+200}px`;
    pixel=pixel+200;
})
document.getElementById("izq").addEventListener("click", ()=>{
    const card=document.getElementById("content__cards");
    card.style.left=`${pixel-200}px`;
    pixel=pixel-200;
})
