//MAIN VARIABLES
let vh,vw;
vh = window.innerHeight;
vw = window.innerWidth;
window.addEventListener('resize', function(event) {
    if (parseInt(event.srcElement.innerWidth) != vw) {
        document.location.reload();
    }
}, true);


// MENU SCRIPT


const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

icon.onclick = function () {
    icon.classList.toggle("active");
    menu.classList.toggle("active");
};
if (icon.classList.contains('active')) {
    icon.style.background = 'url(images/mobile-menu/delete.png) !important;';
}
else {
    icon.style.background = 'url(images/mobile-menu/hamburger.png) !important;';
}


// NAV OPACITY SCRIPT

const nav = document.getElementById('nav');
let btns = document.querySelectorAll('.button');
const like = document.getElementById('liked');
const like_alt = document.getElementById('liked_alt');
const logo = document.getElementById('logo');
        
if (vw>=1024) {
    //FAVOURITES SCRIPT
        like.onclick = function () {
            like_alt.classList.toggle("active");
            like.classList.toggle("active");
        }
        like_alt.onclick = function () {
            document.location.reload();
        }
        window.onclick = function (event) {
            if (event.target.id != "liked" ) {
                like_alt.classList.remove("active");
                like.classList.remove("active");
            }
        };



        window.addEventListener('scroll', function() {
            if (window.scrollY == 0) {
                btns.forEach(element => {
                    element.classList.add('black');
                });
                like.classList.add('black_heart');
                nav.style.background = 'rgba(0, 0, 0, 0)';
                logo.classList.remove('light');
            }
            else if (window.scrollY >= vh) {
                btns.forEach(element => {
                    element.classList.remove('black');
                });
                like.classList.remove('black_heart');
                nav.style.background = 'rgba(0, 0, 0, 0.5)';
                logo.classList.add('light');
            }
            else {
                btns.forEach(element => {
                    element.classList.remove('black');
                });
                like.classList.remove('black_heart');
                nav.style.background = 'rgba(0, 0, 0, 0.5)';
                logo.classList.add('light');
            }
        }); 
};


// ACCORDEON MENU SCRIPT
const mobile_menu_decor_plus = document.getElementById('mobile_menu_decor_plus');
const decor_ul = document.getElementById('decor_ul');
const mobile_menu_about_plus = document.getElementById('mobile_menu_about_plus');
const about_project_ul = document.getElementById('about_project_ul');


mobile_menu_decor_plus.onclick = function () {
    decor_ul.classList.toggle("active");
    mobile_menu_decor_plus.classList.toggle("active");
    about_project_ul.classList.remove("active");
    mobile_menu_about_plus.classList.remove("active");
}
mobile_menu_about_plus.onclick = function () {
    about_project_ul.classList.toggle("active");
    mobile_menu_about_plus.classList.toggle("active");
    decor_ul.classList.remove("active");
    mobile_menu_decor_plus.classList.remove("active");
}