
function scanTests(t = []){
  const asserts = 0
  const tests = t.length
  const errors = []
  console.log('Running tests ...')
  t.forEach((teste)=> {
    console.log()
    if(teste.assert() === true){
      asserts += 1
    }else{
      errors.push(teste.log())
    }
  })
  console.log('Tests runned !')
  console.log("Asserts:" ,asserts , "Errors:", tests - asserts)
  if (errors.length > 0){
    errors.forEach((err)=>{
      console.log(err)
    })
  }
}

import {testLine1, testLine2} from './straight.test'

scanTests([testLine1, testLine2])