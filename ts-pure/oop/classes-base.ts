class Note {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, ${this.name}!`);
    }

    isAdult(): boolean {
        return this.age >= 18
    }
}

const noteMyNote = new Note("Ivan", 30)
