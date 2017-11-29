const panels = document.querySelectorAll('.panel');

function toggleActive(e){
  if( e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(function(panel){
  panel.addEventListener('click', function(){
      this.classList.toggle('open');
  });
  panel.addEventListener('transitionend', toggleActive);
});
