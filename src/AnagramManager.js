
class AnagramManager {
     memory = new Map()
     #currLength = 0
  
    getMemory() {
      return this.memory;
    }
    
    flushMemory = () => {
      this.memory.forEach(anagrams => {
        console.log(anagrams.join(","))
      })
      this.memory = new Map()
    }
    
    groupAnagram = (line) => {
      if (line.length > this.#currLength) {
        this.flushMemory()
        this.#currLength = line.length
      }
    
      const lineKey = line.split('').sort().join('')
      
      if (this.memory.has(lineKey)) {
        const existingAnagrams = this.memory.get(lineKey)
        if (existingAnagrams) existingAnagrams.push(line)
      } else {
        this.memory.set(lineKey, [line])
      }
    }
  }
  
  export default AnagramManager
  