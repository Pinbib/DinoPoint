function imitate(){
    if(document.querySelector('imitate')) {
      var tag = document.querySelectorAll('imitate');
      var i = 0;
      while(i<tag.length){
        var imitate = document.getElementById(tag[i].attributes.href.value);
        tag[i].innerHTML += '<br>';
        tag[i].innerHTML += imitate.outerHTML;
        tag[i].innerHTML += '<br>';
        i++;
      }
    }
  }
  export default imitate;
  