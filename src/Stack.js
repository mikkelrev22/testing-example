class Stack{
  constructor(){
    this.storage = {}
    this.length = 0
  }

  push(data){
    this.storage[this.length] = data
    this.length++
  }

  pop(){
    if(0 < this.length){
      this.length--
      return this.storage[this.length]
    }
  }

  size(){
    return this.length
  }
}


module.exports = Stack