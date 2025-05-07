function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}

const getFirstAgain = <T>(arr:T[]): T => {
    return arr[0]
}

const numbersArr: number[] = [1,2,3]
const firstElement = getFirstElement(numbersArr)



class Box<T> {
    private value: T
    constructor( value: T) {
        this.value = value
    }

    getValue(): T {
        return this.value
    }
}

const numberBoxOne = new Box<number>(4)
