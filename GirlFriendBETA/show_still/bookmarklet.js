var swipe = null;
var swipeList = document.querySelectorAll('div.moduleSwipeList');
for (var i=0; i < swipeList.length; i++) {
    if (swipeList[i].style.webkitTransform.match(/^translate3d\(0px/)) {
        swipe = swipeList[i];
        break;
    }
}
if (!swipe) return;

document.querySelector('div.js_menuBtn.absolute.z3').style.display='none';
document.querySelector('section.relative.z2').style.display='none';
document.querySelector('div.absolute.js_prev.floatLeft.z3.js_fadeout').style.display='none';
document.querySelector('div.absolute.js_next.floatRight.z3.js_fadeout').style.display='none';
document.querySelector('div.js_girlChangeBtn.absolute.z3').style.display='none';

swipe.querySelector('div.js_specialBtn').style.display='none';
swipe.querySelector('div.js_voiceBtn').style.display='none';
