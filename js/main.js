document.getElementById('arrow-next').onclick = function() {
  document.getElementById('arrow-prev').classList.add('active-arrow');
}

document.getElementById('arrow-prev').onclick = function() {
  document.getElementById('arrow-prev').classList.remove('active-arrow');
}

/*control-point*/