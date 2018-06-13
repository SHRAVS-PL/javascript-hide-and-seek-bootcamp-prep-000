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
 var ele = document.getElementById('grand-node').outerText
 return ele.toString
}