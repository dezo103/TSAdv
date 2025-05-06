interface IName {
    name: string
}

interface IAge {
    age: number
}

type PersonCool = IName & IAge;

const person: PersonCool = {
    name: "Alice",
    age: 30
};

// ====================================

interface IAddress {
    street: string
    city: string
}

const userR = {
    name: "Alice",
    id: 1
}

type UserWithAddress = typeof userR & IAddress;

const myUser: UserWithAddress = {
    ...userR,
    city: "Molo",
    street: "suh"
}
