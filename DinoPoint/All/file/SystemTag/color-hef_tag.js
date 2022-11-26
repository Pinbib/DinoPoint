function colorHef(){
    if (document.querySelector('color-hef')) {
      var colorHef = document.querySelectorAll('color-hef');
      var i = 0;
      while (i < colorHef.length) {
        colorHef[i].style.color = colorHef[i].attributes[0].value;
        i++;
      }
    }
  }
  
  export default colorHef;
  