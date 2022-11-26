function colorBlue(){
    if(document.querySelector('color-red')) {
      var colorBlue = document.querySelectorAll('color-blue');
      var i = 0;
      while(i<colorBlue.length){
        colorBlue[i].style.color = 'blue';
        i++;
      }
    }
  }
  
  export default colorBlue;
  