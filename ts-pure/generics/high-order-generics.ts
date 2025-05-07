{
    type Mapper<T, U> = (value: T) => U
    function transformArray<T,U>(arr: T[], mapper: Mapper<T,U>): U {
        return null
    }
}
