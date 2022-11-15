import dogsData from './data.js'
import Dog from './Dog.js'


const getNewDog = ()=>{
    
    const newDog = dogsData.shift()
    dogsData.push(newDog)
    return newDog
}

document.getElementById('like-btn').addEventListener('click', (e)=>{
        dog.hasBeenLiked = true
        swipe()
})

document.getElementById('nope-btn').addEventListener('click', (e)=>{
        swipe()
})

function swipe(){
    dog.hasBeenSwiped = true
    render()
    dog = new Dog(getNewDog())
    setTimeout(()=>{
        render()
    }, 1500)
}

function render(){
    document.getElementById('dog').innerHTML = dog.getDogHtml()
    document.getElementById('dog').style.background = `url(./${dog.avatar}) `
    document.getElementById('dog').style.backgroundSize = "cover"
}


let dog = new Dog(getNewDog())
render()
