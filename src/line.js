import geoMath from './geo-math'

const LinePrototype = {
  points: [],  
  tangente: function(){
    return geoMath.tgByTwoPoints(this.points[0], this.points[1])
  }
};

const Line = function(obj = {}){
  return Object.assign(LinePrototype , {        
   points: obj.points
  });
} 

export default Line;