let arr = [1, 2, 3, 4, 10, 6, 7, 8]
let f = prompt("Enter the number u want in my array")        
let index 
let find = 0
for(let i of arr){
    if(f == arr[i]){
        index = i+1
        find = 1
    }
}
if(find == 1){
    alert(`${f} had FOUND in my array at index ${index} `)
}else{
    alert(`${f} hadn't FOUND in my array`)
}
