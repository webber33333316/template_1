let headerLinks = document.querySelector(".links");
let headerUl = document.querySelector(".links ul");
let header = document.querySelectorAll(".header")[0];

headerLinks.addEventListener("click" , ()=>{
    headerUl.classList.toggle("active");
})

window.addEventListener("scroll" , ()=>{
   header.classList.toggle("active", window.scrollY >1)
// if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
//     header.classList.toggle("active")
// }
})