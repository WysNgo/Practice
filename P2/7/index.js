let sequence = prompt("Enter sequence of numbers, the numbers are separated by commas ,")
let number = sequence.split(',')
let min = number[0]
for(let i of number){
    if(Number(i) < Number(min)){
       min = i
    }
}
alert(`the smallest number is: ${min}`)