// document.querySelector(".sidebar-1").mouseenter = function(){
//     document.querySelector(".side-sec1").computedStyleMap.style.opacity = 1;
// }
document.querySelector(".sidebar-1").addEventListener("mouseenter",()=>{
    document.querySelector(".side-sec1").style.opacity = "1";
    // document.querySelector(".navbar").classList.add("removeBottomRadius");

})
// document.querySelector(".side-sec1").addEventListener("mouseleave",()=>{
//     document.querySelector(".side-sec1").style.opacity = "0";
//     // document.querySelector(".navbar").classList.remove("removeBottomRadius");    

// })

// document.querySelector(".side-sec2").addEventListener("mouseleave",()=>{
//     document.querySelector(".side-sec2").style.opacity = "0";
//     // document.querySelector(".navbar").classList.remove("removeBottomRadius");    

// })

document.querySelector(".sidebar-2").addEventListener("mouseenter",()=>{
    document.querySelector(".side-sec2").style.opacity = "1";
    // document.querySelector(".navbar").classList.add("removeBottomRadius");

})

document.querySelector(".closeR").addEventListener("click", ()=>{
    document.querySelector(".side-sec2").style.opacity = 0;
})
document.querySelector(".closeL").addEventListener("click", ()=>{
    document.querySelector(".side-sec1").style.opacity = 0;
})





















// var a = document.querySelector('.sidebar-1');
// a.addEventListener
// document.querySelector(".sidebar-1").onmouseover = function(){
//     document.querySelector('.side-sec1').style.opacity = 1;
    
// }
// document.querySelector('#side-sec1').onmouseout = function(){
//     document.querySelector('.side-sec1').style.opacity = 0;
// }
// document.querySelector(".sidebar-2").onmouseover = function(){
//     document.querySelector('.side-sec2').style.opacity = 1;
// }
// document.querySelector('.sidebar-2').onmouseout = function(){
//     document.querySelector('.side-sec2').style.opacity = 0;
// }




// document.querySelector(".btn-1").onmouseover = function(){
//     document.querySelector(".btn-body").style.backgroundColor =  "red";
// };
// document.querySelector(".btn-1").onmouseout = function(){
//     document.querySelector(".btn-body").style.backgroundColor =  "white";
// };