function $(el){return document.querySelector(el)}function $a(el){return document.querySelectorAll(el)}function conl(message){return console.log(message)}
/****************** BLOCK OF CODE *********************/

let dh = $('.dh input');
let ryal = $('.ryal input');
let frank = $('.frank input');

dh.oninput = function(){
  ryal.value = dh.value * 20;
  frank.value = dh.value * 100;
  if (dh.value == '') {
    ryal.value = ''
    frank.value = ''
  }
  dh.value.toLocaleString()
}

ryal.oninput = function() {
  dh.value = ryal.value / 20;
  frank.value = ryal.value * 5;
  if (ryal.value == '') {
    ryal.value = ''
    frank.value = ''
  }
}

frank.oninput = function() {
  dh.value = frank.value / 100;
  ryal.value = frank.value / 5;
  if (frank.value == '') {
    ryal.value = ''
    dh.value = ''
  }
}
