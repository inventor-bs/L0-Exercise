
let li = '';
let span = '';
for (var i = 0; i < 12; i++) {
    li += '<li>A' + (i + 1) + '</li>'
    span += '<span></span>';
}

document.getElementById('li').innerHTML = li;
document.getElementById('span').innerHTML = span;