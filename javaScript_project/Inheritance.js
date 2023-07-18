class Person {
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }


    welcome(){
        console.log(`welcome ${this.name}`)
    }
}


class Teacher extends Person {
        constructor(_name,_age, _classStrength){
            super(_name,_age)
            this.classStrength = _classStrength
        }

        test(){
            super.welcome()
        }
}

class Student extends Person{
        constructor(_name,_age,_cgpa){
            super(_name,_age)
            this.cgpa =_cgpa
        }
}


let Person1 = new Person('Adam',33)
console.log(Person1)


let Teacher1 = new Teacher('Mark', 40, 35)

Teacher1.test()

console.log(Teacher1)


