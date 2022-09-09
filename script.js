
const btnElement=document.querySelector(".btn-mobile-nav")
const HeaderElement=document.querySelector(".header")


btnElement.addEventListener("click",function(){
    console.log("clicked")
    console.log(HeaderElement)
    HeaderElement.classList.toggle("nav-open")
})


const sectionHeroEl=document.querySelector(".section-hero");

const obs=new IntersectionObserver(function(entries){
    let ent=entries[0]
    console.log(ent)
    if(ent.isIntersecting===false){
        document.body.classList.add('sticky')
      }
      if(ent.isIntersecting===true){
        document.body.classList.remove('sticky')
      }
},{
    root:null,
    threshold:0,
    rootMargin:"-80px"
})
obs.observe(sectionHeroEl)