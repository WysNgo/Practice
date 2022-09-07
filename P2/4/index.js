console.log("Write a script to simulate a clothes shop, asking and performing certain tasks from users")
let arr = ['i3', 'i5', 'i7']
console.log(arr)

while (true) {
    let choose = prompt("What do you want (C,R,U,D)")
    if(choose == null || choose == ""){
        break
    }else{
        switch(choose){
            case 'r':
                for(let i=0; i< arr.length; i++){
                    console.log(`${i+1}`+'.'+`${arr[i]}`)
                } break;
            case 'c':
                let newItem = prompt("enter item u want to create")
                arr.push(newItem)
                for(let i=0; i<arr.length; i++){
                    console.log(`${i+1}`+'.'+`${arr[i]}`)
                } break;
            case 'u':
                let a = Number(prompt("Enter number of item u want to change"))
                let itemUpdate = prompt("Enter change")
                arr[a-1] = itemUpdate
                alert("Update done")
                for(let i=0; i<arr.length; i++){
                    console.log(`${i+1}`+'.'+`${arr[i]}`)
                } break;
            case 'd': 
                let itemDelete = Number(prompt("Enyer position of item"))
                arr.splice(itemDelete-1, 1)
                alert("delete done")
                for(let i=0; i<arr.length; i++){
                    console.log(`${i+1}`+'.'+`${arr[i]}`)
                } break;
        }
    }
    
}