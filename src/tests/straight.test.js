import { Line } from './../straight'
import { Print, Test } from './../support/utils'

const Teste = (obj = {}) =>{
  return Object.assign(Line(obj), Print, Test)
}

const points = [
  {
    x: 0,
    y: 0
  },
  {
    x: 2,
    y: 3
  }
];

const straight1 =  Teste({points});

straight1.dump()
straight1.consoleFunction('tangente')
straight1.console(straight1.equals(1 , straight1.tangente()))