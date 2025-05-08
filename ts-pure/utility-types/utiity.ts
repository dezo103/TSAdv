{
    interface IUser {
        id: number,
        name: string,
        age: number
    }

    const partialUser: Partial<IUser> = {} // все свойства делает опциональными (id? name? age?)

    const user1: Readonly<IUser> = {
        id: 56,
        name: "dgd",
        age: 67
    } // нельзя изменить id name age
       // нихуя так нельзя ---> user1.age = 56
    // -----------------------------------------

    type UserPreview = Pick<IUser, 'id' | 'name'> // Тип UserPreview будет содержать только id и name от типа IUser

    // или при помощи интерфейса

    interface IUserPreview extends Pick<IUser, 'id' | 'name'> {}

    // -----------------------------------------

    type Role = "admin" | "user" | "guest"
    const rolePermissions: Record<Role, string[]> = { // т.е. в формируемом объекте Role - ключ, string[] - значение
        admin: ['read', 'write'],
        user: ['read', 'write'],
        guest: ['read'],
    }

    // -----------------------------------------

    type UserWithOutAge = Omit<IUser, 'age'> // игнорируем age (т.е. это будет тип, но без age)
}
