// ==========================================================================================Main Variables==========================================================================================
let vh,vw;
vh = window.innerHeight;
vw = window.innerWidth;
window.addEventListener('resize', function(event) {
	if (parseInt(event.srcElement.innerWidth) != vw) {
		document.location.reload();
	}
}, true);

// ==========================================================================================Landing Page==========================================================================================
const nav_lp = document.getElementById('nav_lp');

const main_section = document.getElementById('main_section');
const main_section_top = parseInt(window.getComputedStyle(main_section).top);
const sec_lock = document.getElementById('sec_lock');
const sec_boat = document.getElementById('sec_boat');
const sec_man = document.getElementById('sec_man');


const section_slider = document.getElementById('section_slider');
const images = document.getElementById('images');
let m_top_section = parseInt(window.getComputedStyle(section_slider).top.replace('px', ''));


const section_company = document.getElementById('section_company');
const section_company_content = document.getElementById('section_company_content');
const section_company_main_text = document.getElementById('section_company_main_text');
const section_company_secondary_text = document.getElementById('section_company_secondary_text');

const section_company_top = parseInt(window.getComputedStyle(section_company).top.replace('px', ''));
const section_company_content_top = parseInt(window.getComputedStyle(section_company_content).top.replace('px', ''));
const section_company_main_text_left = window.getComputedStyle(section_company_main_text).transform;
const section_company_secondary_text_opacity = parseInt(window.getComputedStyle(section_company_secondary_text).opacity);

let btns_lp = document.querySelectorAll('.button');
const like_lp = document.getElementById('liked_lp');
const like_alt_lp = document.getElementById('liked_alt_lp');
const logo_lp = document.getElementById('logo_lp');


const elem1 = document.getElementById('elem1');
const elem2 = document.getElementById('elem2');
const elem4 = document.getElementById('elem4');
const elem7 = document.getElementById('elem7');


const elem1_left = parseInt(window.getComputedStyle(elem1).left.replace('px', ''));
const elem2_left = parseInt(window.getComputedStyle(elem2).left.replace('px', ''));
const elem4_left = parseInt(window.getComputedStyle(elem4).left.replace('px', ''));
const elem7_left = parseInt(window.getComputedStyle(elem7).left.replace('px', ''));

const elem1_bottom = parseInt(window.getComputedStyle(elem1).bottom.replace('px', ''));
const elem2_bottom = parseInt(window.getComputedStyle(elem2).bottom.replace('px', ''));
const elem4_bottom = parseInt(window.getComputedStyle(elem4).bottom.replace('px', ''));
const elem7_bottom = parseInt(window.getComputedStyle(elem7).bottom.replace('px', ''));

const elem1_height = parseInt(window.getComputedStyle(elem1).height.replace('px', ''));
const elem2_height = parseInt(window.getComputedStyle(elem2).height.replace('px', ''));
const elem4_height = parseInt(window.getComputedStyle(elem4).height.replace('px', ''));
const elem7_height = parseInt(window.getComputedStyle(elem7).height.replace('px', ''));

const elem1_width = parseInt(window.getComputedStyle(elem1).width.replace('px', ''));
const elem2_width = parseInt(window.getComputedStyle(elem2).width.replace('px', ''));
const elem4_width = parseInt(window.getComputedStyle(elem4).width.replace('px', ''));
const elem7_width = parseInt(window.getComputedStyle(elem7).width.replace('px', ''));

const elem1_transform = parseInt(window.getComputedStyle(elem1).transform);
const elem2_transform = parseInt(window.getComputedStyle(elem2).transform);
const elem4_transform = parseInt(window.getComputedStyle(elem4).transform);
const elem7_transform = parseInt(window.getComputedStyle(elem7).transform);

const difference_elem1 =  parseInt(window.getComputedStyle(elem1).left.replace('px', ''))-735 ;
const difference_elem2 =  Math.abs(parseInt(window.getComputedStyle(elem2).left.replace('px', ''))-239) ;
const difference_elem4 =  Math.abs(parseInt(window.getComputedStyle(elem4).left.replace('px', ''))-1190) ;
const difference_elem7 =  parseInt(window.getComputedStyle(elem7).left.replace('px', ''))+170 ;


const slider = document.getElementById('slider');
let sliderItems = document.getElementsByClassName("slider_item");
const left_arrow = document.getElementById('left');
const right_arrow = document.getElementById('right');

const head 	       = document.getElementById('head');

const corp         = document.getElementById('corp');
const l_hand       = document.getElementById('l_hand');
const r_hand       = document.getElementById('r_hand');
const r_wrist      = document.getElementById('r_wrist');

const foot         = document.getElementById('foot');
const hip          = document.getElementById('hip');

const shape_1      = document.getElementById('shape_1');
const shape_2      = document.getElementById('shape_2');
const shape_3      = document.getElementById('shape_3');

let head_top       = parseInt(window.getComputedStyle(head).top.replace('px', ''));
let head_left      = parseInt(window.getComputedStyle(head).left.replace('px', ''));

let corp_top       = parseInt(window.getComputedStyle(corp).top.replace('px', ''));
let corp_left      = parseInt(window.getComputedStyle(corp).left.replace('px', ''));

let r_hand_top     = parseInt(window.getComputedStyle(r_hand).top.replace('px', ''));
let r_hand_left    = parseInt(window.getComputedStyle(r_hand).left.replace('px', ''));

let l_hand_top     = parseInt(window.getComputedStyle(l_hand).top.replace('px', ''));
let l_hand_right   = parseInt(window.getComputedStyle(l_hand).right.replace('px', ''));

let r_wrist_top    = parseInt(window.getComputedStyle(r_wrist).top.replace('px', ''));
let r_wrist_right  = parseInt(window.getComputedStyle(r_wrist).right.replace('px', ''));

