// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
   
  // create filtered array
  const wordArr=sen.toLowerCase().match(/[a-z0-9]+/g)
  console.log(wordArr)

  // sort  by length
  // const sorted=wordArr.sort((a, b)=>{
  //    return b.length- a.length
  // })
  //  console.log(sorted)
  // //  returning the first longest
  // return sorted[0]

  // If multiple words, put into array
  const longertWordArr=sorted.filter((word)=>{
     return word.length===sorted[0].length
  })
  console.log(longertWordArr)

  // check if more than one array value

  if(longertWordArr.length===1){
    return longertWordArr[0]
  }else{
    return longertWordArr
  }

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // let chunkArr=[]
  // // set index
  // let i=0
  // // loop while the index is less than the arr.length
  // while(i<arr.length){
  //   // slice out from the index + the chunk length and push on to the chunked array
  //    chunkArr.push(arr.slice(i, i+len))
  //   //  increment by the chunk length
  //   i+=len

  //   return chunkArr
  // }

  ///////////////////////////////////////
   let chunkArr=[]
     arr.forEach((chunk)=>{
      //  get last element
      const last=chunkArr[chunkArr.length-1]
      // check if there's a last length ===chunk.length

      if(!last || last.length===len){
        chunkArr.push([chunk])
      }else{
        last.push(chunk)
      }

     })
     return chunkArr
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // return arrays.reduce((a,b)=>{
  //   return a.concat(b)
  // })


  ///////////////////
  // return [].concat.apply([],arrays)


  ////////////////
  function add(a,b,c){
    return a+b+c
  }
  const arr=[1,2,3]
  console.log(add(...arr))
  /////////////////////////
    return [].concat(...arrays)

}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
   return formatStr(str1)===formatStr(str2)
}

//This is a helper function
function formatStr(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
let newStr=str.toLowerCase().replace(/[a-z]/gi,(char)=>{
   if(char==='z'|| char==='Z'){
     return 'a'
   }else{
     return String.fromCharCode(char.charCodeAt()+1)
   }
 
})
 newStr=newStr.replace(/a|e|i|o|u/gi, (vowel)=>{
  return vowel.toUpperCase()
 })
return newStr

}

// Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);
