class Person {
    constructor(name,age,major) {
        this.name = name
        this.age = age
        this.major = major
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `Hi, I am ${this.name} and am studying ${this.major}`
    }
}
const person1 = new Person("jeffrey", 29, "medicine");
console.log(person1.getGreeting());
console.log(person1.getDescription());