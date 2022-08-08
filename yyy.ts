export interface Options {
  name: string
  age: number
}
export interface Cat {
  name: string
  age: number
  run: boolean
  setTime(d: Date)
}

export function callName() {
  console.log(222)
}
