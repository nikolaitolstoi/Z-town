
// SEPARATOR SCRIPT


const separator = document.getElementById('separator');
const separator_ico = document.getElementById('separator_ico');
const normal_section = document.getElementById('normal');
const inverted_section = document.getElementById('inverted');
window.onload = function () {
    separator_ico.onclick = function () {
        normal_section.classList.toggle("active");
        separator.classList.toggle("active");
    }
};

if (vw>=1024) {
    const like = document.getElementById('liked');
    const like_alt = document.getElementById('liked_alt');
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
    }
}