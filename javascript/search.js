const next = document.getElementById("next");
const images = document.querySelectorAll("#slider li")
const prev = document.getElementById("prev")
let displayImg = 0;
function changeNone(n){
    images[n].style.display = "none"
}
function changeBlock(n){
    images[n].style.display = "block"
}
//
// 逆方向を設定する
//
next.onclick = ()=>{
    changeNone(displayImg);
    // changeBlock(displayImg);
    // displayImg++
    if(displayImg === 5){
        displayImg = 0;
    }else{
        displayImg++;
    }
    changeBlock(displayImg);
    console.log (changeNone)
};
function changeNone(n){
    images[n].style.display = "none"
}
function changeBlock(n){
    images[n].style.display = "block"
}
prev.onclick = ()=>{
    changeNone(displayImg);
    // changeBlock(displayImg);
    // displayImg++
    if(displayImg === 0){
        displayImg = 5;
    }else{
        displayImg--;
    }
    changeBlock(displayImg);
    console.log (changeNone)
};
setInterval(() => {
    changeNone(displayImg);
    // changeBlock(displayImg);
    // displayImg++
    if(displayImg === 5){
        displayImg = 0;
    }else{
        displayImg++;
    }
    changeBlock(displayImg);
    console.log (changeNone)
},5000 )

















