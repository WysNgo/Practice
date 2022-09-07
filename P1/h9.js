let l = 0
let h = 0
n = 6
for(let i=0; i<n; i++){
    if(i<n/2){
        l++
    }else{
        h++
    }
}
console.log(`${l} L`)
console.log(`${h} H`)