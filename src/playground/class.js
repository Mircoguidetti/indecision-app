class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, i am ${this.name} and i am ${this.age} years old!`
    }
    sayHello() {
        return `Hello ${this.name}`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor () {
        return !!this.major
    }
}

const nadia = new Student('Nadia', 26, 'Turism')
const na = new Student()
const me = new Student('Mirco', 24, 'Computer science')
console.log(nadia.hasMajor())
console.log(na.hasMajor())
console.log(me.hasMajor())