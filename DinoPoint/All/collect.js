import Main from '/DinoPoint/All/file/js/class.js';
import xfg from '/DinoPoint/All/file/js/function.js';
import dinoPoint from '/DinoPoint/All/file/js/object.js';
import tag from '/DinoPoint/All/file/js/SystemTag/collect_tag.js';
import raptor from '/DinoPoint/All/file/js/raptorPoint2,0.js'

var dino = {
  'clas': {
    'Main': (name, version, description, license, key)=>{
      var clas = new Main(name, version, description, license, key);
      return clas;
    }
  },
  'object': dinoPoint,
  'funch': {
    'xfg': ()=>{
      xfg();
    },
  },
  'tags': tag,
  'raptor': raptor
}
export default dino;
