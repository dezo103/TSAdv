interface IUserInterface {
    name: string
    email: string
    password: string
    age: number
    greet: () => string
}

const user: IUserInterface = {
    age: 34,
    email: "sdfsd",
    name: "sdfsd",
    password: "sdfsd",
    greet: () => "sdfsd",
}



type UserType = {
    name: string
    email: string
    password: string
    age: number
    greet: () => string
}

const user2: UserType = {
    age: 34,
    email: "sdfsd",
    name: "sdfsd",
    password: "sdfsd",
    greet: () => "sdfsd",
}

// difference

interface IExtendedUserInterface extends IUserInterface {
    role: string // add role property to new interface
}

type ExtendedUserType = UserType & {role: string}

