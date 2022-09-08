let shoes = ['nike', 'adidas', 'NB']
let choice = prompt("Enter the action you want: CRUD ")

if(choice == 'r'){
    for(let i=0; i< shoes.length; i++){
        console.log(`${i+1}`+'.'+ shoes[i])
    }
}
else if(choice == 'c'){
    let brand = prompt('Enter the brand')
    shoes.push(brand)
    alert('created')
    for(let i=0; i< shoes.length; i++){
        console.log(`${i+1}`+'.'+ shoes[i])
    }
}
else if(choice == 'u'){
    let position = Number(prompt("Enter the position u want to update"))
    let brandUpdate = prompt("Enter the brand u want to update")
    shoes[position-1] = brandUpdate
    alert('updated')
    for(let i=0; i< shoes.length; i++){
        console.log(`${i+1}`+'.'+ shoes[i])
    }
}
else if(choice == 'd'){
    let position = Number(prompt("Enter the position u want to delete"))
    shoes.splice(position-1, 1)
    alert('Deleted')
    for(let i=0; i< shoes.length; i++){
        console.log(`${i+1}`+'.'+ shoes[i])
    }
}