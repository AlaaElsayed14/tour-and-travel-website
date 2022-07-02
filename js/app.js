
// toggle header search
{ let searchIcon = document.querySelector("#searchIcon");
  let headerForm = document.querySelector(".search-bar-container");
searchIcon.addEventListener("click" , showSearch);

function showSearch(){
    searchIcon.classList.toggle("fa-times");
    headerForm.classList.toggle("show");
}
}

// toggle login form in header
{let loginFormContainer = document.querySelector(".loginFormContainer");
let formClose = document.querySelector("#closeIcon");
let loginBtn = document.querySelector("#login-btn")

loginBtn.addEventListener("click" , showLoginForm)

function showLoginForm(){
    loginFormContainer.classList.add("showForm")
}

formClose.addEventListener("click" , hideLoginForm)

function hideLoginForm(){
    loginFormContainer.classList.remove("showForm")
}}

// bar icon in header (media query)
{let barIcon = document.querySelector("#barIcon");
let navBar = document.querySelector(".navbar");

barIcon.addEventListener("click" , showNav);
function showNav(){
    barIcon.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}}


//  video
let videoDot = document.querySelectorAll(".video-dot");
let video = document.querySelector("#video-slider");

videoDot.forEach(dot => {
    dot.addEventListener("click", slideVideo)
    function slideVideo(){
     let activeVideo = document.querySelector(".video-dot.active");
      activeVideo.classList.remove("active");
      this.classList.add("active");
      let videoSrc = dot.getAttribute("data-src");
      video.setAttribute("src" , videoSrc);
    }
});


window.onscroll = () =>{
    searchIcon.classList.remove("fa-times")
    headerForm.classList.remove("show")
    barIcon.classList.remove("fa-times")
    navBar.classList.remove("active")
}


$(document).ready(function(){
    $('.review .owl-carousel').owlCarousel({
            loop:true,
            margin:1,
            nav:false,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:true
                }
            }
        });

    $('.brand .owl-carousel').owlCarousel({
        loop:true,
        margin:2,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                nav:false
            }
        }
    })
  });



