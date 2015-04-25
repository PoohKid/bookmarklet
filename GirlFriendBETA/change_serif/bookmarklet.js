var div = document.getElementById('girlsComment');
div.style.display = 'block';
var input = document.createElement('input');
input.type = 'text';
input.value = div.innerText;
input.onchange = function() {
    var p = document.createElement('p');
    p.innerText = input.value;
    div.replaceChild(p, div.getElementsByTagName('input')[0]);
    if (!input.value) div.style.display = 'none';
};
div.replaceChild(input, div.getElementsByTagName('p')[0]);
input.select();
