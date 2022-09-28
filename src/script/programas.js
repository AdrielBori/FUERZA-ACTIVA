let rotar=1

document.getElementById("flechader").addEventListener("click",()=>{
    if(rotar==6){
        rotar=1
        let item="item-"+rotar
        const Item=document.getElementById(item)
        Item.checked=true

    }else{
        rotar++;
        let item="item-"+rotar
        const Item=document.getElementById(item)
        Item.checked=true
    }
})
document.getElementById("flechaizq").addEventListener("click",()=>{
    if(rotar==1){
        rotar=6
        let item="item-"+rotar
        const ItemR=document.getElementById(item)
        ItemR.checked=true
    }else{
        rotar--;
        let item="item-"+rotar
        const ItemR=document.getElementById(item)
        ItemR.checked=true
    }
})