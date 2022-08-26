interface a {
  name: string
  height: number
}

interface b {
  age: number
  width: number
}

const c: a & b = {
  name: 'haha',
  age: 17,
  width: 129,
  height: 239,
}
