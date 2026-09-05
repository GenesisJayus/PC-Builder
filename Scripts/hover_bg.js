
const sys_u = document.getElementById("sys_u_butt")
sys_u.addEventListener("mouseenter", function() {
    document.body.style.setProperty('--op', "1");
    document.body.style.setProperty('--hov_bg', "url('/Assets/meme.jpg')")
});
sys_u.addEventListener("mouseleave", function() {
     document.body.style.setProperty('--op', "0");
});

const oth_u = document.getElementById("oth_u_butt")
oth_u.addEventListener("mouseenter", function() {
    document.body.style.setProperty('--op', "1");
    document.body.style.setProperty('--hov_bg', "url('/Assets/meme3.jpg')")
});
oth_u.addEventListener("mouseleave", function() {
     document.body.style.setProperty('--op', "0");
});

const pher_u = document.getElementById("pher_u_butt")
pher_u.addEventListener("mouseenter", function() {
    document.body.style.setProperty('--op', "1");
    document.body.style.setProperty('--hov_bg', "url('/Assets/meme2.jpg')")
});
pher_u.addEventListener("mouseleave", function() {
     document.body.style.setProperty('--op', "0");
});