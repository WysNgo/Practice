let sequence = prompt("enter a sequense of numbers are separated by commas',' ")
let number = sequence.split(',')
let sum = 0
for(let i of number){
    console.log(i)
    sum += Number(i)
}
alert(`The sum of sequence is: ${sum}`)