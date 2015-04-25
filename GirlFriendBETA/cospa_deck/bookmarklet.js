var cards = document.querySelectorAll('#changeCardList .listText');
for (i = 0; i < cards.length; i++) {
    var elm = cards[i].querySelector('.cardPower');
    var cost = elm.getAttribute('rel');
    var power = cards[i].querySelectorAll('dl>div')[2].querySelector('dd>em').innerHTML.match(/^[0-9]+/);
    cards[i].querySelector('.cardPower').innerHTML;
    var unit = document.createElement('span');
    unit.className = 'fcRed';
    unit.innerHTML = '&nbsp;@' + Math.floor(power / cost);
    elm.appendChild(unit);
}
