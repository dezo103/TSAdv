interface IUserReadOnly {
    readonly address: string;
    name: string;
    readonly birthday: Date;
}

const belUser: IUserReadOnly = {
    address: "sdfsd",
    name: "sdfsd",
    birthday: new Date("11-10-1987"),
}

belUser.name = "ddsddsdfsdff"
 // belUser.address = "sdfsdfsfdsdfdsf" cannot reassign

const numbers: readonly number[] = [1,2,3,4,5]

// numbers.push() cannot push or other manipulation on array

const point: readonly [number, number] = [3,6] // кортеж

// class ArticleClass {
//     readonly id: number
//     title: string
//     constructor(id: number, title: string) {
//         this.id: id
//         this.title: title
//     }
// }
