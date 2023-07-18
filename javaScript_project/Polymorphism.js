class Animal {
    sound(){
        console.log('Animals Make different sound')
    }
}



class Dog{
    sound(){
        console.log('Dog Barks')
    }
}

class Cat{
    sound(){
        console.log('Cat Mews')
    }
}


let animal = new Animal()

let tomay = new Dog()
let percy = new Cat()

tomay.sound()
percy.sound()
animal.sound()