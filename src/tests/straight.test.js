import  { Line }  from './../straight'
import  { makeTest }  from './../support/utils'

const points1 = [
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: 2
  }
];

const points2 = [
  {
    x: 1,
    y: 1
  },
  {
    x: 3,
    y: 6
  }
];

const line1 = Line({points: points1})

const testLine1 = makeTest({
  name: 'Testa a tangente da linha 1',
  expect: 0.5,
  value: line1.tangente()
})

const line2 = Line({points: points2})

const testLine2 = makeTest({
  name: 'Testa a tangente da linha 2',
  expect: 0.4,
  value: line2.tangente()
})

export {testLine1 , testLine2};
