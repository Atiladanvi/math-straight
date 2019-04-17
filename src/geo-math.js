const geoMath = {
  tgByTwoPoints: function(point1 , point2){
      let dx =  point2.x - point1.x;
      let dy =  point2.y - point1.y;
      return dx/dy || null
  }
}
export default geoMath;