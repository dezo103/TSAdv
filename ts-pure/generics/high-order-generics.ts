{
    type Mapper<T, U> = (value: T) => U

    /**
    * Высшая порядковая функция, которая применяет функцию преобрахования к изначальному массиву
    * @param arr Массив значений для преобразования
    * @param mapper функция, применяемая к каждому элементу массива
    * @return Массив преобразованных значений
    */


    function transformArray<T,U>(arr: T[], mapper: Mapper<T,U>): U[] {
        return arr.map(mapper)
    }

   const numbers = [1,2,3,4,5]
    const numberToString: Mapper<number, string> = (el) => el.toString()

    transformArray(numbers, numberToString)

    //--------------

    interface IProduct {
        id: number,
        name: string,
        price: number,
    }

    const products: IProduct[] = [
        {id: 1, name: 'Sdfsd', price: 100},
        {id: 2, name: 'Sdfgfdfgsd', price: 10},
        {id: 3, name: 'Sddfgdfgfsd', price: 5100},
    ]

    const extractProducts: Mapper<IProduct,string> = (el) => el.name
    transformArray(products, extractProducts)
}
