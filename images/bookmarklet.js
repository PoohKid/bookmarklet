var srcs = new Array();
var imgs = document.images;
for (var i = 0; i < imgs.length; i++) {
    srcs.push(imgs[i].src)
}
var divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i++) {
    var bg = document.defaultView.getComputedStyle(divs[i], null).getPropertyValue('background-image').match(/url\((.*)\)/);
    if (bg) {
        srcs.push(bg[1]);
    }
}
removeChildren(document.body);
removeChildren(document.head);
for (var i = 0; i < srcs.length; i++) {
    var div = document.createElement('div');
    var image = document.createElement('img');
    image.src = srcs[i];
    image.addEventListener('click', function(e) {
        prompt('', e.target.src)
    }, false);
    div.appendChild(image);
    document.body.appendChild(div)
}

function removeChildren(element) {
    element.parentNode.replaceChild(element.cloneNode(false), element)
}