let foot_top       = parseInt(window.getComputedStyle(foot).top.replace('px', ''));
let foot_right     = parseInt(window.getComputedStyle(foot).right.replace('px', ''));

let hip_top        = parseInt(window.getComputedStyle(hip).top.replace('px', ''));
let hip_left       = parseInt(window.getComputedStyle(hip).left.replace('px', ''));

let shape_1_top    = parseInt(window.getComputedStyle(shape_1).top.replace('px', ''));
let shape_1_left   = parseInt(window.getComputedStyle(shape_1).left.replace('px', ''));

let shape_2_top    = parseInt(window.getComputedStyle(shape_2).top.replace('px', ''));
let shape_2_left   = parseInt(window.getComputedStyle(shape_2).left.replace('px', ''));

let shape_3_top    = parseInt(window.getComputedStyle(shape_3).top.replace('px', ''));
let shape_3_left   = parseInt(window.getComputedStyle(shape_3).left.replace('px', ''));


const sun 	                = document.getElementById('sun');

const flag                  = document.getElementById('flag');
const l_b_triangle_boat     = document.getElementById('l_b_triangle_boat');
const r_t_triangle_boat     = document.getElementById('r_t_triangle_boat');
const r_b_triangle_boat     = document.getElementById('r_b_triangle_boat');

const l_t_triangle_boat     = document.getElementById('l_t_triangle_boat');
const m_b_triangle_boat     = document.getElementById('m_b_triangle_boat');

let sun_top                 = parseInt(window.getComputedStyle(sun).top.replace('px', ''));
let sun_left                = parseInt(window.getComputedStyle(sun).left.replace('px', ''));

let flag_top                = parseInt(window.getComputedStyle(flag).top.replace('px', ''));
let flag_left               = parseInt(window.getComputedStyle(flag).left.replace('px', ''));

let r_t_triangle_boat_top   = parseInt(window.getComputedStyle(r_t_triangle_boat).top.replace('px', ''));
let r_t_triangle_boat_left  = parseInt(window.getComputedStyle(r_t_triangle_boat).left.replace('px', ''));

let l_b_triangle_boat_top   = parseInt(window.getComputedStyle(l_b_triangle_boat).top.replace('px', ''));
let l_b_triangle_boat_left  = parseInt(window.getComputedStyle(l_b_triangle_boat).left.replace('px', ''));

let r_b_triangle_boat_top   = parseInt(window.getComputedStyle(r_b_triangle_boat).top.replace('px', ''));
let r_b_triangle_boat_right = parseInt(window.getComputedStyle(r_b_triangle_boat).right.replace('px', ''));

let l_t_triangle_boat_top   = parseInt(window.getComputedStyle(l_t_triangle_boat).top.replace('px', ''));
let l_t_triangle_boat_left  = parseInt(window.getComputedStyle(l_t_triangle_boat).left.replace('px', ''));

let m_b_triangle_boat_top   = parseInt(window.getComputedStyle(m_b_triangle_boat).top.replace('px', ''));
let m_b_triangle_boat_right = parseInt(window.getComputedStyle(m_b_triangle_boat).right.replace('px', ''));

const bow 	                = document.getElementById('bow');

const l_t_triangle          = document.getElementById('l_t_triangle');
const l_b_triangle          = document.getElementById('l_b_triangle');
const r_t_triangle          = document.getElementById('r_t_triangle');
const r_b_triangle          = document.getElementById('r_b_triangle');

const l_t_keyhole_elem      = document.getElementById('l_t_keyhole_elem');
const l_b_keyhole_elem      = document.getElementById('l_b_keyhole_elem');
const r_t_keyhole_elem      = document.getElementById('r_t_keyhole_elem');
const r_b_keyhole_elem      = document.getElementById('r_b_keyhole_elem');

let bow_top                 = parseInt(window.getComputedStyle(bow).top);
let bow_left                = parseInt(window.getComputedStyle(bow).left);
let l_t_triangle_top        = parseInt(window.getComputedStyle(l_t_triangle).top.replace('px', ''));
let l_t_triangle_left       = parseInt(window.getComputedStyle(l_t_triangle).left.replace('px', ''));

let r_t_triangle_top        = parseInt(window.getComputedStyle(r_t_triangle).top.replace('px', ''));
let r_t_triangle_right      = parseInt(window.getComputedStyle(r_t_triangle).right.replace('px', ''));

let l_b_triangle_bottom     = parseInt(window.getComputedStyle(l_b_triangle).bottom.replace('px', ''));
let l_b_triangle_left       = parseInt(window.getComputedStyle(l_b_triangle).left.replace('px', ''));

let r_b_triangle_bottom     = parseInt(window.getComputedStyle(r_b_triangle).bottom.replace('px', ''));
let r_b_triangle_right      = parseInt(window.getComputedStyle(r_b_triangle).right.replace('px', ''));

let l_t_keyhole_elem_top    = parseInt(window.getComputedStyle(l_t_keyhole_elem).top.replace('px', ''));
let l_t_keyhole_elem_right  = parseInt(window.getComputedStyle(l_t_keyhole_elem).right.replace('px', ''));

let r_t_keyhole_elem_top    = parseInt(window.getComputedStyle(r_t_keyhole_elem).top.replace('px', ''));
let r_t_keyhole_elem_left   = parseInt(window.getComputedStyle(r_t_keyhole_elem).left.replace('px', ''));

let l_b_keyhole_elem_top    = parseInt(window.getComputedStyle(l_b_keyhole_elem).top.replace('px', ''));
let l_b_keyhole_elem_right  = parseInt(window.getComputedStyle(l_b_keyhole_elem).right.replace('px', ''));

let r_b_keyhole_elem_top    = parseInt(window.getComputedStyle(r_b_keyhole_elem).top.replace('px', ''));
let r_b_keyhole_elem_left   = parseInt(window.getComputedStyle(r_b_keyhole_elem).left.replace('px', ''));


