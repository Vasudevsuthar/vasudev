// GETELEMENTBYTAGNAME//
var li = document.getElementsByTagName('li');
li[1].textContent = 'JAI SHREE RAM';
li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow'

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}


