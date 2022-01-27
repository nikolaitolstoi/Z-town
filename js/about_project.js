

// TRIANGLES SCRIPT

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
//-------------------------------------------
const img1_top = img1.getBoundingClientRect().top + window.pageYOffset;
const img1_height = parseInt(window.getComputedStyle(img1).height.replace('px', ''));

const img2_top = img2.getBoundingClientRect().top + window.pageYOffset;
const img2_height = parseInt(window.getComputedStyle(img2).height.replace('px', ''));

const img3_top = img3.getBoundingClientRect().top + window.pageYOffset;
const img3_height = parseInt(window.getComputedStyle(img3).height.replace('px', ''));
//-------------------------------------------
const img1_elem1 = document.getElementById('img1_elem1');
const img1_elem1_top = parseInt(window.getComputedStyle(img1_elem1).top.replace('px', ''));
const img1_elem1_left = parseInt(window.getComputedStyle(img1_elem1).left.replace('px', ''));

const img1_elem2 = document.getElementById('img1_elem2');
const img1_elem2_top = parseInt(window.getComputedStyle(img1_elem2).top.replace('px', ''));
const img1_elem2_left = parseInt(window.getComputedStyle(img1_elem2).left.replace('px', ''));

const img1_elem3 = document.getElementById('img1_elem3');
const img1_elem3_top = parseInt(window.getComputedStyle(img1_elem3).top.replace('px', ''));
const img1_elem3_left = parseInt(window.getComputedStyle(img1_elem3).left.replace('px', ''));
//-------------------------------------------
const img2_elem1 = document.getElementById('img2_elem1');
const img2_elem1_top = parseInt(window.getComputedStyle(img2_elem1).top.replace('px', ''));
const img2_elem1_left = parseInt(window.getComputedStyle(img2_elem1).left.replace('px', ''));

const img2_elem2 = document.getElementById('img2_elem2');
const img2_elem2_top = parseInt(window.getComputedStyle(img2_elem2).top.replace('px', ''));
const img2_elem2_left = parseInt(window.getComputedStyle(img2_elem2).left.replace('px', ''));

const img2_elem3 = document.getElementById('img2_elem3');
const img2_elem3_top = parseInt(window.getComputedStyle(img2_elem3).top.replace('px', ''));
const img2_elem3_left = parseInt(window.getComputedStyle(img2_elem3).left.replace('px', ''));

const img2_elem4 = document.getElementById('img2_elem4');
const img2_elem4_top = parseInt(window.getComputedStyle(img2_elem4).top.replace('px', ''));
const img2_elem4_left = parseInt(window.getComputedStyle(img2_elem4).left.replace('px', ''));

const img2_elem5 = document.getElementById('img2_elem5');
const img2_elem5_top = parseInt(window.getComputedStyle(img2_elem5).top.replace('px', ''));
const img2_elem5_left = parseInt(window.getComputedStyle(img2_elem5).left.replace('px', ''));

const img2_elem6 = document.getElementById('img2_elem6');
const img2_elem6_top = parseInt(window.getComputedStyle(img2_elem6).top.replace('px', ''));
const img2_elem6_left = parseInt(window.getComputedStyle(img2_elem6).left.replace('px', ''));

const img2_elem7 = document.getElementById('img2_elem7');
const img2_elem7_top = parseInt(window.getComputedStyle(img2_elem7).top.replace('px', ''));
const img2_elem7_left = parseInt(window.getComputedStyle(img2_elem7).left.replace('px', ''));

const img2_elem8 = document.getElementById('img2_elem8');
const img2_elem8_top = parseInt(window.getComputedStyle(img2_elem8).top.replace('px', ''));
const img2_elem8_left = parseInt(window.getComputedStyle(img2_elem8).left.replace('px', ''));

const img2_elem9 = document.getElementById('img2_elem9');
const img2_elem9_top = parseInt(window.getComputedStyle(img2_elem9).top.replace('px', ''));
const img2_elem9_left = parseInt(window.getComputedStyle(img2_elem9).left.replace('px', ''));

const img3_elem1 = document.getElementById('img3_elem1');
const img3_elem1_top = parseInt(window.getComputedStyle(img3_elem1).top.replace('px', ''));
const img3_elem1_left = parseInt(window.getComputedStyle(img3_elem1).left.replace('px', ''));