window.addEventListener('scroll', function() {
		if (window.scrollY == 0) {
			if (vw >=1024) {
				// ----------------
				elem1.style.left = elem1_left + 'px';
				elem1.style.bottom = elem1_bottom + 'px';
				elem1.style.transform = 'rotate(' + 0 + 'deg)';
				elem1.style.height = elem1_height + 'px';
				elem1.style.width = elem1_width + 'px';
				// ----------------
				elem2.style.left = elem2_left + 'px';
				elem2.style.bottom = elem2_bottom + 'px';
				elem1.style.transform = 'rotate(' + 0 + 'deg)';
				elem2.style.height = elem2_height + 'px';
				elem2.style.width = elem2_width + 'px';
				// ----------------
				elem4.style.left = elem4_left + 'px';
				elem4.style.bottom = elem4_bottom + 'px';
				elem1.style.transform = 'rotate(' + 0 + 'deg)';
				elem4.style.height = elem4_height + 'px';
				elem4.style.width = elem4_width + 'px';
				// ----------------
				elem7.style.left = elem7_left + 'px';
				elem7.style.bottom = elem7_bottom + 'px';
				elem1.style.transform = 'rotate(' + 0 + 'deg)';
				elem7.style.height = elem7_height + 'px';
				elem7.style.width = elem7_width + 'px';
			}
		}
		else if (window.scrollY >= vh) {
			if (vw >=1024) {
				// ----------------
				elem1.style.bottom = '-' + vh + 'px';
				elem1.style.left = vw*0.4 + 'px';
				elem1.style.height = elem1_height*0.8 + 'px';
				elem1.style.width = elem1_width*0.74 + 'px';
				elem1.style.transform = 'rotate(' + 180 + 'deg)';
				// ----------------
				elem2.style.bottom = '-' + vh + 'px';
				elem2.style.left = vw*0.16 + 'px';
				elem2.style.transform = 'rotate(' + 180 + 'deg)';
				// ----------------
				elem4.style.bottom = '-' + vh + 'px';
				elem4.style.left = vw*0.64 + 'px';
				elem4.style.transform = 'rotate(' + 180 + 'deg)';
				elem4.style.height = elem3_height*0.885 + 'px';
				elem4.style.width = elem3_width*0.913 + 'px';
				// ----------------
				elem7.style.bottom = '-' + vh + 'px';
				elem7.style.left = -vw*0.075 + 'px';
				elem7.style.height = elem7_height*0.885 + 'px';
				elem7.style.transform = 'rotate(' + 180 + 'deg)';
			}
		}
		else {
			if (vw >=1024) {
			// ----------------
				elem1.style.left = elem1_left - window.scrollY/(vh/(elem1_left-vw*0.4)) + 'px';
				elem1.style.transform = 'rotate(' + window.scrollY/(vh/180) + 'deg)';
				elem1.style.bottom = '-'  + window.scrollY + 'px';
				elem1.style.height = (elem1_height -  window.scrollY/(vh/elem1_height/0.2)) + 'px';
				elem1.style.width = (elem1_width -  window.scrollY/(vh/elem1_width/0.26)) + 'px';
				// ----------------
				elem2.style.left = elem2_left - window.scrollY/(vh/(elem2_left-vw*0.16)) + 'px';
				elem2.style.transform = 'rotate(' + window.scrollY/(vh/180) + 'deg)';
				elem2.style.bottom = '-' + window.scrollY + 'px';
				// ----------------
				elem4.style.left = elem4_left - window.scrollY/(vh/(elem4_left-vw*0.64)) + 'px';
				elem4.style.transform = 'rotate(' + window.scrollY/(vh/180) + 'deg)';
				elem4.style.bottom = '-' + window.scrollY + 'px';
				elem4.style.height = (elem4_height -  window.scrollY/(vh/elem4_height/0.115)) + 'px';
				elem4.style.width = (elem4_width -  window.scrollY/(vh/elem4_width/0.087)) + 'px';
				// ----------------
				elem7.style.left = elem7_left -  window.scrollY/(vh/(elem7_left+vw*0.075)) + 'px';
				elem7.style.transform = 'rotate(' + window.scrollY/(vh/180) + 'deg)';
				elem7.style.height = (elem7_height -  window.scrollY/(vh/elem7_height/0.115)) + 'px';
				elem7.style.bottom = '-' + window.scrollY + 'px';
			}
		}
});	
//MOBILE MENU SCRIPT
const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

icon.onclick = function () {
    icon.classList.toggle("active");
    menu.classList.toggle("active");
};
if (icon.classList.contains('active')) {
    icon.style.background = 'url(images/landing_page/mobile-menu/delete.png) !important;';
}
else {
    icon.style.background = 'url(images/landing_page/mobile-menu/hamburger.png) !important;';
};
//FAVOURITES SCRIPT
if (vw>=1024) {
        like_lp.onclick = function () {
            like_alt_lp.classList.toggle("active");
            like_lp.classList.toggle("active");
        }
        like_alt_lp.onclick = function () {
            document.location.reload();
        }
        window.onclick = function (event) {
            if (event.target.id != "liked_lp" ) {
                like_alt_lp.classList.remove("active");
                like_lp.classList.remove("active");
            }
        };
        window.addEventListener('scroll', function() {
            if (window.scrollY == 0) {
                nav_lp.style.background = 'rgba(0, 0, 0, 0)';
            }
            else if (window.scrollY >= vh) {
                nav_lp.style.background = 'rgba(0, 0, 0, 0.5)';
            }
            else {
                nav_lp.style.background = 'rgba(0, 0, 0, 0.5)';
            }
        }); 
};


