
import{articles} from '/data.js'


// console.log(articles)

const header = document.getElementById('header')

const footer = document.getElementById('footer')

fetch('header.html')
.then(res => res.text())
.then(data =>{
    // console.log(data)
    header.innerHTML = data
     const menu = document.getElementById("menu");
    const barsMobile = document.getElementById("fa-bars");
    const xMobile = document.getElementById("fa-x");
      let  moonIcon = document.getElementById('fa-moon')
      let  sunIcon = document.getElementById('fa-sun')
    

    barsMobile.addEventListener("click", function () {
      menu.style.display = "block";
      menu.classList.add("mobile-menue");
      barsMobile.style.display = "none";
      xMobile.style.display = "block";
    });
    xMobile.addEventListener("click", function () {
      menu.style.display = "none";
      barsMobile.style.display = "block";
      xMobile.style.display = "none";
    });
   moonIcon.addEventListener('click', function(){
      document.body.classList.toggle('dark')
      moonIcon.style.display= 'none'
      sunIcon.style.display ='block'
      header.classList.toggle('dark')
       if(document.body.classList.contains('dark')){
      localStorage.setItem('theme' ,"dark" )
    }else{
       localStorage.setItem('theme' ,"light" )
       
    }
    })
   sunIcon.addEventListener('click', function(){
      document.body.classList.remove('dark')
      moonIcon.style.display= 'block'
      sunIcon.style.display ='none'
      header.classList.remove('dark')
      
    })
const savedtheme = localStorage.getItem('theme')
    if(savedtheme === 'dark'){
   document.body.classList.toggle('dark')
      header.classList.toggle('dark')
      article1.classList.toggle('dark')
      sunIcon.style.display='block'
      moonIcon.style.display='none'
}else{
  moonIcon.style.display='block'
sunIcon.style.display='none'

}
})




fetch('footer.html')
.then(res => res.text())
.then(data => {
footer.innerHTML = data
})


function renderaricles(){
let articleHtml =''
  
    
 articles.forEach(function(article){
  articleHtml+= `
               <div class="article" id="${article.id}">
                              <img src="${article.image}" alt="" />
                              <h6>${article.date}</h6>
                              <h2>${article.title}</h2>
                              <p>${article.description}</p>
                 </div>  
  `

 })
 return articleHtml

  




}
console.log(renderaricles(articles))

document.getElementById('articles').innerHTML = renderaricles(articles)





