 function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
  return sel
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var elements = document.getElementById('app').querySelectorAll('.ranked-list')
  for (var i = 0; i< elements.length;i++) {
    elements[i].innerHTML = (i+n).toString()
  }
}

function deepestChild() {
 var ele = document.getElementById('nested').children.children
  var a;
  for(var i = 0; i < ele.length ; i++) {
   if(i== ele.length - 1) {
    a = ele[i].innerHTML
   }
  }
  return a 
}