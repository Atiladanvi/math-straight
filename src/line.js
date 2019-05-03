import geoMath from './geo-math'

const LinePrototype = {
  points: [],  
  tangente: function(){
    return geoMath.tgByTwoPoints(this.points[0], this.points[1])
  }
};

export function Line(obj = {}){
  return Object.assign(LinePrototype , {        
   points: obj.points
  });
} 
