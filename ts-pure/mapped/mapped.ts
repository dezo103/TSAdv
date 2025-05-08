{
    interface IPerson {
        name: string,
        age: number,
        address: string,
    }

    type PartialPerson = {
        [P in keyof IPerson]?: IPerson[P]     // P - каждый ключ из IPerson // итог - то же самое, что и Partial
    }

    type ReadOnlyPerson = {
         readonly [P in keyof IPerson]: IPerson[P] // собственная реализация ReadOnly
    }

    // --------------------------

    type StringifiedPerson = {   // перевод всех свойств в тип string
        [P in keyof IPerson]: string
    }
}
