function xfj(){
    if(document.querySelector('xfj')){
      var tag = document.querySelector('xfj');
      var newTag = document.createElement('xfj');
      var text = tag.outerHTML.split(',').join(',<wbr>').split('.').join('.<wbr>').split('!').join('!<wbr>').split('?').join('?<wbr>');
      tag.style.display = 'none';
      newTag.innerHTML = text;
      document.body.append(newTag)
      return true;
    } else{
      var error = new Error('The html file is missing a tag "xfj"')
      console.log('ERROR:');
      console.error(error);
      document.write('ERROR');
    }
  }
  
  export default xfj;
  