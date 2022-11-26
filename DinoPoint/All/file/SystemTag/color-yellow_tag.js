function colorRed(){
    if(document.querySelector('color-red')) {
      var colorRed = document.querySelectorAll('color-red');
      var i = 0;
      while(i<colorRed.length){
        colorRed[i].style.color = 'red';
        i++;
      }
    }
  }
  export default colorRed;
  