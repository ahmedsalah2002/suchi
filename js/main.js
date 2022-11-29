let navbar=document.querySelector(".navbar");

window.onscroll=function(){
    if(window.scrollY > 20){
        navbar.classList.add("scrolling")
    }
    else{
        navbar.classList.remove("scrolling")
    }
}


let sections=document.querySelectorAll("section");
let navsLink=document.querySelectorAll("nav .navbar-nav a")


window.addEventListener('scroll' ,function () {
        sections.forEach((e)=>{
            let top=window.scrollY;
            let offset=e.offsetTop;
            let height=e.offsetHeight;
            let id =e.getAttribute("id")
            if(top>=offset-200 && top< offset+height){
                navsLink.forEach((links)=>{
                    links.classList.remove("active")
                    document.querySelector("nav .navbar-nav a[href*="+id+"]").classList.add("active")
                    
                })
            }
        })
})


let dark=document.querySelector(".dark");
let paragraph=document.querySelectorAll(".text-black-50")
let logo=document.querySelector(".navbar-brand")
let light=document.querySelector("#light")
dark.addEventListener("click",function(){
    light.classList.toggle("fa-moon")
    if(light.classList.toggle("fa-sun")){
        document.documentElement.style.setProperty('--main-color', 'rgba(19,16,15,255)');
        document.body.style.color="white";
        paragraph.forEach((e)=>{
            e.classList.remove("text-black-50")
        })
        navsLink.forEach((el)=>{
            el.style.color="white";
        })
        logo.style.color="white"
        document.querySelector(".navbar-toggler svg").style.color="white"
        document.body.style.transition="1s"
    }
    else{
        document.documentElement.style.setProperty('--main-color', 'hsl(19deg 100% 96%)');
    document.body.style.color="black";
    paragraph.forEach((e)=>{
        e.classList.add("text-black-50")
    })
    navsLink.forEach((el)=>{
        el.style.color="black";
    })
    logo.style.color="black"
    document.querySelector(".navbar-toggler svg").style.color="black"
    document.body.style.transition="1s"
    }
}
)
    