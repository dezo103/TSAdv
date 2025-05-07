function logValue<T extends {value: string}>(obj: T): void {
    console.log(obj)
}
const res = logValue<{value: string, bun: boolean}>({value: "sdf", bun: true})
 // т.е. тут в объекте типа Т обязательно должно быть value: string

// т.е. мы сделали ограничение на обязательность value: string