const img3_elem2 = document.getElementById('img3_elem2');
const img3_elem2_top = parseInt(window.getComputedStyle(img3_elem2).top.replace('px', ''));
const img3_elem2_left = parseInt(window.getComputedStyle(img3_elem2).left.replace('px', ''));

    window.onscroll = function () {




    const footer = document.getElementById('footer');
    const footer_top = footer.getBoundingClientRect().top + window.pageYOffset;
    const footer_height = parseInt(window.getComputedStyle(footer).height.replace('px', ''));

    const sidebar = document.getElementById('sidebar');
    const sidebar_top = sidebar.getBoundingClientRect().top + window.pageYOffset;
    const sidebar_height = parseInt(window.getComputedStyle(sidebar).height.replace('px', ''));

    const sidebar_li = document.getElementById('sidebar_li');
    const sidebar_li_top = sidebar_li.getBoundingClientRect().top + window.pageYOffset;
    const sidebar_li_height = parseInt(window.getComputedStyle(sidebar_li).height.replace('px', ''));
        if (vw>=1024) {
            //FOR IMG1.1
            if (window.pageYOffset==0) {
                img1_elem1.style.top = img1_elem1_top + 'px';
                img1_elem1.style.left = img1_elem1_left + 'px';
            } 
            else if (window.pageYOffset+vh > img1_top + img1_height+0) {
                img1_elem1.style.top = img1_elem1_top - vw*0.04 + 'px';
                img1_elem1.style.left = img1_elem1_left +  vw*0.07 + 'px';
            };
            //FOR IMG1.2
            if (window.pageYOffset<50) {
                img1_elem2.style.top = img1_elem2_top + 'px';
                img1_elem2.style.left = img1_elem2_left + 'px';
            } 
            else if (window.pageYOffset+vh > img1_top + img1_height+170) {
                img1_elem2.style.top = img1_elem2_top + vw*0.03 + 'px';
                img1_elem2.style.left = img1_elem2_left -  vw*0.04 + 'px';
            };
            //FOR IMG1.3
            if (window.pageYOffset+vh < img1_top + img1_height+220) {
                img1_elem3.style.top = img1_elem3_top + 'px';
                img1_elem3.style.left = img1_elem3_left + 'px';
            } 
            else if (window.pageYOffset+vh > img1_top + img1_height+290) {
                img1_elem3.style.top = img1_elem3_top + vw*0.05 + 'px';
                img1_elem3.style.left = img1_elem3_left +  vw*0.05 + 'px';
            };
            //FOR IMG2.1
            if (window.pageYOffset+vh < img2_top + img2_height+100) {
                img2_elem1.style.top = img2_elem1_top + 'px';
                img2_elem1.style.left = img2_elem1_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+130) {
                img2_elem1.style.top = img2_elem1_top - vw*0.02 + 'px';
                img2_elem1.style.left = img2_elem1_left +  vw*0.06 + 'px';
            };
            //FOR IMG2.2
            if (window.pageYOffset+vh < img2_top + img2_height+100) {
                img2_elem2.style.top = img2_elem2_top + 'px';
                img2_elem2.style.left = img2_elem2_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+130) {
                img2_elem2.style.top = img2_elem2_top - vw*0.02 + 'px';
                img2_elem2.style.left = img2_elem2_left +  vw*0.04 + 'px';
            };
            //FOR IMG2.3
            if (window.pageYOffset+vh < img2_top + img2_height+100) {
                img2_elem3.style.top = img2_elem3_top + 'px';
                img2_elem3.style.left = img2_elem3_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+130) {
                img2_elem3.style.top = img2_elem3_top - vw*0.02 + 'px';
                img2_elem3.style.left = img2_elem3_left +  vw*0.08 + 'px';
            };
            //FOR IMG2.4
            if (window.pageYOffset+vh < img2_top + img2_height+130) {
                img2_elem4.style.top = img2_elem4_top + 'px';
                img2_elem4.style.left = img2_elem4_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+160) {
                img2_elem4.style.top = img2_elem4_top - vw*0.007 + 'px';
                img2_elem4.style.left = img2_elem4_left +  vw*0.06 + 'px';
            };
            //FOR IMG2.5
            if (window.pageYOffset+vh < img2_top + img2_height+130) {
                img2_elem5.style.top = img2_elem5_top + 'px';
                img2_elem5.style.left = img2_elem5_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+160) {
                img2_elem5.style.top = img2_elem5_top - vw*0.007 + 'px';
                img2_elem5.style.left = img2_elem5_left +  vw*0.04 + 'px';
            };
            //FOR IMG2.6
            if (window.pageYOffset+vh < img2_top + img2_height+130) {
                img2_elem6.style.top = img2_elem6_top + 'px';
                img2_elem6.style.left = img2_elem6_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+160) {
                img2_elem6.style.top = img2_elem6_top - vw*0.007 + 'px';
                img2_elem6.style.left = img2_elem6_left +  vw*0.08 + 'px';
            };
            //FOR IMG2.7
            if (window.pageYOffset+vh < img2_top + img2_height+160) {
                img2_elem7.style.top = img2_elem7_top + 'px';
                img2_elem7.style.left = img2_elem7_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+190) {
                img2_elem7.style.top = img2_elem7_top + vw*0.03 + 'px';
                img2_elem7.style.left = img2_elem7_left +  vw*0.06 + 'px';
            };
            //FOR IMG2.8
            if (window.pageYOffset+vh < img2_top + img2_height+160) {
                img2_elem8.style.top = img2_elem8_top + 'px';
                img2_elem8.style.left = img2_elem8_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+190) {
                img2_elem8.style.top = img2_elem8_top + 'px';
                img2_elem8.style.left = img2_elem8_left +  vw*0.04 + 'px';
            };
            //FOR IMG2.9
            if (window.pageYOffset+vh < img2_top + img2_height+160) {
                img2_elem9.style.top = img2_elem9_top + 'px';
                img2_elem9.style.left = img2_elem9_left + 'px';
            } 
            else if (window.pageYOffset+vh > img2_top + img2_height+190) {
                img2_elem9.style.top = img2_elem9_top + 'px';
                img2_elem9.style.left = img2_elem9_left +  vw*0.06 + 'px';
            };
            //FOR IMG3.1
            if (window.pageYOffset+vh < img3_top + img3_height+0) {
                img3_elem1.style.top = img3_elem1_top + 'px';
                img3_elem1.style.left = img3_elem1_left + 'px';
            } 
            else if (window.pageYOffset+vh > img3_top + img3_height+60) {
                img3_elem1.style.top = img3_elem1_top + vw*0.03 + 'px';
                img3_elem1.style.left = img3_elem1_left -  vw*0.04 + 'px';
            };
            //FOR IMG3.2
            if (window.pageYOffset+vh < img3_top + img3_height-150) {
                img3_elem2.style.top = img3_elem2_top + 'px';
                img3_elem2.style.left = img3_elem2_left + 'px';
            } 
            else if (window.pageYOffset+vh > img3_top + img3_height-90) {
                img3_elem2.style.top = img3_elem2_top - vw*0.03 + 'px';
                img3_elem2.style.left = img3_elem2_left -  vw*0.04 + 'px';
            };

            if (sidebar_li_top+sidebar_li_height*5 >= img2_top-50 &&  sidebar_li_top+sidebar_li_height*5 <= img2_top+img2_height+100) {
            sidebar.style.filter = 'invert(1)';
            }
            else {
                sidebar.style.filter = 'invert(0)';
            };
            if (sidebar_li_top+sidebar_li_height*5 > footer_top-sidebar_li_height*5) {
                sidebar.style.transform = 'translateY(' + -0.1*vw + 'px)'
            }
            else if (sidebar_li_top+sidebar_li_height*5 < footer_top-sidebar_li_height*5){
                sidebar.style.transform = 'translateY(0px)'
            }
    }
    if (vw<1024) {
        if (window.pageYOffset == 0) {
            sidebar.style.background = 'rgba(0,0,0,0.0)';
        }
        else {
            sidebar.style.background = 'rgba(0,0,0,0.5)';
        };
            if (sidebar_li_top+sidebar_li_height*5 > footer_top-sidebar_li_height*5) {
                sidebar.style.transform = 'translateY(' + -100+ 'vh)'
            }
            else if (sidebar_li_top+sidebar_li_height*5 < footer_top-sidebar_li_height*5){
                sidebar.style.transform = 'translateY(0px)'
            }
    }
}

