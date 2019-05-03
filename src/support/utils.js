
const Test = {
  assert: function(){
    return this.expect === this.value; 
  },
  log: function(){
    return (`${this.name} | result ${this.assert()} | expect: ${this.expect} | value: ${this.value}`)
  },
  dump: function(fn){
    console.log(this.log())
  }
}

export function makeTest(obg = {}){
  return Object.assign({
    name: obg.name,
    expect: obg.expect,
    value: obg.value
  }, Test)
}

