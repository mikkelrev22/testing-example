const Stack = require('../src/Stack')
const { expect } = require('chai')


describe('Stack', function(){
  describe('push', function(){
    it('should increase the length of the stack', function(){
      const s = new Stack()

      s.push(1)
      expect(s.size()).to.equal(1)
      s.push(1)
      expect(s.size()).to.equal(2)
    })
  })
  describe('pop', function(){
    it('should decrease the length of the stack', function(){
      const s = new Stack()

      s.push(1)
      expect(s.size()).to.equal(1)
      s.pop()
      expect(s.size()).to.equal(0)
    })
    it('should not have length less that zero', function(){
      const s = new Stack()

      s.push(1)
      s.pop();
      s.pop();
      expect(s.size()).to.equal(0)
      
     
    })
    it('should return the last thing added', function(){
      const s = new Stack()
      const expected = 1
      
      s.push(expected)
      const actual = s.pop()

      expect(actual).to.equal(expected)
    })
  })

})

