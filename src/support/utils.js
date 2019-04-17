
const Print =  {
  dump: function(){
    console.log(this)
  },
  consoleFunction: function(fn){
    console.log(`${fn}: ${this[fn]()}`)
  },
  console: function(value){
    console.log(value)
  }
}

const Test = {
  equals: function(expected, value){
    return expected === value; 
  }
}

export { Print, Test }