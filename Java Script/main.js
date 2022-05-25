// search button 
let SearchBtn = document.querySelector("#search-btn");
let SearchBar = document.querySelector(".search-bar-container");

let FormBtn = document.querySelector("#login-btn");
let LoginForm = document.querySelector(".login-form-container");
let FormClose = document.querySelector("#form-close");

let NabBarsBtn = document.querySelector("#menu-bars");
let NavBar = document.querySelector("header .navbar");

let videoBtn = document.querySelectorAll('.video-btn');

let leftArrow = document.querySelector(".wrapper #left");
let rightArrow = document.querySelector(".wrapper #right");
let LastBox = document.querySelector('.review .review-slider .box:last-child');
let firstBox = document.querySelector('.review .review-slider .box:first-child');

// search icon active 
SearchBtn.addEventListener('click', () => {
    SearchBtn.classList.toggle('fa-times');
    SearchBar.classList.toggle('active')
})
// search icon active 

// login form active 
FormBtn.addEventListener('click', () => {
    LoginForm.classList.toggle('active')
})
FormClose.addEventListener('click', () => {
    LoginForm.classList.remove('active')
})
// login form active

// nanbar active 
NabBarsBtn.addEventListener('click', () => {
    NabBarsBtn.classList.toggle('fa-times');
    NavBar.classList.toggle('active')
})
// nanbar active

// Window Scroll 
window.onscroll = () => {
    SearchBtn.classList.remove('fa-times');
    SearchBar.classList.remove('active')
    NabBarsBtn.classList.remove('fa-times');
    NavBar.classList.remove('active');
}
// Window Scroll

// video Btn

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(".controls .active").classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('.video-slider').src = src;
    })
});
// video Btn

// start slider

// when start with the left Arrow 

leftArrow.addEventListener('click', () => {
    LastBox.style.marginRight = "-700px" ;
    firstBox.style.marginLeft = "-1300px";

    leftArrow.addEventListener('click', () => {
        LastBox.style.marginRight = "-400px" ;
        firstBox.style.marginLeft = "-1600px";

        leftArrow.addEventListener('click', () => {
            LastBox.style.marginRight = "-90px" ;
            firstBox.style.marginLeft = "-1900px";

            // start 
            rightArrow.addEventListener('click', () => {
                firstBox.style.marginLeft = "-1600px" ;
                LastBox.style.marginRight = "-400px";
                
                rightArrow.addEventListener('click', () => {
                    firstBox.style.marginLeft = "-1300px" ;
                    LastBox.style.marginRight = "-700px";
        
                    rightArrow.addEventListener('click', () => {
                        firstBox.style.marginLeft = "-1000px" ;
                        LastBox.style.marginRight = "-1000px";
                        
                        rightArrow.addEventListener('click', () => {
                            firstBox.style.marginLeft = "-700px" ;
                            LastBox.style.marginRight = "-1300px";
        
                            rightArrow.addEventListener('click', () => {
                                firstBox.style.marginLeft = "-300px" ;
                                LastBox.style.marginRight = "-1700px";
        
                                rightArrow.addEventListener('click', () => {
                                    firstBox.style.marginLeft = "0px" ;
                                    LastBox.style.marginRight = "-2000px";
                                });// Last
                                
                            });
        
                        });
        
                    });
        
                });
        
                
            });
        });

    });

});
// start slider

// when start with thr rigt Arrow 
rightArrow.addEventListener('click', () => {
    firstBox.style.marginLeft = "-700px" ;
    LastBox.style.marginRight = "-1300px";

    rightArrow.addEventListener('click', () => {
        firstBox.style.marginLeft = "-400px" ;
        LastBox.style.marginRight = "-1600px";

        rightArrow.addEventListener('click', () => {
            firstBox.style.marginLeft = "0px" ;
            LastBox.style.marginRight = "-2000px";

            // start 
            leftArrow.addEventListener('click', () => {
                LastBox.style.marginRight = "-1600px" ;
                firstBox.style.marginLeft = "-400px";
                
                leftArrow.addEventListener('click', () => {
                    LastBox.style.marginRight = "-1300px" ;
                    firstBox.style.marginLeft = "-700px";
        
                    leftArrow.addEventListener('click', () => {
                        LastBox.style.marginRight = "-1000px" ;
                        firstBox.style.marginLeft = "-1000px";
                        
                        leftArrow.addEventListener('click', () => {
                            LastBox.style.marginRight = "-700px" ;
                            firstBox.style.marginLeft = "-1300px";
        
                            leftArrow.addEventListener('click', () => {
                                LastBox.style.marginRight = "-300px" ;
                                firstBox.style.marginLeft = "-1700px";
        
                                leftArrow.addEventListener('click', () => {
                                    LastBox.style.marginRight = "0" ;
                                    firstBox.style.marginLeft = "-2000px";
                                });// Last
                                
                            });
        
                        });
        
                    });
        
                });
        
                
            });
        });

    });

});

// End Slider 


    




