import dino from '/DinoPoint/All/collect.js';

if(document.querySelector('xfj')){
  dino.tags.xfj();
  dino.tags.setting();
  dino.tags.colorRed();
  dino.tags.colorBlue();
  dino.tags.colorYellow();
  dino.tags.colorHef();
  dino.tags.imitate();
  dino.tags.topic();
} else {
  document.body.style.backgroundColor = 'black';
  var board = document.createElement('div');
  board.id = 'MAIN_ERROR_TAG';
  board.className = 'ERROR';
  board.style.color = 'red';
  board.style.fontSize = '100px';
  board.style.textDecoration = 'underline';
  board.style.fontStyle = 'oblique';
  board.innerHTML = 'Please, you did not <wbr>specify a tag at the beginning of the document "xfj",<wbr> for this library to work obligatory';
  document.body.append(board);
}
