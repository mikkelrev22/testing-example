class Stack{
  constructor(){
    this.storage = []
    this.length = 0
  }

  push(data){
    this.storage.push(data)
  }

  pop(){
    if ( 0 < this.storage.length) {
    return this.storage.pop()
    }
  }

  size(){
    return this.storage.length
  }

}


module.exports = Stack