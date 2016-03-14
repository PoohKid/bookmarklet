var srcs = new Array();
var imgs = document.images;
for (var i = 0; i < imgs.length; i++) {
    srcs.push(imgs[i].src)
}
var divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i++) {
    var bg = document.defaultView.getComputedStyle(divs[i], null).getPropertyValue('background-image').match(/url\((.*)\)/);
    if (bg) {
        srcs.push(bg[1].replace(/'|"/g,''));
    }
}
imgs = getImageURL(document.head.innerHTML);
for (var i = 0; i < imgs.length; i++) {
    srcs.push(imgs[i])
}
imgs = getImageURL(document.body.innerHTML);
for (var i = 0; i < imgs.length; i++) {
    srcs.push(imgs[i])
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

function getImageURL(text) {
    var url_array = text.match(/http[s]?\:\/\/[\w\+\$\;\?\.\%\,\!\#\~\*\/\:\@\&\\\=\_\-]+/g);
    var images = new Array;
    for (var i = 0; i < url_array.length; i++) {
        if (url_array[i].match(/.jpg$|.png$/)) {
            images.push(url_array[i]);
        }
    }
    return images;
}

function removeChildren(element) {
    element.parentNode.replaceChild(element.cloneNode(false), element)
}
