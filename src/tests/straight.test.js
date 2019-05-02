import { Line } from './../straight'
import  Test  from './../support/utils'

const points = [
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: 1
  }
];

const line1 = Line({points: points})

const test1 = Test({
  name: 'Testa a tangente da linha',
  expect: 1,
  value: line1.tangente()
})

test1.dump()