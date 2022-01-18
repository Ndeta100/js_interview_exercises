// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // const strArray=str.split('')
  // strArray.reverse()
  // return strArray.join('')
  // return str.split('').revers().join('')

  // let revString=''
  // for(let i=str.lenghth-1; i>=0; i--){
  //    revString=revString+str[i]
  // }
  // return revString

  // let revString=''
  // for(let i=0; i<=str.length-1; i++){
  //    revString=revString+str[i]
  // }
  // return revString


  // let revString=''
  // for(let char of str){
  //    revString=revString+str[char]
  // }
  // return revString
  

  // let revString=''
  // str.split('').forEach((char)=>{
  //   revString=revString+char
  // })
  // return revString

  // Using reduce
  return str.split('').reduce((revString, char)=>{
    return char + revString
  }, '')
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
const revString=str.split('').reverse().join('')
return revString===str


}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString=int.toString().split('').reverse().join('')
  return parseInt(revString) * Math.sign(int)
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
// const strArray=str.toLowerCase().split(' ')

// for(let i=0; i<strArray.length; i++){
//   strArray[i]=strArray[i].substring(0, 1).toUpperCase()+ strArray[i].substring(1)
// }
//  return strArray.join(' ')

// DIFFERENT SOLUTION
// return str.toLowerCase().split(' ').map((word)=>{
//    return word[0].toUpperCase() +word.substr(1)
// }).join(' ')


///////////////////////////////////

return str.replace(/\b[a-z]/gi, (char)=>{
  return char.toUpperCase()
})
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
const charMap={}
let maxNum=0
let maxChar=''
str.split('').forEach((char)=>{
  if(charMap[char]){
    charMap[char]++
  }else{
    charMap[char]=1
  }
})
console.log(charMap)
for(let char in charMap){
  if(charMap[char]>maxNum){
    maxNum=charMap[char]
    maxChar=char
  }
  return maxChar
}
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
for(let i=1; i<=100; i++){
  if(i%3===0 && i%5===0){
    console.log('FizzBuzz')
  }
  else if(i%3===0){
    console.log('Fizz')
  }else if(i%5===0){
     console.log('Buzz')
  }
  else{
    console.log(i)
  }
}
}



// Call Function
const output = reverseString('hello');

console.log(output);