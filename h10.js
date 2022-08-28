let n = Number(prompt('Enter a number'))
let l = 0
let h = 0
for(let i=0; i<n; i++){
    if(i<n/2){
        l++
    }if(i>n/2){
        h++
    }
}
console.log(`${l} L`)
console.log(`${h} H`)