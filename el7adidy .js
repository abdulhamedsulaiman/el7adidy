
document.querySelector(".togle-set .fa-gear").onclick = function (){

    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};


const colorsli=document.querySelectorAll(".list-color li");

colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--firstcolor" , e.target.dataset.color);
    });
});


let page = document.querySelector(".home");

let imgAraay = ["1.jpg", "2.jpg" , "3.jpg" , "4.jpg" ];


setInterval(() =>{
    let randomNumber = Math.floor(Math.random() * imgAraay.length);
    console.log(randomNumber);

    page.style.backgroundImage = 'url("img/' + imgAraay[randomNumber] +'")';

} , 5000);





$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>40){
            $('.navbar').addClass("sticky");
    }
    else{
    $('.navbar').removeClass("sticky");
    
    }
  
    if(this.scrollY>500){
        $('.back').addClass("show");
    }
        else{
            $('.back').removeClass("show");
        }
    });
    $('.back').click(function(){
        $('html').animate({
            scrollTop:0
        });
        $('html').css("scrollBehavior","auto");
    });
    $('.navbar ul li ').click(function(){
        $('html').css("scrollBehavior","smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


var typed=new Typed(".typing",{
    strings:["  Mahmoud ElHadidy","  A YouTuber","  A video editor","  A Blogger","  A Graphic designer"," A Freelancer"],typeSpeed:100,backSpeed:60,loop:true
});

var typed=new Typed(".typing-2",{
    strings:["  YouTuber","  video editor","  Blogger","  Graphic designer","  Freelancer"],typeSpeed:100,backSpeed:60,loop:true
});