window.onscroll = function () {
	//--------------------------SECTION - SLIDER ФИКСАЦИЯ ПРИ ПРОКРУТКЕ----------
	if (vw>=1024) {
		if (window.pageYOffset >= 2 * m_top_section) {
			section_slider.style.position = 'absolute';
			section_slider.style.top =  + 2 * m_top_section +'px';
		}
		else {
			section_slider.style.position = 'fixed';		
			section_slider.style.top = 0 +'px';
			if (window.pageYOffset < m_top_section) {	
				section_slider.style.position = 'absolute';		
				section_slider.style.top = m_top_section +'px';
			}
		}
	};
	//--------------------------SECTION - SLIDER РАЗЛЕТАЮЩИЕСЯ ТРЕУГОЛЬНИКИ ПО ПРОКРУТКЕ----------
	// if (vw>=1024) {
	// 	if (window.pageYOffset >= 2 * m_top_section-350) {
	// 	images.style.background = 'url("images/landing_page/secvent/' + 78 + '.jpg")';
	// 	images.style.backgroundSize = 'cover';
	// 	images.style.display = 'none';
	// 	images.style.position = 'absolute';
	// 	images.style.top = '0px';
	// }
	// else {
	// 	images.style.background = 'url("images/landing_page/secvent/' + Math.floor((window.scrollY-m_top_section)/7.52564103+1) + '.jpg")';
	// 	images.style.backgroundSize = 'cover';
	// 	images.style.display = 'block';
	// 	images.style.position = 'fixed';
	// 	images.style.top = '0px';
	// 	if (window.pageYOffset < m_top_section) {
	// 		currentItem = 0;
	// 		sliderItems[currentItem].style.right = '0';
	// 		sliderItems[currentItem].style.opacity = '1';
	// 		sliderItems[currentItem].style.visibility = 'visible';
	// 		images.style.display = 'block';
	// 		images.style.position = 'absolute';
	// 		images.style.top = '0px';

	// 		images.style.background = 'url("images/landing_page/secvent/' + 1 + '.jpg")';	
	// 		images.style.backgroundSize = 'cover';

	// 	}
	// }
	//--------------------------SECTION - SLIDER ПЕРЕКЛЮЧЕНИЕ----------
	if (vw>=1024) { 
		if (window.pageYOffset >= m_top_section*1.7 && window.pageYOffset < 2 * m_top_section) {
			left_arrow.style.display = 'block';
			right_arrow.style.display = 'block';
		}
		else {
			left_arrow.style.display = 'none';
			right_arrow.style.display = 'none';
		};
		slider.addEventListener('mouseover', function (event) {
		slider.addEventListener('mousemove', function (event) {
		slider.style.cursor = 'none';
		if (event.offsetX <= (vw-100)/2) {
			right_arrow.style.display = 'none';
			left_arrow.style.display = 'block';
			left_arrow.style.left = event.offsetX + 'px';
			left_arrow.style.top = event.offsetY + 'px';
		}
		else {
			left_arrow.style.display = 'none';
			right_arrow.style.display = 'block';
			right_arrow.style.left = event.offsetX + 'px';
			right_arrow.style.top = event.offsetY + 'px';
		};
		});
		});	
		slider.addEventListener('mouseout', function (event) {
			right_arrow.style.display = 'none';
			left_arrow.style.display = 'none';
		});
	};
	let currentItem = 0;
	section_slider.addEventListener('click', function (event) {
		console.log(event);
		if (event.offsetX <= (vw-100)/2) {
			if (currentItem==0) {

				currentItem = 3;
			}
			else {
				currentItem--;
			};
		}
		else {
			if (currentItem==3) {
				currentItem = 0;
			}
			else {
				currentItem++;
			};
		};
		for (let i=0; i<4;i++) {
			if (i==currentItem)
				continue;
			else {
				sliderItems[i].style.right = '-' + 100 + '%';
				sliderItems[i].style.opacity = '0';
				sliderItems[i].style.visibility = 'hidden';
			}
		};
		sliderItems[currentItem].style.right = '0';
		sliderItems[currentItem].style.opacity = '1';
		sliderItems[currentItem].style.visibility = 'visible';
	});
	//--------------------------SECTION - SLIDER ARROWS----------
	if (vw>=1024) { 
		if (window.pageYOffset >= m_top_section*1.7 && window.pageYOffset < 2 * m_top_section) {
			left_arrow.style.display = 'block';
			right_arrow.style.display = 'block';
		}
		else {
			left_arrow.style.display = 'none';
			right_arrow.style.display = 'none';
		};
		slider.addEventListener('mouseover', function (event) {
		slider.addEventListener('mousemove', function (event) {
		slider.style.cursor = 'none';
		if (event.offsetX <= (vw-100)/2) {
			right_arrow.style.display = 'none';
			left_arrow.style.display = 'block';
			left_arrow.style.left = event.offsetX + 'px';
			left_arrow.style.top = event.offsetY + 'px';
		}
		else {
			left_arrow.style.display = 'none';
			right_arrow.style.display = 'block';
			right_arrow.style.left = event.offsetX + 'px';
			right_arrow.style.top = event.offsetY + 'px';
		};
		});
		});	
		slider.addEventListener('mouseout', function (event) {
			right_arrow.style.display = 'none';
			left_arrow.style.display = 'none';
		});
	}
	//---------------------SECTION - LOCK------------------------
	if (vw>=1024) { 

		if (window.pageYOffset > main_section_top+vh*1.5) {
		sec_lock.style.opacity = '0';

		bow.style.top = bow_top-200 + 'px';
		bow.style.left = bow_left-200 + 'px';
		bow.style.transform = 'rotate(10deg)';

		l_t_triangle.style.top = l_t_triangle_top-100 + 'px';
		l_t_triangle.style.left = l_t_triangle_left-350 + 'px';
		l_t_triangle.style.transform = 'rotate(15deg)';

		l_b_triangle.style.bottom = l_b_triangle_bottom-150 + 'px';
		l_b_triangle.style.left = l_b_triangle_left-350 + 'px';
		l_b_triangle.style.transform = 'rotate(11deg)';

		r_t_triangle.style.top = r_t_triangle_top-200 + 'px';
		r_t_triangle.style.right = r_t_triangle_right-350 + 'px';
		r_t_triangle.style.transform = 'rotate(13deg)';

		r_b_triangle.style.bottom = r_b_triangle_bottom-150 + 'px';
		r_b_triangle.style.right = r_b_triangle_right-350 + 'px';
		r_b_triangle.style.transform = 'rotate(15deg)';

		l_t_keyhole_elem.style.top = l_t_keyhole_elem_top-50 + 'px';
		l_t_keyhole_elem.style.right = l_t_keyhole_elem_right+400 + 'px';
		l_t_keyhole_elem.style.transform = 'rotate(10deg)';

		l_b_keyhole_elem.style.top = l_b_keyhole_elem_top+100 + 'px';
		l_b_keyhole_elem.style.right = l_b_keyhole_elem_right+400 + 'px';
		l_b_keyhole_elem.style.transform = 'rotate(12deg)';

		r_t_keyhole_elem.style.top = r_t_keyhole_elem_top-50 + 'px';
		r_t_keyhole_elem.style.left = r_t_keyhole_elem_left+400 + 'px';
		r_t_keyhole_elem.style.transform = 'rotate(15deg)';

		r_b_keyhole_elem.style.top = r_b_keyhole_elem_top+100 + 'px';
		r_b_keyhole_elem.style.left = r_b_keyhole_elem_left+400 + 'px';
		r_b_keyhole_elem.style.transform = 'rotate(10deg)';

		sec_lock.style.position = 'relative';
		sec_lock.style.top = 0 +'px';

		}
		else {

			bow.style.top = bow_top - parseInt(window.pageYOffset-main_section_top-vh)*200/(700) + 'px';
			bow.style.left = bow_left - parseInt(window.pageYOffset-main_section_top-vh)*200/(700) + 'px';
			bow.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*10/(700) + 'deg)';

			l_t_triangle.style.top = l_t_triangle_top-parseInt(window.pageYOffset-main_section_top-vh)*100/(700) + 'px';
			l_t_triangle.style.left = l_t_triangle_left-parseInt(window.pageYOffset-main_section_top-vh)*350/(700) + 'px';
			l_t_triangle.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*15/(700) + 'deg)';

			l_b_triangle.style.bottom = l_b_triangle_bottom-parseInt(window.pageYOffset-main_section_top-vh)*150/(700) + 'px';
			l_b_triangle.style.left = l_b_triangle_left-parseInt(window.pageYOffset-main_section_top-vh)*350/(700) + 'px'
			l_b_triangle.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*11/(700) + 'deg)';

			r_t_triangle.style.top = r_t_triangle_top-parseInt(window.pageYOffset-main_section_top-vh)*200/(700) + 'px';
			r_t_triangle.style.right = r_t_triangle_right-parseInt(window.pageYOffset-main_section_top-vh)*350/(700) + 'px';
			r_t_triangle.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*13/(700) + 'deg)';

			r_b_triangle.style.bottom = r_b_triangle_bottom-parseInt(window.pageYOffset-main_section_top-vh)*150/(700) + 'px';
			r_b_triangle.style.right = r_b_triangle_right-parseInt(window.pageYOffset-main_section_top-vh)*350/(700) + 'px'
			r_b_triangle.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*15/(700) + 'deg)';

			l_t_keyhole_elem.style.top = l_t_keyhole_elem_top-parseInt(window.pageYOffset-main_section_top-vh)*50/(700) + 'px';
			l_t_keyhole_elem.style.right = l_t_keyhole_elem_right+parseInt(window.pageYOffset-main_section_top-vh)*400/(700) + 'px';
			l_t_keyhole_elem.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*10/(700) + 'deg)';

			l_b_keyhole_elem.style.top = l_b_keyhole_elem_top+parseInt(window.pageYOffset-main_section_top-vh)*100/(700) + 'px';
			l_b_keyhole_elem.style.right = l_b_keyhole_elem_right+parseInt(window.pageYOffset-main_section_top-vh)*400/(700) + 'px';
			l_b_keyhole_elem.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*12/(700) + 'deg)';

			r_t_keyhole_elem.style.top = r_t_keyhole_elem_top-parseInt(window.pageYOffset-main_section_top-vh)*50/(700) + 'px';
			r_t_keyhole_elem.style.left = r_t_keyhole_elem_left+parseInt(window.pageYOffset-main_section_top-vh)*400/(700) + 'px';
			r_t_keyhole_elem.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*15/(700) + 'deg)';

			r_b_keyhole_elem.style.top = r_b_keyhole_elem_top+parseInt(window.pageYOffset-main_section_top-vh)*100/(700) + 'px';
			r_b_keyhole_elem.style.left = r_b_keyhole_elem_left+parseInt(window.pageYOffset-main_section_top-vh)*100/(700) + 'px';
			r_b_keyhole_elem.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh)*10/(700) + 'deg)';

			sec_lock.style.opacity = 1 - (window.pageYOffset-main_section_top-vh)*0.00215054;
			sec_lock.style.position = 'fixed';
			sec_lock.style.top = 0 +'px';

			if (window.pageYOffset > main_section_top+600 && window.pageYOffset < main_section_top+vh) {
				sec_lock.style.opacity = 0 + (window.pageYOffset-main_section_top-600)*0.005;		
			}
			else if (window.pageYOffset < main_section_top+vh) {
				sec_lock.style.opacity = '0';			
				sec_lock.style.position = 'relative';
				sec_lock.style.top = 0 +'px';
			};
			if (window.pageYOffset < main_section_top+vh) {
				bow.style.top = bow_top + 'px';
				bow.style.left = bow_left + 'px';
				bow.style.transform = 'rotate(0deg)';

				l_t_triangle.style.top = l_t_triangle_top + 'px';
				l_t_triangle.style.left = l_t_triangle_left + 'px';
				l_t_triangle.style.transform = 'rotate(0deg)';

				l_b_triangle.style.bottom = l_b_triangle_bottom + 'px';
				l_b_triangle.style.left = l_b_triangle_left + 'px';
				l_b_triangle.style.transform = 'rotate(0deg)';

				r_t_triangle.style.top = r_t_triangle_top + 'px';
				r_t_triangle.style.right = r_t_triangle_right + 'px';
				r_t_triangle.style.transform = 'rotate(0deg)';

				r_b_triangle.style.bottom = r_b_triangle_bottom + 'px';
				r_b_triangle.style.right = r_b_triangle_right + 'px';
				r_b_triangle.style.transform = 'rotate(0deg)';

				l_t_keyhole_elem.style.top = l_t_keyhole_elem_top + 'px';
				l_t_keyhole_elem.style.right = l_t_keyhole_elem_right + 'px';
				l_t_keyhole_elem.style.transform = 'rotate(0deg)';

				l_b_keyhole_elem.style.top = l_b_keyhole_elem_top + 'px';
				l_b_keyhole_elem.style.right = l_b_keyhole_elem_right + 'px';
				l_b_keyhole_elem.style.transform = 'rotate(0deg)';

				r_t_keyhole_elem.style.top = r_t_keyhole_elem_top + 'px';
				r_t_keyhole_elem.style.left = r_t_keyhole_elem_left + 'px';
				r_t_keyhole_elem.style.transform = 'rotate(0deg)';

				r_b_keyhole_elem.style.top = r_b_keyhole_elem_top + 'px';
				r_b_keyhole_elem.style.left = r_b_keyhole_elem_left + 'px';
				r_b_keyhole_elem.style.transform = 'rotate(0deg)';
			}

		};
	};
	//--------------------------SECTION - BOAT-----------
	if (vw>=1024) {

		if (window.pageYOffset > main_section_top+vh*2.5) {

			sun.style.top = sun_top-100 + 'px';
			sun.style.left = sun_left-450 + 'px';
			sun.style.transform = 'rotate(10deg)';

			flag.style.top = flag_top-100 + 'px';
			flag.style.left = flag_left+300 + 'px';
			flag.style.transform = 'rotate(12deg)';

			l_b_triangle_boat.style.top = l_b_triangle_boat_top+200 + 'px';
			l_b_triangle_boat.style.left = l_b_triangle_boat_left-300+ 'px';
			l_b_triangle_boat.style.transform = 'rotate(15deg)';

			r_t_triangle_boat.style.top = r_t_triangle_boat_top-100 + 'px';
			r_t_triangle_boat.style.left = r_t_triangle_boat_left+300 + 'px';
			r_t_triangle_boat.style.transform = 'rotate(12deg)';

			r_b_triangle_boat.style.top = r_b_triangle_boat_top + 'px';
			r_b_triangle_boat.style.right = r_b_triangle_boat_right-350 + 'px';
			r_b_triangle_boat.style.transform = 'rotate(11deg)';

			l_t_triangle_boat.style.top = l_t_triangle_boat_top-100 + 'px';
			l_t_triangle_boat.style.left = l_t_triangle_boat_left-300 + 'px';
			l_t_triangle_boat.style.transform = 'rotate(10deg)';

			m_b_triangle_boat.style.top = m_b_triangle_boat_top+170 + 'px';
			m_b_triangle_boat.style.right = m_b_triangle_boat_right-200 + 'px';
			m_b_triangle_boat.style.transform = 'rotate(15deg)';

			sec_boat.style.opacity = '0';
			sec_boat.style.position = 'relative';
			sec_boat.style.top = 0 +'px';

		}
		else {

			sun.style.top = sun_top-parseInt(window.pageYOffset-main_section_top-vh*2)*100/700 + 'px';
			sun.style.left = sun_left-parseInt(window.pageYOffset-main_section_top-vh*2)*450/700 + 'px';
			sun.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*10/(700) + 'deg)';

			flag.style.top = flag_top-parseInt(window.pageYOffset-main_section_top-vh*2)*100/700 + 'px';
			flag.style.left = flag_left+parseInt(window.pageYOffset-main_section_top-vh*2)*300/700 + 'px';
			flag.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*12/(700) + 'deg)';

			l_b_triangle_boat.style.top = l_b_triangle_boat_top+parseInt(window.pageYOffset-main_section_top-vh*2)*200/700 + 'px';
			l_b_triangle_boat.style.left = l_b_triangle_boat_left-parseInt(window.pageYOffset-main_section_top-vh*2)*300/700 + 'px';
			l_b_triangle_boat.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*15/(700) + 'deg)';

			r_t_triangle_boat.style.top = r_t_triangle_boat_top-parseInt(window.pageYOffset-main_section_top-vh*2)*100/700 + 'px';
			r_t_triangle_boat.style.left = r_t_triangle_boat_left+parseInt(window.pageYOffset-main_section_top-vh*2)*300/700 + 'px';
			r_t_triangle_boat.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*12/(700) + 'deg)';

			r_b_triangle_boat.style.top = r_b_triangle_boat_top + 'px';
			r_b_triangle_boat.style.right = r_b_triangle_boat_right-parseInt(window.pageYOffset-main_section_top-vh*2)*350/700 + 'px';
			r_b_triangle_boat.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*11/(700) + 'deg)';

			l_t_triangle_boat.style.top = l_t_triangle_boat_top-parseInt(window.pageYOffset-main_section_top-vh*2)*100/700 + 'px';
			l_t_triangle_boat.style.left = l_t_triangle_boat_left-parseInt(window.pageYOffset-main_section_top-vh*2)*300/700 + 'px';
			l_t_triangle_boat.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*10/(700) + 'deg)';

			m_b_triangle_boat.style.top = m_b_triangle_boat_top+parseInt(window.pageYOffset-main_section_top-vh*2)*170/700 + 'px';
			m_b_triangle_boat.style.right = m_b_triangle_boat_right-parseInt(window.pageYOffset-main_section_top-vh*2)*200/700 + 'px';
			m_b_triangle_boat.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*2)*15/(700) + 'deg)';

			sec_boat.style.opacity = 1 - (window.pageYOffset-main_section_top-vh*2)*0.00215054;
			sec_boat.style.position = 'fixed';
			sec_boat.style.top = 0 +'px';

			if (window.pageYOffset > main_section_top+1537 && window.pageYOffset < main_section_top+vh*2) {

				sec_boat.style.opacity = 0 + (window.pageYOffset-main_section_top-600-vh)*0.005;

			}
			else if (window.pageYOffset < main_section_top+vh*2) {

				sec_boat.style.opacity = '0';			
				sec_boat.style.top = 0 +'px';
				sec_boat.style.position = 'relative';
				sec_boat.style.top = 0 +'px';

			};
			if (window.pageYOffset < main_section_top+vh*2) {
				sun.style.top = sun_top + 'px';
				sun.style.left = sun_left + 'px';
				sun.style.transform = 'rotate(0deg)';

				flag.style.top = flag_top + 'px';
				flag.style.left = flag_left + 'px';
				flag.style.transform = 'rotate(0deg)';

				l_b_triangle_boat.style.top = l_b_triangle_boat_top + 'px';
				l_b_triangle_boat.style.left = l_b_triangle_boat_left + 'px';
				l_b_triangle_boat.style.transform = 'rotate(0deg)';

				r_t_triangle_boat.style.top = r_t_triangle_boat_top + 'px';
				r_t_triangle_boat.style.left = r_t_triangle_boat_left + 'px';
				r_t_triangle_boat.style.transform = 'rotate(0deg)';

				r_b_triangle_boat.style.top = r_b_triangle_boat_top + 'px';
				r_b_triangle_boat.style.right = r_b_triangle_boat_right + 'px';
				r_b_triangle_boat.style.transform = 'rotate(0deg)';

				l_t_triangle_boat.style.top = l_t_triangle_boat_top + 'px';
				l_t_triangle_boat.style.left = l_t_triangle_boat_left + 'px';
				l_t_triangle_boat.style.transform = 'rotate(0deg)';

				m_b_triangle_boat.style.top = m_b_triangle_boat_top + 'px';
				m_b_triangle_boat.style.right = m_b_triangle_boat_right + 'px';
				m_b_triangle_boat.style.transform = 'rotate(0deg)';
			}
		};
	};
	//--------------------------SECTION - MAN----------
	if (vw>=1024) {
		if (window.pageYOffset > main_section_top+vh*3.5) {

			head.style.top = head_top-100 + 'px';
			head.style.left = head_left+400 + 'px';
			head.style.transform = 'rotate(14deg)';

			corp.style.top = corp_top+200 + 'px';
			corp.style.left = corp_left-350 + 'px';
			corp.style.transform = 'rotate(12deg)';

			l_hand.style.top = l_hand_top+50 + 'px';
			l_hand.style.right = l_hand_right+350 + 'px';
			l_hand.style.transform = 'rotate(13deg)';

			r_hand.style.top = r_hand_top-100 + 'px';
			r_hand.style.left = r_hand_left+350 + 'px';
			r_hand.style.transform = 'rotate(11deg)';

			r_wrist.style.top = r_wrist_top + 'px';
			r_wrist.style.right = r_wrist_right-450 + 'px';
			r_wrist.style.transform = 'rotate(12deg)';

			foot.style.top = foot_top+150 + 'px';
			foot.style.right = foot_right-350 + 'px';
			foot.style.transform = 'rotate(10deg)';

			hip.style.top = hip_top+50 + 'px';
			hip.style.left = hip_left+350 + 'px';
			hip.style.transform = 'rotate(15deg)';

			shape_1.style.top = shape_1_top-50 + 'px';
			shape_1.style.left = shape_1_left-400 + 'px';
			shape_1.style.transform = 'rotate(11deg)';

			shape_2.style.top = shape_2_top + 'px';
			shape_2.style.left = shape_2_left-400 + 'px';
			shape_2.style.transform = 'rotate(12deg)';

			shape_3.style.top = shape_3_top+50 + 'px';
			shape_3.style.left = shape_3_left-400 + 'px';
			shape_3.style.transform = 'rotate(10deg)';

			sec_man.style.opacity = '0';

			sec_man.style.position = 'relative';
			sec_man.style.top = 0 +'px';

		}
		else {

			head.style.top = head_top-parseInt(window.pageYOffset-main_section_top-vh*3)*100/700 + 'px';
			head.style.left = head_left+parseInt(window.pageYOffset-main_section_top-vh*3)*400/700 + 'px';
			head.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*14/(700) + 'deg)';

			corp.style.top = corp_top+parseInt(window.pageYOffset-main_section_top-vh*3)*200/700 + 'px';
			corp.style.left = corp_left-parseInt(window.pageYOffset-main_section_top-vh*3)*350/700 + 'px';
			corp.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*12/(700) + 'deg)';

			l_hand.style.top = l_hand_top+parseInt(window.pageYOffset-main_section_top-vh*3)*50/700 + 'px';
			l_hand.style.right = l_hand_right+parseInt(window.pageYOffset-main_section_top-vh*3)*350/700 + 'px';
			l_hand.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*13/(700) + 'deg)';

			r_hand.style.top = r_hand_top-parseInt(window.pageYOffset-main_section_top-vh*3)*100/700 + 'px';
			r_hand.style.left = r_hand_left+parseInt(window.pageYOffset-main_section_top-vh*3)*350/700 + 'px';
			r_hand.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*11/(700) + 'deg)';

			r_wrist.style.top = r_wrist_top + 'px';
			r_wrist.style.right = r_wrist_right-parseInt(window.pageYOffset-main_section_top-vh*3)*450/700 + 'px';
			r_wrist.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*12/(700) + 'deg)';

			foot.style.top = foot_top+parseInt(window.pageYOffset-main_section_top-vh*3)*150/700 + 'px';
			foot.style.right = foot_right-parseInt(window.pageYOffset-main_section_top-vh*3)*350/700 + 'px';
			foot.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*10/(700) + 'deg)';

			hip.style.top = hip_top+parseInt(window.pageYOffset-main_section_top-vh*3)*50/700 + 'px';
			hip.style.left = hip_left+parseInt(window.pageYOffset-main_section_top-vh*3)*350/700 + 'px';
			hip.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*15/(700) + 'deg)';

			shape_1.style.top = shape_1_top-parseInt(window.pageYOffset-main_section_top-vh*3)*50/700 + 'px';
			shape_1.style.left = shape_1_left-parseInt(window.pageYOffset-main_section_top-vh*3)*400/700 + 'px';
			shape_1.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*11/(700) + 'deg)';

			shape_2.style.top = shape_2_top + 'px';
			shape_2.style.left = shape_2_left-parseInt(window.pageYOffset-main_section_top-vh*3)*400/700 + 'px';;
			shape_2.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*12/(700) + 'deg)';

			shape_3.style.top = shape_3_top+parseInt(window.pageYOffset-main_section_top-vh*3)*50/700 + 'px';
			shape_3.style.left = shape_3_left-parseInt(window.pageYOffset-main_section_top-vh*3)*400/700 + 'px';
			shape_3.style.transform = 'rotate(' + parseInt(window.pageYOffset-main_section_top-vh*3)*10/(700) + 'deg)';

			sec_man.style.opacity = 1 - (window.pageYOffset-main_section_top-vh*3)*0.00215054;
			sec_man.style.position = 'fixed';
			sec_man.style.top = 0 +'px';

			if (window.pageYOffset > main_section_top+600+vh*2 && window.pageYOffset < main_section_top+vh*3) {

				sec_man.style.opacity = 0 + (window.pageYOffset-main_section_top-600-vh-vh)*0.005;;	

			}
			else if (window.pageYOffset < main_section_top+vh*3) {

				sec_man.style.opacity = '0';			
				sec_man.style.position = 'relative';
				sec_man.style.top = 0 +'px';

			};
			if (window.pageYOffset < main_section_top+vh*3) {

				head.style.top = head_top + 'px';
				head.style.left = head_left + 'px';
				head.style.transform = 'rotate(0deg)';

				corp.style.top = corp_top + 'px';
				corp.style.left = corp_left + 'px';
				corp.style.transform = 'rotate(0deg)';

				l_hand.style.top = l_hand_top + 'px';
				l_hand.style.right = l_hand_right + 'px';
				l_hand.style.transform = 'rotate(0deg)';

				r_hand.style.top = r_hand_top + 'px';
				r_hand.style.left = r_hand_left + 'px';
				r_hand.style.transform = 'rotate(0deg)';

				r_wrist.style.top = r_wrist_top + 'px';
				r_wrist.style.right = r_wrist_right + 'px';
				r_wrist.style.transform = 'rotate(0deg)';

				foot.style.top = foot_top + 'px';
				foot.style.right = foot_right + 'px';
				foot.style.transform = 'rotate(0deg)';

				hip.style.top = hip_top + 'px';
				hip.style.left = hip_left + 'px';
				hip.style.transform = 'rotate(0deg)';

				shape_1.style.top = shape_1_top + 'px';
				shape_1.style.left = shape_1_left + 'px';
				shape_1.style.transform = 'rotate(0deg)';

				shape_2.style.top = shape_2_top + 'px';
				shape_2.style.left = shape_2_left + 'px';
				shape_2.style.transform = 'rotate(0deg)';

				shape_3.style.top = shape_3_top + 'px';
				shape_3.style.left = shape_3_left + 'px';
				shape_3.style.transform = 'rotate(0deg)';

			}
		};
	};
	//--------------------------SECTION - COMPANY----------
	if (vw>=1024) {
		if (window.pageYOffset > section_company_top+vh*1.85) {
			section_company_content.style.position = 'absolute';
			section_company_content.style.top = section_company_content_top+1.85*vh + 'px';
			section_company_main_text.style.transform = 'translate(' + -100 + 'vw, -50%)';
			section_company_secondary_text.style.opacity = 1;
		}
		else {

			if (window.pageYOffset > section_company_top+vh*1.25) {
				section_company_secondary_text.style.opacity = parseInt(window.pageYOffset-section_company_top-vh*1.25)/vh*2;
			}
			else if (window.pageYOffset < section_company_top+vh*1.25) {
				section_company_secondary_text.style.opacity = 0;
			};

			section_company_main_text.style.transform = 'translate(' + -parseInt(window.pageYOffset-section_company_top)*vw/vh/1.85 + 'px, -50%)';

			section_company_content.style.position = 'fixed';
			section_company_content.style.top = 0 + 'px';
		
			if (window.pageYOffset < section_company_top) {
				section_company_content.style.position = 'absolute';
				section_company_content.style.top = section_company_content_top;
				section_company_main_text.style.transform = 'translate(' + -0 + 'vw, -50%)';
				
			};

		}
	}
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
