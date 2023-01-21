$(document).ready(function(){
    $('#autor-more').hide();
    rotatePics(1);

});
function setAttributes(element, atributes) {
    for(var key in atributes) {
        element.setAttribute(key, atributes[key]);
    }
}
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


let upper = [["far fa-clock", "Opening Hour", "Mon - Fri, 8:00 - 9:00"], ["fa fa-phone-alt", "Call us", "+012 345 6789"], ["far fa-envelope", "Email Us", "cwash&#64;gmail.com"]];
let row = "<div class='row'>"
for(i in upper){
    row += `
    <div class="col-4">
        <div class="top-bar-item">
            <div class="top-bar-icon">
                <i class="${upper[i][0]}"></i>
            </div>
            <div class="top-bar-text">
                <h3>${upper[i][1]}</h3>
                <p>${upper[i][2]}</p>
            </div>
        </div>    
    </div>
    `
}
row += "</div>";
document.querySelector(".take").innerHTML = row;


//nav meni
let menu = [["Home", "#top"], ["About", "#about-id"], ["Service", "#service-id"], ["Facts", "#facts-id"], ["Price", "#price-id"], ["Location", "#location-id"], ["Team", "#team-id"], ["Contact", "#contact-id"], ["Author", "#author"]];

let navbar = document.createElement("div");
navbar.setAttribute("class", "navbar-nav m-auto");
let navResponsive = document.createElement("div");
setAttributes(navResponsive, {"class": "collapse navbar-collapse justify-content-between", "id": "navbarCollapse"});
for(i in menu){
    let a = document.createElement("a");
    setAttributes(a, {"href": menu[i][1], "class": "nav-item nav-link"});
    if(i == 0) a.classList.add("active");
    a.appendChild(document.createTextNode(menu[i][0]));
    navbar.appendChild(a);
}
navResponsive.appendChild(navbar);
document.querySelector("nav").appendChild(navResponsive);
//nav fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $(".nav-bar").addClass("nav-sticky");
        $(".carousel, .page-header").css("margin-top", "73px");
    }
     else {
        $('.nav-bar').removeClass('nav-sticky');
        $('.carousel, .page-header').css("margin-top", "0");
    }
});

