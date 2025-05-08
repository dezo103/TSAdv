{
    type IsString<T> = T extends string ? true : false

    type A = IsString<"Hello"> // true
    type B = IsString<7> //false

    //---------------------

    type FilterStrings<T> = T extends string ? T : never

    type MixedTypes = "a" | 1 | "b" | 2 | "c"

    type OnlyString = FilterStrings<MixedTypes>  // a, b или c



    //------------ получение типа, который возвращаяет какая-либо функция

    type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never

    function getString(): string  {
        return "Hello"
    }

    function getNumber(): number {
        return 69
    }

    type StringReturnType = ReturnTypeOf<typeof getString>

    type NumberReturnType = ReturnTypeOf<typeof getNumber>

}
