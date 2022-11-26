function topic(){
    if(document.querySelector('topic')){
      var topic = document.querySelector('topic');
      document.body.style.backgroundColor = topic.attributes.color.value;
      document.body.style.color = topic.attributes[1].value;
    }
  }
  export default topic;
  