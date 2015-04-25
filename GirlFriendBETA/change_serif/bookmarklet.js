var div = document.getElementById('girlsComment');
var input = document.createElement('input');
input.type = 'text';
input.value = div.innerText;
input.onchange = function() {
    var p = document.createElement('p');
    p.innerText = input.value;
    div.replaceChild(p, div.getElementsByTagName('input')[0]);
};
div.replaceChild(input, div.getElementsByTagName('p')[0]);
input.select();