$(document).ready(function () {
    $(document).scroll(onScroll)//on("scroll", onScroll);
    
    //smoothscroll
    $('.navbar-nav a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

//slider

function createImg(srcValue, altValue){
    //setAttributes(img, {"src": srcValue, "alt": altValue, "class": "position-absolute"});
    image.setAttribute("src", srcValue);
    image.setAttribute("alt", altValue);
    image.setAttribute("class", "position-absolute")
}
for(let i = 1; i < 5; i++){
    var image = document.createElement("img");
    createImg(`img/carousel-${i}.jpg`, `Carousel-${i}`);
    document.querySelector("#slider").appendChild(image);
}

function rotatePics(currentPhoto) {
    var numberOfPhotos = $('#slider img').length;
    currentPhoto = currentPhoto % numberOfPhotos;
      
    $('#slider img').eq(currentPhoto).fadeOut(function() {
          // re-order the z-index
      $('#slider img').each(function(i) {
        $(this).css(
          'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
        );
      });
      $(this).show();
      setTimeout(function() {rotatePics(++currentPhoto);}, 3000);
    });
}

//services
let services = [
    ["flaticon-car-wash-1", "Exterior Washing", "Give your car shine. Your car can look as day it came from factory. With us everything is possible."],
    ["flaticon-car-wash", "Interior Washing", "Interior is one of the most parts of your car. So we are here to keep it clean for you."],
    ["flaticon-vacuum-cleaner", "Vacuum Cleaning", "Our vacuum cleaner is clen the every part of dust in your car. Don't trust? Well come to us to see :)"], 
    ["flaticon-seat", "Seats Washing", "We are washing all type of seats. For canvas we have deep cleaning, and fine cleaning for leather."], 
    ["flaticon-car-service", "Window Wiping", "Do you like to look outside? Well if you like you want the cleanest windows, dont't worry we got you."],
    ["flaticon-car-service", "Wet cleaning", "Every washed car has tiny imprefections, more or less visible. But we'll fix that with wet cleaning."], 
    ["flaticon-car-wash", "Oil Changing", "We offer you oil changing as part of our program. We will take care for oil changing in your car."], 
    ["flaticon-brush-1", "Brake Repairing", "Definitely the most important part of any car. If you want to stop safely you have to maintain then propertly."]
];

var rowServices = "";
for(i in services){
    rowServices +=`<article class="col-lg-3 col-md-6">
        <div class="service-item">
            <i class="${services[i][0]}"></i>
            <h3>${services[i][1]}</h3>
            <p>${services[i][2]}</p>
        </div>
    </article>`
}
document.querySelector("#article-services").innerHTML = rowServices;

//facts

let facts = [
    ["fa fa-map-marker-alt", "25", "Service Points"],
    ["fa fa-user", "350", "Engineers & Workers"],
    ["fa fa-users", "1500", "Happy Clients"],
    ["fa fa-check", "5000", "Projects Completed"]
];
var rowFacts = "";
for(i in facts){
    rowFacts += `<article class="col-lg-3 col-md-6">
                    <div class="facts-item">
                        <i class="${facts[i][0]}"></i>
                        <div class="facts-text">
                            <h3 class="my-count">${facts[i][1]}</h3>
                            <p>${facts[i][2]}</p>
                        </div>
                    </div>
                </article>`
}
document.querySelector("#facts-article").innerHTML = rowFacts;
$('.my-count').counterUp({
    delay: 10,
    time: 2000
});

//price
let inherited = [];
for(let i = 0; i < 5; i++){
    inherited[i] = services[i][1];
}
let price = new Array(["Basic", "Premium", "Complex"], 
    [25, 35, 49],
    (inherited), 
    ["far fa-check-circle", "far fa-times-circle"]);
console.log(price[2]);
var rowPrice = "";
var featured = "";
for(let i = 0; i < 3; i++){
    if(i == 1) featured = " featured-item";
    rowPrice += `
    <article class="col-md-4">
        <div class="price-item${featured}">
            <div class="price-header">
                <h3>${price[0][i]} Cleaning</h3>
                <h2><span>$</span><strong>${price[1][i]}</strong><span>.99</span></h2>
            </div>
            <div class="price-body">
                <ul>`
    featured="";            
    for(let j = 0; j < 5; j++){
        var liIndex = 0;
        if((i == 0 && j >= 3) || (i == 1 && j == 4)) liIndex = 1;
        rowPrice+=`
                    <li><i class="${price[3][liIndex]}"></i>${price[2][j]}</li>`
    }     
    liIndex = 0;   
    rowPrice+=`
                </ul>
            </div>
            <div class="price-footer price-button">
                 
            </div>
        </div>
    </article>
    `;
}
document.querySelector("#price-article").innerHTML = rowPrice;
for(let i = 0; i < 3; i++){
    var priceButton = document.createElement("input");
    setAttributes(priceButton, {"type": "button", "class": "btn btn-custom", "value": "Book Now"});
    document.querySelectorAll(".price-button")[i].appendChild(priceButton);
}
//locations
let locations = new Array(
    ["Wienna, Austria", "Wollzeile 29, 1010 Wien", "+043 687 244"], ["Berlin, Germany", "Friedrichstraße 88, 10117 Berlin", "+049 821 637"],
    ["Nice, France", "1 Rue Cluvier, 06000 Nice", "+033 199 871"],
    ["Geneve, Switzerland", "Pl. de Montbrillant 4, 1201 Genève", "+041 981 287"]
);
let rowLocation = "";
for(i in locations){
    rowLocation += `
    <article class="col-md-6">
        <div class="location-item">
            <i class="fa fa-map-marker-alt"></i>
            <div class="location-text">
                <h3>${locations[i][0]}</h3>
                <p>${locations[i][1]}</p>
                <p><strong>Call:</strong>${locations[i][2]}</p>
            </div>
        </div>
    </article>`
}
document.querySelector("#location-article").innerHTML = rowLocation;

//team
let team = new Array(
    ["Donald John", "Engineer"],
    ["Adam Philips", "Mechanics"],
    ["Thomas Olsen", "Worker"],
    ["James Alien", "Electrician"]
)
var iconsTeam = new Array(
    ["twitter", "https://twitter.com/"], 
    ["facebook-f", "https://www.facebook.com/"], 
    ["linkedin-in", "https://www.linkedin.com/"], 
    ["instagram", "https://www.instagram.com/"]
    );

    let rowTeam="";
    for(let i = 0; i < team.length; i++){
        rowTeam+=`
        <div class="col-lg-3 col-md-6 team-item">
            <div class="team-img">
                <img src="img/team-${i+1}.jpg" alt="Team Image ${i+1}">
            </div>
            <div class="team-text">
                <h2>${team[i][0]}</h2>
                <p>${team[i][1]}</p>
                <div class="team-social">
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>`
    }

//contact
document.querySelector("#team-article").innerHTML=rowTeam;
var contactRow="";
for(i in upper){
    contactRow+=`
    <div class="contact-info-item">
        <div class="contact-info-icon">
            <i class="${upper[i][0]}"></i>
        </div>
        <div class="contact-info-text">
            <h3>${upper[i][1]}</h3>
            <p>${upper[i][2]}</p>
        </div>
    </div>`
}
document.querySelector("#contact-article").innerHTML=contactRow;
var regName = /^([A-ZŠĐŽČĆ][a-zšđžčć]{2,15}){1,5}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{2,15}){1,5}$/;
var regEmail = /^[a-z][\w\-\.]+\@[a-z0-9]{2,15}(\.[a-z]{2,4})?\.[a-z]{2,4}$/;
var regPhone=/^\+[0-9]{2,3}\s?[0-9]{2,3}\s?[0-9]{3,4}\s?[0-9]{3,4}$/;
var regText=/^([\w\.\-\s]{10,150})+$/;
//footer
for(let j in iconsTeam){
    let a = document.createElement("a");
    setAttributes(a, {"href": `${iconsTeam[j][1]}`, "class": "btn"});
    let i = document.createElement("i");
    i.setAttribute("class", `fab fa-${iconsTeam[j][0]}`);
    a.appendChild(i);
    document.querySelector(".footer-social").appendChild(a);
}

$(window).scroll(function() {
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
});
//author
let author = new Array("Nemanja Ćinćur", "ICT college", "Web designer", "I hope you like my website");
var authorText="";
for(i in author){
    authorText+=`<p>${author[i]}</p>`
}
document.querySelector("#din").innerHTML=authorText;
$('#toggleButton').click(function(){
    $('#autor-more').toggle();
    
    if($('#autor-more').is(':visible')) {
      $(this).val('Show less');
    } 
    else
    {
      $(this).val('Show more');
    }
});
let form = new Array(
    ["text", "email", "tel"], 
    ["name", "email", "phone"],
    ["Your name", "Your email", "Your phone"]
);
for(i in form){
    var input = document.createElement("input");
    setAttributes(input,{"type": `${form[0][i]}`, "id": `${form[1][i]}`, "placeholder": `${form[2][i]}`, "class": "form-control"});
    if(i >= 1) input.classList.add("mt-3");
    document.querySelector("#take-input").appendChild(input);
}
$('#btnSend').click(function(){
    formCheck(regName, $('#name').val(), "name");
    formCheck(regEmail, $('#email').val(), "email");
    formCheck(regPhone, $('#phone').val(), "phone");
    formCheck(regText, $('#text').val(), "text");
    if(($('#name').val().match(regName)) && ($('#email').val().match(regEmail)) && ($('#phone').val().match(regPhone)) && ($('#text').val().match(regText))){
    $('.form-control').each(function(){
        $(this).removeClass("border border-success");
    })
    $('#contactForm').trigger("reset");
    $('#text').after("<p class='help-block text-success' id='pass'>Your message has been sent, we will answerasap:)</p>");
    }
})
$('#name').blur(function(){
    formCheck(regName, $('#name').val(), "name");
});
$('#email').blur(function(){
    formCheck(regEmail, $('#email').val(), "email");
});
$('#phone').blur(function(){
    formCheck(regPhone, $('#phone').val(), "phone");
});
$('#text').blur(function(){
    formCheck(regText, $('#text').val(), "text");
});

function formCheck(reg, val, id){
    if(val.match(reg)){
        $(`#${id}`).removeClass('border border-danger');
        $(`#message-${id}`).fadeOut();
        $(`#${id}`).addClass('border border-success');
    }
    else{
        $('#pass').hide();
        $(`#${id}`).addClass("border border-danger");
        if($(`#message-${id}`).is(":visible")) return;
        if(id == "name")
        {
            $(`#${id}`).after(`<p class='help-block text-danger' id='message-${id}'>Please enter your name eg. John Doe</p>`);
        }
        else if(id == "email") $(`#${id}`).after(`<p class='help-block text-danger' id='message-${id}'>Please enter your email eg. email@gmail.com</p>`);
        else if(id == "phone") $(`#${id}`).after(`<p class='help-block text-danger' id='message-${id}'>Please enter your phone in format +(xxx) xxx xxx`);
        else if(id == "text") $(`#${id}`).after(`<p class='help-block text-danger' id='message-${id}'>You have to write message correctly`);
    }
}